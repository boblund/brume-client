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

function brumeError(code,message) {
  return {type: 'ERROR', error: {code, message}}
}

function receiver({PeerConnection, brumeData, eventQueue, networkEvents}) {
  let {baseDir, thisUser, groupInfo, fileData} = brumeData

  function offerProcessor(offer, src) {
    return new Promise(async (resolve , reject) => {
      let peerConnection = new PeerConnection('receiver')
          ,peer

      try {
        peer = await (peerConnection.open)(src, offer)
      } catch(e) {
        e.peer.destroy()
        //if(peer != undefined) peer.destroy()
        reject(e)
        return
      }
  
      var resp = null 

      peer.once('data', async data => {
        let cmd, fileOwner, fileGroup, filePath
        process:
        {
          try {
            cmd = JSON.parse(data.toString())
            resp = {type: 'SUCCESS', cmd: cmd}
          } catch(e) {
            resp = brumeError('EJSONPARSE', e.message)
            break process
          }

          log.info(`receiver ${peer.channelName}: ${cmd.action} ${src}`
            + ` ${cmd.file ? cmd.file : ''} ${cmd.mvFile ? cmd.mvFile : ''}`)

          let owner, member, group, isMember
          switch(cmd.action) {
            case 'sync':
              ;[owner, member, group, isMember] =  [thisUser, src, cmd.group, groupInfo.getMembers(thisUser, cmd.group).includes(src)]
              break
      
            case 'syncReq':
              ;[owner, member, group, isMember] =  [src, thisUser, cmd.group, groupInfo.memberOf(src, cmd.group)]
              break
      
            default:
              ;[fileOwner, fileGroup, ...filePath ] = cmd.file.split('/')
              filePath = filePath.join('/')
              ;[owner, member, group, isMember] = thisUser == fileOwner
                ? [thisUser, src, fileGroup, groupInfo.getMembers(thisUser, fileGroup).includes(src)]
                : [src, thisUser, fileGroup, groupInfo.memberOf(src, fileGroup)]
          }
      
          if(!isMember) {
            resp = brumeError('ENOTMEMBER',`${cmd.action} ${member} not member of ${owner}/${group}`)
            log.warn('receiver:    not member of', owner+'/'+group)
            break process
          }

          switch(cmd.action) {
            case 'sync':
              if(groupInfo.memberStatus(src) == 'notconnected') {
                groupInfo.memberStatus(src, 'active')
              }

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

              log.info(`receiver ${peer.channelName}: ${cmd.action} ${src} SUCCESS`)
              break

            case 'syncReq':
              if(groupInfo.memberStatus(src) == 'notconnected') {
                groupInfo.memberStatus(src, 'active')
              }
              groupInfo.sync(src, cmd.group)
              resp = {type: 'SUCCESS', cmd: cmd.action};
              log.info(`receiver ${peer.channelName}: ${cmd.action} ${src} SUCCESS`)              
              break

            case 'unlink':
              let unlink = true

              if(filePath == '.members') {
                if(fileOwner == thisUser) {
                  // Sent to owner, do not remove local .members
                  groupInfo.updateMembers(thisUser, group, 'unlink', src)
                  unlink = false 
                } else if(fileOwner != src) {
                  // Sender not owner
                  resp = brumeError('EUNLINK', src + ' cannot unlink ' + cmd.file)
                  unlink = false
                }
              }

              if(unlink){
                networkEvents.add(cmd)
                try {
                  rmPath(join(fileGroup, filePath), join(baseDir, fileOwner))
                } catch (err) {
                  resp = brumeError('ERMPATH', 'cannot unlink ' + cmd.file)
                  log.error(`receiver: unlink error ${err}`)
                } finally {
                  fileData.delete(cmd.file)
                }
              }

              log.info(`receiver ${peer.channelName}: ${cmd.action} ${src} ${cmd.file} ${resp.type}`)
              break

            case 'add':
            case 'change':
              // Only owner can change or add .members
              if(filePath == '.members' && fileOwner != src) {
                resp = brumeError('NOTALLOWED', src + ' not owner')
                log.error('receiver:   ', cmd.action, src, resp.error.code)
                break
              }

              if(cmd.mvFile) {
                // Owner detected file discrepancy. Save errored file and replace with sent version
                fs.copyFileSync(baseDir+cmd.file, baseDir+cmd.mvFile)
              }

              let error = null
              
              if(cmd.action == 'add' && fileData.get(cmd.file)) {
                error = 'CONFLICT-add'                                
              } else if(cmd.action == 'change' && cmd.mvFile == undefined) {
                let mod = fileData.get(cmd.file).mod
                if(filePath != '.members' && (!cmd.sync && mod != cmd.pmod || mod > cmd.mod)) {
                  error = 'CONFLICT-change'
                }                
              }

              if(error != null) {
                // 3 add/change error scenarios: owner to member, member to owner and member to member
                // Since owner sync on start up gets things in sync, just acting on member to owner scenario 
                // will address all out of sync cases
                if(thisUser == owner) {
                  //  Sending member should save errored file and replace with valid version from owner
                  eventQueue.push({
                    action: 'change', file: cmd.file ,mvFile: cmd.file + '-' + error, dest: src
                    ,pmod: fileData.get(cmd.file).mod, mod: fileData.get(cmd.file).mod
                  })
                }
                resp = brumeError(error, '');
                log.info(`receiver ${peer.channelName}: ${cmd.action} ${src} ${cmd.file} ERROR ${error}`)
                break
              }

              var outStream;
              try {
                if(cmd.action == 'add') {
                  fs.mkdirSync(baseDir + dirname(cmd.file), {recursive: true})
                }
    
                fileData.set(cmd.file, {mod: cmd.mod})
                networkEvents.add(cmd)
                outStream = fs.createWriteStream(baseDir + cmd.file)
              } catch (e) {
                log.error('receiver:    add/change error', e.message)
                break
              }

              outStream.on('close', () => {
                peer.send(JSON.stringify(resp));
                log.info(`receiver ${peer.channelName}: ${cmd.action} ${src} ${cmd.file} SUCCESS`)    
                peer.destroy()
                resolve()
              })
    
              const eoStream = new EoStream(() => {
                outStream.end()
              })
    
              peer.pipe(eoStream).pipe(outStream);
              break

            default:
              resp = brumeError('EBADACTION', cmd.action + ' unknown')
              log.error('receiver:   ', cmd.action, src, 'ERROR unknown action')
              break            
          }
        } // process:

        if(resp.type != 'SUCCESS' || ['add','change'].includes(cmd.action) == false){
          peer.send(JSON.stringify(resp))
          peer.destroy()
          resolve()
          return
        }
      })

      peer.on('close', () => {
        peer.destroy()
        resolve();
      })
    })
  }

  PeerConnection.offerProcessor = offerProcessor
}

module.exports = receiver
