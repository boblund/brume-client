#!/usr/bin/env node
"use strict";

const
	{readFileSync} = require('fs'),
	jwt = require('jsonwebtoken'),
	{resolve4} = require('mdns-resolver'),
	BrumeData = require('./BrumeData'),
	EventQueue = require('./eventQueue.js'),
	FileWatcher = require('./fileWatcher.js'),
	NetworkEvents = require('./networkEvents'),
	log = require('./logger.js'),
	sender = require("./sender.js"),
	receiver = require("./receiver.js"),
	createWebsocket = require('./websocket.js'),
	baseDir = process.env.BRUME_FILES ? process.env.BRUME_FILES : process.env.HOME+"/Brume/",
	configFile = process.argv.length == 3
		? process.argv[2]
		: process.env.BRUME_CONFIG
			? process.env.BRUME_CONFIG
			: process.env.HOME+'/.config/Brume/brume.conf';

try {
	var {token, url, logLevel} = JSON.parse(readFileSync(configFile, 'utf-8'))
	if(!baseDir || !token || !url) throw('baseDir, token or url not set')
} catch(e) {
	log.error(`brume config error ${configFile} ${e.message}`)
	process.exit(1)
}

log.setLevel(process.env.LOG != undefined ? process.env.LOG : logLevel != undefined ? logLevel: 'INFO')
var [addr, port] = process.env.BRUME_SERVER ? process.env.BRUME_SERVER.split(':') : [null, null]
port = port ? ':' + port : '';
var thisUser = jwt.decode(token).username;
var fileWatcher = null;

(async function brumeStart() {
	var ws

	log.info('starting brume-client', thisUser)
	url = addr
	? 'ws://' + (addr.match(/^\d+\.\d+\.\d+\.\d+/)
			? addr.match(/^\d+\.\d+\.\d+\.\d+/)[0]
			: await new Promise(res=>{resolve4(addr).then(res).catch(()=>{res(addr)})})
		) + port
	: url;

	try {

		ws = await createWebsocket(url, thisUser, token)

		log.info('connected to ws server ' + url)
		const pingInterval = setInterval(function ping() { ws.ping(()=>{}) }, 9.8 * 60 * 1000);

		ws.on('pong', ()=>{
		 log.debug('ws server: pong')
		})

		ws.on('serverclose', function(m) {
			log.info('ws server close')
			clearInterval(pingInterval)
			ws = null
			brumeStart()
		})

		var
			PeerConnection = require('./makePeerConnection.js')(ws, thisUser),
			eventQueue = new EventQueue(),
			networkEvents = new NetworkEvents,
			brumeData = new BrumeData({thisUser, baseDir, eventQueue, networkEvents});

			if(fileWatcher != null) {
				fileWatcher.close().then(() => log.debug('brume-client:    fileWatcher closed'));
			}

		fileWatcher	= new FileWatcher({brumeData, eventQueue, networkEvents})
		receiver({PeerConnection, brumeData, eventQueue, networkEvents})
		eventQueue.setCmdProcessor(sender({PeerConnection, eventQueue, brumeData}))
	} catch(e) {
		let minutes= 10
		log.warn("createWebsocket error:",e.code, ". Retry in", minutes, 'minutes')
		setTimeout(brumeStart, minutes*60*1000)
	}
})()
