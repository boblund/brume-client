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


const log = (...a) => {
	console.log(`${new Date().toLocaleString('en', {hourCycle: "h24"})}:`, ...a);
};
		
(async function () {
	let notdone = true;
	try {
		const brume = new Brume(configFile);
		brume.on('serverclose', () => {
			log('server restart');
			setTimeout(async ()=>{ await brume.start(); }, 10*1000);
		});

		brume.on('error', e => {
			notdone = false;
			log.error(JSON.stringify(e));
		});

		await brume.start();
		log(`${brume.thisUser} connected to Brume server`);
		const peer = await brume.connect('alice');
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
