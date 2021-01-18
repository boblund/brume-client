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
      console.log('Connected to the signaling server');
      resolve(ws)
//      login();
    }

    ws.on('error', err => {
      //check for err.code first
      reject({code: JSON.parse(err.message.match('.*: \(.*\)')[1]), message: err.message})
    })

    ws.on('close', m => {
      console.log('server close:', m)
    })

    ws.onmessage = msg => {
      const data = JSON.parse(msg.data)
      console.log('Got message', data.type)

      switch (data.type) {
/*        case 'connect':
          if(data.success) {
            resolve(ws)
          } else {
            reject({code:'EUKNOWNUSER'})
          }
          break*/

        case 'msg':
          ws.emit(data.data.type, data)
          break

        case 'close':
          handleClose()
          break

        case 'ENODEST':
          //reject('ENODEST', data.otherUsername)
          ws.emit('error', 'ENODEST', data.otherUsername, data.sender)
          break

        default:
          console.log('unknown message type:', data)
          break
      }
    }

    const handleClose = () => {

    }
  })
}

module.exports=createWebsocket
