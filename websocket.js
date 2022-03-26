"use strict";

function createWebsocket(url, name, token) {
  const log = require('./logger.js')
        ,errorCodeMessages = {
          400: 'Missing token'
          ,401: 'Unauthorized'
          ,404: 'unknown member: ' + name
          ,406: 'Bad token'
          ,409: name + ' already connected'
          ,500: 'Server error'
          ,501: 'Server error'
        }

  return new Promise((resolve, reject) => {
    var ws

    ws = new (require('ws'))(url, {headers : { token: token}});
    ws._id_ = Math.random().toString(36).slice(2)

    ws.sendMsg = message => {
      ws.send(JSON.stringify(message));
    }

    ws.onopen = () => {
      resolve(ws)
    }

    ws.on('error', err => {
      //let [messgae, code] = err.split(': ')
      //if(message == 'Unexpected server response' && code != undefined)
      let code = ''
      if(err.code) {
        if(err.code == 'ECONNREFUSED' || err.code == 'ENOTFOUND') {
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
        log.info('reauthorize')
      } else {
        log.error('Websocket server error: ', code, errorCodeMessages[code])
      }
      process.exit(1)
    })

    ws.on('close', m => {
      ws.emit('serverclose', m)
    })
/*
    ws.on('unexpected-response', m => {
      log.warn('unexpected-response', m)
    })
*/
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
