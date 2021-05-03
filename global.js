"use strict"
const {readdirSync, readFileSync, statSync} = require('fs')
      ,{join} = require('path')
      ,{utimes} = require('fs').promises
      ,{round} = Math
      ,utimesEvents = new NetworkEvents()
;

var brume

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
    return groupData[user][group]['members']
  };

  this.memberOf = (user, group) => {
    return groupData[user] ? (groupData[user][group] ? true : false) : false
  }

  this.rmMember = (member, group) => {
    delete groupData[member][group]
  }

  this.memberStatus = (member, status) => {
    if(!memberStatus[member]) memberStatus[member] = 'active'
    return status ? (memberStatus[member] = status) : memberStatus[member]
  }

  this.sendSync = (user, group) => {
    // process any .retryOnSync commands for cmd.owner/cmd.group
    try {
      for(let cmd of readFileSync(join(user, group,'.retryOnSync')).toString().split('\n').filter(e => e != '\n')) {
        brume.eventQueue.push(JSON.parse(cmd))
      }
      unlinkSync(join(cmd.owner, cmd.group,'.retryOnSync'))
    } catch (e) {
      if(!e.code == 'ENOENT') console.log('receiver:    .retryOnSync error ', e.message)
    }

    let cmd = {
      action: 'sync', member: user, owner: user, group: group
      //,files: treeWalk(baseDir+user+'/'+ group).map(f => f.replace(baseDir,''))
      ,files: brume.fileData.grpFiles(user, group)
    }
    brume.eventQueue.push(cmd)  
  }

  this.sendSyncReq = (user, group) => {
    this.memberStatus(user, 'active')
    brume.eventQueue.push({action: 'syncReq', member: user, owner: username, group: group})
  }

  this.updateMembers = (user, group, action) => {
    let p = baseDir+user
        , newMembers =[]

    switch(action) {
      case 'unlink':
        break;

      case 'add':
      case 'change':
        try {
          newMembers = JSON.parse(readFileSync(p+'/'+group+'/.members'))
        } catch(e) {
          if(e.message && e.message.includes('Unexpected token')) {
            // messed up .members; can't tell what to do
            return
          }
        }
        break;

      default:
        console.log(`brume-client:    updateMembers unknown action ${action}`)
        return
    }

    let added = newMembers
      .filter(m => !groupData[user][group].members.includes(m))
    let removed = groupData[user][group].members.filter(m => !newMembers.includes(m))

    // Do following only for this user, i.e. username)
    if(user == username) {
      // Request sync from each new member
      added.filter(m => m != username).forEach(member => {
        this.memberStatus(member, 'active');
        this.sendSyncReq(member, group)
      })
    
      if(removed.length > 0) {
        // Delete everything for all removed members
        let files = Object.keys(brume.fileData.grpFiles(user, group))

        removed.forEach(member => {
          files.forEach(file => {
            brume.eventQueue.push({action: 'unlink', file: file, member: member})
          })
        })
      }
    }

    groupData[user][group] = { members: newMembers}
  }

  // init groupInfo
  
  let groups
      ,users

  try {
    users = readdirSync(baseDir).filter(f => statSync(join(baseDir, f)).isDirectory())
  } catch (e) {
    console.log(`brume-client:    error reading ${baseDir}`)
    return
  }

  for(let user of users) {
    groupData[user]={}
    let p = join(baseDir + user)

    try {
      groups = readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
    } catch (e) {
      console.log(`brume-client:    error reading ${p}`)
      continue
    }

    for(let group of groups) {
      let members = []
      try {
        members = JSON.parse(readFileSync(p+'/'+group+'/.members'))
      } catch(e) {
        if(e.message && e.message.includes('Unexpected token')) {
          // messed up .members; can't tell what to do
          return
        }
      }

      groupData[user][group] = {members: members}
      if(user == brume.thisUser) {
        // Request sync from each new member
        if(members) {
          members.forEach(member => {
            this.sendSyncReq(member, group)
          })
        }
      } else {
        // Send sync to each owner
        this.sendSync(user, group)
      }
    }
  }
}

class FileData extends Map {
  constructor(options) {
    super(options)
  }

  grpFiles = (m, g) => {
    var files = {}
    this.forEach((v, k) => {
      let [_m, _g] = k.split('/')
      if(m == _m && g == _g) files[k]=v
    })
    return files
  }
}

function Brume() {
  brume = this
  this.init = function (baseDir, username) {
    this.fileData = new FileData()
    const watcher = require('chokidar').watch('.', {cwd: baseDir, ignored: /-CONFLICT-/})
    function initAddHandler(path, stats) {
      let p = path.split('/')
      if((p.length == 3 && p[2] == '.members') || !path.match(/(^|[\/])\./)) {
        brume.fileData.set(path, {pmod: 0, mod: round(stats.mtimeMs)})
        console.log(`initadd ${path} ${JSON.stringify(brume.fileData.get(path))}`)
      }
    }
    
    watcher
    .on('add', initAddHandler)
    .on('ready', () => {
      console.log('sender:    watcher ready')
      this.groupInfo = new GroupInfo(baseDir, username)
      watcher
        .removeListener('add', initAddHandler)
        .on('all', async (event, path) => {
          if(utimesEvents.remove({action: event, file: path}) > -1) {
            return
          }

          let p = path.split('/')
              ,cmd = {action: event, file: path}

          // ignore all .dotfiles except user/group/.members
          if(path.match(/(^|[\/])\./)) {
            if(['add','change', 'unlink'].includes(event) &&
               p.length == 3 &&
               p[2] == '.members'/* &&
               p[0] == brume.thisUser*/){
              brume.groupInfo.updateMembers(p[0], p[1], cmd.action)
            } else {
              return
            }
          }

          switch(event) {
            case 'add':
            case 'change':
              if(brume.groupInfo.networkEvents.remove(cmd) == -1) {
                cmd.pmod = event == 'change' ? brume.fileData.get(path).mod : 0
                cmd.mod = round(statSync(join(baseDir, path), {throwIfNoEntry: false}).mtimeMs)
                brume.fileData.set(cmd.file, {pmod: cmd.mod, mod: cmd.mod})
                brume.eventQueue.push(cmd)
              } else {
                try {
                  utimesEvents.add({action: 'change', file: path})
                  await utimes(baseDir+path, brume.fileData.get(path).mod/1000, brume.fileData.get(path).mod/1000)
                } catch (e) {
                  console.log(`watcher:    error setting ${path} times ${e.message}`)
                }
              }
  
              break
    
            case 'unlink':
              brume.fileData.delete(path)
              if(brume.groupInfo.networkEvents.remove(cmd) == -1) {
                brume.eventQueue.push(cmd)
              }
              break
    
            case 'addDir':
              p = path.split('/')
              if(p.length ==2 && p[0] != thisUser) {
                brume.groupInfo.sendSync(p[0], p[1])
              } 
              break
    
            case 'unlinkDir':
              p = path.split('/')
              if(p.length ==2 && p[0] != thisUser) {
                brume.groupInfo.rmMember(p[0], p[1])
              }
          }
        })
      })
  }
}

module.exports = new Brume()
