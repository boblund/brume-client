"use strict";

const log = require('./logger.js')

function sender({PeerConnection, baseDir, groupInfo, thisUser/*, eventQueue*/}) {
  function errorHandler(err) {
    switch(err.code) {
  
      case 'CONFLICT-add':
      case 'CONFLICT-change':
        // Error updating owner. Should never happen
        // Get of updates to other members
        return 'BREAK'
  
      case 'ENODEST':
        groupInfo.memberStatus(err.peerName, 'notconnected')
        //log.warn(`user ${err.peerName} not connected`)
        if(['add', 'change', 'unlink'].includes(err.cmd.action) && err.cmd.file.split('/')[0] == err.peerName) {
          // File cmd sent to group owner failed because owner not connected.
          // Queue for retry when owner comes back and abort cmd for any remaining group members
          try {
            fs.writeFileSync(baseDir+err.cmd.file.split('/').splice(0,2).join('/')+'/.retryOnSync', JSON.stringify(err.cmd)+'\n', {flag:'a'})
          } catch (e) {
            log.error(`eventQueue: error writing .retryOnSync ${e.message}`)
          }
        }
        return 'BREAK'
  
      case 'EBADDEST':
        groupInfo.memberStatus(err.peerName, 'notconnected')
        log.warn(`eventQueue: ${err.peerName} not Brume user\n`)
        break
        
      case 'ENOTMEMBER':
        //groupInfo.memberStatus(err.peerName, 'notconnected')
        //syncReq err.peerName || err.cmd.dest, brume.thisUser, err.cmd.group
        //change err.peerName, err,cmd.file.split('/')[0]/[1]
        let user, group
  
        switch(err.cmd.action) {
          case 'syncReq':
            user = err.cmd.dest
            group = thisUser + '/' + err.cmd.group
            break
  
          case 'sync':
            user = thisUser
            group = err.cmd.dest + '/' + err.cmd.group
            break
  
          default:
            user = thisUser
            group = err.cmd.file.match(/(^.*?\/.*?)\/.*/)[1]
        }
  
        log.warn('eventQueue: '+ user + ' not member of ' + group)
        break
  
      default:
        log.error('eventQueue: unknown error:', err);
    }
    return '';
  }

  function doCommand(dest, cmd){
    return new Promise(async (resolve, reject) => {
      let peerConnection = new PeerConnection('sender'),
          peer = null;
      try {
        peer = await peerConnection.open(dest)
        log.info('doCommand:    ', peer.channelName, cmd.action, cmd.file ? cmd.file : '')

        peer.on('data', (data) => {
          let result = JSON.parse(data.toString())
          if(result.type == 'SUCCESS') {
            /*if(cmd.action == 'sync') {
              for(let file of result.syncedFiles) {
                fileData.setSync(file, true)
              }
            }*/
            resolve(result)
          } else {
            //reject(result)
            reject({
              code: result.error.code   //ENOTMEMBER
              , peerName: dest
              , channelName: peer.channelName
              , cmd: cmd
            })
          }
        })

        peer.on('close', () => {
          //log.debug(`sender peer ${dest} close\n`);
        })

        peer.on('error', e => {
          log.error(`sender peer ${dest} error`);
          peer.destroy()
          reject(e)
        })

        switch(cmd.action) {
          case 'unlink':
          case 'send':
          case 'sync':
          case 'syncReq':
          case 'rename':
            peer.send(JSON.stringify(cmd));
            break;

          case 'change':
          case 'add':
            let inStream = (require('fs')).createReadStream(baseDir + cmd.file)

            inStream.on('end', () => {
              // End of Stream mark required by receiver. This can be changed
              // as long as sender and receiver use the same code
              peer.send('\u0005');
            })
            peer.send(JSON.stringify(cmd));
            inStream.pipe(peer, {end: false});
            break;

          default:
            log.error(`sender unknown cmd.action ${cmd.action}`)     
        }
        //resolve()    
      } catch (err) {
          if(err.peer) {
            err.peer.destroy() 
            delete err.peer
          }
          reject(err);
      }
    })
  }

  async function processQ(qEntry){
    let user = null, group = null
    log.debug('processQ qEntry', JSON.stringify(qEntry))
     
    if(!(group = qEntry.group)) {
      if(qEntry.file) {
        user = qEntry.file.split('/')[0]
        group = qEntry.file.split('/')[1]
      } else {
        log.error(`eventQueue: can't process without group`)
        return
      }
    }
    
    let dests = qEntry.dest
      ? [qEntry.dest]
      : [user].concat(groupInfo.getMembers(user, group)).filter(m => m != thisUser)
    
    log.debug('processQ dests', dests)
    if(dests.length == 0) {
      log.warn(`eventQueue: no members in group ${group}`)
      return
    }
    
    for(let dest of dests.filter(m => groupInfo.memberStatus(m) == 'active')) {
      let result
      try {
        log.info('processQ:')
        //log.info('processQ', dest, JSON.stringify(qEntry))
        log.info('processQ:   ', qEntry.action, qEntry.dest != undefined ? qEntry.dest : '',
          qEntry.group != undefined ? qEntry.group : '', qEntry.file != undefined ? qEntry.file : '')
        result = await doCommand(dest, qEntry)
        log.info('processQ:   result', result.type, result.cmd.action ? result.cmd.action : result.cmd, result.cmd.file ? result.cmd.file : '')
      } catch (e) {
        e.cmd = e.cmd ? e.cmd : qEntry
        log.info('processQ:    error', e.code, e.cmd.action ? e.cmd.action : e.cmd, e.cmd.file ? e.cmd.file : '')
        if(errorHandler(e) == 'BREAK'){
          //group owner of file event not connected. stop sending to any members
          break
        }
      }
    }
    this.handlerRunning = false
  }
  
  return processQ
  //brume.eventQueue.setCommandProcessor(doCommand)
}

module.exports=sender
