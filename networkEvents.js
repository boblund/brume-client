"use strict";

const log = require('./logger.js')

//
// class NetworkEvents
//

function NetworkEvents(_name) {
  var networkEvents = []
      ,name = _name

  this.add = cmd => {
    log.debug(`NetworkEvents.add:    ${name} ${JSON.stringify(cmd)}`)
    networkEvents.push(cmd)
  }

  this.remove = function(cmd){
    let index = networkEvents.findIndex( e => 
        (e.action == cmd.action && e.file == cmd.file)
    )

    if(index > -1) {
      // ignore file event caused by network event
      log.debug(`NetworkEvents.remove:    ${name} ${JSON.stringify(cmd)}`) 
      networkEvents.splice(index, 1)
    }

    return index

  }
}

module.exports = NetworkEvents
