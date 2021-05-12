"use strict"
const {readdirSync, readFileSync, rmdirSync, statSync, unlinkSync, writeFileSync, promises: {utimes}} = require('fs')
      ,{join} = require('path')
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

  this.sendSync = (user, group) => {
    // process any .retryOnSync commands for cmd.owner/cmd.group
    try {
      let retryFile = join(brume.baseDir, user, group,'.retryOnSync')
      for(let cmd of readFileSync(retryFile).toString().split('\n').filter(e => e != '')) {
        brume.eventQueue.push(JSON.parse(cmd))
      }
      unlinkSync(retryFile)
    } catch (e) {
      if(!e.code == 'ENOENT') console.log('receiver:    .retryOnSync error ', e.message)
    }

    let cmd = {
      action: 'sync', member: user, owner: user, group: group
      ,files: brume.fileData.grpFiles(user, group)
    }
    brume.eventQueue.push(cmd)  
  }

  this.sendSyncReq = (user, group) => {
    this.memberStatus(user, 'active')
    brume.eventQueue.push({action: 'syncReq', member: user, owner: username, group: group})
  }

  // ?? Modify this ?? Only thisUser should be modifying group/.members
  this.updateMembers = (user, group, action, member=null) => {
    let p = baseDir+user
        , newMembers =[]
        , added = []
        , removed = []
    
    if(!(member == 'null' && action == 'unlink')) {
      try { // if add, change or (unlinked && member == null)
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

    // Do following only for this user, i.e. username)
    if(user == username) {
      // Request sync from each new member
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
            brume.eventQueue.push({action: 'unlink', file: file, member: member})
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

          let p = path.split('/')
              ,cmd = {action: event, file: path}

          // ignore all .dotfiles except user/group/.members
          if(path.match(/(^|[\/])\./)) {
            if(['add','change', 'unlink'].includes(event) && p.length == 3 && p[2] == '.members') {
              if(p[0] == brume.thisUser && brume.groupInfo.networkEvents.remove(cmd) == -1){
                brume.groupInfo.updateMembers(p[0], p[1], cmd.action)
              } else if(event != 'unlink') {
                return
              }
            } else {
              return
            }
          }

          switch(event) {
            case 'add':
            case 'change':
              if(brume.groupInfo.networkEvents.remove(cmd) == -1) {
                cmd.pmod = event == 'change' ? brume.fileData.get(path).mod : 0
                cmd.mod = statSync(join(baseDir, path), {throwIfNoEntry: false}).mtime.toISOString()
                //brume.fileData.set(cmd.file, {pmod: cmd.mod, mod: cmd.mod})
                brume.fileData.set(cmd.file, {mod: cmd.mod})
                brume.fileData.setSync(cmd.file, false)
                brume.eventQueue.push(cmd)
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
                if(p[2] == '.members') cmd.member = p[0]  // only send unlink .members to group owner
                brume.eventQueue.push(cmd) 
              } else {
                // unlink generated by network command
                if(p[2] == '.members' && p[0] != brume.thisUser){
                  // This member removed by owner. Remove group directory under owner
                  try {rmdirSync(brume.baseDir+p[0]+'/'+p[1])}catch(e){console.log('watcher:    unlink error:', e.message)}
                }
              }
              
              break
    
            case 'addDir':
              //p = path.split('/')
              if(p.length ==2 && p[0] != brume.thisUser) {
                brume.groupInfo.addGroup(p[0], p[1])
                brume.groupInfo.sendSync(p[0], p[1])
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
