import {Brume} from './Brume.mjs';
import log from './logger.js';

const configFile = process.argv.length == 3
	? process.argv[2]
	: process.env.BRUME_CONFIG
		? process.env.BRUME_CONFIG
		: process.env.HOME+'/Brume/brume.conf';
		
(async function () {
	try{
		const brume = new Brume(configFile);
		await brume.start();
		console.log(`${brume.thisUser} connected to Brume server`);
		brume.onconnection = (peer) => {
			peer.on('data', data => {
				log.info(data.toString());
			});
			peer.on('closed', () => { log.info(`peer closed`); });
		};
	}catch(e){
		log.error(`error: ${e.message}`);
	}
})();
