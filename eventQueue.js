"use strict";

const log = require('./logger.js')


class EventQueue {
  constructor(){}
  
  #a=[]
  #cmdProcessor=null
  #handlerRunning=false
  
  setCmdProcessor(cmd) {
    this.#cmdProcessor = cmd
    this.#eventLoop()
  }

  handlerRunning(f) {
    this.#handlerRunning = f
  }
  
  push(i) {
    log.debug('enqueue', JSON.stringify(i))
    this.#a.push(i);

    if(this.#cmdProcessor != null && this.#handlerRunning == false) {
      log.debug('this.processQ()', i.file)
      this.#eventLoop()
    }
    
    return i
  }

  async #eventLoop(){
    this.#handlerRunning = true

    while(this.#a.length > 0) {
      await this.#cmdProcessor(this.#a.shift())
    }

    this.#handlerRunning = false
  }

  remove(f) {
    for(var i = this.#a.length - 1; i >= 0; i--) {
      if(f(this.#a[i])) {
        this.#a.splice(i, 1);
      }
    }
    return this
  }
}

module.exports = EventQueue
