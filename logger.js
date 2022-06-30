'use strict';

const notifier = require('node-notifier');

const 
	levels = ['DEBUG', 'INFO', 'WARN', 'ERROR'],
	timestamp = process.stdout.isTTY;
	
let level = levels.indexOf('INFO');

const log = a => (...b) => {
	if(levels.indexOf(a) > -1) {
		if(levels.indexOf(a) >= level) {
			if(timestamp) {
				let d = new Date()
				process.stdout.write(`${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`
					+ ` ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `)
			}
			console.log('['+a+']', ...b);
		}
	} else {
		console.log('[ERROR] log: bad log level - log(', a , ') (', ...b, ')');
	}

};

const setLevel = l => 
	level = levels.indexOf(l) > -1 
		? levels.indexOf(l)
		: (console.log(`[error] log: bad log level log(${a})(${b})`), level);

module.exports = {
	debug(...args) {log('DEBUG')(...args)},
	info(...args) {log('INFO')(...args)},
	warn(...args) {log('WARN')(...args)},
	error(...args) {log('ERROR')(...args)},
	notify(...args) {
		try {
			notifier.notify(...args);
		} catch(e) {
			log('INFO')(...args)
		}
	},
	setLevel
}
