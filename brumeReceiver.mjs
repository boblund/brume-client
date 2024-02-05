import {readFileSync, writeFileSync} from 'fs';
import {Brume} from './Brume.mjs';

const log = (...a) => {
	console.log(`${new Date().toLocaleString('en', {hourCycle: "h24"})}:`, ...a);
};

const configFile = process.argv.length == 3
	? process.argv[2]
	: process.env.BRUME_CONFIG
		? process.env.BRUME_CONFIG
		: process.env.HOME+'/Brume/brume.conf';
	
const config = JSON.parse(readFileSync(configFile, 'utf-8'));
const url = process.env.BRUME_SERVER ? process.env.BRUME_SERVER : config.url;

(async function () {
	try{
		if(!config?.token || !config?.url) throw('token or url not set');
		const brume = new Brume(config);

		brume.on('reauthorize', newconfig => {
			log('reauthorize');
			writeFileSync(configFile, JSON.stringify({...newconfig, url: config.url}));
		});

		brume.on('serverclose', () => {
			log('server restart');
			setTimeout(async ()=>{ await brume.start(); }, 10*1000);
		});

		brume.on('error', e => {
			log.error(JSON.stringify(e));
		});

		await brume.start();
		log(`${brume.thisUser} connected to Brume server`);
		brume.onconnection = async ({peer, accept}) => {
			peer.on('data', data => { log(data.toString()); });
			peer.on('closed', () => { log(`peer closed`); });
			await accept(); //accept connection
		};
	}catch(e){
		log(`error: ${e.message}`);
	}
})();
