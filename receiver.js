"use strict"

var PeerConnection = null
    , baseDir = null
    , rcvrGroupInfo = null
    , fs = require('fs')
;
  function offerProcessor(offer, username) {
    if(!rcvrGroupInfo[username]) {
      console.log('No groups for member:', username)
      return
    }
  return new Promise(async (resolve, reject) => {
    let peerConnection = new PeerConnection('receiver');
    let peerPromise = (peerConnection.open)(username, offer)
    let peer = await peerPromise

    try {
      peer.once('data', async data => {
        let cmd = JSON.parse(data.toString())
        console.log('cmd:', cmd)
        let [, member, group] = cmd.file.match('\(.*?\)/(.*?)/.*')
        if(!rcvrGroupInfo[member].groups.includes(group)){
          console.log("Not member of:", member+'/'+group)
          return resolve()
        }

        if(cmd.action == 'delete') {
          try {
            await fs.promises.unlink(baseDir + cmd.file)
          } catch (err) {
          } finally {
            console.log('delete:', cmd.file)
            console.log('delete done for:', peer.channelName /*username*/);
            peer.destroy();
            resolve();
          }
        } else if(cmd.action == 'add') {
          let outStream = fs.createWriteStream(baseDir + cmd.file,
            {autoClose: false, emitClose: true})

          outStream.on('finish', () => {
            console.log('add:', cmd.file)
            //console.log('outStream finish for:', peer.channelName /*username*/);
            //peer.destroy()     
            //resolve()
          }) 
          peer.pipe(outStream);
        }          
      })

      peer.on('close', () => {
        console.log('remote peer close:', peer.channelName /*username*/);
        peer.destroy()
        resolve();
      })

    } catch (err) {
      console.error('offerProcessor error', err)
    }
  })
}

function receiver({PeerConnection: _pc, baseDir: _bd, groupInfo: _rgi}) {
  PeerConnection = _pc
  baseDir = _bd
  rcvrGroupInfo = _rgi
  PeerConnection.offerProcessor = offerProcessor
}

module.exports = receiver
