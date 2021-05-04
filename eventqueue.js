const fs = require('fs')
      ,brume = require('./global.js')
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
      console.error(`sender:    ENOTMEMBER ${err.peerName} not member of ${err.cmd.group}\n`)
      break

    default:
      console.error('sender:    unknown error:', err);
  }
  return true
}

async function eventQueueProcessor(qEntry) {
  //console.log(`sender:    processing ${JSON.stringify(qEntry)}`)
  let user, group
 
  if(!(group = qEntry.group)) {
    if(qEntry.file) {
      user = qEntry.file.split('/')[0]
      group = qEntry.file.split('/')[1]
    } else {
      console.log(`sender:    can't process without group`)
      return
    }
  }

  let members = qEntry.member
    ? [qEntry.member]
    : [user].concat(brume.groupInfo.getMembers(user, group)).filter(m => m != brume.thisUser)

  if(members.length == 0) {
    console.log(`sender:    WARNING no members for group ${group}`)
    return
  }

  for(let member of members.filter(m => brume.groupInfo.memberStatus(m) == 'active')) {
    let result
    try {
      result = await cmdProcessor(member, qEntry)
      // Move to errorHandler?
      if(result.type == 'CONFLICT') {
        networkEvents.add({action: 'unlink', file: cmd.file})
        networkEvents.add({action: 'add', file: cmd.file +'-CONFLICT-'+member})
        await fs.promises.rename(baseDir+cmd.file, baseDir+cmd.file +'-CONFLICT-'+member)
        brume.eventQueue.push({action: 'send', file: cmd.file})
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

class EventQueue { 
  #a=[];
  #e

  constructor(_cmdProcessor){
    cmdProcessor = _cmdProcessor
    this.#e = new (require('events')).EventEmitter();   
  };

  start() {
    //this.#e.once('data', () => {
      this.processQ()
    //})
    //this.#e.emit('data')
  }
  
  push(i) {
    this.#a.push(i);
    this.#e.emit('data')
    return i
  }

  shift() {
    return this.#a.shift()
  }

  async processQ(){
    while(this.length() > 0) {
      await eventQueueProcessor(this.shift())
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
