#!/usr/bin/env node
"use strict";

const {BrumeData} = require('./BrumeData')
//      , GroupInfo = require('./groupInfo.js')
      , EventQueue = require('./eventQueue.js')
//      , FileData = require('./fileData.js')
      , FileWatcher = require('./fileWatcher.js')
      , NetworkEvents = require('./networkEvents')
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

var thisUser, token, url, addr, port, logLevel;

function brumeInit() {
  try {
    ;({token, url, logLevel} = JSON.parse(fs.readFileSync(configFile, 'utf-8')))
    logLevel = process.env.LOG ? process.env.LOG : (logLevel ? logLevel : 'INFO')
    log.setOptions({level: logLevel, timestamp: process.env.TIMESTAMP})
    ;([addr, port] = process.env.BRUME_SERVER ? process.env.BRUME_SERVER.split(':') : [null, null])
    port = port ? ':' + port : ''
    thisUser = jwt.decode(token).username
    //brume.init(baseDir, thisUser)
    if(!baseDir || !token || !url) throw('baseDir, token or url not set')
  } catch(e) {
    log.error(`brume config error ${configFile} ${e.message}`)
    process.exit(1)
  }
  brumeStart()
}

//brume.brumeStart = brumeStart

async function brumeStart() {
  var ws
  try {
    log.info('starting brume-client', thisUser)
    url = addr
    ? 'ws://' + (addr.match(/^\d+\.\d+\.\d+\.\d+/)
        ? addr.match(/^\d+\.\d+\.\d+\.\d+/)[0]
        : await new Promise(res=>{resolve4(addr).then(res).catch(()=>{res(addr)})})
      ) + port
    : url
    ws = await createWebsocket(url, thisUser, token)
    log.info('connected to ws server ' + url)
    const pingInterval = setInterval(function ping() { ws.ping(()=>{}) }, 9.8 * 60 * 1000);

    ws.on('pong', ()=>{
     log.debug('ws server: pong')
    })

    ws.on('serverclose', function(m) {
      log.info('ws server close')
      clearInterval(pingInterval)
      ws = null
      brumeStart()
    })

    var PeerConnection = require('./makePeerConnection.js')(ws, thisUser)
        ,eventQueue = new EventQueue()
        ,networkEvents = new NetworkEvents
        ,brumeData = new BrumeData({thisUser, baseDir, eventQueue, networkEvents})
        ,fileWatcher = new FileWatcher({brumeData, eventQueue, networkEvents})

    let cmdProcessor = sender({PeerConnection, brumeData})
    receiver({PeerConnection, brumeData, eventQueue, networkEvents})
    eventQueue.setCmdProcessor(cmdProcessor)
  } catch(e) {
    let minutes= 60
    log.warn("createWebsocket error:",e.code, ". Retry in", minutes, 'minutes')
    setTimeout(brumeInit, minutes*60*1000)
    fileWatcher.close().then(() => log.debug('brume-client:    fileWatcher closed'));
    fileWatcher = null
  }
}

brumeInit()
