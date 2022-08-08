#!/usr/bin/env node
"use strict";

const
	CLIENTID = '6dspdoqn9q00f0v42c12qvkh5l',
	{readFileSync, writeFileSync} = require('fs'),
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
	{refreshTokenAuth} = require('./cognitoAuth.js'),
	baseDir = process.env.BRUME_FILES ? process.env.BRUME_FILES : process.env.HOME+"/Brume/",
	configFile = process.argv.length == 3
		? process.argv[2]
		: process.env.BRUME_CONFIG
			? process.env.BRUME_CONFIG
			: process.env.HOME+'/Brume/brume.conf';


var 
	fileWatcher = null,
	PeerConnection;

const initPeerConnection = require('./PeerConnection.js');

(async function brumeStart(reason) {
	let config;
	try {
		config = JSON.parse(readFileSync(configFile, 'utf-8'));
		if(!config.token || !config.url) throw('token or url not set');
	} catch(e) {
		log.error(`brume config error ${configFile} ${e.message}`)
		process.exit(1)
	}
	
	log.setLevel(process.env.LOG != undefined ? process.env.LOG : config.logLevel != undefined ? config.logLevel: 'INFO')

	let
		thisUser = jwt.decode(config.token)['custom:brume_name'],
		errorCodeMessages = {
			400: 'Missing token',
			401: 'Unauthorized',
			404: 'unknown member: ' + thisUser,
			406: 'Bad token',
			409: thisUser + ' already connected',
			500: 'Server error',
			501: 'Server error',
		};
	
	let [addr, port] = process.env.BRUME_SERVER ? process.env.BRUME_SERVER.split(':') : [null, null]
	port = port ? ':' + port : '';
	
	if(reason != 'serverclose') {
		log.info('starting brume-client', thisUser)
		config.url = addr
		? 'ws://' + (addr.match(/^\d+\.\d+\.\d+\.\d+/)
				? addr.match(/^\d+\.\d+\.\d+\.\d+/)[0]
				: await new Promise(res=>{resolve4(addr).then(res).catch(()=>{res(addr)})})
			) + port
		: config.url;
	}

	var ws;
	try {
		ws = await createWebsocket(config.url, config.token)

    ws.on('serverclose', function() {
      log.info('ws server close');
      ws = null;
      setTimeout(()=>{brumeStart('serverclose')}, 10*1000);  //give server time to delete closed session
    })

		log.info('connected to Brume server ' + config.url)
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
		let minutes;
		switch(code) {
			case 'ECONNREFUSED':
			case 'ENOTFOUND':
				minutes= 10;
				log.warn("brume-client: error",e.code, ". Retry in", minutes, 'minutes');
				setTimeout(brumeStart, minutes*60*1000);
				break;
		
			case 401:
				log.info('reauthorize');
				try{
					let {IdToken} = await refreshTokenAuth(CLIENTID, config.RefreshToken);
					config.token = IdToken;
					writeFileSync(configFile, JSON.stringify(config));
					brumeStart()
				} catch(e) {
					const msg='You must do "Update configuration" in your Brume account '
										+ 'to enable access to the Brume message service.';

					//auth with refresh failed. someone (cognito trigger?) needs to send email to user
					minutes = 60;
					log.warn(`brume-client: token refresh error: ${e.code}. Attempt restart in ${minutes} minutes`);
					log.notify(msg);
					setTimeout(brumeStart, minutes*60*1000);
				}
				break;

			default:
				log.error('Brume server error: ', code, errorCodeMessages[code]);
				process.exit(1)
		}
	}
	log.notify('Brume started');
})()
