#!/usr/bin/env node
"use strict"

const {brume, debug} = require('./global.js')
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


var username, token, url, addr, port;

try {
  ;({token, url} = JSON.parse(fs.readFileSync(configFile, 'utf-8')))
  ;([addr, port] = process.env.BRUME_SERVER ? process.env.BRUME_SERVER.split(':') : [null, null])
  port = port ? ':' + port : ''
  ;({username} = jwt.decode(token))//.username
  brume.init(baseDir, username)
  if(!baseDir || !token || !url) throw('baseDir, token or url not set')
} catch(e) {
  console.error(`brume-client:    Brume config error ${configFile} ${e}`)
  process.exit(1)
}

async function main() {
  try {
    console.log('Starting brume-client username=', username)
    url = addr
    ? 'ws://' + (addr.match(/^\d+\.\d+\.\d+\.\d+/)
        ? addr.match(/^\d+\.\d+\.\d+\.\d+/)[0]
        : await new Promise(res=>{resolve4(addr).then(res).catch(()=>{res(addr)})})
      ) + port
    : url
    var ws = await createWebsocket(url, username, token)
    ws.on('serverclose', (m)=> {
      let minutes= 1
      console.error("server close:", m, ". Retry in", minutes, 'minutes')
      setTimeout(main, minutes*60*1000)
    })

    //brume.init(baseDir, username)
    console.log('Connected to brume-server @', url)
    var PeerConnection = require('./makePeerConnection.js')(ws, username)
    sender({PeerConnection: PeerConnection, baseDir: baseDir})
    receiver({PeerConnection, baseDir})
    brume.eventQueue.processQ() //start()
  } catch(e) {
    let minutes= 10
    console.error("createWebsocket error:",e.code, ". Retry in", minutes, 'minutes')
    setTimeout(main, minutes*60*1000)
  }
  // make main start at above try
  // on server close
  //  delete brume.eventQueue, PeerConnection
  //  restart main
}

main()

