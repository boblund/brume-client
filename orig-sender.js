"use strict"
const jwt = require("jsonwebtoken")
      , {token, groupInfo} = require("bobConfig.js")
      , username = jwt.decode(token).username
      , TimedQueue = require('./TimedQueue.js')
;

var PeerConnection
    , {dirWatcher, EventQueue} = require('./fileWatcher.js')
    , baseDir = 'tmp/SimplePeerCaller/'
    , groupInfo = {
        group1: { members: ["callee"] }
    }
    , memberInfo = {
      callee: {active: true, lastDelay: 0}
    }
    , createWebsocket = require('./websocket.js')
;

async function doCommand(name, cmd){
  return new Promise(async (resolve, reject) => {
    let peerConnection = new PeerConnection('sender');
    try {
      let result = {};
      let peer = await peerConnection.open(name)

      peer.on('data', (data) => {
        result = JSON.parse(data.toString())
        //if(cmd.action == 'delete') {
          console.log('on data result:',result);
          result.type === "SUCCESS" ? resolve(result) : reject(result)
        //}
      })

      peer.on('close', () => {})

      if(cmd.action == 'delete') {
        peer.send(JSON.stringify(cmd));
      } else if(cmd.action == 'add') {
        let inStream = (require('fs')).createReadStream(baseDir + cmd.file, 
          {emitClose: true, autoClose: false})

        inStream.on('end', () => {})

        peer.send(JSON.stringify(cmd));
        inStream.pipe(peer);
      }  
    } catch (err) {
      console.log('error', err)
      reject(err);
    }
  })
}

var timedQueue = new (require('./TimedQueue.js'))()
    , eventQueue = null
;

const TQECONNREFUSED = 60*60*1000
      , TQENODEST = 60*60*1000
      , TQEOFFERTIMEOUT = 60*60*1000
;

function errorHandler(err) {
  console.log('errorHandler err', err)
  switch(err.type) {
    case 'ECONNREFUSED':
      timedQueue.push(err.main,TQECONNREFUSED)
      break;

      case 'ENODEST':
      memberInfo[err.peerName].active = false;
      timedQueue.push(() => {
        memberInfo[err.peerName].active = true;
        eventQueue.remove(e => {return e.file === err.cmd.file})
        err.cmd.member = err.cmd.member ? err.cmd.member : err.peerName
        eventQueue.push(err.cmd)
      }, TQENODEST)
      break;

      case 'EOFFERTIMEOUT':
        timedQueue.push(() => {
          eventQueue.remove(e => {return e.file === err.cmd.file})
          err.cmd.member = err.cmd.member ? err.cmd.member : err.peerName
          eventQueue.push(err.cmd)
        }, TQEOFFERTIMEOUT) 
        break;
    
    case 'EANSWERTIMEOUT':
    case 'EUNLINK':
      break;

    default:
      console.error('unknown error:');
  }
}

async function eventQueueProcessor(qEntry) {
  let members = qEntry.member ? [qEntry.member] : groupInfo[qEntry.file.match('.*?/(.*?)/.*')[1]].members
  for(let member of members) {
    try {
      console.log('doCommand result:', JSON.stringify(await doCommand(member, qEntry)))
      // Need to check for non SUCCESS results
    } catch (e) {
      console.log('doCommand error:', e)
      e.cmd = e.cmd ? e.cmd : qEntry
      errorHandler(e);
    }
  }
}

const awsBrumeServer = "wss://q9ztgt7lac.execute-api.us-east-1.amazonaws.com/Prod"
      , localBrumeServer = "ws://localhost:8080"
;

async function main() {
  var ws;
  try {
    //
    ws = await createWebsocket(awsBrumeServer, username)
    PeerConnection = require('./makePeerConnection.js')(ws, username)
    eventQueue = new EventQueue(eventQueueProcessor)
    let watcher = dirWatcher(baseDir)
    watcher.on('event', (eType, file, fileType) => {
      // Remove queued events for this file
      eventQueue.remove(e => {return e.file === file})

      // Enqueue the new file action and fire an event
      eventQueue.push({action: eType, file: file.slice(baseDir.length), type: fileType})
    })
  } catch (e) {
    console.log('createWebsocket error:', e)
    e.main = main
    errorHandler(e);
  }
}

main()
