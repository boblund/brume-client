"use strict"

const fs = require('fs')
      , path = require('path')
      , jwt = require('jsonwebtoken')
;

function buildGroupInfo(baseDir, username) {
  let groupInfo = {
    sender: {}
    ,receiver: {}
  }

  let p = baseDir+username

  let groups = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
  for(let group of groups) {
    try {
      groupInfo.sender[group] = JSON.parse(fs.readFileSync(p+'/'+group+'/.members.json'))
      p=baseDir
      let members = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
      for(let member of members) {
        if(member != username) {
          p = baseDir+member
          groups = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
          groupInfo.receiver[member] = {groups: groups}
        }
      }
    } catch(e) {
      console.error('error reading config file:', e)
      process.exit(1)
    }
  }
  return groupInfo
}

const osConfigLocs = {
  linux: '/etc/brume/brume.conf'
  ,win32: process.env.PROGRAMDATA + '/brume.conf'
  ,darwin: '/usr/local/etc/brume/brume.conf'
}

var configFile

if(process.argv.length == 3) {
  configFile = process.argv[2]
} else if(process.env.BRUME_CONFIG) {
  configFile = process.env.BRUME_CONFIG
} else configFile = osConfigLocs[process.platform]

try {
  fs.statSync(configFile).isFile()
} catch(e) {
  console.error(`no brume config at ${configFile}`)
  process.exit(1)
}

try {
  var {baseDir} = JSON.parse(fs.readFileSync(configFile, 'utf-8'))
  baseDir = baseDir.replace('./','')
  var {token, url} = JSON.parse(fs.readFileSync(baseDir + '/.wsserver.json', 'utf-8'))
  url = 'ws://localhost:8080'
} catch(e) {
  console.error('error reading config file:', e)
  process.exit(1)
}

const {username} = jwt.decode(token)
const groupInfo = buildGroupInfo(baseDir, username)
const createWebsocket = require('./websocket.js')

//const awsBrumeServer = "wss://wkiw3ej74c.execute-api.us-east-1.amazonaws.com/Prod"
//      , localBrumeServer = "ws://localhost:8080"
//;

async function main() {
  var sender = require("./sender.js")
      , receiver = require("./receiver.js")
  ;

  try {
    var ws = await createWebsocket(url, username, token)
    var PeerConnection = require('./makePeerConnection.js')(ws, username)
    sender({
      PeerConnection: PeerConnection
      , groupInfo: groupInfo.sender
      , baseDir: baseDir
      , username: username
    })
    receiver({
      PeerConnection: PeerConnection
      , baseDir: baseDir
      , groupInfo: groupInfo.receiver
    })
  } catch(e) {
    console.error("createWebsocket error:",e, ". Retry in one hour")
    setTimeout(main, 60*60*1000)
  }
}

main()

