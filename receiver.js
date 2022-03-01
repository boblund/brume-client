"use strict";

const fs = require('fs')
      ,{dirname, join, basename} = require('path')
      ,{ Transform } = require('stream')
      ,log = require('./logger.js')

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

function receiver({PeerConnection, brumeData, eventQueue, networkEvents}) {
  let {baseDir, thisUser, groupInfo, fileData} = brumeData

  function offerProcessor(offer, src) {
    return new Promise(async (resolve, reject) => {
      let peerConnection = new PeerConnection('receiver');
      let peer = await (peerConnection.open)(src, offer)

      try {
        var resp

        peer.once('data', async data => {
          try {
            let cmd = JSON.parse(data.toString())
                ,pathParts = null, owner = null, group = null

            log.info('receiver:')
            log.info('receiver:   ', cmd.action, src, cmd.file ? cmd.file : '', cmd.mvFile ? cmd.mvFile : '')
            log.debug('receiver:    ', peer.channelName, cmd.action, cmd.file ? cmd.file : '', cmd.mvFile ? cmd.mvFile : '')
            if(cmd.action == 'sync') {
              [owner, group] = [thisUser, cmd.group]
            } else if(cmd.action == 'syncReq') {
              [owner, group] = [src, cmd.group]
            } else if(['add', 'change', 'unlink'].includes(cmd.action)){
              [owner, group,] = pathParts = cmd.file.split('/')
            }
              
            if(!groupInfo.memberOf(owner, group)){
              log.warn('receiver:    not member of', owner+'/'+group)
              peer.send(JSON.stringify({type: 'peerError', error: {code: 'ENOTMEMBER'}}));
              peer.destroy()
              resolve()
              return
            }

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

                  for(let file of addFiles) {
                    eventQueue.push({
                      action: 'add', file: file, dest: src, sync: true
                      ,pmod: fileData.get(file).mod, mod: fileData.get(file).mod
                    })
                  }

                  for(let file of deleteFiles) {
                    eventQueue.push({action: 'unlink', file: file, dest: src})
                  }

                  for(let file of commonFiles) {
                    if(fileData.get(file).mod > cmd.files[file].mod
                       || (fileData.get(file).mod != cmd.files[file].mod && file.split('/')[2] == '.members')) {
                      eventQueue.push({
                        action: 'change', file: file, dest: src, sync: true
                        ,pmod: fileData.get(file).mod, mod: fileData.get(file).mod
                      })
                    } else if(fileData.get(file).mod < cmd.files[file].mod) {
                      eventQueue.push({
                        action: 'change', file: file, mvFile: file+'-CONFLICT-sync', dest: src, sync: true
                        ,pmod: fileData.get(file).mod, mod: fileData.get(file).mod
                      })
                    }
                  }

                  // syncedFiles were all added and common files. take out?
                  resp = {type: 'SUCCESS', cmd: cmd.action/*, syncedFiles: []*/}
                }

                peer.send(JSON.stringify(resp));
                log.info('receiver:   ', cmd.action, src, cmd.file ? cmd.file : '', resp.type
                  , resp.error ? resp.error.code ? resp.error.code : '' : '')
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
                log.info('receiver:   ', cmd.action, src, cmd.file ? cmd.file : '', resp.type
                , resp.error ? resp.error : '')              
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
                  networkEvents.add(cmd)
                  try {
                    let base, path
                    [, base, path] = cmd.file.match(/(.*?)\/(.*)/)
                    rmPath(path, join(baseDir, base))
                  } catch (err) {
                    resp = {type: 'ERROR', error: err}
                    log.error(`receiver: unlink error ${err}`)
                  } finally {
                    fileData.delete(cmd.file)
                  }
                }

                peer.send(JSON.stringify(resp));
                peer.destroy();
                log.info('receiver:   ', cmd.action, src, cmd.file ? cmd.file : '', resp.type
                , resp.error ? resp.error : '')
                resolve();
                return

              case 'add':
              case 'change':
                // Only owner can change or add .members
                if(pathParts[2] == '.members' && pathParts[0] != src) {
                  peer.send(JSON.stringify({type: 'ERROR', error: {code: 'NOTALLOWED', message: 'not owner'}}));
                  peer.destroy();
                  log.info('receiver:   ', cmd.action, src, cmd.file ? cmd.file : '', resp.type
                , resp.error ? resp.error : '')
                  resolve();
                  return              
                }

                if(cmd.mvFile) {
                  // Owner detected file discrepancy. Save errored file and replace with sent version
                  fs.copyFileSync(baseDir+cmd.file, baseDir+cmd.mvFile)
                }

                let fileParts =  basename(cmd.file).split('.')
                resp = {type: 'SUCCESS', cmd: cmd}

                if(thisUser == owner) {
                  // Member add/change to owner
                  let error = null

                  if(cmd.action == 'add' && fileData.get(cmd.file)) {
                    error = 'CONFLICT-add'                                
                  } else if(cmd.action == 'change' && cmd.mvFile == undefined) {
                    let mod = fileData.get(cmd.file).mod
                    if(pathParts[2] != '.members' && (!cmd.sync && mod != cmd.pmod || mod > cmd.mod)) {
                      error = 'CONFLICT-change'
                    }                
                  }

                  if(error != null) {
                    //  Save errored file and replace with valid version from owner
                    eventQueue.push({
                      action: 'change', file: cmd.file ,mvFile: cmd.file + '-' + error, dest: src
                      ,pmod: fileData.get(cmd.file).mod, mod: fileData.get(cmd.file).mod
                    })                    
                    peer.send(JSON.stringify({type: 'ERROR', error: {code: error, message: ''}}));
                    peer.destroy();
                    log.info('receiver:   ', cmd.action, src, cmd.file ? cmd.file : '', resp.type
                      , resp.error ? resp.error : '')
                    resolve();
                    return
                  }
                } else {
                  // Owner or member to member treated the same. If conflict, cp member file to CONFLICT-
                  // and replace with sent file
                  let error = null

                  if(cmd.action == 'add' && fileData.get(cmd.file)) {
                    error = 'CONFLICT-add'                                
                  } else if(cmd.action == 'change' && cmd.mvFile == undefined) {
                    let mod = fileData.get(cmd.file).mod
                    if(pathParts[2] != '.members' && (!cmd.sync && mod != cmd.pmod || mod > cmd.mod)) {
                      error = 'CONFLICT-change'
                    }                
                  }

                  if(error != null) {
                    // Copy errored file, report error but keep going with add/change
                    fs.copyFileSync(baseDir+cmd.file, baseDir+cmd.file + '-' + error)                  
                    resp = {type: 'ERROR', error: {code: error, message: ''}}
                  }                  
                }

                var outStream;
                try {
                  if(cmd.action == 'add') {
                    fs.mkdirSync(baseDir + dirname(cmd.file), {recursive: true})
                  }
      
                  fileData.set(cmd.file, {mod: cmd.mod})
                  //fileData.setSync(cmd.file, true)
                  networkEvents.add(cmd)
                  outStream = fs.createWriteStream(baseDir + cmd.file)
                } catch (e) {
                  log.error('receiver: add/change error', e.message)
                  peer.destroy()
                  log.info('receiver:   ', cmd.action, src, cmd.file ? cmd.file : '', ERROR, e)
                  reject()
                  return
                }

                outStream.on('close', () => {
                  peer.send(JSON.stringify(resp));
                  log.info('receiver:   ', cmd.action, src, cmd.file ? cmd.file : '', resp.type
                    , resp.error ? resp.error : '')     
                  resolve()
                  peer.destroy()
                })
      
                const eoStream = new EoStream(() => {
                  outStream.end()
                })
      
                peer.pipe(eoStream).pipe(outStream);
                break

              default:
                log.info('receiver:   ', cmd.action, src, 'ERROR unknown action')
                peer.destroy()
                break            
            }
          } catch(e) {
            log.error('receiver:    ', src, 'ERROR', e)
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
        log.error(`receiver:    ERROR ${src} ${err}`)
      }
    })
  }

  PeerConnection.offerProcessor = offerProcessor
}

module.exports = receiver
