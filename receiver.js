"use strict"
var global = require('./global.js')
    ,path=require('path')
;

const {treeWalk} = require('./fileWatcher.js');
var PeerConnection = null
    , baseDir = null
    , fs = require('fs')
    , path = require('path')
;
  function offerProcessor(offer, username) {
    if(!global.groupInfo.memberOf(username)) {
      console.log('receiver:    no groups for', username)
      return
    }
  return new Promise(async (resolve, reject) => {
    let peerConnection = new PeerConnection('receiver');
    let peerPromise = (peerConnection.open)(username, offer)
    let peer = await peerPromise
    console.log(`receiver:    ${peer.channelName} peer open ${username}` )

    try {
      peer.once('data', async data => {
        let cmd = JSON.parse(data.toString())
        if(cmd.action == 'add' || cmd.action == 'delete') {
          let [, member, group] = cmd.file.match('\(.*?\)/(.*?)/.*')
          if(!global.groupInfo.memberOf(member, group)){
            console.log('receiver:    not member of', member+'/'+group)
            return resolve()
          }
        }

        console.log(`receiver:    ${peer.channelName} ${cmd.action}`)
        
        switch(cmd.action) {
          case 'sync':
            if(global.groupInfo.memberStatus(cmd.syncFor) == 'notconnected') {
              global.groupInfo.memberStatus(cmd.syncFor, 'active')
              global.groupInfo.sendSync(cmd.syncFor)
            }
            
            let memberFiles = cmd.files
            let ownerFiles = treeWalk(baseDir + cmd.member + '/' + cmd.group)
              .filter(e => path.basename(e) !='.members')
              .map(f => f.replace(baseDir,''))
            let addFiles = ownerFiles.filter(file=>!memberFiles.includes(file))
            let deleteFiles = memberFiles.filter(file=>!ownerFiles.includes(file))

            for(let file of addFiles) {
              global.eventQueue.push({action: 'add', file: file, member: cmd.syncFor, type: 'file'})
            }
            for(let file of deleteFiles) {
              global.eventQueue.push({action: 'delete', file: file, member: cmd.syncFor, type: 'file'})
            }

            peer.destroy()
            resolve()
            return

            break;

          case 'syncReq':
            global.groupInfo.sendSync(cmd.owner, cmd.group)
            peer.destroy()
            resolve()
            break

          case 'delete':
            try {
              await fs.promises.unlink(baseDir + cmd.file)
            } catch (err) {
              console.log(`receiver:   delete error ${err}`)
            } finally {
              peer.destroy();
              resolve();
              return
            }
            break

          case 'add':
            var outStream;

            try {
              fs.mkdirSync(baseDir + path.dirname(cmd.file), {recursive: true})
              outStream = fs.createWriteStream(baseDir + cmd.file,
                {autoClose: false, emitClose: true})
            } catch (e) {
              console.error('receiver:     add error', e.message)
              peer.destroy()
              reject()
              return
            }
            outStream.on('finish', () => {
            })
            
            peer.pipe(outStream);
            break

          default:
            console.error(`receiver:    ${peer.channelName} unknown cmd.action ${cmd.action}\n`)
            peer.destroy()
            break            
        }
      })

      peer.on('close', () => {
        console.log(`receiver:    ${peer.channelName} peer close \n`);
        peer.destroy()
        resolve();
      })

    } catch (err) {
      console.error(`receiver:    ${peer.channelName} error ${err}\n`)
    }
  })
}

function receiver({PeerConnection: _pc, baseDir: _bd}) {
  PeerConnection = _pc
  baseDir = _bd
  PeerConnection.offerProcessor = offerProcessor
}

module.exports = receiver
