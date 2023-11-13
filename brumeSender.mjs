import {Brume} from './Brume.mjs';
import log from './logger.js';

function delay(msec){
	return new Promise(res => {
		setTimeout(() => res(), msec);
	})
}

const configFile = process.argv.length == 3
	? process.argv[2]
	: process.env.BRUME_CONFIG
		? process.env.BRUME_CONFIG
		: process.env.HOME+'/Brume/brume.conf';
		
(async function () {
	try {
		const brume = new Brume(configFile);
		await brume.start();
		console.log(`${brume.thisUser} connected to Brume server`);
		const peer = await brume.connect('alice');
		while(true){
			log.info(`send message`);
			peer.write(JSON.stringify({type: 'message', value: 'howdy'}));
			await delay(10 * 60 * 1000);
		}
	} catch(e){
		console.error(e.message);
	}
})();
