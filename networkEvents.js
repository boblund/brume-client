"use strict";

function NetworkEvents() {
  var networkEvents = []

  this.add = cmd => {
    networkEvents.push(cmd)
  }

  this.remove = function(cmd){
    let index = networkEvents.findIndex( e => 
        (e.action == cmd.action && e.file == cmd.file)
    )

    if(index > -1) {
      // ignore file event caused by network event 
      networkEvents.splice(index, 1)
    }

    return index

  }
}

module.exports = NetworkEvents
