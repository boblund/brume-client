export {Brume};

import { encodeMsg, decodeMsg } from './peerMsgEncDec.mjs';
import { log } from './logger.mjs';

const jwt = {decode(t){return JSON.parse(atob(t.split('.')[1])); }},
	OFFERTIMEOUT = 5 * 60 * 1000; // 5 minutes

/// #if WEBPACK

// #code import {EventEmitter} from 'events'; //webpack/fileGroup
// #code import SimplePeer  from 'simple-peer';

/// #else

let EventEmitter, wrtc, SimplePeer, refreshTokenAuth;

if(typeof window == 'undefined') {
	({refreshTokenAuth} = await import('./cognitoAuth.mjs'));
	EventEmitter = (await import('events')).default;
	SimplePeer = (await import('simple-peer')).default;
	wrtc = (await import('@koush/wrtc')).default;
	global.WebSocket = (await import('ws')).default;
} else {
	SimplePeer = window.SimplePeer;
	( { EventEmitter } = await import( './events.mjs' ) );
}

/// #endif

const	CLIENTID = '6dspdoqn9q00f0v42c12qvkh5l',
	errorCodeMessages = {
		400: 'Missing token',
		401: 'Unauthorized',
		402: 'Payment required',
		403: 'Invalid server url',
		404: 'This user is unknown',
		406: 'Bad token',
		409: 'This user is already connected',
		410: 'Payment required',
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
		let ws = typeof window == undefined
			? new WebSocket(url, { headers : { token }, rejectUnauthorized: false })
			: new WebSocket(`${url}?token=${token}`);

		//ws.on('pong', ()=>{});
		ws.onopen = () => { res(ws); };

		ws.onerror = err => {
			// make codes recognize: ECONNREFUSED, ENOTFOUND in err.message
			const code = err?.message
				? err?.message.match(/: (\d*)/)
					? err.message.match(/: (\d*)/)[1]
					: undefined
				: undefined;
			rej(code && errorCodeMessages[code] ? {message:`${errorCodeMessages[code]} ${code}`, code} : err);
		};

	});
}

function setPingInterval(ws){
	return typeof ws?.ping === 'function'
		? setInterval(function(){ws.ping(()=>{});}, 9.8 * 60 * 1000)
		: null;
}

class BrumePeer extends SimplePeer{
	#clientMsg;

	constructor( options ){
		super( options );
		super.on( 'data',  ( _data ) => {
			const data = decodeMsg( _data );
			if(data?.type === 'signal'){
				log.debug( `peer signal: ${ data.data.type }` );
				switch( data.data.type ){
					case 'offer':
					case 'answer':
					case 'candidate':
					case 'renegotiate':
						this.signal( data.data );
						break;

					case 'transceiverRequest':
						this.addTransceiver( data.data.transceiverRequest.kind, { send: true, receive: true} );
						break;

					case 'peerError':
						this.emit('peerError', data.data);
						break;

					default:
						log.debug( `Unknown message: ${ JSON.stringify( data.data, null, 2 ) }` );
				}
			} else {
				this.#clientMsg( data );
			}
		});
	}

	destroy( arg ){
		this.brumeCleanup();
		super.destroy( arg );
	}

	on(event, func){
		if( event === 'data' ){
			this.#clientMsg = func;
		} else {
			super.on( event, func );
		}
	}

	send( _msg ){
		let msg;
		switch( true ){
			case _msg instanceof Object && _msg?.type !== undefined :
				msg = encodeMsg( _msg );
				break;

			case _msg instanceof Uint8Array : // called by this.write
				msg = _msg;
				break;

			default:
				throw( `argument must be { type: < string >, ... }` );
		}
		super.send( msg );
	}

	write( _msg ){
		if( _msg instanceof Object && _msg?.type !== undefined ){
			super.write( encodeMsg ( _msg ) );
		} else {
			throw( `argument must be { type: < string >, ... }` );
		}
	}

	/*send( msg ){
		super.send( msg instanceof Uint8Array || ( typeof Buffer !== 'undefined' && msg instanceof Buffer ) ? msg : encodeMsg ( msg ) );
	}

	write( msg ){
		super.write( encodeMsg ( msg ) );
	}*/
}

class Brume extends EventEmitter {
	static log = log;
	#user = undefined;
	#ws = undefined;
	#config = undefined;
	#peers = {};
	#offerProcessor = () => {};

	constructor(config){
		super();
		try {
			if(config){
				this.#config = config;
				this.#user = jwt.decode(config.token)['custom:brume_name'];
			}
		} catch(e) { throw(e); }
	}

