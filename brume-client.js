"use strict"

const global = require('./global.js')
      , fs = require('fs')
      , path = require('path')
      , jwt = require('jsonwebtoken')
      , {treeWalk} = require('./fileWatcher.js')
      , sender = require("./sender.js")
      , receiver = require("./receiver.js")
;

function GroupInfo(baseDir, username) {
  var sender = {}
//      ,receiver = {}
      ,memberStatus = {}
  ;

  this.getMembers = (group) => {return sender[group]['members']};
  this.updateMembers = (group, members) => { return (sender[group][members] = members) }
  this.memberOf = (member, group) => {return receiver[member] && group ? receiver[member]['groups'].includes(group) : true}
  this.addMember = (member, group) => { receiver[member]['groups'].push(group)}
  this.memberGroups = member => {return Object.entries(sender).filter(e => e[1].includes(member)).flat().filter(e=>typeof e == 'string')}
  this.memberStatus = (member, status) => {return status ? (memberStatus[member] = status) : memberStatus[member]}

  this.sendSync = (member, group) => {
    this.memberStatus(member, 'active')
    let groups = group ? [group] : receiver[member].groups
    for(let group of groups) {
      let cmd = {action: 'sync', member: member, syncFor: username, group: group
        , files: treeWalk(baseDir+member+'/'+ group).map(f => f.replace(baseDir,''))}
      global.eventQueue.push(cmd)
    }   
  }

  this.sendSyncReq = ({member, group}) => {
    global.eventQueue.push({action: 'syncReq', member: member, owner: username, group: group})
  }

  this.updateSender = (group, action) => {
    let p = baseDir+username
        , newMembers =[]

    switch(action) {
      case 'delete':
        break;

      case 'add':
        sender[group] = { members: [] }
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
    let added = newMembers.filter(m => !sender[group].members.includes(m))
    let removed = sender[group].members.filter(m => !newMembers.includes(m))

    // Request sync from each new member
    added.forEach(member => {
      this.memberStatus(member, 'active');
      this.sendSyncReq({member, group})
    })

    // Delete everything for all removed members
    let files = treeWalk(baseDir + username + '/' + group)
      .filter(e => path.basename(e) !='.members')
      .map(f => f.replace(baseDir,''))

    removed.forEach(member => {
      files.forEach(file => {
        global.eventQueue.push({action: 'delete', file: file, member: member, type: 'file'})
      })
    })

    sender[group] = { members: newMembers}
  }

  const buildSender = () => {
    let p = baseDir+username
        , groups
        , members

    try {
      groups = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
    } catch (e) {
      console.log(`brume-client:    error reading ${p}`)
      return
    }

    // Update set of members for each of this Brume member's groups
    for(let group of groups) {
      try {
        members = JSON.parse(fs.readFileSync(p+'/'+group+'/.members'))
      } catch(e) {
        if(e.message && e.message.includes('Unexpected token')) {
          // messed up .members; can't tell what to do
          return
        }
      }

      // Request sync from each new member
      members.forEach(member => {
        this.memberStatus(member, 'active');
        this.sendSyncReq({member, group})
      })

      sender[group] = { members: members}
    }
  }

  const buildReceiver = () => {
    // Build set of Brume member/group that this Brume member is a member of
    let p=baseDir

    try {
      let members = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
      for(let member of members.filter(m => m != username)) {
        if(member != username) {
          p = baseDir+member
          let groups = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
          receiver[member] = {groups: groups}

          // Send sync to every reveiver member/group
          for(let member in receiver) {
            this.memberStatus(member, 'active');
            this.sendSync(member)
          }
        }
      }
    } catch(e) {
      console.error('groupInfo:    error', e)
      process.exit(1)
    }
  }

  buildSender()
  buildReceiver()
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
  fs.statSync(configFile).isFile()
} catch(e) {
  console.error(`brume-client:    no brume config at ${configFile}`)
  process.exit(1)
}

try {
  var baseDir = JSON.parse(fs.readFileSync(configFile, 'utf-8')).baseDir.replace('./','')
      ,{token, url} = JSON.parse(fs.readFileSync(baseDir + '/.wsserver.json', 'utf-8'))
  url = process.env.LOCAL ? 'ws://localhost:' + process.env.LOCAL : url
} catch(e) {
  console.error('brume-client:    error reading config file:', e)
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
