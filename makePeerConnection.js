"use strict";

const SimplePeer = require('simple-peer')
    , wrtc = require('wrtc')
    ,log = require('./logger.js')
    ,sendWait = 10 * 1000  //10 seconds

SimplePeer.prototype.Send = SimplePeer.prototype.send
SimplePeer.prototype.send = function(chunk) {
  if(this._channel.readyState == 'open') {
    this.Send(chunk)
  } else {
    log.warn(`${this.type} ${this.channelName}: peer.send readyState == ${this._channel.readyState}`)
  }
}

function sendTimeout(peer, action) {
  log.debug(`${peer.type} ${peer.channelName}: ${action} ${peer.peerName} sendTimer`)
  peer.sendTimer = setTimeout(
    function() {
      //log.warn(`${peer.type} ${peer.channelName}: ${action} timeout`)
      //peer.destroy()
      peer.emit('error', {code: 'ETIMEOUT', channelName: peer.channelName,  message: `${peer.type} ${action} timeout`})
    }
    ,sendWait
  )
}

function createPeer(type) {
  var peerOptions = {
        sender: {
          initiator: true
          , trickle: false
          , channelName: PeerConnection.myName + '-' + Math.random().toString(10).slice(2,6)
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
  type = null
  peer = null
 
  constructor(type) {
    PeerConnection.type = type
    this.type = type
  }

  open(peerName, offer) {
    return new Promise((resolve, reject) => {
      // should creating a peer be moved after the offer is accepted? 
      this.peer = createPeer(this.type);
      this.peer.type = this.type
      this.peer.peerName = peerName

      if(this.type == 'sender'){
        PeerConnection.peers[this.peer.channelName] = this
      }
      if(this.type == 'receiver') {
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
          sendTimeout(this.peer, 'offer')
        });

        this.peer.on('answer', data => {
          data.channelName = this.peer.channelName
          try {
            PeerConnection.signallingServer.sendMsg(
              {action: 'send', data: data, to: peerName})
            sendTimeout(this.peer, 'answer')
          } catch(e) {
            log.error('send answer error', data.channelName, e.code)
          }
        });

        this.peer.on('connect', () => {
          clearTimeout(this.peer.sendTimer)
          resolve(this.peer)
        })

        this.peer.on('close', () => {
          clearTimeout(this.peer.sendTimer)
          log.debug(`${this.type} ${this.peer.channelName}: peer close`)
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
      clearTimeout(PeerConnection.peers[data.data.channelName].peer.sendTimer)
      PeerConnection.peers[data.data.channelName].peer.signal(data.data)
    } else {
      log.error(`${PeerConnection.type} answer: no peer for ${data.from}`)
    }
  })

  PeerConnection.signallingServer.on('peerError', (error) => {
    PeerConnection.peers[error.channelName].peer.emit('error', error);
  })

  PeerConnection.signallingServer.on('offer', async (data) => {
    try{
      await PeerConnection.offerProcessor(data.data, data.from);
    } catch(e){
      log.error(`reeiver: offer error from ${data.from} ${e.code} ${e.message}`)
    }
  })

  return PeerConnection
}


module.exports = makePeerConnection
