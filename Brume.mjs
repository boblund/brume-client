export {Brume};

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

class Brume extends EventEmitter {
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
		this.#ws.addEventListener('message',  async msg => {
			let {from, ...data} = JSON.parse(msg.data);
			data = data?.data ? data.data  : data ;

			switch( data.type ){
				case 'offer':
					if( this.#peers[ from ] !== undefined ){
						// offer because of peer renegotiate
						this.#peers[ from ].signal( data );
					} else {
						const peer = new SimplePeer( { trickle: false, ...( typeof wrtc != 'undefined' ? { wrtc } : {} ) } );
						peer.peerUsername = from;
						this.#peers[ from ] = peer;
						peer.on('signal', data => { this.#ws.send( JSON.stringify( { action: 'send', to: from, data } ) ); } );
						peer.on('close', () => { delete this.#peers[ from ]; peer.emit( 'closed' ); } );
						/*await*/ this.#offerProcessor( {
							peer,
							accept(){
								peer.signal( data );
								return new Promise(res => { peer.on('connect', ()=>{ res(); }); });
							}
						});
					}
					break;
        
				case 'answer': 
					clearTimeout( this.#peers[ from ]?.offerTimer );
				case 'candidate':
				case 'renegotiate':
				  this.#peers[ from ].signal( data );
					break;

				case 'transceiverRequest':
					this.#peers[ from ].addTransceiver( data.transceiverRequest.kind, { send: true, receive: true} );
					break;

				case 'peerError':
					this.#peers[ data.peerUsername ].emit('peerError', data);
					break;					

				default:
					console.log( `Brume unknown message: ${ JSON.stringify( data, null, 2 ) }` );
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
		const peer = new SimplePeer( { initiator: true, trickle: false, ...( typeof wrtc != 'undefined' ? { wrtc } : {} ) } );
		peer.peerUsername = to;
		this.#peers[ to ] = peer;
		try{
			return await new Promise( ( res, rej ) => {
				peer.on( 'signal', data => {
					peer.offerTimer = setTimeout( () => {
						peer.emit( 'peerError', { code: "EOFFERTIMEOUT", peerUsername: to } );
						delete this.#peers[ to ];
					}, OFFERTIMEOUT );
					this.#ws.send( JSON.stringify( { action: 'send', to, data } ) );
				} );

				peer.on( 'connect', () => { res( peer ); } );
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
