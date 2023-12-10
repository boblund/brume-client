import {readFileSync, writeFileSync} from 'fs';
import {Brume} from './Brume.mjs';

function delay(msec){
	return new Promise(res => {
		setTimeout(() => res(), msec);
	});
}

const log = (...a) => {
	console.log(`${new Date().toLocaleString('en', {hourCycle: "h24"})}:`, ...a);
};

const configFile = process.argv.length == 3
	? process.argv[2]
	: process.env.BRUME_CONFIG
		? process.env.BRUME_CONFIG
		: process.env.HOME+'/Brume/brume.conf';

const config = JSON.parse(readFileSync(configFile, 'utf-8')),
	url = process.env?.BRUME_SERVER ? process.env.BRUME_SERVER : config.url;
		
(async function () {
	let notdone = true;
	try {
		if(!config?.token || !config?.url) throw('token or url not set');
		const brume = new Brume(config); //(config);

		brume.on('reauthorize', newconfig => {
			log('reauthorize');
			writeFileSync(configFile, JSON.stringify({...newconfig, url: config.url}));
		});

		brume.on('serverclose', () => {
			log('server restart');
			setTimeout(async ()=>{ await brume.start(); }, 10*1000);
		});

		brume.on('error', e => {
			notdone = false;
			log(JSON.stringify(e));
		});

		await brume.start();
		log(`${brume.thisUser} connected to Brume server`);
		const peer = await brume.connect(brume.thisUser == 'sam' ? 'alice' : 'sam');
		while(notdone){
			peer.write(JSON.stringify({type: 'message', value: 'howdy'}));
			log(`sent message`);
			await delay(10 * 60 * 1000);
		}
	} catch(e){
		log(`error: ${e.message}`);
	}
	process.exit(0);
})();
