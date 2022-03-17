"use strict";

const levels = { ERROR: 0, WARN: 1, INFO: 2, DEBUG: 3 }
			,strings = Object.keys(levels)
			,optionsDefaults = { currLevel: levels.INFO, timestamp: process.stdout.isTTY }
			//,optionsDefaults = { currLevel: levels.INFO, isTTY: process.stdout.isTTY }

var {currLevel, timestamp} = optionsDefaults

function log(level, ...args){
	if(level <= currLevel) {
		if(timestamp) {
			let d = new Date()
  		process.stdout.write(`${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`
    		+ ` ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `)
		}
		console.log(`[${strings[level]}]`, ...args)
	}
}

module.exports = {
	debug (...args) { log(levels.DEBUG, ...args) }
	,info (...args) { log(levels.INFO, ...args) }
	,warn (...args) { log(levels.WARN, ...args) }
	,error (...args) { log(levels.ERROR, ...args) }
	,setOptions ({level, timestamp: _timestamp}) {
		currLevel = level ? levels[level] >= levels.ERROR && levels[level] <= levels.DEBUG ? levels[level] : levels.INFO : currLevel
		timestamp =  _timestamp == 'ON' ? true : _timestamp == 'OFF' ? false : timestamp
	}
}