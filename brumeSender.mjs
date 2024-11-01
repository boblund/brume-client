import {readFileSync, writeFileSync} from 'fs';
import {Brume} from './Brume.mjs';

function delay(msec){
	return new Promise(res => {
		setTimeout(() => res(), msec);
	});
}

const configFile = process.argv.length == 3
	? process.argv[2]
	: process.env.BRUME_CONFIG
		? process.env.BRUME_CONFIG
		: process.env.HOME+'/Brume/brume.conf';

const config = JSON.parse(readFileSync(configFile, 'utf-8'));
config.url = process.env?.BRUME_SERVER ? process.env.BRUME_SERVER : 'wss://brume.occams.solutions/Prod';
		
(async function () {
	let notdone = true;
	try {
		if(!config?.token || !config?.url) throw('token or url not set');
		const brume = new Brume(config); //(config);

		brume.on('reauthorize', newconfig => {
			Brume.log.debug('reauthorize');
			writeFileSync(configFile, JSON.stringify({...newconfig, url: config.url}));
		});

		brume.on('serverclose', () => {
			Brume.log.debug('server restart');
			setTimeout(async ()=>{ await brume.start(); }, 10*1000);
		});

		brume.on('error', e => {
			notdone = false;
			Brume.log.debug(JSON.stringify(e));
		});

		await brume.start();
		Brume.log.debug(`${brume.thisUser} connected to Brume server`);
		const peer = await brume.connect(brume.thisUser == 'sam' ? 'joe' : 'sam');
		peer.on('data', data => { Brume.log.debug(data.toString()); });
		peer.on('closed', () => { Brume.log.debug(`peer closed`); notdone = false;});
		peer.on('error', ( e ) => { Brume.log.debug(`peer error`); });
		while(notdone){
			peer.write({type: 'message', data: 'howdy'});
			Brume.log.info(`sent message`);
			await delay(10 * 1000);
		}
	} catch(e){
		Brume.log.debug(`error: ${e.message}`);
	}
	process.exit(0);
})();
