"use strict"
const {readdirSync, readFileSync, rmdirSync, statSync, unlinkSync, writeFileSync, promises: {utimes}} = require('fs')
      ,{join} = require('path')
      ,utimesEvents = new NetworkEvents()
      ,log = require('./logger.js')
;

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

function GroupInfo(brume) {
  let {baseDir, thisUser, eventQueue, fileData} = brume
      ,groupData = {}
      ,memberStatus = {}
  ;

  this.networkEvents = new NetworkEvents;

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

  this.memberOf = (src, owner, group) => {
    //if(src == owner) {
      return groupData[owner] && groupData[owner][group]
    //} else {
    //  return groupData[owner] && groupData[owner][group]
    //    ? groupData[owner][group]['members'].includes(src)
    //    : false
    //}
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
        if(u == brume.thisUser) {
          let membersA = member ? [member] : mO.members
          membersA.forEach(member=> {
            this.memberStatus(member, 'active')
            eventQueue.push({action: 'syncReq', dest: member, group: g})
          }) 
        } else {
          this.memberStatus(u, 'active')
          try {
            let retryFile = join(brume.baseDir, u, g,'.retryOnSync')
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
    if(user != brume.thisUser) {
      log.error('updateMembers error', brume.thisUser,'cannot update', user+'/'+group+'/.members')
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
          log.error('updateMembers .members JSON.parse error', e.message)
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
        log.error(`updateMembers unknown action ${action}`)
        return
    }

    groupData[user][group] = { members: newMembers}
    if(user == thisUser) {
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
        writeFileSync(join(brume.baseDir, user, group, '.members'), JSON.stringify(newMembers))
        this.networkEvents.add({action: 'change', file: join(user, group, '.members')})
      } catch(e) {
        log.error('updateMembers .members write error', e.message)
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
        members = JSON.parse(readFileSync(p+'/'+group+'/.members'))
      } catch(e) {
        if(e.message && e.message.includes('Unexpected token')) {
          log.eror('GroupInfo JSON.parse error', e.message, 'in', user+'/'+group+'/.members' )
          return
        }
      }

      groupData[user][group] = {members: members}
    }
  }
  this.sync()
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
    this.set(f, {...this.get(f), ...{synced: v}})
  }
}

function Brume() {
  var brume = this
  this.init = function (baseDir, username) {
    this.thisUser = username
    this.baseDir = baseDir
    if(this.fileData != undefined) {
      delete this.fileData
      log.debug('brume.init fileData deleted')
    }
    this.fileData = new FileData()
    if(this.watcher != undefined) {
      this.watcher.close().then(() => log.debug('brumeInit watcher closed'));
    }
    this.watcher = require('chokidar').watch('.', {cwd: baseDir, ignored: /-CONFLICT-/})
    function initAddHandler(path, stats) {
      let p = path.split('/')
      if((p.length == 3 && p[2] == '.members') || !path.match(/(^|[\/])\./)) {
        brume.fileData.set(path, {mod: stats.mtime.toISOString()})
        brume.fileData.setSync(path, false)
        log.debug(`fileData ${path} ${JSON.stringify(brume.fileData.get(path))}`)
      }
    }
    
    this.watcher
    .on('add', initAddHandler)
    .on('ready', () => {
      if(this.groupInfo != undefined) {
        delete this.groupInfo
      }
      this.groupInfo = new GroupInfo(brume)
      this.watcher
        .removeListener('add', initAddHandler)
        .on('all', async (event, path) => {
          if(utimesEvents.remove({action: event, file: path}) > -1) {
            return
          }

          log.info('file event', event, path)

          // restart brume if server closed due to inactivity
          /*if(brume.wsTimer != undefined) {
            clearTimeout(brume.wsTimer)
            delete brume.wsTimer
            brume.brumeStart()
          }*/

          let p = path.split('/')
              ,cmd = {action: event, file: path}

          // ignore all .dotfiles except user/group/.members
          if(path.match(/(^|[\/])\./)) {
            if(p.length == 3 && p[2] == '.members') {
              /*if(brume.groupInfo.networkEvents.remove(cmd) > -1) {
                return
              }*/
              if(p[0] == brume.thisUser) {
                /*brume*/this.groupInfo.updateMembers(p[0], p[1], cmd.action)
                //return
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
              } else {
                try {
                  utimesEvents.add({action: 'change', file: path})
                  let date = new Date(brume.fileData.get(path).mod)
                  await utimes(baseDir+path, date, date)
                } catch (e) {
                  log.error(`watcher utimes error ${path} ${e.message}`)
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
                  //brume.groupInfo.sendSync(p[0], p[1])
                  brume.groupInfo.sync(p[0], p[1])
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

module.exports = {
  brume: new Brume()
}
