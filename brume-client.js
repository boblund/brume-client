#!/usr/bin/env node
"use strict"

const {brume} = require('./global.js')
      , log = require('./logger.js')
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

var username, token, url, addr, port, logLevel;

function brumeInit() {
  try {
    ;({token, url, logLevel} = JSON.parse(fs.readFileSync(configFile, 'utf-8')))
    logLevel = process.env.LOG ? process.env.LOG : (logLevel ? logLevel : 'INFO')
    log.setOptions({level: logLevel, timestamp: process.env.TIMESTAMP})
    ;([addr, port] = process.env.BRUME_SERVER ? process.env.BRUME_SERVER.split(':') : [null, null])
    port = port ? ':' + port : ''
    ;({username} = jwt.decode(token))//.username
    brume.init(baseDir, username)
    if(!baseDir || !token || !url) throw('baseDir, token or url not set')
  } catch(e) {
    log.error(`brume config error ${configFile} ${e.message}`)
    process.exit(1)
  }
  brumeStart()
}

brume.brumeStart = brumeStart

async function brumeStart() {
  try {
    log.info('starting brume-client', username)
    url = addr
    ? 'ws://' + (addr.match(/^\d+\.\d+\.\d+\.\d+/)
        ? addr.match(/^\d+\.\d+\.\d+\.\d+/)[0]
        : await new Promise(res=>{resolve4(addr).then(res).catch(()=>{res(addr)})})
      ) + port
    : url
    brume.ws = await createWebsocket(url, username, token)
    log.info('connected to ws server ' + url)
    const pingInterval = setInterval(function ping() { brume.ws.ping(()=>{}) }, 9.8 * 60 * 1000);

    brume.ws.on('pong', ()=>{
     log.debug('ws server: pong')
    })

    brume.ws.on('serverclose', (m)=> {
      log.info('ws server close')
      clearInterval(pingInterval)
      delete brume.ws
      brumeStart()
    })

    var PeerConnection = require('./makePeerConnection.js')(brume.ws, username)
    sender({PeerConnection: PeerConnection, baseDir: baseDir})
    receiver({PeerConnection, baseDir})
    brume.eventQueue.processQ()
  } catch(e) {
    let minutes= 60
    log.warn("createWebsocket error:",e.code, ". Retry in", minutes, 'minutes')
    setTimeout(brumeInit, minutes*60*1000)
    brume.watcher.close().then(() => log.debug('brume-client:    watcher closed'));
    delete brume.watcher
  }
}

brumeInit()