	async #openWs({token, url}){
		this.#ws = await wsConnect({token, url});
		const pingInterval = setPingInterval(this.#ws);
		this.#ws.addEventListener('message',  msg => {
			let {from, ...data} = JSON.parse(msg.data);
			data = data?.data ? data.data  : data ;

			log.debug( `ws.onMessage: ${ data.type };` );
			switch( data.type ){
				case 'offer':
					if( this.#peers[ from ] !== undefined ){
						// offer because of peer renegotiate
						this.#peers[ from ].signal( data );
					} else {
						const peer = new BrumePeer( { trickle: true, ...( typeof wrtc != 'undefined' ? { wrtc } : {} ) } );
						peer.peerUsername = from;
						this.#peers[ from ] = peer;
						peer.brumeCleanup = () => {
							delete this.#peers[ from ];
						};
						peer.on('signal', data => {
							log.debug( `brume signal: ${ data.type }` );
							this.#ws.send( JSON.stringify( { action: 'send', to: from, data } ) );
						} );
						peer.on('close', () => {
							this.#peers[ from ];
							peer.emit( 'closed' );
						} );
						//delete this.#peers[ from ];
						this.#offerProcessor( {
							peer,
							accept(){
								peer.signal( data );
								return new Promise(res => { peer.on('connect', function(){
									peer.removeAllListeners( 'signal' );
									peer.on( 'signal', ( data ) => {
										peer.send( { type: 'signal', data } );
									} );
									log.debug( `peer.onConnect: ${ from }` );
									res();
								} ); } );
							}
						});
					}
					break;

				case 'answer':
					clearTimeout( this.#peers[ from ]?.offerTimer );
				case 'candidate':
				case 'renegotiate':
				  if( this.#peers[ from ] ) {
						this.#peers[ from ].signal( data );
					} else {
						log.debug( `${ data.type } received before peer created` );
					}
					break;

				case 'transceiverRequest':
					log.debug( `Brume transceiverRequest: ${ JSON.stringify( data ) }` );
					this.#peers[ from ].addTransceiver( data.transceiverRequest.kind, { send: true, receive: true} );
					break;

				case 'peerError':
					log.debug( `Brume peerError: ${ JSON.stringify( data ) }` );
					this.#peers[ data.peerUsername ].emit('peerError', data);
					break;

				default:
				//this.emit('error', {code: 'EUNKNOWNMSG', message: `Unknown message from peer or Brume server: ${data.type}`});;
					log.debug( `Brume unknown message: ${ JSON.stringify( data, null, 2 ) }` );
			}
		});

		this.#ws.addEventListener('close', (event) => {
			//if( typeof window === 'undefined' ){
			if(this.listeners('serverclose').length == 0) {
				setTimeout(async ()=>{ await this.start(); }, 10*1000);  //give server time to delete closed session
			} else {
				this.emit('serverclose');
			}

			clearInterval(pingInterval);
			this.stop();
		});
	};

	get thisUser() { return this.#user; }
	set onconnection(func){ this.#offerProcessor = func; }

	async connect( to ){
		if( this.#peers[ to ] !== undefined ) throw( `Peer connection to ${ to } exists` );
		const peer = new BrumePeer( { initiator: true, trickle: true, ...( typeof wrtc != 'undefined' ? { wrtc } : {} ) } );
		peer.peerUsername = to;
		this.#peers[ to ] = peer;
		peer.brumeCleanup = () => {
			delete this.#peers[ to ];
		};
		try{
			return await new Promise( ( res, rej ) => {
				peer.on( 'signal', data => {
					peer.offerTimer = setTimeout( () => {
						peer.emit( 'peerError', { code: "EOFFERTIMEOUT", peerUsername: to } );
						delete this.#peers[ to ];
					}, OFFERTIMEOUT );
					this.#ws.send( JSON.stringify( { action: 'send', to, data } ) );
				} );

				peer.on( 'connect', () => {
					log.debug( `peer.connect: ${ to }` );
					//delete this.#peers[ to ];
					peer.removeAllListeners( 'signal' );
					peer.on( 'signal', ( data ) => {
						peer.send( { type: 'signal', data } );
					} );
					res( peer );
				} );
				peer.on( 'error', (e) => { rej(e); } );
				peer.on( 'peerError', ( { code, peerUsername: to } ) => {
					clearTimeout( peer.offerTimer );
					delete this.#peers[ to ];
					rej( { code: code, peerUsername: to, type: 'peerError', message: `${ to } connection request timeout` } );
				});

				peer.on( 'close', () => { delete this.#peers[ to ]; peer.emit( 'closed' );} );
			});
		} catch( e ) {
			throw( e );
		}
	};

	start( config = undefined ){ // browser Brume doesn't have config until start
		if(config){
			this.#config = config;
			this.#user = jwt.decode(config.token)['custom:brume_name'];
		}
		return new Promise(async (res, rej) => {
			try {
				await this.#openWs({token: this.#config.token, url: this.#config.url});
				res();
			} catch(e) {
				if(e?.code && e.code == '401'){
					try{
						let {IdToken} = await refreshTokenAuth(CLIENTID, this.#config.RefreshToken);
						this.#config.token = IdToken;
						this.emit('reauthorize', this.#config);
						await this.#openWs({token: this.#config.token, url: this.#config.url});
						res(this);
					} catch(e) {
						rej(e);
					}
				} else {
					rej(e);
				}
			}
		});
	}

	stop(){ this.#ws = undefined; }
}
