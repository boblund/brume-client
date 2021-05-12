"use strict"
var brume = require('./global.js')

const fs = require('fs')
      , {dirname, join, basename} = require('path')
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

        if(['add', 'change', 'unlink', 'send', 'sendChg', 'sync', 'syncReq'].includes(cmd.action)) {
          if(['sync', 'syncReq'].includes(cmd.action)) {
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
          /*case 'sendChg':
            brume.eventQueue.push({
              action: 'change', file: cmd.file
              ,pmod: brume.fileData.get(cmd.file).pmod, mod: brume.fileData.get(cmd.file).mod
            })
            break*/

          case 'sync':
            if(brume.groupInfo.memberStatus(username) == 'notconnected') {
              brume.groupInfo.memberStatus(username, 'active')
            }

            if(!(brume.groupInfo.getMembers(brume.thisUser, cmd.group).includes(username))){
              resp = {type: 'peerError', error: {code: 'ENOTMEMBER'}}
            } else {
              let memberFiles = Object.keys(cmd.files).filter(f => f.split('/')[0] == brume.thisUser) //only sync my files
              let ownerFiles = Object.keys(brume.fileData.grpFiles(cmd.owner, cmd.group))
              let addFiles = ownerFiles.filter(file=>!memberFiles.includes(file))
              let deleteFiles = memberFiles.filter(file=>!ownerFiles.includes(file))
              let commonFiles = ownerFiles.filter(file=>memberFiles.includes(file))
              let syncedFiles = []

              for(let file of addFiles) {
                brume.eventQueue.push({
                  action: 'add', file: file, member: username //, sync: true
                  ,pmod: brume.fileData.get(file).mod, mod: brume.fileData.get(file).mod
                })
              }

              for(let file of deleteFiles) {
                brume.eventQueue.push({action: 'rename', file: file, newFile: file+'-CONFLICT-NorD', member: username})
              }

              for(let file of commonFiles) {
                if(brume.fileData.get(file).mod > cmd.files[file].mod) {
                  brume.eventQueue.push({
                    action: 'change', file: file, member: username, sync: true
                    ,pmod: brume.fileData.get(file).mod, mod: brume.fileData.get(file).mod
                  })
                } else if(brume.fileData.get(file).mod < cmd.files[file].mod) {
                  brume.eventQueue.push({action: 'rename', file: file, newFile: file+'-CONFLICT-newer',
                      member: username})
                  // send older file to source of sync
                  brume.eventQueue.push({
                    action: 'add', file: file, member: username //, sync: true
                    ,pmod: brume.fileData.get(file).mod, mod: brume.fileData.get(file).mod
                  })
                } else {
                  syncedFiles.push(file)
                }
              }
              resp = {type: 'SUCCESS', cmd: cmd.action, syncedFiles: syncedFiles}
            }

            peer.send(JSON.stringify(resp));
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
            resp = {type: 'SUCCESS', cmd: cmd}

            if(cmd.file.split('/')[2] == '.members' && cmd.file.split('/')[0] == brume.thisUser) {
              // Sent by group member leaving group. Don't delete local .members but remove from group
              brume.groupInfo.updateMembers(brume.thisUser, group, 'unlink', username) 
            } else {
              brume.groupInfo.networkEvents.add(cmd)
              try {
                let base, path
                [, base, path] = cmd.file.match(/(.*?\/.*?)\/(.*)/)
                rmPath(path, join(baseDir, base))
              } catch (err) {
                resp = {type: 'ERROR', error: err}
                console.log(`receiver:   unlink error ${err}`)
              } finally {
                brume.fileData.delete(cmd.file)
              }
            }

            peer.send(JSON.stringify(resp));
            peer.destroy();
            resolve();
            return

            break
          case 'rename':
            // only accept if from file owner
            try {
              if(username != cmd.file.split('/')[0]) throw new Error('rename not owner')
              await fs.renameSync(baseDir + cmd.file, baseDir + cmd.newFile)
              brume.groupInfo.networkEvents.add({action: 'unlink', file: cmd.file})
              resp = {type: 'SUCCESS', cmd: cmd}
            } catch (e) {
              resp = {type: 'ERROR', error: e}
              console.log(`receiver:    rename error ${e.message}`)
            } finally {
              peer.send(JSON.stringify(resp));
              peer.destroy();
              resolve();
              return
            }
            break

          case 'add':
          case 'change':
            // Only owner can change or add .members
            if(cmd.file.split('/')[2] == '.members' && cmd.file.split('/')[0] != username) {
              peer.send(JSON.stringify({type: 'ERROR', error: {code: 'NOTALLOWED', message: 'not owner'}}));
              peer.destroy();
              resolve();
              return              
            }

            let oFile = null
                ,fileParts =  basename(cmd.file).split('.')
            resp = {type: 'SUCCESS', cmd: cmd}

            // Add conflict if file exists
            if(cmd.action == 'add' && brume.fileData.get(cmd.file)) {
              // Add conflict if file exists
              //resp = {type: 'ERROR', error: {code: 'EEXISTS', message: 'file exists'}};
              //let fileParts =  basename(cmd.file).split('.')
              oFile = dirname(cmd.file)+fileParts[0]+'-CONFLICT-exists-'+username+(fileParts.length==2?'.'+fileParts[0]:'')               
            } else if(cmd.action == 'change') {
              let {mod} = brume.fileData.get(cmd.file)
              if(!cmd.sync && mod != cmd.pmod || mod > cmd.mod) {
                // change conflict
                ofile = dirname(cmd.file)+fileParts[0]
                        +'-CONFLICT-'+ (mod != cmd.pmod ? '-version-' : '-older-')+username
                        +(fileParts.length==2 ?'.'+fileParts[0] : '')
              }
            }

/*            if(ofile) {
              // if conflict, save file to be se
              try {
                fs.renameSync(baseDir + cmd.file, baseDir + ofile)
                brume.groupInfo.networkEvents.add({action: 'unlink', file: cmd.file})
              } catch (e) {
                console.log(`receiver:    CONFLICT handling error ${e.message}`)
                peer.send(JSON.stringify({type: 'ERROR', error: err}));
                peer.destroy();
                resolve();
                return
              }
            }
*/

            var outStream;
            oFile = oFile ? oFile : cmd.file

            try {
              if(cmd.action == 'add') {
                fs.mkdirSync(baseDir + dirname(oFile), {recursive: true})
              }
  
              outStream = fs.createWriteStream(baseDir + oFile)

              if(oFile == cmd.file) {
                brume.fileData.set(cmd.file, {mod: cmd.mod})
                brume.fileData.setSync(cmd.file, true)
                brume.groupInfo.networkEvents.add(cmd)
              }

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
