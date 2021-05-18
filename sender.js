const brume = require('./global.js')
      ,{EventQueue} = require('./eventqueue.js')
;

var PeerConnection
    , baseDir = null
;
async function doCommand(dest, cmd){
  return new Promise(async (resolve, reject) => {
    let peerConnection = new PeerConnection('sender'),
    peer = null;
    try {
      peer = await peerConnection.open(dest)
      console.log(`doCommand:    ${dest} ${JSON.stringify(cmd)}`) //${peer.channelName} 

      peer.on('data', (data) => {
        //console.log(`sender:    ${peer.channelName} on data` )
        result = JSON.parse(data.toString())
        if(result.type == 'SUCCESS') {
          if(cmd.action == 'sync') {
            for(let file of result.syncedFiles) {
              brume.fileData.setSync(file, true)
            }
          }
          resolve(result)
        } else {
          //reject(result)
          reject({
            code: result.error.code   //ENOTMEMBER
            , peerName: dest
            , channelName: peer.channelName
            , cmd: cmd
          })
        }
      })

      peer.on('close', () => {
        //console.log(`sender:    ${peer.channelName} peer close\n`);
      })

      peer.on('error', e => {
        console.log(`sender:    ${peer.channelName} peer error\n`);
        peer.destroy()
        reject(e)
      })

      //console.log(`sender:    ${peer.channelName} ${JSON.stringify(cmd)}`)
      switch(cmd.action) {
        case 'unlink':
        case 'send':
        case 'sync':
        case 'syncReq':
        case 'rename':
          peer.send(JSON.stringify(cmd));
          break;

        case 'change':
        case 'add':
          let inStream = (require('fs')).createReadStream(baseDir + cmd.file)

          inStream.on('end', () => {
            //console.log('instream end:',result);
            peer.send('\u0005');
          })
          peer.send(JSON.stringify(cmd));
          inStream.pipe(peer, {end: false});
          break;

        default:
          console.error(`sender:    ${peer.channelName} unknown cmd.action ${cmd.action}`)     
      }
      //resolve()    
    } catch (err) {
        if(err.peer) {
          err.peer.destroy() 
          delete err.peer
        }
        reject(err);
    }
  })
}

brume.eventQueue = new EventQueue(doCommand)

function sender({PeerConnection: _pc, baseDir: _bd, thisMember}) {
  PeerConnection = _pc
  baseDir = _bd
}

module.exports=sender
