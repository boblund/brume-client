const fs = require('fs')
      ,path = require('path')
;

function treeWalk(p) {
  let contents = fs.readdirSync(p)
  //let dirs = contents.filter(f => fs.statSync(path.join(p, f)).isDirectory())
  let files = contents.filter(f => fs.statSync(path.join(p, f)).isFile()).map(f => path.join(p,f))
  contents.filter(f => fs.statSync(path.join(p, f)).isDirectory()).forEach(dir => {
    files.push(...treeWalk(path.join(p, dir)))
  })
  return files
}

function treeDiff({sender, receiver}){
  let addFiles=sender.filter(file => !receiver.includes(file))
  let deleteFiles=receiver.filter(file => !sender.includes(file))
  return({addFiles, deleteFiles})
}

function dirWatcher(dir) {
  var watcher = new (require('events').EventEmitter)()
      , _type
      , options = {
          ignoreDotFiles: false
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
        watcher.emit('event', 'changed', f, curr.isFile() ? 'file' : curr.isDirectory() ? 'dir' : null);
      }
    }
  })

  return watcher;
}

function eventQueue(queueProcessor) {
  return new EventQueue(queueProcessor)
}
class EventQueue { 
  #a=[];
  #_qProcessor=null
  #e
  //#started=false

  constructor(qProcessor){
    this.#e = new (require('events')).EventEmitter();
    this.#_qProcessor = qProcessor
    //this.#e.once('data', () => {this.#processQ()})    
  };

  start() {
    //console.log('eventQueue started')
    this.#e.once('data', () => {
      //console.log('processQ()')
      this.#processQ()})
    this.#e.emit('data')
  }
  
  push(i) {
    //console.log('eventQueue push', i)
    this.#a.push(i);
    /*if(started)*/this.#e.emit('data')
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

module.exports = {dirWatcher, EventQueue: eventQueue, treeWalk}

function main() {

  if(process.argv.length != 4) {
    console.log('USAGE: fileWatcher member_name base_dir')
    process.exit(1)
  }

  const baseDir = process.argv[3],
        thisMember = process.argv[2]
  ;

  let watcher = dirWatcher(baseDir)
  watcher.on('event', (eType, file, fileType) => {
    // matches /baseDir/memberName/group/.members 'BrumeFiles-bob/bob/\([^/]*?/\)\.members'
    // matches any .dotfile under baseDir 'BrumeFiles-bob.*/[.]'
    // file path checks are order dependent and won't work if reordered
    // baseDir/owner/group/.member     update memberInfo for group if
    // baseDir/owner/group/*           schedule eType cmd
    // baseDir/member/group            schedule sync and update groupInfo

    let p = file.split('/')
    if(p.length == 3) {
      if(p[1] != thisMember) { //should check if p[1] is a member
        console.log('sync:', p[1], p[2],'and update groupInfo')
      }
    } else if(p.length > 3) {
      if(p[1] == thisMember) {
        if(p[3] == '.members') {
          console.log('update memberInfo for:', p[2])
        } else if(fileType != 'dir' && !file.match('BrumeFiles-bob.*/[.]')) {
          //file but not a .dotfile
          console.log("sender:", eType=='changed'?'add':eType, file)
        }
      }
    }
  })
}

