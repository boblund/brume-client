// Based on https://github.com/mikeal/watch

function dirWatch(dir) {
  var watcher = new (require('events').EventEmitter)()
      , _type
      , options = {
          ignoreDotFiles: true
          , ignoreUnreadableDir: true
          , ignoreNotPermitted: true
        }

      , watch = require("watch")
      , previous = {}
  ;

  // Detect duplicate watch returns for a signle actual file event
  function isDup(f, s) {
    let oldPrevious = previous;
    previous = {}
    previous[f] = s;
    return(oldPrevious[f] && oldPrevious[f] == s);
  }


  watch.watchTree(dir, options, (f, curr, prev) => {
    if (typeof f == "object" && prev === null && curr === null) {
      watcher.emit('tree', f);
      // Finished walking the tree
    } else if (prev === null) {
      // f is a new file
      if(!isDup(f, "created")) {
        watcher.emit('event', 'add', f, curr.isFile() ? 'file' : curr.isDirectory() ? 'dir' : null);
      } 
    } else if (curr.nlink === 0) {
      // f was removed
      if(!isDup(f, "removed")) {
        watcher.emit('event', 'delete', f, prev.isFile() ? 'file' : prev.isDirectory() ? 'dir' : null);
      }
    } else {
      // f was changed
      if(!isDup(f, "changed")) {
        watcher.emit('event', 'add', f, curr.isFile() ? 'file' : curr.isDirectory() ? 'dir' : null);
      }
    }
  })

  return watcher;
}

class EventQueue { 
  #a=[];
  #_qProcessor=null
  #e

  constructor(qProcessor){
    this.#e = new (require('events')).EventEmitter();
    this.#_qProcessor = qProcessor
    this.#e.once('data', () => {this.#processQ()})    
  };

  push(i) {
    this.#a.push(i);
    this.#e.emit('data')
    return i
  }

  shift() {
    return this.#a.shift()
  }

  async #processQ(){
    while(this.length() > 0) {
      await this.#_qProcessor(this.shift())
    }
    this.#e.once('data', () => {this.#processQ()})
  }

  length() {
    return this.#a.length
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

module.exports = {dirWatcher: dirWatch, EventQueue: EventQueue}
