import {readFileSync, writeFileSync} from 'fs';
import wrtc from '@koush/wrtc';
import jwt from 'jsonwebtoken';
import {Channel} from 'https://boblund.github.io/js-caf/Channel.mjs';
import cognitoAuth from './cognitoAuth.js';
import SimplePeer from 'simple-peer';
import log from './logger.js';

export {Brume};

if(typeof window == 'undefined') {
	global.Websocket = (await import('ws')).default;
}

const	CLIENTID = '6dspdoqn9q00f0v42c12qvkh5l',
	{refreshTokenAuth} = cognitoAuth,
	errorCodeMessages = {
		400: 'Missing token',
		401: 'Unauthorized',
		402: 'Payment required',
		403: 'Invalid server url',
		404: 'This user is unknown',
		406: 'Bad token',
		409: 'This user is already connected',
		500: 'Server error',
		501: 'Server error',
		ECONNREFUSED: '',
		ENOTFOUND: '',
		ENODEST: '',
		EOFFERTIMEOUT: '',
		NotAuthorizedException: 'Invalid Refresh Token'
	};

function wsConnect({token, url}) {
	return new Promise((res, rej) => {	
		let ws = new Websocket(url, {
			headers : { token },
			rejectUnauthorized: false
		});

		//ws.on('pong', ()=>{ log.info('pong'); });
		ws.onopen = () => { res(ws); };

		ws.onerror = err => {
			// make codes recognize: ECONNREFUSED, ENOTFOUND in err.message
			const code = err.message.match(/: (\d*)/) ? err.message.match(/: (\d*)/)[1] : undefined;
			rej(code && errorCodeMessages[code] ? {message:`${errorCodeMessages[code]} ${code}`, code} : err);
		};

	});
}

function setPingInterval(ws){
	return typeof ws?.ping === 'function'
		? setInterval(function(){ws.ping(()=>{});}, 9.8 * 60 * 1000)
		: null;
}

class Brume{
	#user = undefined;
	#ws = undefined;
	#peers = {};
	#config = undefined;
	#offerProcessor;
	#connectionQ;

