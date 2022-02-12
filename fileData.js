"use strict";

class FileData extends Map {
  constructor(options) {
    super(options)
  }

  grpFiles = (m, g) => {
    var files = {}
    this.forEach((v, k) => {
      if(!k.includes('-CONFLICT-')) {
        let [_m, _g] = k.split('/')
        if(m == _m && g == _g) files[k]=v
      }
    })
    return files
  }

  setSync = (f, v) => {
    this.set(f, {...this.get(f), ...{synced: v}})
  }
}

module.exports = FileData
