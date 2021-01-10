"use strict"

var SimplePeer = require('simple-peer')
    , wrtc = require('wrtc')
    , createWebsocket = require('./websocket.js')
;

function createPeer(type) {
  var peerOptions = {
        sender: {initiator: true, channelName: Math.random().toString(36).slice(2), wrtc: wrtc}
        , receiver: {wrtc: wrtc}
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
  static #ANSWERTIMEOUT=60*1000 

  #type = null
  offerTimer = null
  #answerTimer = null
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
          console.log('Instance of PeerConnection receiver requires offer to open')
          reject({type: 'ENOOFFERPROCESSOR'})
        }
      }
      try {
        this.peer.on('offer', data => {
          data.channelName = this.peer.channelName
          PeerConnection.signallingServer
            .sendMsg({action: 'send', data: data, from: PeerConnection.myName, to: this.peerName})
          this.offerTimer = setTimeout(() => {
            reject({type: 'EOFFERTIMEOUT', peerName: this.peerName})
            }, PeerConnection.#OFFERTIMEOUT)
        });

        this.peer.on('answer', data => {
          data.channelName = this.peer.channelName
          PeerConnection.signallingServer.sendMsg(
            {action: 'send', data: data, from: PeerConnection.myName, to: this.peerName})
          this.#answerTimer = setTimeout(() => {
            reject({type: 'EANSWERTIMEOUT', peerName: this.peerName})
           }, PeerConnection.#ANSWERTIMEOUT)
        });

        this.peer.on('connect', () => {
          // cancel "EANSWERREFUSED" timer if receiver
          clearTimeout(this.#answerTimer)
          //console.log('%s peer[%s] connected', this.#type, this.peer.channelName)
          resolve(this.peer)
        })

        this.peer.on('close', () => {
          //console.log('peer[%s] closed', this.peer.channelName);
        })

        this.peer.on('error', (e) => {
          //console.log('peer error:', e);
          reject(e);
        })
      } catch (e) {
        reject({result: err, peerName: this.peerName})
        // ENCONNREFUSE
        // EANSWERTIMEOUT        
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

  PeerConnection.signallingServer.on('error', (error, otherPeerName, sender) => {
    PeerConnection.peers[otherPeerName].peer.emit('error', {type: error, peerName: otherPeerName});
  })

  PeerConnection.signallingServer.on('offer', (data) => {
    //Add data.offer, data.username to Event Queue
    PeerConnection.offerProcessor(data.data, data.from);
  })

  return PeerConnection
}


module.exports = makePeerConnection
