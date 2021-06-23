"use strict";

function createWebsocket(url, name, token) {
  return new Promise((resolve, reject) => {
    var ws

    ws = new (require('ws'))(url, {headers : { token: token}});
    ws._id_ = Math.random().toString(36).slice(2)

    const sendMsg = message => {
      ws.send(JSON.stringify(message));
    }

    function login() {
      sendMsg({
        action: 'login',
        username: name
      });  
    }

    ws.sendMsg = sendMsg;

    ws.onopen = () => {
      resolve(ws)
    }

    ws.on('error', err => {
      let code = ''
      if(err.code) {
        if(err.code == 'ECONNREFUSED') {
          reject(err)
          return
        } else {
          code = err.code
        }
      } else {
        //connect error
        code = JSON.parse(err.message.match('.*: \(.*\)')[1])
      }

      if(code == 401) {
        console.log('reauthorize')
      } else {
        console.error(err.message)
      }
      process.exit(1)
    })

    ws.on('close', m => {
      ws.emit('serverclose', m)
    })

    ws.onmessage = msg => {
      const data = JSON.parse(msg.data)

      switch (data.type) {
        case 'msg':
          //console.log(`ws:     msg ${data.data.type} ${data.data.channelName}`)
          ws.emit(data.data.type, data)
          break

        case 'close':
          console.error('unhandled close')
          break

        case 'peerError':
          ws.emit('peerError', {
            code: data.code   //ENODEST, EBADDEST
            , peerName: data.edata.receiver
            , channelName: data.edata.channelName
          })
          break

        default:
          console.log('unknown message type:', data)
          break
      }
    }
  })
}

module.exports=createWebsocket
