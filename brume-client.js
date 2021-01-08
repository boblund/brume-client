"use strict"

if(process.argv.length != 3) {
  console.log("USAGE: node brume-client.js usename")
  process.exit(1)
}

const configFile = "./" + process.argv[2] +"-brume-config.js"
const {token, username, baseDir, groupInfo} = require(configFile)
const createWebsocket = require('./websocket.js')

const awsBrumeServer = "wss://q9ztgt7lac.execute-api.us-east-1.amazonaws.com/Prod"
      , localBrumeServer = "ws://localhost:8080"
;

async function main() {
  var sender = require("./sender.js")
      , receiver = require("./receiver.js")
  ;

  try {
    var ws = await createWebsocket(localBrumeServer, username, token)
    var PeerConnection = require('./makePeerConnection.js')(ws, username)
    /*if(username == 'bob')*/sender({
      PeerConnection: PeerConnection
      , groupInfo: groupInfo
      , baseDir: baseDir
      , username: username
    })
    /*if(username == 'alice')*/receiver({
      PeerConnection: PeerConnection
      , baseDir: baseDir
    })
  } catch(e) {
    console.error("createWebsocket error:",e.code, ". Retry in one hour")
    setTimeout(main, 60*60*1000)
  }
}

main()

