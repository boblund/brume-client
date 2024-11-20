/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./files/Brume.mjs":
/*!*************************!*\
  !*** ./files/Brume.mjs ***!
  \*************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Brume: () => (/* binding */ Brume)
/* harmony export */ });
/* harmony import */ var _peerMsgEncDec_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peerMsgEncDec.mjs */ "./files/peerMsgEncDec.mjs");
/* harmony import */ var _logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.mjs */ "./files/logger.mjs");
/* harmony import */ var _events_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.mjs */ "./files/events.mjs");






let refreshTokenAuth = () => {}; // webpack needs this but only called in nodejs
let wrtc, SimplePeer;

///////////////

// webview
         SimplePeer = ( await __webpack_require__.e(/*! import() */ "files_simplepeer_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ./simplepeer.min.js */ "./files/simplepeer.min.js", 19)) ).default;

/////////

////////////////////////////////////
///////////
///////////////////////////////////////
////////////////////////////////
////////
//////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////////////////////////////////
 

//////////

const jwt = { decode( t ){ return JSON.parse( atob( t.split( '.' )[1] ) ); } };
const OFFERTIMEOUT = 5 * 60 * 1000; // 5 minutes

function arrayClone( arr, n ) {
	var copy = new Array( n );
	for ( var i = 0; i < n; ++i )
		copy[i] = arr[i];
	return copy;
}

SimplePeer.prototype.emit = function emit( type ) {
	var args = [];
	for ( var i = 1; i < arguments.length; i++ ) args.push( arguments[i] );
	var doError = ( type === 'error' );

	var events = this._events;
	if ( events !== undefined )
		doError = ( doError && events.error === undefined );
	else if ( !doError )
		return false;

	// If there is no 'error' event listener then throw.
	if ( doError ) {
		var er;
		if ( args.length > 0 )
			er = args[0];
		if ( er instanceof Error ) {
			// Note: The comments on the `throw` lines are intentional, they show
			// up in Node's output if this results in an unhandled exception.
			throw er; // Unhandled 'error' event
		}
		// At least give some kind of context to the user
		var err = new Error( 'Unhandled error.' + ( er ? ' (' + er.message + ')' : '' ) );
		err.context = er;
		throw err; // Unhandled 'error' event
	}

	var handler = events[type];

	if ( handler === undefined )
		return false;

	if ( typeof handler === 'function' ) {
		handler.apply( this, args );
	} else {
		var len = handler.length;
		var listeners = arrayClone( handler, len );
		for( var i = 0; i < len; ++i )
			if( listeners[i].apply( this, args ) === 'stopImmediatePropagation' ) break;
	}

	return true;
};

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

function wsConnect( { token, url } ) {
	return new Promise( ( res, rej ) => {
		let ws = typeof window == undefined
			? new WebSocket( url, { headers: { token }, rejectUnauthorized: false } )
			: new WebSocket( `${ url }?token=${ token }` );

		//ws.on('pong', ()=>{});
		ws.onopen = () => { res( ws ); };

		ws.onerror = err => {
			// make codes recognize: ECONNREFUSED, ENOTFOUND in err.message
			const code = err?.message
				? err?.message.match( /: (\d*)/ )
					? err.message.match( /: (\d*)/ )[1]
					: undefined
				: undefined;
			rej( code && errorCodeMessages[code] ? { message: `${ errorCodeMessages[code] } ${ code }`, code } : err );
		};

	} );
}

function setPingInterval( ws ){
	return typeof ws?.ping === 'function'
		? setInterval( function(){ ws.ping( ()=>{} ); }, 9.8 * 60 * 1000 )
		: null;
}

function ondataHandler ( _data ) {
	if( (0,_peerMsgEncDec_mjs__WEBPACK_IMPORTED_MODULE_0__.checkMsgType)( _data, 'signal' ) ){
		const data = (0,_peerMsgEncDec_mjs__WEBPACK_IMPORTED_MODULE_0__.decodeMsg)( _data );
		if( data?.type === 'signal' ){
			_logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log.debug( `peer signal: ${ data.data.type }` );
			switch( data.data.type ){
				case 'offer':
				case 'answer':
				case 'candidate':
				case 'renegotiate':
					this.signal( data.data );
					break;

				case 'transceiverRequest':
					this.addTransceiver( data.data.transceiverRequest.kind, { send: true, receive: true } );
					break;

				case 'peerError':
					this.emit( 'peerError', data.data );
					break;

				default:
					_logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log.debug( `Unknown message: ${ JSON.stringify( data.data, null, 2 ) }` );
			}
			return 'stopImmediatePropagation';
		}
	}
}

class Brume extends _events_mjs__WEBPACK_IMPORTED_MODULE_2__.EventEmitter {
	static log = _logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log;
	static encodeMsg = _peerMsgEncDec_mjs__WEBPACK_IMPORTED_MODULE_0__.encodeMsg;
	static decodeMsg = _peerMsgEncDec_mjs__WEBPACK_IMPORTED_MODULE_0__.decodeMsg;
	#user = undefined;
	#ws = undefined;
	#wrtc = undefined;
	#config = undefined;
	#peers = {};
	#offerProcessor = () => {};

	constructor( { wrtc, WebSocket } = { wrtc: undefined, WebSocket: undefined } ){
		super();
		if( typeof window === 'undefined' ){
			if( typeof wrtc === 'undefined' || typeof WebSocket === 'undefined' ){
				throw( `Brume constructor requires wrtc and ws in nodejs` );
			}
			this.#wrtc = wrtc;
			global.WebSocket = WebSocket;
		}
	}

	async #openWs( { token, url } ){
		this.#ws = await wsConnect( { token, url } );
		const pingInterval = setPingInterval( this.#ws );
		this.#ws.addEventListener( 'message',  msg => {
			let { from, ...data } = JSON.parse( msg.data );
			data = data?.data ? data.data  : data ;

			_logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log.debug( `ws.onMessage: ${ data.type };` );
			switch( data.type ){
				case 'offer':
					if( this.#peers[ from ] !== undefined ){
						// offer because of peer renegotiate
						this.#peers[ from ].signal( data );
					} else {
						const peer = new SimplePeer( { trickle: true, ...( typeof this.#wrtc != 'undefined' ? { wrtc: this.#wrtc } : {} ) } );
						peer.peerUsername = from;
						this.#peers[ from ] = peer;
						peer.on( 'data', ondataHandler );
						peer.on( 'close', () => {
							delete this.#peers[ from ];
						} );
						peer.on( 'error', ( e ) => { if( !e.message.includes( 'Close called' ) ) _logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log.debug( e.message ); } );
						peer.on( 'signal', data => {
							_logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log.debug( `brume signal: ${ data.type }` );
							this.#ws.send( JSON.stringify( { action: 'send', to: from, data } ) );
						} );
						this.#offerProcessor( {
							peer,
							accept(){
								peer.signal( data );
								return new Promise( res => { peer.on( 'connect', function(){
									peer.removeAllListeners( 'signal' );
									peer.on( 'signal', ( data ) => {
										peer.send( (0,_peerMsgEncDec_mjs__WEBPACK_IMPORTED_MODULE_0__.encodeMsg)( { type: 'signal', data } ) );
									} );
									_logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log.debug( `peer.onConnect: ${ from }` );
									res();
								} ); } );
							}
						} );
					}
					break;

				case 'answer':
					clearTimeout( this.#peers[ from ]?.offerTimer );
				case 'candidate':
				case 'renegotiate':
				  if( this.#peers[ from ] ) {
						this.#peers[ from ].signal( data );
					} else {
						_logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log.debug( `${ data.type } received before peer created` );
					}
					break;

				case 'transceiverRequest':
					_logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log.debug( `Brume transceiverRequest: ${ JSON.stringify( data ) }` );
					this.#peers[ from ].addTransceiver( data.transceiverRequest.kind, { send: true, receive: true } );
					break;

				case 'peerError':
					_logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log.debug( `Brume peerError: ${ JSON.stringify( data ) }` );
					this.#peers[ data.peerUsername ].emit( 'peerError', data );
					break;

				default:
					_logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log.debug( `Brume unknown message: ${ JSON.stringify( data, null, 2 ) }` );
			}
		} );

		this.#ws.addEventListener( 'close', ( event ) => {
			//if( typeof window === 'undefined' ){
			if( this.listeners( 'serverclose' ).length == 0 ) {
				setTimeout( async ()=>{ await this.start(); }, 10 * 1000 );  //give server time to delete closed session
			} else {
				this.emit( 'serverclose' );
			}

			clearInterval( pingInterval );
			this.stop();
		} );
	};

	get thisUser() { return this.#user; }
	set onconnection( func ){ this.#offerProcessor = func; }

	async connect( to ){
		if( this.#peers[ to ] !== undefined ) throw( `Peer connection to ${ to } exists` );
		const peer = new SimplePeer( { initiator: true, trickle: true, ...( typeof this.#wrtc != 'undefined' ? { wrtc: this.#wrtc } : {} ) } );
		peer.peerUsername = to;
		this.#peers[ to ] = peer;
		peer.on( 'data', ondataHandler );
		peer.on( 'close', () => {
			delete this.#peers[ to ];
		} );
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
					_logger_mjs__WEBPACK_IMPORTED_MODULE_1__.log.debug( `peer.connect: ${ to }` );
					peer.removeAllListeners( 'signal' );
					peer.on( 'signal', ( data ) => {
						peer.send( (0,_peerMsgEncDec_mjs__WEBPACK_IMPORTED_MODULE_0__.encodeMsg)( { type: 'signal', data } ) );
					} );
					res( peer );
				} );
				peer.on( 'error', ( e ) => { rej( e ); } );
				peer.on( 'peerError', ( { code, peerUsername: to } ) => {
					clearTimeout( peer.offerTimer );
					delete this.#peers[ to ];
					rej( { code: code, peerUsername: to, type: 'peerError', message: `${ to } connection request timeout` } );
				} );
			} );
		} catch( e ) {
			throw( e );
		}
	};

	start( config = undefined ){ // browser Brume doesn't have config until start
		if( config ){
			this.#config = config;
			this.#user = jwt.decode( config.token )['custom:brume_name'];
		}
		return new Promise( async ( res, rej ) => {
			try {
				await this.#openWs( { token: this.#config.token, url: this.#config.url } );
				res();
			} catch( e ) {
				if( typeof window === 'undefined' && e?.code && e.code == '401' ){
					try{
						let { IdToken } = await refreshTokenAuth( CLIENTID, this.#config.RefreshToken );
						this.#config.token = IdToken;
						this.emit( 'reauthorize', this.#config );
						await this.#openWs( { token: this.#config.token, url: this.#config.url } );
						res( this );
					} catch( e ) {
						rej( e );
					}
				} else {
					rej( e );
				}
			}
		} );
	}

	stop(){ this.#ws = undefined; }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./files/brume-elements.mjs":
/*!**********************************!*\
  !*** ./files/brume-elements.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


//https://medium.com/front-end-weekly/how-to-build-reusable-html-components-without-component-based-frameworks-2f7747f4c5db
//https://web.dev/custom-elements-v1/

//export {elementLoaded};

/*const delay = t => new Promise(resolve => setTimeout(resolve, t));
function elementLoaded(id) {
	return new Promise(async (res, rej) => {
		const el = document.getElementById(id);
		while(true){
			if(el.loaded) {
				break;
			} else {
				await delay(10);
			}
		}
		res(el);
	});
}*/

class Call extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<div class="w3-cell-row">
				<div class="w3-container w3-cell">
					<input id = "${this.id}-name" type = "text" 
						placeholder = "username to call" />
				</div>
				<div class="w3-container w3-cell">
					<button id = "${this.id}-callBtn" class = "btn-success btn">Connect</button>
					<button id = "${this.id}-hangUpBtn" class = "btn-danger btn">Disconnect</button>					
				</div> 
			</div>
    `;

		this.loaded = true;
		this.callBtn = document.getElementById(`${this.id}-callBtn`);
		this.hangUpBtn = document.getElementById(`${this.id}-hangUpBtn`);
		this.name = document.getElementById(`${this.id}-name`);

		this.callBtn.style.display='';
		this.hangUpBtn.style.display='none';
	}

	call() {
		this.callBtn.style.display='';
		this.hangUpBtn.style.display='none';
	}

	hangUp() {
		this.callBtn.style.display='none';
		this.hangUpBtn.style.display='';
	}
}

customElements.define('brume-call', Call);

class Login extends HTMLElement {
	instance = this;
	name;
	constructor() {
		super();
	}

	connectedCallback() {
		
		this.innerHTML = `
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
			<div id="emailDiv">
				<input style="margin: 5px; width: 300px;" class="w3-border w3-round" type="text" placeholder="Email" id="email">
				<input type="checkbox" id="checkbox" name="checkbox">
				<label for="checkbox">Remember me</label>
			</div>

			<div id="passwordDiv">
				<input style="margin: 5px; width: 300px;" class="w3-border w3-round" type="password" placeholder="Password" class="bieye" name="password" id="password"/>
				<i class="bi bi-eye-slash" for="password"></i>
			</div>

			<div id="stayLoggedInDiv">
				<input type="checkbox" id="stayLoggedInCb" name="stayLoggedInCb">
				<label for="stayLoggedInCb">Stay logged in</label>
			</div>

			<!--/br><input type="submit" class="w3-white w3-border w3-small w3-round-large" id="submitLogin"-->
			</br><button class="btn btn-success" id="submitLogin">submit</button>
			</br></br><div id="loginStatus"></div>
    `;

		this.loaded = true;
		this.email = document.querySelector('#email');
		this.password = document.querySelector('#password');
		this.checkbox = document.querySelector('#checkbox');
		this.stayLoggedInCb = document.querySelector('#stayLoggedInCb');
		this.submitLogin = document.querySelector('#submitLogin');
		this.loginStatus = document.querySelector('#loginStatus');

		const bi = document.querySelector('i.bi');
		bi.addEventListener('click', doToggle);

		function doToggle(event) {
			let password = document.getElementById(event.currentTarget.attributes.getNamedItem('for').value);
			password.type = password.type === "password" ? "text" : "password";
			event.currentTarget.classList.toggle("bi-eye");
		}
	}
}

customElements.define('brume-login', Login);


/***/ }),

/***/ "./files/brumeLogin.mjs":
/*!******************************!*\
  !*** ./files/brumeLogin.mjs ***!
  \******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getToken: () => (/* binding */ getToken)
/* harmony export */ });


let Cognito = await Promise.all(/*! import() */[__webpack_require__.e("vendors-files_node_modules_amazon-cognito-identity-js_dist_amazon-cognito-identity_min_js"), __webpack_require__.e("_65ab")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/amazon-cognito-identity-js/dist/amazon-cognito-identity.min.js */ "./files/node_modules/amazon-cognito-identity-js/dist/amazon-cognito-identity.min.js", 19));
if( Cognito?.__esModule !== true ){
	Cognito = window.AmazonCognitoIdentity;
}

const poolData = {
	UserPoolId: 'us-east-1_p5E3AsRc8',
	ClientId: '6dspdoqn9q00f0v42c12qvkh5l'
};

const userPool = new Cognito.CognitoUserPool( poolData );

function userPassAuth( username, password ) {
	return new Promise( ( res, rej ) => {
		const authenticationData = {
			Username: username,
			Password: password
		};

		const authenticationDetails = new Cognito.AuthenticationDetails( authenticationData );

		const userData = {
			Username: username,
			Pool: userPool
		};

		const cognitoUser = new Cognito.CognitoUser( userData );

		cognitoUser.authenticateUser( authenticationDetails, {
			onSuccess: function( result ) {
				cognitoUser.getUserAttributes( ( e, r ) => {
					//const brume_name = r.reduce((a, e) => a = e.Name == 'custom:brume_name' ? e.Value : a, '');
					res( { IdToken: result.getIdToken().getJwtToken() } );
				} );
			},
			onFailure: function( err ) {
				rej ( { error: err } );
			}
		} );
	} );
}

let brumeLogin = null;

if(customElements.get('brume-login')){
	brumeLogin = document.getElementById('brumeLogin');
	brumeLogin.submitLogin.addEventListener('click', processLogin);
}

brumeLogin.email.value = localStorage?.email ? localStorage.email : '';
brumeLogin.checkbox.checked = localStorage?.checkbox ? localStorage.checkbox : false;

let loginCallBack = ()=> {};

async function processLogin() {
	brumeLogin.loginStatus.innerHTML = '';
	if (brumeLogin.checkbox.checked && brumeLogin.email.value !== "") {
		localStorage.email = brumeLogin.email.value;
		localStorage.checkbox = brumeLogin.checkbox.checked;
	} else {
		localStorage.email = "";
		localStorage.checkbox = "";
	}

	const result = await userPassAuth(brumeLogin.email.value, brumeLogin.password.value);
	if(result.error) {
		if(result.error == "NEW_PASSWORD_REQUIRED") {
			alert('New Password Required. Change your password at brume.occams.solutions.');
		} else { //if(result.error?.code == 'NotAuthorizedException'){
			brumeLogin.loginStatus.innerHTML = result.error;
		}
		delete localStorage.Authorization;
	} else {
		if(brumeLogin.stayLoggedInCb.checked)
			localStorage.Authorization = result.IdToken;
		loginCallBack(result.IdToken);
	}
}


function getToken() {
	return new Promise((res, rej) => {
		loginCallBack = (token) => {
			res(token);
		};
	});
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./files/events.mjs":
/*!**************************!*\
  !*** ./files/events.mjs ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventEmitter: () => (/* binding */ EventEmitter)
/* harmony export */ });
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.





var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      if( ReflectApply(listeners[i], this, args) === 'stopImmediatePropagation' ) break;
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./files/logger.mjs":
/*!**************************!*\
  !*** ./files/logger.mjs ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


const levels = [ 'DEBUG', 'INFO', 'WARN', 'ERROR' ];
let level = typeof window === 'undefined'
	? ( process.env?.LOG ? process.env.LOG : 'ERROR' )
	: ( localStorage?.LOG ? localStorage?.LOG : 'ERROR' );

const _log = a => ( ...b ) => {
	if( levels.indexOf( a ) > -1 && levels.indexOf( a ) >= levels.indexOf( level ) ) {
		console.log( `${ new Date().toLocaleString( 'sv-SE' ) } [ ${ a } ]`, ...b );
	}
};

const log = {
	debug( ...args ) { _log( 'DEBUG' )( ...args ); },
	info( ...args ) { _log( 'INFO' )( ...args ); },
	warn( ...args ) { _log( 'WARN' )( ...args ); },
	error( ...args ) { _log( 'ERROR' )( ...args ); },
	setLevel( l ){
		level = levels.indexOf( l ) > -1
			? levels.indexOf( l )
			: 1;
	}
};


/***/ }),

/***/ "./files/main.mjs":
/*!************************!*\
  !*** ./files/main.mjs ***!
  \************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brume_elements_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brume-elements.mjs */ "./files/brume-elements.mjs");
/* harmony import */ var _Brume_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brume.mjs */ "./files/Brume.mjs");
/* harmony import */ var _brumeLogin_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brumeLogin.mjs */ "./files/brumeLogin.mjs");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Brume_mjs__WEBPACK_IMPORTED_MODULE_1__, _brumeLogin_mjs__WEBPACK_IMPORTED_MODULE_2__]);
([_Brume_mjs__WEBPACK_IMPORTED_MODULE_1__, _brumeLogin_mjs__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// Dialog
const cancelBtn = document.querySelector( "#cancelBtn" );
const OKBtn = document.querySelector( "#OKBtn" );
const dialogDiv = document.querySelector( "#dialogDiv" );
const dialogMsg = document.querySelector( "#dialogMsg" );

function btnHandler( e, res ) {
	dialogDiv.hidden = true;
	cancelBtn.removeEventListener( 'click', btnHandler );
	OKBtn.removeEventListener( 'click', btnHandler );
	res( e.currentTarget.firstChild.data == 'OK' ? true : false );
}

function dialog( type, m ){
	return new Promise( ( res, rej ) => {
		dialogMsg.innerHTML = m;
		cancelBtn.style.visibility = type == 'alert' ? 'hidden' : 'visible';
		dialogDiv.hidden = false;
		cancelBtn.addEventListener( 'click', ( e ) => btnHandler( e, res ) );
		OKBtn.addEventListener( 'click', ( e ) => btnHandler( e, res ) );
	} );
}; // end Dialog

const brume = new _Brume_mjs__WEBPACK_IMPORTED_MODULE_1__.Brume(),
	callElem = customElements.get( 'brume-call' ) ? document.getElementById( 'call' ) : null,
	dataArea = document.querySelector( '#dataArea' ),
	divLogin = document.querySelector( 'div#login' ),
	divApp = document.querySelector( 'div#app' );

let token = localStorage?.Authorization,
	triedLogin = false;

function endPeerConnection( peer = undefined ) {
	if( peer ) peer.destroy();
	dataArea.innerHTML = '';
	callElem.call();
	callElem.name.value = '';
}

async function offerHandler( { peer, accept } ) {
	if( await dialog( 'confirm', `Accept call from ${ peer.peerUsername }?` ) ){
		peer.on( 'close', () => {
			endPeerConnection();
		} );
		peer.on( 'data', data => {
			dataArea.innerHTML = `Data from ${ peer.peerUsername }: ${ JSON.stringify( _Brume_mjs__WEBPACK_IMPORTED_MODULE_1__.Brume.decodeMsg( data ) ) }`;
		} );
		
		await accept();
		callElem.name.value = `call from ${ peer.peerUsername }`;
		callElem.hangUpBtn.addEventListener( "click", () => { endPeerConnection( peer ); } );
		callElem.hangUp();
	}
};

callElem.callBtn.addEventListener( 'click', async ( e ) => {	
	let peer = undefined;	 
	if ( callElem.name.value.length > 0 ) { 
		try {
			peer = await brume.connect( callElem.name.value );
		} catch( e ) {
			dialog( 'alert', `Could not connect to ${ callElem.name.value }` );
			return;
		}
		peer.on( 'close', () => {
			endPeerConnection();
		} );
		callElem.hangUpBtn.addEventListener( "click", () => { endPeerConnection( peer ); } );
		callElem.hangUp();
		peer.send( _Brume_mjs__WEBPACK_IMPORTED_MODULE_1__.Brume.encodeMsg( { type: 'msg', data: `Hi ${ callElem.name.value }` } ) );
	}
} );

callElem.call();
brume.onconnection = offerHandler;

while( true ){
	try {
		if( !token ) {
			divLogin.style.display = '';
			token = await (0,_brumeLogin_mjs__WEBPACK_IMPORTED_MODULE_2__.getToken)();
			//localStorage.Authorization = token;
			triedLogin = true;
		}
		await brume.start( { token, url: 'wss://brume.occams.solutions/Prod' } );
		break;
	} catch( e ) {
		if( triedLogin ) await dialog( 'alert', `Connection to Brume failed. Try signing in again.` );
		token = null;
		delete localStorage.Authorization;
	}
}

document.querySelector( '#idP' ).innerHTML = `User: ${ brume.thisUser }`;
divLogin.style.display = 'none';
divApp.style.display = '';

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./files/peerMsgEncDec.mjs":
/*!*********************************!*\
  !*** ./files/peerMsgEncDec.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkMsgType: () => (/* binding */ checkMsgType),
/* harmony export */   decodeMsg: () => (/* binding */ decodeMsg),
/* harmony export */   encodeMsg: () => (/* binding */ encodeMsg)
/* harmony export */ });


function encodeMsg({ type, data = {} }){
	const _data = type == 'chunk' ? data : new TextEncoder().encode( JSON.stringify( data ) );
	const a = new Uint8Array(1 + type.length + _data.length);
	a[ 0 ] = type.length;
	a.set( new TextEncoder().encode( type ), 1 );
	a.set( _data, 1 + a[ 0 ] );
	return a;
}

function decodeMsg( msg ){
	const type = String.fromCharCode( ...msg.slice( 1, 1 + msg[0] ) );
	const data = type == 'chunk'
		? msg.slice( 1 + msg[ 0 ] )
		: JSON.parse( String.fromCharCode( ...msg.slice( 1 + msg[0] ) ) );
	return { type, data };
}

function checkMsgType( msg, type ){
	return msg instanceof Uint8Array && msg[ 0 ] < msg.length
		&& String.fromCharCode( ...msg.slice( 1, 1 + msg[0] ) ) === type;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "browserbrume:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbrowserbrume"] = self["webpackChunkbrowserbrume"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./files/main.mjs");
/******/ 	
/******/ })()
;