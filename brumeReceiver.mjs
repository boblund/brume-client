import {Brume, log} from './Brume.mjs';

const configFile = process.argv.length == 3
	? process.argv[2]
	: process.env.BRUME_CONFIG
		? process.env.BRUME_CONFIG
		: process.env.HOME+'/Brume/brume.conf';
		
(async function () {
	try{
		const brume = new Brume(configFile);
		brume.on('serverclose', () => {
			log.info('server restart');
			setTimeout(async ()=>{ await brume.start(); }, 10*1000);
		});
		brume.on('error', e => { log.error(JSON.stringify(e)); });
		await brume.start();
		log.info(`${brume.thisUser} connected to Brume server`);
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
