"use strict"
const {brume, debug} = require('./global.js')
      ,fs = require('fs')
      ,{dirname, join, basename} = require('path')
      ,{ Transform } = require('stream')
      ,{log, DEBUG, INFO, WARN, ERROR} = require('./logger.js')

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

function receiver({PeerConnection, baseDir}) {
  function offerProcessor(offer, src) {
    return new Promise(async (resolve, reject) => {
      let {thisUser, groupInfo, eventQueue, fileData} = brume
      let peerConnection = new PeerConnection('receiver');
      //let peerPromise = (peerConnection.open)(src, offer)
      let peer = await (peerConnection.open)(src, offer) //peerPromise

      try {
        var resp

        peer.once('data', async data => {
          try {
            let cmd = JSON.parse(data.toString())
                ,pathParts = null, owner = null, group = null

            log(INFO, 'receiver: cmd', src, JSON.stringify(cmd))
            if(cmd.action == 'sync') {
              [owner, group] = [thisUser, cmd.group]
            } else if(cmd.action == 'syncReq') {
              [owner, group] = [src, cmd.group]
            } else if(['add', 'change', 'rename', 'unlink'].includes(cmd.action)){
              [owner, group,] = pathParts = cmd.file.split('/')
            }
              
            if(!groupInfo.memberOf(src, owner, group)){
              log(WARN, 'receiver: not member of', owner+'/'+group)
              peer.send(JSON.stringify({type: 'peerError', error: {code: 'ENOTMEMBER'}}));
              peer.destroy()
              resolve()
              return
            }

            let oFile = null

            switch(cmd.action) {
              case 'sync':
                if(groupInfo.memberStatus(src) == 'notconnected') {
                  groupInfo.memberStatus(src, 'active')
                }

                if(!(groupInfo.getMembers(thisUser, cmd.group).includes(src))){
                  resp = {type: 'peerError', error: {code: 'ENOTMEMBER'}}
                } else {
                  let memberFiles = Object.keys(cmd.files)
                  let ownerFiles = Object.keys(fileData.grpFiles(thisUser, cmd.group))
                  let addFiles = ownerFiles.filter(file=>!memberFiles.includes(file))
                  let deleteFiles = memberFiles.filter(file=>!ownerFiles.includes(file))
                  let commonFiles = ownerFiles.filter(file=>memberFiles.includes(file))
                  let syncedFiles = []

                  for(let file of addFiles) {
                    eventQueue.push({
                      action: 'add', file: file, dest: src //, sync: true
                      ,pmod: fileData.get(file).mod, mod: fileData.get(file).mod
                    })
                  }

                  for(let file of deleteFiles) {
                    eventQueue.push({action: 'rename', file: file, newFile: file+'-CONFLICT-NorD', dest: src})
                  }

                  for(let file of commonFiles) {
                    if(fileData.get(file).mod > cmd.files[file].mod
                       || (fileData.get(file).mod != cmd.files[file].mod && file.split('/')[2] == '.members')) {
                      eventQueue.push({
                        action: 'change', file: file, dest: src, sync: true
                        ,pmod: fileData.get(file).mod, mod: fileData.get(file).mod
                      })
                    } else if(fileData.get(file).mod < cmd.files[file].mod) {
                      eventQueue.push({action: 'add', file: file, newFile: file+'-CONFLICT-owner', dest: src})
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
                if(groupInfo.memberStatus(src) == 'notconnected') {
                  groupInfo.memberStatus(src, 'active')
                }
                groupInfo.sync(src, cmd.group)
                peer.send(JSON.stringify({type: 'SUCCESS', cmd: cmd.action}));
                peer.destroy()
                resolve()
                break

              case 'unlink':
                let unlink = true
                resp = {type: 'SUCCESS', cmd: cmd}

                if(pathParts[2] == '.members') {
                  if(pathParts[0] == thisUser) {
                    // Sent to owner, do not remove local .members
                    groupInfo.updateMembers(thisUser, group, 'unlink', src)
                    unlink = false 
                  } else if(pathParts[0] != src) {
                    // Sender not owner
                    resp = {type: 'ERROR', error: new Error(src + ' cannot unlink ' + cmd.file)}
                    unlink = false
                  }
                }

                if(unlink){
                groupInfo.networkEvents.add(cmd)
                  try {
                    let base, path
                    [, base, path] = cmd.file.match(/(.*?)\/(.*)/) //(/(.*?\/.*?)\/(.*)/)
                    rmPath(path, join(baseDir, base))
                  } catch (err) {
                    resp = {type: 'ERROR', error: err}
                    log(ERROR, `receiver: unlink error ${err}`)
                  } finally {
                    fileData.delete(cmd.file)
                  }
                }

                peer.send(JSON.stringify(resp));
                peer.destroy();
                resolve();
                return

                break

              case 'rename':
                try {
                  if(src != pathParts[0]) throw new Error('rename not owner')
                  await fs.renameSync(baseDir + cmd.file, baseDir + cmd.newFile)
                  groupInfo.networkEvents.add({action: 'unlink', file: cmd.file})
                  resp = {type: 'SUCCESS', cmd: cmd}
                } catch (e) {
                  resp = {type: 'ERROR', error: e}
                  log(ERROR, `receiver: rename error ${e.message}`)
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
                if(pathParts[2] == '.members' && pathParts[0] != src) {
                  peer.send(JSON.stringify({type: 'ERROR', error: {code: 'NOTALLOWED', message: 'not owner'}}));
                  peer.destroy();
                  resolve();
                  return              
                }

                let fileParts =  basename(cmd.file).split('.')
                resp = {type: 'SUCCESS', cmd: cmd}

                if(cmd.action == 'add' && !cmd.newFile && fileData.get(cmd.file)) {
                  oFile = dirname(cmd.file)+'/'+fileParts[0]+'-CONFLICT-exists-'+src+(fileParts.length==2?'.'+fileParts[0]:'')               
                } else if(cmd.action == 'change') {
                  let {mod} = fileData.get(cmd.file)
                  if(pathParts[2] != '.members' && (!cmd.sync && mod != cmd.pmod || mod > cmd.mod)) {
                    // change conflict
                    oFile = dirname(cmd.file)+fileParts[0]
                            +'-CONFLICT-'+ (mod != cmd.pmod ? '-version-' : '-older-')+src
                            +(fileParts.length==2 ?'.'+fileParts[0] : '')
                  }
                }

                var outStream;
                oFile = oFile ? oFile : (cmd.newFile ? cmd.newFile : cmd.file)
                try {
                  if(cmd.action == 'add') {
                    fs.mkdirSync(baseDir + dirname(oFile), {recursive: true})
                  }
      
                  outStream = fs.createWriteStream(baseDir + oFile)

                  if(oFile == cmd.file) {
                    fileData.set(cmd.file, {mod: cmd.mod})
                    fileData.setSync(cmd.file, true)
                    groupInfo.networkEvents.add(cmd)
                  }

                } catch (e) {
                  log(ERROR, 'receiver: add/change error', e.message)
                  peer.destroy()
                  reject()
                  return
                }

                outStream.on('close', () => {
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
                log.error(`receiver: unknown cmd.action ${src} ${cmd.action}`)
                peer.destroy()
                break            
            }
          } catch(e) {
            log.error('receiver: sender command error', e)
            resp = {type: 'ERROR', error: e}
            peer.send(JSON.stringify(resp));
            peer.destroy()
            resolve()
          }
        })

        peer.on('close', () => {
          peer.destroy()
          resolve();
        })

      } catch (err) {
        log.error(`receiver: error ${src} ${err}`)
      }
    })
  }

  PeerConnection.offerProcessor = offerProcessor
}

module.exports = receiver
