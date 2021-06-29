const fs = require('fs')
      ,{brume} = require('./global.js')
      ,log = require('./logger.js')
      
var cmdProcessor

function errorHandler(err) {
  switch(err.code) {

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
  #a=[];
  #e

  constructor(_cmdProcessor){
    cmdProcessor = _cmdProcessor
    this.#e = new (require('events')).EventEmitter();
    this.setCommandProcessor = (_cmd) => {cmdProcessor = _cmd}
  };

  start() {
      this.processQ()
  }
  
  push(i) {
    log.debug('enqueue', JSON.stringify(i))
    this.#a.push(i);
    this.#e.emit('data')
    return i
  }

  shift() {
    return this.#a.shift()
  }

  async processQ(){
    while(this.length() > 0) {
      let user = null, group = null, qEntry = this.shift()
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
          log.info('cmdProcessor send', dest, JSON.stringify(qEntry))
          result = await cmdProcessor(dest, qEntry)
          log.info('cmdProcessor result', JSON.stringify(result))
        } catch (e) {
          e.cmd = e.cmd ? e.cmd : qEntry
          log.error('cmdProcessor error', JSON.stringify(e))
          if(errorHandler(e) == 'BREAK'){
            //group owner of file event not connected. stop sending to any members
            break
          }
        }
      }
    }
    log.debug('processQ calling this.#e.once')
    this.#e.once('data', () => {
      this.processQ()})
  }

  length() {
    return this.#a.length
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