	constructor(configFile){
		try {
			this.#config = JSON.parse(readFileSync(configFile, 'utf-8'));
			if(!this.#config.token || !this.#config.url) throw('token or url not set');
			this.#config.url = process.env.BRUME_SERVER ? process.env.BRUME_SERVER : this.#config.url;
			log.setLevel(process.env.LOG != undefined ? process.env.LOG : this.#config.logLevel != undefined ? this.#config.logLevel: 'INFO');
			this.#config.token = this.#config.token;
			this.#user = jwt.decode(this.#config.token)['custom:brume_name'];
			this.#connectionQ = new Channel;
	
			return new Promise(async(res, rej) => {
				try {
					await this.#openWs({token: this.#config.token, url: this.#config.url});
					//eventOfferHandler needs 'this' to be Brume instance not ws instance that does emit
					this.#ws.on('offer', (offer, from, channelId)=>{this.#offerEventHandler(offer, from, channelId);});
					res(this);
				} catch(e) {
					if(e?.code && e.code == '401'){
						log.info('reauthorize');
						try{
							let {IdToken} = await refreshTokenAuth(CLIENTID, this.#config.RefreshToken);
							this.#config.token = IdToken;
							writeFileSync(configFile, JSON.stringify(this.#config));
							await this.#openWs({token: this.#config.token, url: this.#config.url});
							res(this);				
						} catch(e) {
							rej(e);
						}
					}
					rej(e);
				}
			});
		} catch(e) {
			log.error(`Brume: config error "${e.message}"`);
			throw(e);
		}
	}

	get thisUser() { return this.#user; }

	async #offerEventHandler(offer, from, channelId) {
		const peer = await new Promise((res, rej) => {
			const peer = new SimplePeer({channelId, trickle: false, wrtc: wrtc});
			this.#peers[channelId] = peer;
			log.info(`connection this.#peers: ${Object.keys(this.#peers)}`);
			peer.channelId = channelId;
			peer.signal(offer);
			peer.peerUsername = from;
	
			peer.on('signal', data => {
				const msg = data.candidate ? {type: 'candidate', candidate: data} : {type: data.type, data};
				msg.channelId = peer.channelId;
				this.#ws.send(JSON.stringify({ action: 'send', to: from, data: msg }));
			});
	
			peer.on('connect', () => { res(peer); });
			peer.on('error', (e) => { rej(e); });
			peer.on('close', () => {
				log.info(`connection onclose peer closed: ${peer.channelId}`);
				delete this.#peers[peer.channelId];
			});
		});
		this.#offerProcessor ? this.#offerProcessor(peer) : this.#connectionQ.send(peer);
	};

	async #openWs({token, url}){
		this.#ws = await wsConnect({token, url});
		log.info(`${this.#user} connected to the signaling server`);
		const pingInterval = setPingInterval(this.#ws);
		this.#ws.on('message', msg=>{
			const {from, channelId, data} = JSON.parse(msg);
			log.info(`ws message: ${data.type}`);
			switch (data.type) {
				case 'offer':
					this.#ws.emit('offer', data, from, channelId);
					break;
	
				case 'candidate':
				case 'answer':
					if(data.type == 'answer'){
						clearTimeout(this.#peers[channelId]?.offerTimer);
					}
					if(this.#peers[channelId])
						this.#peers[channelId].signal(data);
					break;

				case 'peerError':
					this.#peers[channelId].emit('peerError', data);
					break;

				default:
					log.warning(`unhandled ws.onmessage type: ${data.type}`);
					break;
			}
		});

		this.#ws.on('close', (code) => {
			log.info(`server close: ${code}`);
			//if(code == 1006){
				//1006 is AWS WS close
				setTimeout(async ()=>{
					await this.#openWs({token, url});
					this.#ws.on('offer', (offer, from, channelId)=>{this.#offerEventHandler(offer, from, channelId);});
				}, 10*1000);  //give server time to delete closed session
			//}
			clearInterval(pingInterval);
			this.#ws = null;
		});
	}
	
	set onconnection(func){ this.#offerProcessor = func; }

	async connection(){
		if(this.#offerProcessor) return null;
		try{ return await this.#connectionQ.get(); }
		catch(e){ return null; }
	}
	
	async connect(dest){
		const peer = new SimplePeer({initiator: true, trickle: false, wrtc: wrtc});
		peer.channelId = this.#user + Math.random().toString(10).slice(2,8);
		this.#peers[peer.channelId] = peer;
		log.info(`connect this.#peers: ${Object.keys(this.#peers)}`);
		try{
			return await new Promise((res, rej) => {
				peer.on('signal', data => {
					const msg = data.candidate ? {type: 'candidate', candidate: data} : {type: data.type, data};
					msg.channelId = peer.channelId;
					peer.offerTimer = setTimeout(()=>{
						peer.emit('peerError', { code: "EOFFERTIMEOUT", peerUsername: dest });
						delete this.#peers[peer.channelId];
					}, 600 * 1000);
					this.#ws.send(JSON.stringify({ action: 'send', to: dest, data: {channelId: peer.channelId, data} }));
				});

				peer.on('connect', () => { res(peer); });
				peer.on('error', (e) => { rej(e); });
				peer.on('peerError', ({code, peerUsername}) => {
					log.info(`connect peerError peer closed: ${peer.channelId}`);
					clearTimeout(peer.offerTimer);
					delete this.#peers[peer.channelId];
					rej({code: code, peerUsername, type: 'peerError', message: `peerError: ${code} ${peerUsername}`});
				});

				peer.on('close', () => {
					log.info(`connect onclose peer closed: ${peer.channelId}`);
					delete this.#peers[peer.channelId];
				});
			});
		} catch(e) {
			throw(e);
		}
	};
}
