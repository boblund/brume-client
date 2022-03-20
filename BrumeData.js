"use strict";

const {readdirSync, readFileSync, statSync, unlinkSync, writeFileSync} = require('fs')
      ,{join} = require('path')
      ,log = require('./logger.js')

//
// class FileData
//

class FileData extends Map {
  constructor(options) {
    super(options)
  }

  grpFiles = (m, g) => {
    var files = {}
    this.forEach((v, k) => {
      if(!k.includes('-CONFLICT-')) {
        let [_m, _g] = k.split('/')
        if(m == _m && g == _g) files[k]=v
      }
    })
    return files
  }

  setSync = (f, v) => {
    this.set(f, {...this.get(f), ...{synced: v}})
  }
}

// Functions to read/write .members

// handles JSON or white space separated names
function readDotMembers(p) {
  let s = readFileSync(p,'utf8').replace(/^\s+/,'')     // Get rid of leading whitespace
  return s[0] == '[' || s[0] == '{'                     // JSON if 1st char is { or [
    ? JSON.parse(s)
    : [...new Set(s.split(/\s+/).filter(e => e!=''))]
}

function writeDotMembers(p, m) {
  writeFileSync(p, m.join('\n')+'\n')
}

//
// class GroupInfo
//

function GroupInfo({baseDir, thisUser, eventQueue, fileData, networkEvents}) {
  let groupData = {}
      ,memberStatus = {}

  this.getGroups = ()=>{
    let r={}
    for(const [k, v] of Object.entries(groupData)){
      r[k] =  Object.keys(v)
    }
    return r
  };

  this.getMembers = (user, group) => {
    if(groupData[user] && groupData[user][group]) {
      return groupData[user][group]['members']
    } else {
      log.error(`getMembers groupData[${user}][${group}] undefined`)
      return []
    }
  };

  this.memberOf = (owner, group) => {
      return groupData[owner] != undefined && groupData[owner][group] != undefined
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

  this.sync = (user, group, member) =>{
    let groups = {}
    if(user && group) {
      groups[user] = {}
      groups[user][group] = groupData[user][group]
    } else if(user) {
      groups[user] = groupData[user]
    } else {
      groups = groupData
    }

    for(const [u,gO] of Object.entries(groups)){
      for(const [g,mO] of Object.entries(gO)){
        if(u == thisUser) {
          let membersA = member ? [member] : mO.members
          membersA.forEach(member=> {
            this.memberStatus(member, 'active')
            eventQueue.push({action: 'syncReq', dest: member, group: g})
          }) 
        } else {
          this.memberStatus(u, 'active')
          try {
            let retryFile = join(baseDir, u, g,'.retryOnSync')
            for(let cmd of readFileSync(retryFile).toString().split('\n').filter(e => e != '')) {
              eventQueue.push(JSON.parse(cmd))
            }
            unlinkSync(retryFile)
          } catch (e) {
            if(!e.code == 'ENOENT') log.error('.retryOnSync error ', e.message)
          }
      
          let cmd = {
            action: 'sync', dest: u, group: g
            ,files: fileData.grpFiles(u, g)
          }
          eventQueue.push(cmd)
        }
      }
    }
  }

  this.updateMembers = (user, group, action, member=null) => {
    if(user != thisUser) {
      log.error('updateMembers error', thisUser,'cannot update', user+'/'+group+'/.members')
      return
    }

    let p = baseDir+user
        , newMembers =[]
        , added = []
        , removed = []
    
    if(member == null) {
      try {
        newMembers = readDotMembers(p+'/'+group+'/.members')
      } catch(e) {
        // messed up .members; can't tell what to do
        log.error(`updateMembers: error reading ${p}/${group}/.members)} ${e.message}`)
        return
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
        log.error(`updateMembers unknown action ${action}`)
        return
    }

    groupData[user][group] = { members: newMembers}
    if(user == thisUser && member == null) {
      added.filter(m => m != thisUser).forEach(member => {
        //this.memberStatus(member, 'active');
        this.sync(user, group, member)
      })
    
      if(removed.length > 0) {
        let dotMembers = join(user, group, '.members')
        // Delete everything for all removed members. Make sure .members is the last thing deleted
        let files = Object.keys(fileData.grpFiles(user, group)).filter(f => f != dotMembers)
        if(member == null) files.push(dotMembers)   //.members deletion caused this update

        removed.forEach(member => {
          files.forEach(file => {
            eventQueue.push({action: 'unlink', file: file, dest: member})
          })
        })
      }
    }

    if(action == 'unlink') {
      try{
        networkEvents.add({action: 'change', file: join(user, group, '.members')})
        writeDotMembers(join(baseDir, user, group, '.members'), newMembers)
      } catch(e) {
        log.error(`updateMembers: error writing ${user}/${group}/.members ${e.message}`)
      }                     
    }
  }

  // init groupInfo
  
  let groups
      ,users

  try {
    users = readdirSync(baseDir).filter(f => statSync(join(baseDir, f)).isDirectory())
  } catch (e) {
    log.error(`GroupInfo error reading ${baseDir}`)
    return
  }

  for(let user of users) {
    groupData[user]={}
    let p = join(baseDir + user)

    try {
      groups = readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
    } catch (e) {
      log.error(`GroupInfo error reading ${p}`)
      continue
    }

    for(let group of groups) {
      let members = []
      try {
        members = readDotMembers(p+'/'+group+'/.members')
      } catch(e) {
        if(e.message && e.message.includes('Unexpected token')) {
          log.error(`updateMembers: error reading ${user}/${group}/.members ${e.message}`)
          return
        }
      }

      groupData[user][group] = {members: members}
    }
  }
  //this.sync()
}

function BrumeData({thisUser, baseDir, eventQueue, networkEvents}) {
  this.thisUser = thisUser
  this.baseDir = baseDir
  this.fileData = new FileData()
  this.groupInfo = new GroupInfo({baseDir, thisUser, eventQueue, fileData: this.fileData, networkEvents})
}

module.exports = {BrumeData}

