"use strict"

const DEBUG=3
			,INFO=2
			,WARN=1
			,ERROR=0
			,levelString = ['ERROR', 'WARN', 'INFO', 'DEBUG']

const optionsDefaults = {
	currLevel: INFO
	,isTTY: process.stdout.isTTY
}

var {currLevel, isTTY} = optionsDefaults

function log(level, ...args){
	if(level <= currLevel) {
		if(isTTY) process.stdout.write(new Date().toISOString() + ' ')
		console.log(`[${levelString[level]}]`, ...args)
	}
}

//log.setLevel = (level) => { currLevel = level}
/*log.setLevel = (level) => {
	let j
	currLevel = (j =typeof(level)=='string' ? levelString.indexOf(level) : level) >= ERROR && j <= DEBUG ? j : INFO
	return currLevel
}*/

log.getLevel = () => {return currLevel}
log.debug = (...args) => log(DEBUG, ...args)
log.info = (...args) => log(INFO, ...args)
log.warn = (...args) => log(WARN, ...args)
log.error = (...args) => log(ERROR, ...args)
log.setOptions = ({level, istty}) => {
	//currLevel = level ? level : currLevel
	//currLevel = level ? log.setLevel(level) : currLevel
	let j
	currLevel = (j =typeof(level)=='string' ? levelString.indexOf(level) : level) >= ERROR && j <= DEBUG ? j : INFO
	isTTY =  istty ? istty : isTTY
}

module.exports = {log, DEBUG, INFO, WARN, ERROR}
