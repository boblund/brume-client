"use strict";

const fs = require('fs')
      ,{brume} = require('./global.js')
      ,log = require('./logger.js')
      
var cmdProcessor

function errorHandler(err) {
  switch(err.code) {

    case 'CONFLICT-add':
    case 'CONFLICT-change':
      // Error updating owner. Should never happen
      // Get of updates to other members
      return 'BREAK'

    case 'ENODEST':
      brume.groupInfo.memberStatus(err.peerName, 'notconnected')
      log.warn(`user ${err.peerName} not connected`)
      if(['add', 'change', 'unlink'].includes(err.cmd.action) && err.cmd.file.split('/')[0] == err.peerName) {
        // File cmd sent to group owner failed because owner not connected.
        // Queue for retry when owner comes back and abort cmd for any remaining group members
        try {
          fs.writeFileSync(brume.baseDir+err.cmd.file.split('/').splice(0,2).join('/')+'/.retryOnSync', JSON.stringify(err.cmd)+'\n', {flag:'a'})
        } catch (e) {
          log.error(`eventQueue: error writing .retryOnSync ${e.message}`)
        }
      }
      return 'BREAK'

    case 'EBADDEST':
      brume.groupInfo.memberStatus(err.peerName, 'notconnected')
      log.warn(`eventQueue: ${err.peerName} not Brume user\n`)
      break
      
    case 'ENOTMEMBER':
      //brume.groupInfo.memberStatus(err.peerName, 'notconnected')
      //syncReq err.peerName || err.cmd.dest, brume.thisUser, err.cmd.group
      //change err.peerName, err,cmd.file.split('/')[0]/[1]
      let user, group

      switch(err.cmd.action) {
        case 'syncReq':
          user = err.cmd.dest
          group = brume.thisUser + '/' + err.cmd.group
          break

        case 'sync':
          user = brume.thisUser
          group = err.cmd.dest + '/' + err.cmd.group
          break

        default:
          user = brume.thisUser
          group = err.cmd.file.match(/(^.*?\/.*?)\/.*/)[1]
      }

      log.warn('eventQueue: '+ user + ' not member of ' + group)
      break

    default:
      log.error('eventQueue: unknown error:', err);
  }
  return '';
}

class EventQueue {
  constructor(){}
  
  #a=[]
  #cmdProcessor=null
  #handlerRunning=false
  
  setCmdProcessor(cmd) {
    this.#cmdProcessor = cmd
    this.#processQ()
  }
  push(i) {
    log.debug('enqueue', JSON.stringify(i))
    this.#a.push(i);

    if(this.#cmdProcessor != null && !this.#handlerRunning) {
      log.debug('this.processQ()', i.file)
      this.#processQ()
    }
    
    return i
  }

  async #processQ(){
    this.#handlerRunning = true

    while(this.#a.length > 0) {
      //let user = null, group = null, qEntry = this.shift()
      let user = null, group = null, qEntry = this.#a[0]
      log.debug('processQ qEntry', JSON.stringify(qEntry))
       
      if(!(group = qEntry.group)) {
        if(qEntry.file) {
          user = qEntry.file.split('/')[0]
          group = qEntry.file.split('/')[1]
        } else {
          log.error(`eventQueue: can't process without group`)
          continue
        }
      }
      
      let dests = qEntry.dest
        ? [qEntry.dest]
        : [user].concat(brume.groupInfo.getMembers(user, group)).filter(m => m != brume.thisUser)
      
      log.debug('processQ dests', dests)
      if(dests.length == 0) {
        log.warn(`eventQueue: no members in group ${group}`)
        continue
      }
      
      for(let dest of dests.filter(m => brume.groupInfo.memberStatus(m) == 'active')) {
        let result
        try {
          //log.info('cmdProcessor', dest, JSON.stringify(qEntry))
          result = await cmdProcessor(dest, qEntry)
          log.info('cmdProcessor:    result', result.type, result.cmd.action ? result.cmd.action : result.cmd, result.cmd.file ? result.cmd.file : '')
          this.#a.shift()
        } catch (e) {
          e.cmd = e.cmd ? e.cmd : qEntry
          this.#a.shift()
          if(errorHandler(e) == 'BREAK'){
            //group owner of file event not connected. stop sending to any members
            break
          }
        }
      }
    }
    this.handlerRunning = false
  }

  remove(f) {
    for(var i = this.#a.length - 1; i >= 0; i--) {
      if(f(this.#a[i])) {
        this.#a.splice(i, 1);
      }
    }
    return this
  }
}

module.exports = {EventQueue}
