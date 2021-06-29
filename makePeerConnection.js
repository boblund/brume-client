"use strict"

var SimplePeer = require('simple-peer')
    , wrtc = require('wrtc')
    ,log = require('./logger.js')
    //, createWebsocket = require('./websocket.js')
;

function createPeer(type) {
  var peerOptions = {
        sender: {
          initiator: true
          , trickle: false
          , channelName: Math.random().toString(36).slice(2)
          , wrtc: wrtc
        }
        ,receiver: {
          trickle: false
          , wrtc: wrtc
        }
  }

  var peer =  new SimplePeer(peerOptions[type]);

  peer.on('signal', data => {
    if(['offer', 'answer', 'candidate'].indexOf(data.type) >=0) {
      peer.emit(data.type, data);
    }
  })

  return peer;
}

class PeerConnection {
  static signallingServer
  static peers = {}
  static offerProcessor
  static myName
  #type = null
  peer = null
 
  constructor(type) {
    this.#type = type
  }

  open(peerName, offer) {
    return new Promise(async (resolve, reject) => {
      this.peer = createPeer(this.#type);

      if(this.#type == 'sender'){
        PeerConnection.peers[this.peer.channelName] = this
      }
      if(this.#type == 'receiver') {
        if(offer) {
          this.peer.channelName = offer.channelName;
          PeerConnection.peers[offer.channelName] = this
          this.peer.signal(offer);
        } else {
          log.error('peerConnection: receiver without offer')
          process.exit(1)
        }
      }
      try {
        this.peer.on('offer', data => {
          data.channelName = this.peer.channelName
          PeerConnection.signallingServer.sendMsg(
            {action: 'send', data: data, to: peerName})
        });

        this.peer.on('answer', data => {
          data.channelName = this.peer.channelName
          try {
            PeerConnection.signallingServer.sendMsg(
              {action: 'send', data: data, to: peerName})
          } catch(e) {
            log.error('send answer error', data.channelName, e.code)
          }
        });

        this.peer.on('connect', () => {
          resolve(this.peer)
        })

        this.peer.on('close', () => {
          log.debug(`${this.#type}:    ${this.peer.channelName} deleting PeerConnection.peers`)
          delete PeerConnection.peers[this.peer.channelName]
        })

        this.peer.on('error', (e) => {
          e.peer = this.peer
          reject(e);
        })
      } catch (e) {
        e.peer = this.peer
        reject(e)        
      }
    })
  }
}

function makePeerConnection(ws, name) {
  PeerConnection.myName = name;
  PeerConnection.signallingServer = ws
  
  PeerConnection.signallingServer.on('answer', (data) => {
    if(PeerConnection.peers[data.data.channelName]) {
      PeerConnection.peers[data.data.channelName].peer.signal(data.data)
    } else {
      log.error('peerConnection: no peer for %s', data.from)
    }
  })

  PeerConnection.signallingServer.on('peerError', (error) => {
    PeerConnection.peers[error.channelName].peer.emit('error', error);
  })

  PeerConnection.signallingServer.on('offer', async (data) => {
    await PeerConnection.offerProcessor(data.data, data.from);
  })

  return PeerConnection
}


module.exports = makePeerConnection
