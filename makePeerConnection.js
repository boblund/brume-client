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
  static myName
  //static #OFFERTIMEOUT=60*1000
  //static queueProcessor
  #type = null
  
  //offerTimer = null
  peer = null
  //peerName = null
 
  constructor(type) {
    //super()
    this.#type = type
    //this.peer = createPeer(type);
    //this.peerName = null
  }

  open(peerName, offer) {
    return new Promise(async (resolve, reject) => {
      this.peer = createPeer(this.#type);
      //this.peerName = peerName;
      //PeerConnection.peers[peerName] = this //.peer
      if(this.#type == 'sender'){
        PeerConnection.peers[this.peer.channelName] = this
        //console.log('peerConnection: sender open', this.peer.channelName, peerName)
      }
      if(this.#type == 'receiver') {
        if(offer) {
          this.peer.channelName = offer.channelName;
          //console.log('peerConnection: receiver open', this.peer.channelName, peerName)
          PeerConnection.peers[offer.channelName] = this
          this.peer.signal(offer);
        } else {
          console.error('peerConnection: receiver without offer')
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
            console.error('send answer error', data.channelName, e.code)
          }
        });

        this.peer.on('connect', () => {
          resolve(this.peer)
        })

        this.peer.on('close', () => {
          delete PeerConnection[this.peer.channelName]
          //console.log('PeerConnection: remote peer closed', this.peer.channelName);
          
        })

        this.peer.on('error', (e) => {
          //console.log('peerConnection: peer error', this.peer.channelName, e.code, e.message ? e.message : '')
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
  
  PeerConnection.signallingServer.on('answer', (data) => {
    if(PeerConnection.peers[data.data.channelName]) {
      PeerConnection.peers[data.data.channelName].peer.signal(data.data)
    } else {
      console.log('peerConnection: no peer for %s', data.from)
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
