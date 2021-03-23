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

      let msg = (cmd.action == 'add' ||  cmd.action == 'delete' )
      ? cmd.file : cmd.group
      console.log(`sender:    ${peer.channelName} ${cmd.action} ${msg}`)
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
    : global.groupInfo.getMembers(user, group)

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

  const watcher = require('chokidar').watch('.', {cwd: baseDir})

  watcher.on('ready', () => {
    const events = ['add', 'addDir', 'change', 'unlink', 'unlinkDir']
          ,actions = [null, 'add', 'add', 'add', 'delete', 'delete']
          ,types = [null, 'file', 'dir', 'file', 'file', 'dir']
          ,log = console.log.bind(console)
  
    log('sender:    watcher ready')
    watcher.on('all', (event, path) => {
      let p = path.split('/')
          , cmd = null
    
      // check if this was caused by a network event
  
      if(p.length > 2) {
        cmd = {
          action: actions[events.indexOf(event)+1]
          ,file: path
          ,type: types[events.indexOf(event)+1]
        }

        if(!cmd.action) {
          error('unknown event', event, path)
          return
        }
  
        if(p[2] == '.members') {
          // Update groupData with new .members content
          global.groupInfo.updateMembers(p[0], p[1], actions[events.indexOf(event)+1])

          // if user != thisMember remove cmd from networkEvents
          //if(p[0] != thisMember) {
          //  global.groupInfo.networkEvents.remove(cmd)
          //}
          //return
        }

        if(global.groupInfo.networkEvents.remove(cmd) > -1) {
          cmd = null
        }

      } else if((p.length == 2) && (p[0] != thisMember)) {
        if(actions[events.indexOf(event)+1] == 'delete') {
          cmd = {action: 'remove', member: p[0], group: p[1], remove: thisMember}
        } else {
          // new group which thisMember is a member of
          cmd = {action: 'sync', member: p[0], group: p[1], syncFor: thisMember, files: []}
          global.groupInfo.addMember(p[0], p[1])
        }
      }
  
      if(cmd) {
        //log(cmd)
        global.eventQueue.push(cmd)
      }
    })
  })
}

module.exports=sender