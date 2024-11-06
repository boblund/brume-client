#!/usr/bin/env node

// License: Creative Commons Attribution-NonCommercial 4.0 International
// THIS SOFTWARE COMES WITHOUT ANY WARRANTY, TO THE EXTENT PERMITTED BY APPLICABLE LAW.

'use strict';

const { existsSync } = require('fs'),
	express = require('express');

const portRange = [ 10000, 60000 ];
function generatePort() {return (Math.floor(Math.random() * (portRange[1] - portRange[0] + 1)) + portRange[0]);}

function listen(server) {
	return new Promise((res, rej) => {
		const port = process.env.PORT ? process.env.PORT : generatePort();
		server.listen(port, function() { res(port); })
			.on('error', e => { rej(e); });
	});
}

async function server(appWebDir) {
	const httpServer = require('http').createServer();

	if(existsSync(appWebDir)) {
		const app = express();
		app.use(express.static(appWebDir));
		httpServer.on('request', app);
	} else {
		console.error(`${process.argv[1].split('/').pop()}: ${appWebDir} does not exist`);
		process.exit(1);
	}

	let port = process.env?.PORT ? process.env.PORT : null;
	while(true) {
		try {
			port = await listen(httpServer);
			break;
		} catch(e){
			if( !process.env?.PORT && e.code == 'EADDRINUSE') continue;
			console.error(`server error: ${e.code}`);
			process.exit(1);
		}
	}
	console.log( `Server started on: ${port}`);
};

server(process.argv[2]);
