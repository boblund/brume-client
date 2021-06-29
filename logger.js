"use strict"

const levels = { ERROR: 0, WARN: 1, INFO: 2, DEBUG: 3 }
			,strings = Object.keys(levels)
			,optionsDefaults = { currLevel: levels.INFO, isTTY: process.stdout.isTTY }

var {currLevel, isTTY} = optionsDefaults

function log(level, ...args){
	if(level <= currLevel) {
		if(isTTY) process.stdout.write(new Date().toISOString() + ' ')
		console.log(`[${strings[level]}]`, ...args)
	}
}
/*
log.debug = (...args) => log(levels.DEBUG, ...args)
log.info = (...args) => log(levels.INFO, ...args)
log.warn = (...args) => log(levels.WARN, ...args)
log.error = (...args) => log(levels.ERROR, ...args)
log.setOptions = ({level, istty}) => {
	currLevel = levels[level] >= levels.ERROR && levels[level] <= levels.DEBUG ? levels[level] : levels.INFO
	isTTY =  istty ? istty : isTTY
}

module.exports = {log}*/

module.exports = {
	debug (...args) { log(levels.DEBUG, ...args) }
	,info (...args) { log(levels.INFO, ...args) }
	,warn (...args) { log(levels.WARN, ...args) }
	,error (...args) { log(levels.ERROR, ...args) }
	,setOptions ({level, istty}) {
		currLevel = levels[level] >= levels.ERROR && levels[level] <= levels.DEBUG ? levels[level] : levels.INFO
		isTTY =  istty ? istty : isTTY
	}
}