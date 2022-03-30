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

const
	thisUser = jwt.decode(token).username,
	errorCodeMessages = {
		400: 'Missing token',
		401: 'Unauthorized',
		403: 'unknown member: ' + thisUser,
		404: 'Server not found',
		406: 'Bad token',
		409: thisUser + ' already connected',
		500: 'Server error',
		501: 'Server error',
	};

var 
	fileWatcher = null,
	PeerConnection;

const initPeerConnection = require('./PeerConnection.js');

(async function brumeStart(reason) {
	var ws;

	if(reason != 'serverclose') {
		log.info('starting brume-client', thisUser)
		url = addr
		? 'ws://' + (addr.match(/^\d+\.\d+\.\d+\.\d+/)
				? addr.match(/^\d+\.\d+\.\d+\.\d+/)[0]
				: await new Promise(res=>{resolve4(addr).then(res).catch(()=>{res(addr)})})
			) + port
		: url;
	}

	try {
		ws = await createWebsocket(url, token)

    ws.on('serverclose', function() {
      log.info('ws server close');
      ws = null;
      setTimeout(()=>{brumeStart('serverclose')}, 10*1000);  //give server time to delete closed session
    })

		log.info('connected to Brume server ' + url)
		PeerConnection = initPeerConnection(ws, thisUser);

		if(reason != 'serverclose') {
			const
				eventQueue = new EventQueue(),
				networkEvents = new NetworkEvents,
				brumeData = new BrumeData({thisUser, baseDir, eventQueue, networkEvents});

			fileWatcher	= new FileWatcher({brumeData, eventQueue, networkEvents});
			receiver({PeerConnection, brumeData, eventQueue, networkEvents});
			eventQueue.setCmdProcessor(sender({PeerConnection, eventQueue, brumeData}));
		}
	} catch (err) {
		let code = err.code ? err.code : JSON.parse(err.message.match('.*:[ ]+\(.*\)')[1]);
		switch(code) {
			case 'ECONNREFUSED':
			case 'ENOTFOUND':
				const minutes= 10;
				log.warn("createWebsocket error:",e.code, ". Retry in", minutes, 'minutes');
				setTimeout(brumeStart, minutes*60*1000);
				break;
		
			case 401:
				log.info('reauthorize');
				// reauthorize rather than exit(1)? user has to reuath with existing token
				// to AWS every 2 hours so maybe no need to reauth on expired token
				process.exit(1);
				break;

				default:
				log.error('Brume server error: ', code, errorCodeMessages[code]);
				process.exit(1)
		}
	}
})()
