"use strict"

const global = require('./global.js')
      , fs = require('fs')
      , path = require('path')
      , jwt = require('jsonwebtoken')
      , {treeWalk} = require('./fileWatcher.js')
      , sender = require("./sender.js")
      , receiver = require("./receiver.js")
;
function NetworkEvents() {
  var networkEvents = []

  this.add = cmd => {
    networkEvents.push(cmd)
  }
  this.remove = function(cmd){
    let index = networkEvents.findIndex(
      function(e) {return e.action == this.action && e.file == this.file}
      ,cmd
    )

    if(index > -1) {
      // ignore file event caused by network event 
      networkEvents.splice(index, 1)
    }

    return index

  }
}
function GroupInfo(baseDir, username) {
  var groupData = {}
      ,memberStatus = {}
  ;

  this.networkEvents = new NetworkEvents;
  this.getMembers = (user, group) => {
    return groupData[user][group]['members'].filter(m => m != username)
  };
  //this.updateMembers = (group, members) => { return (sender[group][members] = members) }
  this.memberOf = (user, group) => {return groupData[user] && group ? groupData[user][group] : true}
  this.addMember = (member, group) => { receiver[member]['groups'].push(group)}
  //this.memberGroups = member => {return Object.entries(sender).filter(e => e[1].includes(member)).flat().filter(e=>typeof e == 'string')}
  this.memberStatus = (member, status) => {return status ? (memberStatus[member] = status) : memberStatus[member]}

  this.sendSync = (user, group) => {
    this.memberStatus(user, 'active')
    let cmd = {
      action: 'sync', member: user, syncFor: username, group: group
      ,files: treeWalk(baseDir+user+'/'+ group).map(f => f.replace(baseDir,''))
    }
    global.eventQueue.push(cmd)  
  }

  this.sendSyncReq = (user, group) => {
    this.memberStatus(user, 'active')
    global.eventQueue.push({action: 'syncReq', member: user, owner: username, group: group})
  }

  this.updateMembers = (user, group, action) => {
    let p = baseDir+user
        , newMembers =[]

    switch(action) {
      case 'delete':
        break;

      case 'add':
      case 'changed':
        try {
          newMembers = JSON.parse(fs.readFileSync(p+'/'+group+'/.members'))
        } catch(e) {
          if(e.message && e.message.includes('Unexpected token')) {
            // messed up .members; can't tell what to do
            return
          }
        }
        break;

      default:
        console.log(`brume-client:    buildSender unknown action ${action}`)
        return
    }

    //sender.group['members'] = sender.group['members'] ? sender.group.members : []
    let added = newMembers.filter(m => !groupData[user][group].members.includes(m))
    let removed = groupData[user][group].members.filter(m => !newMembers.includes(m))

    // Do following only for this user, i.e. username)
    if(user == username) {
      // Request sync from each new member
      added.forEach(member => {
        this.memberStatus(member, 'active');
        this.sendSyncReq(member, group)
      })
    
      // Delete everything for all removed members
      let files = treeWalk(baseDir + user + '/' + group)
        //.filter(e => path.basename(e) !='.members')
        .map(f => f.replace(baseDir,''))

      removed.forEach(member => {
        files.forEach(file => {
          global.eventQueue.push({action: 'delete', file: file, member: member, type: 'file'})
        })
      })
    }

    groupData[user][group] = { members: newMembers}
  }

  //function initGroupData() {
    let groups
        ,users
  
    try {
      users = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory())
    } catch (e) {
      console.log(`brume-client:    error reading ${baseDir}`)
      return
    }

    for(let user of users) {
      groupData[user]={}
      let p = path.join(baseDir + user)

      try {
        groups = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
      } catch (e) {
        console.log(`brume-client:    error reading ${p}`)
        continue
      }

      for(let group of groups) {
        let members
        try {
          members = JSON.parse(fs.readFileSync(p+'/'+group+'/.members'))
        } catch(e) {
          if(e.message && e.message.includes('Unexpected token')) {
            // messed up .members; can't tell what to do
            return
          }
        }

        groupData[user][group] = { members: members ? members : []}

        if(user == username) {
          // Request sync from each new member
          members.filter(m => m != username).forEach(member => {
            this.sendSyncReq(member, group)
          })
        } else {
          // Send sync to each owner
          this.sendSync(user, group)
        }
      }
    }
  //}
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
} else if(process.env.HOME) {
  try {
    configFile = process.env.HOME + '/.brume.conf'
    fs.statSync(configFile).isFile()
  } catch (e) {
    configFile = osConfigLocs[process.platform]
  }
} 

try {
  var {baseDir, token, url} = JSON.parse(fs.readFileSync(configFile, 'utf-8'))
  baseDir = baseDir.replace('./','')
  url = process.env.LOCAL ? 'ws://localhost:' + process.env.LOCAL : url
  if(!baseDir || !token || !url) throw('baseDir, token or url not set')
} catch(e) {
  console.error(`brume-client:    Brume config error ${configFile} ${e}`)
  process.exit(1)
}

var {username} = jwt.decode(token)
global.groupInfo = new GroupInfo(baseDir, username)
const createWebsocket = require('./websocket.js')

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

    // eventQueue is constructed to not process queue entries until explicitly started
    // after the PeerConnection class is created
    global.eventQueue.start()
  } catch(e) {
    console.error("createWebsocket error:",e.code, ". Retry in one hour")
    setTimeout(main, 60*60*1000)
  }
}

main()
