#!/usr/bin/env node
"use strict"

const brume = require('./global.js')
      , fs = require('fs')
      , jwt = require('jsonwebtoken')
      , {resolve4} = require('mdns-resolver')
      , sender = require("./sender.js")
      , receiver = require("./receiver.js")
      , createWebsocket = require('./websocket.js')
      , baseDir = process.env.BRUME_FILES ? process.env.BRUME_FILES : process.env.HOME+"/Brume/"
      , configFile = process.argv.length == 3
          ? process.argv[2]
          : process.env.BRUME_CONFIG
            ? process.env.BRUME_CONFIG
            : process.env.HOME+'/.config/Brume/brume.conf'
;

(async function() {
  try {
    var {token, url} = JSON.parse(fs.readFileSync(configFile, 'utf-8'))
    let [addr, port] = process.env.BRUME_SERVER ? process.env.BRUME_SERVER.split(':') : [null, null]
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
    console.log('Starting brume-client username=', username)
    var ws = await createWebsocket(url, username, token)
    console.log('Connected to brume-server @', url)
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
