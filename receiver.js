"use strict"
var brume = require('./global.js')

const fs = require('fs')
      , {dirname, join} = require('path')
      , { Transform } = require('stream')

;
var PeerConnection = null
    , baseDir = null
;

class EoStream extends Transform {
  #_cb
  constructor(cb, options) {
    super (options)
    this.#_cb = cb
  }

  _transform (chunk, encoding, callback) {
    if (chunk.length == 1 && chunk[0] == 5) {
      // end of stream
      this.#_cb()
    } else {
      // Pass the chunk on.
      callback(null, chunk)
    }
  }
}

function rmPath(p, base = '.') {
  let _p = join(base, p)
  if(fs.statSync(_p).isFile()) {
    fs.unlinkSync(_p)
    rmPath(dirname(p), base)
  } else {
    if(p != '.' && fs.readdirSync(_p).length === 0) {
      fs.rmdirSync(_p)
      rmPath(dirname(p), base)
    }
  }
}

function offerProcessor(offer, username) {
  return new Promise(async (resolve, reject) => {
    let peerConnection = new PeerConnection('receiver');
    let peerPromise = (peerConnection.open)(username, offer)
    let peer = await peerPromise
    let member, group

    try {
      var resp
      peer.once('data', async data => {
        let cmd = JSON.parse(data.toString())

        if(['add', 'change', 'unlink', 'send', 'syncReq'].includes(cmd.action)) {
          if(['syncReq'].includes(cmd.action)) {
            [, member, group] = [, cmd.owner, cmd.group]
          } else {
            [, member, group] = cmd.file.match('\(.*?\)/(.*?)/.*')
          }
          
          if(!brume.groupInfo.memberOf(member, group)){
            console.log('receiver:    not member of', member+'/'+group)
            peer.send(JSON.stringify({type: 'peerError', error: {code: 'ENOTMEMBER'}}));
            peer.destroy()
            resolve()
            return
          }
        }
        
        console.log(`receiver:    ${peer.channelName} ${JSON.stringify(cmd)}`)
        
        switch(cmd.action) {
          case 'sync':
            if(brume.groupInfo.memberStatus(username) == 'notconnected') {
              brume.groupInfo.memberStatus(username, 'active')
            }
            
            let memberFiles = Object.keys(cmd.files)
            let ownerFiles = Object.keys(brume.fileData.grpFiles(cmd.owner, cmd.group))
            let addFiles = ownerFiles.filter(file=>!memberFiles.includes(file))
            let deleteFiles = memberFiles.filter(file=>!ownerFiles.includes(file))
            let commonFiles = ownerFiles.filter(file=>memberFiles.includes(file))

            for(let file of addFiles) {
              brume.eventQueue.push({
                action: 'add', file: file, member: username
                ,pmod: brume.fileData.get(file).pmod, mod: brume.fileData.get(file).mod
              })
            }

            for(let file of deleteFiles) {
              brume.eventQueue.push({action: 'rename', file: file, newFile: file+'-CONFLICT-NorD', member: username})
            }

            for(let file of commonFiles) {
              if(brume.fileData.get(file).mod > cmd.files[file].mod) {
                brume.eventQueue.push({
                  action: 'change', file: file, member: username
                  ,pmod: brume.fileData.get(file).pmod, mod: brume.fileData.get(file).mod
                })
              } else if(brume.fileData.get(file).mod < cmd.files[file].mod) {
                // mark file as conflict at source of sync
                brume.eventQueue.push({action: 'rename', file: file, newFile: file+'-CONFLICT-OLD',
                    member: username})
                // send older file to source of sync
                brume.eventQueue.push({action: 'add', file: file, member: username})
              }
            }

            peer.send(JSON.stringify({type: 'SUCCESS', cmd: cmd.action}));
            peer.destroy()
            resolve()
            return

          case 'syncReq':
            if(brume.groupInfo.memberStatus(username) == 'notconnected') {
              brume.groupInfo.memberStatus(username, 'active')
            }
            brume.groupInfo.sendSync(cmd.owner, cmd.group)
            peer.send(JSON.stringify({type: 'SUCCESS', cmd: cmd.action}));
            peer.destroy()
            resolve()
            break

          case 'unlink':
            brume.groupInfo.networkEvents.add(cmd)
            try {
              let base, path
              [, base, path] = cmd.file.match(/(.*?\/.*?)\/(.*)/)
              rmPath(path, join(baseDir, base))
              resp = {type: 'SUCCESS', cmd: cmd}
            } catch (err) {
              resp = {type: 'ERROR', error: err}
              console.log(`receiver:   unlink error ${err}`)
            } finally {
              brume.fileData.delete(cmd.file)
              peer.send(JSON.stringify(resp));
              peer.destroy();
              resolve();
              return
            }
            break
          case 'rename':
            try {
              await fs.promises.rename(baseDir + cmd.file, baseDir + cmd.newFile)
              brume.groupInfo.networkEvents.add({action: 'unlink', file: cmd.file})
              resp = {type: 'SUCCESS', cmd: cmd}
            } catch (e) {
              resp = {type: 'ERROR', error: err}
              console.log(`receiver:    rename error ${e.message}`)
            } finally {
              peer.send(JSON.stringify(resp));
              peer.destroy();
              resolve();
              return
            }
            break

          case 'change':
            if(cmd.file.split('/')[2] != '.members') {
              let {pmod, mod} = brume.fileData.get(cmd.file)

              if(pmod > cmd.pmod && mod > cmd.mod) {
                console.log(`receiver:    conflict for ${cmd.file}`)
                try {
                  await fs.promises.rename(baseDir + cmd.file, baseDir + cmd.file + '-CONFLICT-' + brume.thisUser)
                  brume.groupInfo.networkEvents.add({action: 'unlink', file: cmd.file})
                  resp = {type: 'SUCCESS', cmd: cmd}
                } catch (e) {
                  console.log(`receiver:    CONFLICT handling error ${e.message}`)
                  resp = {type: 'ERROR', error: err}
                } finally {
                  peer.send(JSON.stringify(resp));
                  peer.destroy();
                  resolve();
                  return
                }
              }
            }

          case 'add':
            resp = {type: 'SUCCESS', cmd: cmd}
            brume.groupInfo.networkEvents.add(cmd)
            var outStream;

            try {
              if(cmd.action == 'add') {
                brume.fileData.set(cmd.file, {pmod: cmd.pmod, mod: cmd.mod})
                fs.mkdirSync(baseDir + dirname(cmd.file), {recursive: true})
              }
              outStream = fs.createWriteStream(baseDir + cmd.file)
            } catch (e) {
              console.error('receiver:     add/change error', e.message)
              peer.destroy()
              reject()
              return
            }

            outStream.on('close', () => {
              //console.log('outStream close')
              peer.send(JSON.stringify(resp));     
              resolve()
              peer.destroy()
            })
  
            const eoStream = new EoStream(() => {
              outStream.end()
            })
  
            peer.pipe(eoStream).pipe(outStream);
            break

          default:
            console.error(`receiver:    ${peer.channelName} unknown cmd.action ${cmd.action}\n`)
            peer.destroy()
            break            
        }
      })

      peer.on('close', () => {
        //console.log(`receiver:    ${peer.channelName} peer close \n`);
        peer.destroy()
        resolve();
      })

    } catch (err) {
      console.error(`receiver:    ${peer.channelName} error ${err}\n`)
    }
  })
}

function receiver({PeerConnection: _pc, baseDir: _bd}) {
  PeerConnection = _pc
  baseDir = _bd
  PeerConnection.offerProcessor = offerProcessor
}

module.exports = receiver
