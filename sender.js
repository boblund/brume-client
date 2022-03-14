"use strict";

const log = require('./logger.js')
      ,fs = require('fs')
      ,sendWait = 10 * 1000  //10 seconds

function sendTimeout(peer) {
  log.info(`sender ${peer.channelName}: peer.send sendTimer`)
  peer.sendTimer = setTimeout(
    function() {
      log.warn(`sender:    peer.send on ${peer.channelName} timeout`)
      peer.destroy()
    }
    ,sendWait
  )
}

function sender({PeerConnection, eventQueue, brumeData}) {
    let {baseDir, groupInfo, thisUser} = brumeData
    
  function errorHandler(err) {
    switch(err.code) {
  
      case 'CONFLICT-add':
      case 'CONFLICT-change':
        // Error updating owner. Stop updates to other members
        return 'BREAK'
  
      case 'ENODEST':
        log.warn(`sender:    ${err.peerName} not connected`)
        if(['add', 'change', 'unlink'].includes(err.cmd.action)) {
          let fileOwner = err.cmd.file.split('/')[0]
          if(fileOwner == err.peerName || fileOwner == thisUser) {
            groupInfo.memberStatus(err.peerName, 'notconnected')
          
            if(fileOwner == err.peerName) {
              // File cmd sent to group owner failed because owner not connected.
              // Queue for retry when owner comes back and abort cmd for any remaining group members
              try {
                fs.writeFileSync(baseDir+err.cmd.file.split('/').splice(0,2).join('/')+'/.retryOnSync', JSON.stringify(err.cmd)+'\n', {flag:'a'})
              } catch (e) {
                log.error(`eventQueue: error writing .retryOnSync ${e.message}`)
              }
            }
            return 'BREAK'
          } else {
            return null
          }
        } else {
          groupInfo.memberStatus(err.peerName, 'notconnected')
          return null
        }
  
      case 'EBADDEST':
        groupInfo.memberStatus(err.peerName, 'notconnected')
        log.warn(`eventQueue: ${err.peerName} not Brume user`)
        break
        
      case 'ENOTMEMBER':
        //groupInfo.memberStatus(err.peerName, 'notconnected') only if applied to group
        log.warn('eventQueue:   ', err.message)
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
        log.info(`sender ${peer.channelName}: ${cmd.action} ${dest} ${cmd.group != undefined ? cmd.group : ''}`
          + ` ${cmd.file != undefined ? cmd.file : ''}`)

        peer.on('data', (data) => {
          clearTimeout(peer.sendTimer)
          let result = JSON.parse(data.toString())
          if(result.type == 'SUCCESS') {
            log.info(`sender ${peer.channelName}: ${result.cmd.action ? result.cmd.action : result.cmd} ${dest}`
              + ` ${result.cmd.file ? result.cmd.file : ''} ${result.type}`)
            resolve(result)
          } else {
            reject(result.error)
            /*reject({
              code: result.error.code
              , peerName: dest
              , channelName: peer.channelName
              , cmd: cmd
            })*/
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
            sendTimeout(peer)
            break;

          case 'change':
          case 'add':
            let inStream = (require('fs')).createReadStream(baseDir + cmd.file)

            inStream.on('end', () => {
              // End of Stream mark required by receiver. This can be changed
              // as long as sender and receiver use the same code
              peer.send('\u0005');
              sendTimeout(peer)
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
        result = await doCommand(dest, qEntry)
      } catch (e) {
        e.cmd = e.cmd ? e.cmd : qEntry
        log.info('sender:   ', e.cmd.action ? e.cmd.action : e.cmd, dest,  e.cmd.file ? e.cmd.file : '', e.code)
        if( errorHandler(e) == 'BREAK') {
          break //stop updating group members
        }
      }
    }
    //eventQueue.handlerRunning(false)
  }
  
  return processQ
  //brume.eventQueue.setCommandProcessor(doCommand)
}

module.exports=sender
