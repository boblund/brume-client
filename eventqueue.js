const fs = require('fs')
      ,{brume, debug} = require('./global.js')
var cmdProcessor

function errorHandler(err) {
  switch(err.code) {

    case 'ENODEST':
      brume.groupInfo.memberStatus(err.peerName, 'notconnected')
      console.error(`sender:    ENODEST ${err.peerName} not connected\n`)
      if(['add', 'change', 'unlink'].includes(err.cmd.action) && err.cmd.file.split('/')[0] == err.peerName) {
        // File cmd sent to group owner failed because owner not connected.
        // Queue for retry when owner comes back and abort cmd for any remaining group members
        try {
          fs.writeFileSync(brume.baseDir+err.cmd.file.split('/').splice(0,2).join('/')+'/.retryOnSync', JSON.stringify(err.cmd)+'\n', {flag:'a'})
        } catch (e) {
          console.log(`sender:    error writing .retryOnSync ${e.message}`)
        }
        return false
      }
      break

    case 'EBADDEST':
      brume.groupInfo.memberStatus(err.peerName, 'notconnected')
      console.error(`sender:    EBADDEST ${err.peerName} not Brume user\n`)
      break
      
    case 'ENOTMEMBER':
      brume.groupInfo.memberStatus(err.peerName, 'notconnected')
      console.error('sender:    ENOTMEMBER '
        + (err.cmd.action=='syncReq'?err.cmd.dest:'')
        + ' not member of ' + (err.cmd.action=='syncReq' ? brume.thisUser : err.cmd.dest) + '/' + err.cmd.group)
      break

    default:
      console.error('sender:    unknown error:', err);
  }
  return true
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
    console.log('enqueue:    push ', JSON.stringify(i))
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
       
      if(!(group = qEntry.group)) {
        if(qEntry.file) {
          user = qEntry.file.split('/')[0]
          group = qEntry.file.split('/')[1]
        } else {
          console.log(`sender:    can't process without group`)
          return
        }
      }
      
      let dests = qEntry.dest
        ? [qEntry.dest]
        : [user].concat(brume.groupInfo.getMembers(user, group)).filter(m => m != brume.thisUser)
    
      if(dests.length == 0) {
        console.log(`sender:    WARNING no dests for group ${group}`)
        return
      }
      
      for(let dest of dests.filter(m => brume.groupInfo.memberStatus(m) == 'active')) {
        let result
        try {
          result = await cmdProcessor(dest, qEntry)
          // Move to errorHandler?
          if(result.type == 'CONFLICT') {
            console.log('eventQueueProcessor:   result.type == CONFLICT not handled')
          }
        } catch (e) {
          e.cmd = e.cmd ? e.cmd : qEntry
          if(!errorHandler(e)) {
            // abort for doing commands for this group
            return
          }
        }
      }
    }
    this.#e.once('data', () => {this.processQ()})
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
