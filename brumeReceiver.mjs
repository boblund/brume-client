import {Brume} from './Brume.mjs';

const log = (...a) => {
	console.log(`${new Date().toLocaleString('en', {hourCycle: "h24"})}:`, ...a);
};

const configFile = process.argv.length == 3
	? process.argv[2]
	: process.env.BRUME_CONFIG
		? process.env.BRUME_CONFIG
		: process.env.HOME+'/Brume/brume.conf';
		
(async function () {
	try{
		const brume = new Brume(configFile);
		/*brume.on('serverclose', () => {
			log('server restart');
			setTimeout(async ()=>{ await brume.start(); }, 10*1000);
		});*/
		brume.on('error', e => { log.error(JSON.stringify(e)); });
		await brume.start();
		log(`${brume.thisUser} connected to Brume server`);
		brume.onconnection = (peer) => {
			peer.on('data', data => {
				log(data.toString());
			});
			peer.on('closed', () => { log(`peer closed`); });
		};
	}catch(e){
		log(`error: ${e.message}`);
	}
})();
