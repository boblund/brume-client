"use strict"

var PeerConnection
    , fs = require('fs')
    , baseDir = 'tmp/SimplePeerCallee/'
    , createWebsocket = require('./websocket.js')
;

//function offerProcessor(offer) {
  function offerProcessor(offer, username) {
  return new Promise(async (resolve, reject) => {
    let peerConnection = new PeerConnection('receiver');
    let peerPromise = (peerConnection.open)(username, offer)
    let peer = await peerPromise
    try {
      peer.once('data', async data => {
        let cmd = JSON.parse(data.toString())
        console.log('cmd:', cmd)

        if(cmd.action == 'delete') {
          try {
            await fs.promises.unlink(baseDir + cmd.file)
            peer.send(JSON.stringify({type: 'SUCCESS', cmd: cmd}));
          } catch (err) {
            peer.send(JSON.stringify({type: 'EUNLINK', cmd: cmd}));
          } finally {
            console.log('delete done')
            peer.destroy();
            //resolve();
          }
        } else if(cmd.action == 'add') {
          let outStream = (require('fs')).createWriteStream(baseDir + cmd.file,
            {autoClose: false, emitClose: true})
          peer.send(JSON.stringify({type: 'SUCCESS', cmd: cmd}));

          outStream.on('finish', () => {
            console.log('outStream finish')     
            //resolve()
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

const awsBrumeServer = "wss://q9ztgt7lac.execute-api.us-east-1.amazonaws.com/Prod"
      , localBrumeServer = "ws://localhost:8080"
;

(async function() {
  let ws = await createWebsocket(awsBrumeServer, 'callee')
  PeerConnection = require('./makePeerConnection.js')(ws, 'callee')
  PeerConnection.offerProcessor = offerProcessor
})()
