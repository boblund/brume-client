const {brume, debug} = require('./global.js')
      ,{EventQueue} = require('./eventqueue.js')
      ,{log} = require('./logger.js')
;

function sender({PeerConnection, baseDir}) {
  async function doCommand(dest, cmd){
    return new Promise(async (resolve, reject) => {
      let peerConnection = new PeerConnection('sender'),
      peer = null;
      try {
        peer = await peerConnection.open(dest)

        peer.on('data', (data) => {
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
          //log.debug(`sender peer ${dest} close\n`);
        })

        peer.on('error', e => {
          log.error(`sender peer ${dest} error`);
          peer.destroy()
          reject(e)
        })

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
              // End of Stream mark required by receiver. This can be changed
              // as long as sender and receiver use the same code
              peer.send('\u0005');
            })
            peer.send(JSON.stringify(cmd));
            inStream.pipe(peer, {end: false});
            break;

          default:
            log.error(`sender unknown cmd.action ${cmd.action}`)     
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
  brume.eventQueue.setCommandProcessor(doCommand)
}

brume.eventQueue = new EventQueue()
module.exports=sender
