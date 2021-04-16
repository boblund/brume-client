"use strict"
var brume = require('./global.js')

const {treeWalk} = require('./fileWatcher.js')
      , fs = require('fs')
      , {basename, dirname, join} = require('path')
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
      //callback(null, null)
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
    //console.log(`receiver:    ${peer.channelName} peer open ${username}` )

    try {
      var resp
      peer.once('data', async data => {
        let cmd = JSON.parse(data.toString())

        /*if(['add', 'change', 'unlink', 'send', 'syncReq'].includes(cmd.action)) {
          if(['syncReq'].includes(cmd.action)) {
            [, member, group] = [, cmd.owner, cmd.group]
          } else {
            [, member, group] = cmd.file.match('\(.*?\)/(.*?)/.*')
          } */

          //if(!brume.groupInfo.memberOf(member, group)){
          if(!brume.groupInfo.memberOf(cmd)){
            console.log('receiver:    not member of', member+'/'+group)
            peer.send(JSON.stringify({type: 'peerError', error: {code: 'ENOTMEMBER'}}));
            peer.destroy()
            resolve()
            return
          }
        //}
        
        console.log(`receiver:    ${peer.channelName} ${JSON.stringify(cmd)}`)
        
        switch(cmd.action) {
          case 'sync':
            if(brume.groupInfo.memberStatus(cmd.syncFor) == 'notconnected') {
              brume.groupInfo.memberStatus(cmd.syncFor, 'active')
              //brume.groupInfo.sendSync(cmd.member, cmd.group)
            }
            
            let memberFiles = cmd.files
            let ownerFiles = treeWalk(baseDir + cmd.member + '/' + cmd.group)
              //.filter(e => basename(e) !='.members')
              .map(f => f.replace(baseDir,''))
            let addFiles = ownerFiles.filter(file=>!memberFiles.includes(file))
            let deleteFiles = memberFiles.filter(file=>!ownerFiles.includes(file))

            for(let file of addFiles) {
              let {mod} = brume.fileData.get(file)
              brume.eventQueue.push(
                {action: 'add', file: file, member: cmd.syncFor}
              )
            }
            for(let file of deleteFiles) {
              brume.eventQueue.push(
                {action: 'unlink', file: file, member: cmd.syncFor}
              )
            }
            peer.send(JSON.stringify({type: 'SUCCESS', cmd: cmd.action}));
            peer.destroy()
            resolve()
            return

          case 'syncReq':
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

          case 'add':
          case 'change':
            resp = {type: 'SUCCESS', cmd: cmd}

            if(cmd.file.split('/')[2] != '.members') {
              if((cmd.action == 'add' && fs.existsSync(baseDir + cmd.file)) ||
                 (cmd.action == 'change' && cmd.orig != brume.fileData.get(cmd.file).mod)) {
                resp = {type: 'CONFLICT', cmd: {action: cmd.action, file: cmd.file}}
                cmd.file += '-CONFLICT-' + username
              }
            }

            brume.fileData.set(cmd.file, {mod: cmd.mod})
            brume.groupInfo.networkEvents.add(cmd)
            var outStream;

            try {
              if(cmd.action == 'add') {
                fs.mkdirSync(baseDir + dirname(cmd.file), {recursive: true})
              }
              outStream = fs.createWriteStream(baseDir + cmd.file)
            } catch (e) {
              console.error('receiver:     add error', e.message)
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
