"use strict"

var SimplePeer = require('simple-peer')
    , wrtc = require('wrtc')
    , createWebsocket = require('./websocket.js')
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
  //  console.log(`SIGNAL: ${JSON.stringify(data)}\n\n`);
    if(['offer', 'answer', 'candidate'].indexOf(data.type) >=0) {
      peer.emit(data.type, data);
    }
  })

  return peer;
}

class PeerConnection /*extends require('events').EventEmitter*/ {
  static signallingServer
  static peers = {}
  static offerProcessor
  //static queueProcessor
  static myName
  static #OFFERTIMEOUT=60*1000
  #type = null
  offerTimer = null
  peer = null
  peerName = null
  #sender = null;

  constructor(type) {
    //super()
    this.#type = type
    //this.peer = createPeer(type);
    this.peerName = null
  }

  open(peerName, offer) {
    return new Promise(async (resolve, reject) => {
      this.peer = createPeer(this.#type);
      this.peerName = peerName;
      PeerConnection.peers[peerName] = this //.peer
      if(this.#type == 'receiver') {
        if(offer) {
          this.peer.channelName = offer.channelName;
          this.peer.signal(offer);
        } else {
          console.error('FATAL error. Receiver requires offerprocessor')
          process.exit(1)
        }
      }
      try {
        this.peer.on('offer', data => {
          data.channelName = this.peer.channelName
          PeerConnection.signallingServer.sendMsg(
            {action: 'send', data: data, to: this.peerName})
/*          this.offerTimer = setTimeout(() => {
            reject({code: 'EOFFERTIMEOUT', peerName: this.peerName})
            console.log('offer timeout. destroying peer')
            PeerConnection.peers[this.peerName].peer.destroy()
            delete PeerConnection.peers[this.peerName]
          }, PeerConnection.#OFFERTIMEOUT)*/
        });

        this.peer.on('answer', data => {
          data.channelName = this.peer.channelName
          try {
            PeerConnection.signallingServer.sendMsg(
              {action: 'send', data: data, to: this.peerName})
          } catch(e) {
            console.error('send answer error', this.peerName, e.code)
          }
        });

        this.peer.on('connect', () => {
          resolve(this.peer)
        })

        this.peer.on('close', () => {
          console.log('peer[%s] closed', this.peer.channelName);
          
        })

        this.peer.on('error', (e) => {
          console.log('peer error')
          reject(e);
        })
      } catch (e) {
        reject(e)        
      }
    })
  }
}

function makePeerConnection(ws, name) {
  PeerConnection.myName = name;
  PeerConnection.signallingServer = ws
  //create Event Queue and 'enqueue' handler that calls offerProcessor
  
  PeerConnection.signallingServer.on('answer', (data) => {
    //if(PeerConnection.peers[data.data.channelName]) {
    if(PeerConnection.peers[data.from]) {
      clearTimeout(PeerConnection.peers[data.from].offerTimer)
      PeerConnection.peers[data.from].peer.signal(data.data)
    } else {
      console.log('No peer for %s', data.from)
    }
  })

  PeerConnection.signallingServer.on('peerError', (error) => {
    PeerConnection.peers[error.peerName].peer.emit('error', error);
  })

  PeerConnection.signallingServer.on('offer', async (data) => {
    //Add data.offer, data.username to Event Queue
    await PeerConnection.offerProcessor(data.data, data.from);
  })

  return PeerConnection
}


module.exports = makePeerConnection
