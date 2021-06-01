"use strict"
const {readdirSync, readFileSync, rmdirSync, statSync, unlinkSync, writeFileSync, promises: {utimes}} = require('fs')
      ,{join} = require('path')
      ,utimesEvents = new NetworkEvents()
;

var brume

function debug(...args){
	console.log(...args)
}

function NetworkEvents() {
  var networkEvents = []

  this.add = cmd => {
    networkEvents.push(cmd)
  }

  this.remove = function(cmd){
    let index = networkEvents.findIndex( e => 
        (e.action == cmd.action && e.file == cmd.file)
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

  this.memberOf = (src, owner, group) => {
    if(src == owner) {
      return groupData[owner] && groupData[owner][group]
    } else {
      return groupData[owner][group]['members'].includes(src)
    }
  }

  this.rmGroup = (member, group) => {
    delete groupData[member][group]
  }

  this.addGroup = (member, group) => {
    groupData[member] = {}
    groupData[member][group] = { members: []}
  }


  this.memberStatus = (member, status) => {
    if(!memberStatus[member]) memberStatus[member] = 'active'
    return status ? (memberStatus[member] = status) : memberStatus[member]
  }

  this.sendSync = (owner, group) => {
    // process any .retryOnSync commands for owner/cmd.group
    try {
      let retryFile = join(brume.baseDir, owner, group,'.retryOnSync')
      for(let cmd of readFileSync(retryFile).toString().split('\n').filter(e => e != '')) {
        brume.eventQueue.push(JSON.parse(cmd))
      }
      unlinkSync(retryFile)
    } catch (e) {
      if(!e.code == 'ENOENT') console.log('receiver:    .retryOnSync error ', e.message)
    }

    let cmd = {
      action: 'sync', dest: owner, group: group
      ,files: brume.fileData.grpFiles(owner, group)
    }
    brume.eventQueue.push(cmd)  
  }

  this.sendSyncReq = (member, group) => {
    this.memberStatus(member, 'active')
    brume.eventQueue.push({action: 'syncReq', dest: member, group: group})
  }

  this.updateMembers = (user, group, action, member=null) => {
    if(user != brume.thisUser) {
      console.log('updateMembers:    error', brume.thisUser,'cannot update', user+'/'+group+'/.members')
      return
    }

    let p = baseDir+user
        , newMembers =[]
        , added = []
        , removed = []
    
    if(member == null) {
      try {
        newMembers = JSON.parse(readFileSync(p+'/'+group+'/.members'))
      } catch(e) {
        if(e.message && e.message.includes('Unexpected token')) {
          console.log('updateMembers:    ', e.message)
          // messed up .members; can't tell what to do
          return
        }
      }
    }

    switch(action) {
      case 'unlink':
        // If member != null came from member unlinking their .members file
        newMembers = member ? newMembers.filter(m => m != member) : []

      case 'add':
      case 'change':
        added = newMembers.filter(m => !groupData[user][group].members.includes(m))
        removed = groupData[user][group].members.filter(m => !newMembers.includes(m))
  
        break;

      default:
        console.log(`brume-client:    updateMembers unknown action ${action}`)
        return
    }

    if(user == username) {
      added.filter(m => m != username).forEach(member => {
        this.memberStatus(member, 'active');
        this.sendSyncReq(member, group)
      })
    
      if(removed.length > 0) {
        let dotMembers = join(user, group, '.members')
        // Delete everything for all removed members. Make sure .members is the last thing deleted
        let files = Object.keys(brume.fileData.grpFiles(user, group)).filter(f => f != dotMembers)
        if(member == null) files.push(dotMembers)   // if member != null .members deletion caused this update

        removed.forEach(member => {
          files.forEach(file => {
            brume.eventQueue.push({action: 'unlink', file: file, dest: member})
          })
        })
      }
    }

    groupData[user][group] = { members: newMembers}
    try{
      writeFileSync(join(brume.baseDir, user, group, '.members'), JSON.stringify(newMembers))
      brume.groupInfo.networkEvents.add({action: 'change', file: join(user, group, '.members')})
    } catch(e) {
      console.log('updateMembers:    error', e.message)
    }
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

  setSync = (f, v) => {
    if(f.split('/')[0] != brume.thisUser) {
      // only set sync for group members
      this.set(f, {...this.get(f), ...{synced: v}})
    }
  }
}

function Brume() {
  brume = this
  this.init = function (baseDir, username) {
    this.baseDir = baseDir
    this.fileData = new FileData()
    const watcher = require('chokidar').watch('.', {cwd: baseDir, ignored: /-CONFLICT-/})
    function initAddHandler(path, stats) {
      let p = path.split('/')
      if((p.length == 3 && p[2] == '.members') || !path.match(/(^|[\/])\./)) {
        brume.fileData.set(path, {mod: stats.mtime.toISOString()})
        brume.fileData.setSync(path, false)
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

          console.log('watcher:   ', event, path)
          let p = path.split('/')
              ,cmd = {action: event, file: path}

          // ignore all .dotfiles except user/group/.members
          if(path.match(/(^|[\/])\./)) {
            if(p.length == 3 && p[2] == '.members') {
              if(p[0] == brume.thisUser) {
                brume.groupInfo.updateMembers(p[0], p[1], cmd.action)
              }
            } else {
              return
            }
          }

          switch(event) {
            case 'add':
            case 'change':
              if(brume.groupInfo.networkEvents.remove(cmd) == -1) {
                if(p[2] == '.members' && p[0] != brume.thisUser) {
                  // member cannot add or change
                  return
                }

                cmd.pmod = event == 'change' ? brume.fileData.get(path).mod : 0
                cmd.mod = statSync(join(baseDir, path), {throwIfNoEntry: false}).mtime.toISOString()
                brume.fileData.set(cmd.file, {mod: cmd.mod})
                brume.fileData.setSync(cmd.file, false)
                brume.eventQueue.push(cmd)
								debug('watcher:    eventEnqueue', cmd)
              } else {
                try {
                  utimesEvents.add({action: 'change', file: path})
                  let date = new Date(brume.fileData.get(path).mod)
                  await utimes(baseDir+path, date, date)
                } catch (e) {
                  console.log(`watcher:    error setting ${path} times ${e.message}`)
                }
              }
  
              break
    
            case 'unlink':
              brume.fileData.delete(path)
              if(brume.groupInfo.networkEvents.remove(cmd) == -1) {
                // unlink generated by local user
                if(p[2] == '.members') cmd.dest = p[0]  // only send unlink .members to group owner
                brume.eventQueue.push(cmd)
              }
              
              break
    
            case 'addDir':
              if(p.length == 2) {
                brume.groupInfo.addGroup(p[0], p[1])
                if(p[0] != brume.thisUser) {
                  brume.groupInfo.sendSync(p[0], p[1])
                }
              } 
              break
    
            case 'unlinkDir':
              p = path.split('/')
              if(p.length ==2 && p[0] != brume.thisUser) {
                brume.groupInfo.rmGroup(p[0], p[1])
              }
          }
        })
      })
  }
}

module.exports = new Brume()
