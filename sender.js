const brume = require('./global.js')
      ,{dirWatcher, EventQueue, treeWalk} = require('./fileWatcher.js')
      ,{statSync} = require('fs')
      ,{join} = require('path')
      ,{round} = Math
;

brume.eventQueue = EventQueue(eventQueueProcessor)

var PeerConnection
    , baseDir = null
;
async function doCommand(member, cmd){
  return new Promise(async (resolve, reject) => {
    let peerConnection = new PeerConnection('sender'),
    peer = null;
    try {
      peer = await peerConnection.open(member)
      console.log(`sender:    ${peer.channelName} ${member} ${JSON.stringify(cmd)}`)

      peer.on('data', (data) => {
        //console.log(`sender:    ${peer.channelName} on data` )
        result = JSON.parse(data.toString())
        if(result.type == 'SUCCESS') {
          resolve(result)
        } else {
          //reject(result)
          reject({
            code: result.error.code   //ENOTMEMBER
            , peerName: member
            , channelName: peer.channelName
          })
        }
      })

      peer.on('close', () => {
        //console.log(`sender:    ${peer.channelName} peer close\n`);
      })

      peer.on('error', e => {
        console.log(`sender:    ${peer.channelName} peer error\n`);
        peer.destroy()
        reject(e)
      })

      //console.log(`sender:    ${peer.channelName} ${JSON.stringify(cmd)}`)
      switch(cmd.action) {
        case 'unlink':
        case 'send':
        case 'sync':
        case 'syncReq':
          peer.send(JSON.stringify(cmd));
          break;

        case 'change':
        case 'add':
          let inStream = (require('fs')).createReadStream(baseDir + cmd.file)

          inStream.on('end', () => {
            //console.log('instream end:',result);
            peer.send('\u0005');
          })
          peer.send(JSON.stringify(cmd));
          inStream.pipe(peer, {end: false});
          break;

        default:
          console.error(`sender:    ${peer.channelName} unknown cmd.action ${cmd.action}`)     
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

function errorHandler(err) {
  switch(err.code) {

    case 'ENODEST':
      brume.groupInfo.memberStatus(err.peerName, 'notconnected')
      console.error(`sender:    ENODEST ${err.peerName} not connected\n`)
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
    : brume.groupInfo.getMembers(user, group)

  if(members.length == 0) {
    console.log(`sender:    WARNING no members for group ${group}`)
    return
  }

  for(let member of members.filter(m => brume.groupInfo.memberStatus(m) == 'active')) {
    let result
    try {
      result = await doCommand(member, qEntry)
      // Move to errorHandler?
      if(result.type == 'CONFLICT') {
        networkEvents.add({action: 'unlink', file: cmd.file})
        networkEvents.add({action: 'add', file: cmd.file +'-CONFLICT-'+member})
        await fs.promises.rename(baseDir+cmd.file, baseDir+cmd.file +'-CONFLICT-'+member)
        brume.eventQueue.push({action: 'send', file: cmd.file})
      }
    } catch (e) {
      e.cmd = e.cmd ? e.cmd : qEntry
      errorHandler(e);
    }
  }
}

class FileData extends Map {
  constructor(options) {
    super(options)
  }

  grpFiles = (m, g) => {
    var files = []
    this.forEach((v, k) => {
      let [_m, _g] = k.split('/')
      if(m == _m && g == _g) files.push({k, v})
    })
    return files
  }
}

function sender({PeerConnection: _pc, baseDir: _bd, thisMember}) {
  PeerConnection = _pc
  baseDir = _bd

  // eventQueue is constructed to not process queue entries until explicitly started
  // after the PeerConnection class is created

  //brume.eventQueue.start()

  const watcher = require('chokidar').watch('.', {cwd: baseDir})

  brume.fileData = new FileData()

  function initAddHandler(path, stats) {
    console.log('initadd', path)
    brume.fileData.set(path, {mod: round(stats.mtimeMs)}) 
  }
  
  watcher
  .on('add', initAddHandler)
  .on('ready', () => {
    console.log('sender:    watcher ready')
    watcher
      .removeListener('add', initAddHandler)
      .on('all', (event, path) => {
        let p = path.split('/')
            ,cmd = {action: event, file: path}
        switch(event) {
          case 'add':
          case 'change':
            if(p.length == 3 && p[2] == '.members') {
              brume.groupInfo.updateMembers(p[0], p[1], cmd.action)
            }
            
            if(brume.groupInfo.networkEvents.remove(cmd) == -1) {
              let stat = statSync(join(baseDir, path), {throwIfNoEntry: false})
              cmd.mod = round(stat.mtimeMs)

              if(event == 'change') {
                cmd.orig = brume.fileData.get(path).mod
              }

              brume.fileData.set(path, {mod: round(stat.mtimeMs)})
              brume.eventQueue.push(cmd)
            }

            break
  
          case 'unlink':
            brume.fileData.delete(path)
            if(brume.groupInfo.networkEvents.remove(cmd) == -1) {
              brume.eventQueue.push(cmd)
            }
            break
  
          case 'addDir':
            p = path.split('/')
            if(p.length ==2 && p[0] != thisMember) {
              brume.groupInfo.addMember(p[0], p[1])
              brume.groupInfo.sendSync(p[0], p[1])
              /*brume.eventQueue.push(
                {action: 'sync', member: p[0], group: p[1], syncFor: thisMember, files: []}
              )*/
            } 
            break
  
          case 'unlinkDir':
            p = path.split('/')
            if(p.length ==2 && p[0] != thisMember) {
              brume.groupInfo.rmMember(p[0], p[1])
            }
        }
      })
    })  
}

module.exports=sender
