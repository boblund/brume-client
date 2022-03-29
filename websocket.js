"use strict";

const
  log = require('./logger.js'),
  pingInterval = setInterval(function ping() {
    ws.ping(()=>{}) }, 9.8 * 60 * 1000);


function createWebsocket(url, token) {
  return new Promise((resolve, reject) => {
    var ws

    ws = new (require('ws'))(url, {headers : { token: token}});

    ws.on('error', err => {
      reject(err);
    })

    ws._id_ = Math.random().toString(36).slice(2)

    ws.sendMsg = message => {
      ws.send(JSON.stringify(message));
    }

    ws.onopen = () => {
      // close can come before ws is set
      ws.on('close', () => {
        ws.emit('serverclose')
      })

      resolve(ws);
    }

  	ws.on('pong', ()=>{
      log.debug('ws server: pong');
     });

    ws.onmessage = msg => {
      const data = JSON.parse(msg.data)

      switch (data.type) {
        case 'msg':
          log.debug(`ws:     msg ${data.data.type} ${data.data.channelName}`)
          ws.emit(data.data.type, data)
          break

        case 'close':
          log.error('unhandled close')
          break

        case 'peerError':
          ws.emit('peerError', {
            code: data.code   //ENODEST, EBADDEST
            , peerName: data.edata.receiver
            , channelName: data.edata.channelName
          })
          break

        default:
          log.error('unknown message type:', data)
          break
      }
    }
  })
}

module.exports=createWebsocket
