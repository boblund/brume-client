"use strict";

const fileWatcher = require('chokidar')
      , {statSync, promises: {utimes}} = require('fs')
      , {join} = require('path')
      , log = require('./logger.js')
      , NetworkEvents = require('./networkEvents.js')

function FileWatcher({brumeData, eventQueue, networkEvents}) {
  let {baseDir, groupInfo, thisUser, fileData} = brumeData

  function initAddHandler(path, stats) {
    let p = path.split('/')
    if((p.length == 3 && p[2] == '.members') || !path.match(/(^|[\/])\./)) {
      fileData.set(path, {mod: stats.mtime.toISOString()})
      fileData.setSync(path, false)
      log.debug(`fileData ${path} ${JSON.stringify(fileData.get(path))}`)
    }
  }

  const watcher = fileWatcher.watch('.', {
    cwd: baseDir
    ,ignored: /-CONFLICT-/
    ,awaitWriteFinish: {stabilityThreshold: 200}
  })
  this.close = watcher.close

  watcher
    .on('add', initAddHandler)
    .on('ready', () => {
      let utimesEvents = new NetworkEvents('utime');
      groupInfo.sync()
      watcher
        .removeListener('add', initAddHandler)
        .on('all', async (event, path, stats) => {
          log.debug('fileWatcher:    ', event, path)
          if(utimesEvents.remove({action: event, file: path}) > -1) {
            log.debug('fileWatcher:    utimesEvent', event, path)
            return
          }

          let p = path.split('/')
              ,cmd = {action: event, file: path}

          // ignore all .dotfiles except user/group/.members
          if(path.match(/(^|[\/])\./)) {
            if(p.length == 3 && p[2] == '.members') {
              if(p[0] == thisUser) {
                groupInfo.updateMembers(p[0], p[1], cmd.action)
                return
              }
            } else {
              return
            }
          }

          switch(event) {
            case 'add':
            case 'change':
              if(networkEvents.remove(cmd) == -1) {
                cmd.pmod = event == 'change' ? fileData.get(path).mod : 0
                let mod = stats.mtime.toISOString()
                cmd.mod = mod
                fileData.set(cmd.file, {mod: mod})

                if(p[2] == '.members' && p[0] != thisUser) {
                  // member cannot add or change. Resync
                  cmd = {action: 'sync', dest: p[0], group: p[1], files: fileData.grpFiles(p[0], p[1])}
                }

                eventQueue.push(cmd)
              } else {
                log.debug('fileWatcher:    networkEvent', event, path)

                try {
                  utimesEvents.add({action: 'change', file: path})
                  let date = new Date(fileData.get(path).mod)
                  log.debug(`fileWatcher:    utimes(${baseDir+path})`)
                  await utimes(baseDir+path, date, date)
                } catch (e) {
                  log.error(`watcher utimes error ${path} ${e.message}`)
                }
              }

              break

            case 'unlink':
              fileData.delete(path)
              if(networkEvents.remove(cmd) == -1) {
                // unlink generated by local user
                if(p[2] == '.members') cmd.dest = p[0]  // only send unlink .members to group owner
                if(groupInfo.memberOf(p[0], p[1])) eventQueue.push(cmd) // only send not group member
              } else {
                 log.info('fileWatcher:    networkEvent', event, path)
              }
              
              break
    
            case 'addDir':
              if(p.length == 2) {
                groupInfo.addGroup(p[0], p[1])
                if(p[0] != thisUser) {
                  //groupInfo.sendSync(p[0], p[1])
                  groupInfo.sync(p[0], p[1])
                }
              } 
              break
    
            case 'unlinkDir':
              p = path.split('/')
              if(p.length ==2 && p[0] != thisUser) {
                groupInfo.rmGroup(p[0], p[1]) // replaced by removing group .members
              }
          }
        })
      })
}

module.exports = FileWatcher
