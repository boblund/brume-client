"use strict"

const brume = require('./global.js')
      , fs = require('fs')
      , jwt = require('jsonwebtoken')
      , {resolve4} = require('mdns-resolver')
      , sender = require("./sender.js")
      , receiver = require("./receiver.js")
      , createWebsocket = require('./websocket.js')
      , osConfigLocs = {
          linux: '/etc/brume/brume.conf'
          ,win32: process.env.PROGRAMDATA + '/brume.conf'
          ,darwin: '/usr/local/etc/brume/brume.conf'
        }
;


var configFile

if(process.argv.length == 3) {
  configFile = process.argv[2]
} else if(process.env.BRUME_CONFIG) {
  configFile = process.env.BRUME_CONFIG
} else if(process.env.HOME) {
  try {
    configFile = process.env.HOME + '/.brume.conf'
    fs.statSync(configFile).isFile()
  } catch (e) {
    configFile = osConfigLocs[process.platform]
  }
} 

/*
try {
  var {baseDir, token, url} = JSON.parse(fs.readFileSync(configFile, 'utf-8'))
  baseDir = baseDir.replace('./','')
  url = process.env.LOCAL ? 'ws://' + process.env.LOCAL : url
  var {username} = jwt.decode(token)
brume.thisUser = username
brume.init(baseDir, username)
  if(!baseDir || !token || !url) throw('baseDir, token or url not set')
} catch(e) {
  console.error(`brume-client:    Brume config error ${configFile} ${e}`)
  process.exit(1)
}
*/

(async function() {
  try {
    var {baseDir, token, url} = JSON.parse(fs.readFileSync(configFile, 'utf-8'))
    baseDir = baseDir.replace('./','')
    let [addr, port] = process.env.WSSERVER ? process.env.WSSERVER.split(':') : [null, null]
    port = port ? ':' + port : ''
    url = addr
      ? 'ws://' + (addr.match(/^\d+\.\d+\.\d+\.\d+/)
          ? addr.match(/^\d+\.\d+\.\d+\.\d+/)[0]
          : await new Promise(res=>{resolve4(addr).then(res).catch(()=>{res(addr)})})
        ) + port
      : url
    var {username} = jwt.decode(token)
    brume.thisUser = username
    brume.init(baseDir, username)
    if(!baseDir || !token || !url) throw('baseDir, token or url not set')
  } catch(e) {
    console.error(`brume-client:    Brume config error ${configFile} ${e}`)
    process.exit(1)
  }

  try {
    var ws = await createWebsocket(url, username, token)
    var PeerConnection = require('./makePeerConnection.js')(ws, username)
    sender({PeerConnection: PeerConnection, baseDir: baseDir, thisMember: username})
    receiver({PeerConnection, baseDir})

    // eventQueue is constructed to not process queue entries until explicitly started
    // after the PeerConnection class is created
    brume.eventQueue.start()
  } catch(e) {
    console.error("createWebsocket error:",e.code, ". Retry in one hour")
    setTimeout(main, 60*60*1000)
  }
})()


async function main() {
  try {
    var ws = await createWebsocket(url, username, token)
    var PeerConnection = require('./makePeerConnection.js')(ws, username)
    //init watcher
    //build groupData (which creates eventQueue)


    sender({
      PeerConnection: PeerConnection
      , baseDir: baseDir
      , thisMember: username
    })
    receiver({
      PeerConnection: PeerConnection
      , baseDir: baseDir
    })

    // eventQueue is constructed to not process queue entries until explicitly started
    // after the PeerConnection class is created
    brume.eventQueue.start()
  } catch(e) {
    console.error("createWebsocket error:",e.code, ". Retry in one hour")
    setTimeout(main, 60*60*1000)
  }
}

//main()
