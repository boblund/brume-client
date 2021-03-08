var global = require('./global.js')
const {dirWatcher, EventQueue, treeWalk} = require('./fileWatcher.js');
global.eventQueue = EventQueue(eventQueueProcessor)

var PeerConnection
    , baseDir = null
;
async function doCommand(member, cmd){
  return new Promise(async (resolve, reject) => {
    let peerConnection = new PeerConnection('sender'),
    peer = null;
    try {
      peer = await peerConnection.open(member)
      console.log(`sender:    ${peer.channelName} peer open ${member}`)

      // Receiver shouldn't send data
      peer.on('data', (data) => {
        console.log(`sender:    ${peer.channelName} on data` )
      })

      peer.on('close', () => {
        console.log(`sender:    ${peer.channelName} peer close\n`);
        peer.destroy()
        resolve({type: 'SUCCESS'})
      })

      peer.on('error', e => {
        console.log(`sender:    ${peer.channelName} peer error\n`);
        peer.destroy()
        reject(e)
      })

      console.log(`sender:    ${peer.channelName} ${cmd.action}`)
      switch(cmd.action) {
        case 'delete':
        case 'sync':
        case 'syncReq':
          peer.send(JSON.stringify(cmd));
          break;

        case 'add':
          let inStream = (require('fs')).createReadStream(baseDir + cmd.file, 
            {emitClose: true, autoClose: false})

          inStream.on('end', () => {})
          peer.send(JSON.stringify(cmd));
          inStream.pipe(peer);
          break;

        default:
          console.error(`sender:    ${peer.channelName} unknown cmd.action ${cmd.action}`)     
      }
      resolve()    
    } catch (err) {
        if(err.peer) {
          err.peer.destroy() 
          delete err.peer
        }
        reject(err);
    }
  })
}

var timedQueue = new (require('./TimedQueue.js'))();

const TQENODEST = 60*60*1000
      , TQEOFFERTIMEOUT = 60*60*1000
;

function errorHandler(err) {
  switch(err.code) {

    case 'ENODEST':
      global.groupInfo.memberStatus(err.peerName, 'notconnected')
      console.error(`sender:    ENODEST ${err.peerName} not connected\n`)
      break

    case 'EBADDEST':
      global.groupInfo.memberStatus(err.peerName, 'notconnected')
      console.error(`sender:    EBADDEST ${err.peerName} not Brume user\n`)
      break        

    default:
      console.error('sender:    unknown error:', err);
  }
}

async function eventQueueProcessor(qEntry) {
  console.log(`sender:    processing ${JSON.stringify(qEntry)}`)
  let group
  if(!(group = qEntry.group)) {
    if(qEntry.file) {
      group = qEntry.file.split('/')[1]
    } else {
      console.log(`sender:    can't process without group`)
      return
    }
  }

  let members = qEntry.member
    ? [qEntry.member]
    : global.groupInfo.getMembers(group)

  if(members.length == 0) {
    console.log(`sender:    WARNING no members for group ${group}`)
    return
  }

  for(let member of members.filter(m => global.groupInfo.memberStatus(m) == 'active')) {
    try {
      await doCommand(member, qEntry)
    } catch (e) {
      e.cmd = e.cmd ? e.cmd : qEntry
      errorHandler(e);
    }
  }
}

function sender({PeerConnection: _pc, baseDir: _bd, thisMember}) {
  PeerConnection = _pc
  baseDir = _bd

  // eventQueue is constructed to not process queue entries until explicitly started
  // after the PeerConnection class is created

  //global.eventQueue.start()

  let watcher = dirWatcher(baseDir)
  watcher.on('event', (eType, file, fileType) => {
    let p = file.split('/')
    if(p.length == 3) {
      if(p[1] != thisMember) { //should check if p[1] is a member
        let cmd = {
          action: 'sync'
          , member: p[1]
          , group: p[2]
          , syncFor: thisMember
          , files: treeWalk(baseDir+p[1]+'/'+ p[2])
        }

        global.groupInfo.addMember(p[1], p[2])

        global.eventQueue.remove(e => {
          return e.action === cmd && e.member === cmd.member && e.group === cmd.group
        })
  
        global.eventQueue.push(cmd)        

      }
    } else if(p.length > 3) {
      if(p[1] == thisMember) {
        if(p[3] == '.members') {
          // add and empty or not - if empty create with []
          // changed and empty or not - if empty add []
          // deleted
          global.groupInfo.updateSender(p[2], eType)
        } else if(fileType != 'dir' && !file.match(baseDir+'.*/[.]')) {
          //file shared by thisMember but not a .dotfile or .members
          // Remove queued events for this file
          global.eventQueue.remove(e => {return e.file === file})

          // Enqueue the new file action and fire an event
          global.eventQueue.push({
            action: eType == 'changed' ? 'add' : eType
            , file: file.slice(baseDir.length)
            , type: fileType
          })
        }
      }
    }
  })
}

module.exports=sender