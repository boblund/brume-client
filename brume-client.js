"use strict"

const global = require('./global.js')
      , fs = require('fs')
      , path = require('path')
      , jwt = require('jsonwebtoken')
      , {treeWalk} = require('./fileWatcher.js')
      , sender = require("./sender.js")
      , receiver = require("./receiver.js")
;

// groupInfo = {
//   sender: { group1: [member1, ...], ...}
//   ,receiver: {member1: [group1, ...], ...}
// }

function GroupInfo(baseDir, username) {
  var sender = {}
      ,receiver = {}
      ,memberStatus = {}
  ;

  // global.groupInfo needs to be set before the constructor exits
  //global.groupInfo = this
  this.getMembers = (group) => {
    let r = sender[group]['members']
    return r
  };
  this.updateMembers = (group, members) => { return (sender[group][members] = members) }
  this.memberOf = (member, group) => {
    return receiver[member] && group ? receiver[member]['groups'].includes(group) : true
  }
  this.addMember = (member, group) => { receiver[group]['members'].push(member)}
  this.memberGroups = member => {
    return Object.entries(sender).filter(e => e[1].includes(member)).flat().filter(e=>typeof e == 'string')
  }
  this.memberStatus = (member, status) => {
    //if(status) console.log('memberStatus:', member, status)
    return status ? (memberStatus[member] = status) : memberStatus[member]
  }
  this.sendSync = (member) => {
    for(let group of receiver[member].groups) {
      let cmd = {action: 'sync', member: member, syncFor: username, group: group
        , files: treeWalk(baseDir+member+'/'+ group).map(f => f.replace(baseDir,''))}
      global.eventQueue.push(cmd)
    }   
  }


  try {
    // Build set of members for each of this Brume member's groups
    let p = baseDir+username
    let groups = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
    for(let group of groups) {
        sender[group] = { members: JSON.parse(fs.readFileSync(p+'/'+group+'/.members'))}
        sender[group].members.forEach(m => {this.memberStatus(m, 'active');})
    }

    // Build set of Brume member/group that this Brume member is a member of
    p=baseDir
    let members = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
    for(let member of members.filter(m => m != username)) {
      if(member != username) {
        p = baseDir+member
        groups = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
        receiver[member] = {groups: groups}

        // Send sync to every reveiver member/group
        for(let member in receiver) {
          this.sendSync(member)
/*          for(let group of receiver[member].groups) {
            let cmd = {action: 'sync', member: member, syncFor: username, group: group
              , files: treeWalk(baseDir+member+'/'+ group).map(f => f.replace(baseDir,''))}
            global.eventQueue.push(cmd)
          }*/
        }
      }
    }
    //console.log(`groupInfo\n\tsender: ${JSON.stringify(sender)}\n\treceiver: ${JSON.stringify(receiver)}`)
  } catch(e) {
    console.error('groupInfo:    error', e)
    process.exit(1)
  } 
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
  url = process.env.LOCAL ? 'ws://localhost:' + process.env.LOCAL : url
} catch(e) {
  console.error('error reading config file:', e)
  process.exit(1)
}

const {username} = jwt.decode(token)
global.groupInfo = new GroupInfo(baseDir, username)
const createWebsocket = require('./websocket.js')

//const awsBrumeServer = "wss://wkiw3ej74c.execute-api.us-east-1.amazonaws.com/Prod"
//      , localBrumeServer = "ws://localhost:8080"
//;

async function main() {
  try {
    var ws = await createWebsocket(url, username, token)
    var PeerConnection = require('./makePeerConnection.js')(ws, username)

    sender({
      PeerConnection: PeerConnection
      , baseDir: baseDir
      , thisMember: username
    })
    receiver({
      PeerConnection: PeerConnection
      , baseDir: baseDir
    })
  } catch(e) {
    console.error("createWebsocket error:",e.code, ". Retry in one hour")
    setTimeout(main, 60*60*1000)
  }
}

main()
