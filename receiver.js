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
            //peer.send(JSON.stringify({type: 'SUCCESS', cmd: cmd}));
          } catch (err) {
            //peer.send(JSON.stringify({type: 'EUNLINK', cmd: cmd}));
          } finally {
            console.log('delete done')
            peer.destroy();
            resolve();
          }
        } else if(cmd.action == 'add') {
          let outStream = fs.createWriteStream(baseDir + cmd.file,
            {autoClose: false, emitClose: true})
          /*try {
            peer.send(JSON.stringify({type: 'SUCCESS', cmd: cmd}));
          } catch(e) {
            console.error('peer.send error:', e)
          }*/

          outStream.on('finish', () => {
            //console.log('outStream finish')     
            resolve()
          }) 

          peer.pipe(outStream);
        }          
      })

      peer.on('close', () => {
        console.log('peer _id %s channelName %s closed\n', peer._id, peer.channelName);
        resolve();
      })

    } catch (err) {
      console.log('error', err)
      //EANSWERTIMEOUT
      peer.send(JSON.stringify({type: 'EANSWERTIMEOUT', cmd: cmd}))
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
