import { Brume } from 'brume-client-api';
import './index.css';
import SimplePeer from 'simple-peer';

import { BrumeCallCe, BrumeLoginCe, DialogCe, SpaNavCe, brumeStyleSheet } from 'brume-ce';
customElements.define( 'brume-login', BrumeLoginCe );
customElements.define( 'brume-call', BrumeCallCe );
customElements.define( 'ce-dialog', DialogCe );
customElements.define( 'spa-nav', SpaNavCe );

await customElements.whenDefined( 'brume-login' );
await customElements.whenDefined( 'brume-call' );
await customElements.whenDefined( 'ce-dialog' );
await customElements.whenDefined( 'spa-nav' );

document.adoptedStyleSheets = [ ...document.adoptedStyleSheets, brumeStyleSheet ];

const brumeCall = document.querySelector( 'brume-call' );
const ceDialog = document.querySelector( 'ce-dialog' );
const divIdp = document.querySelector( 'div.idp' );
const brumeLogin = document.querySelector( 'brume-login' );
const loginPage = document.querySelector( 'div.login.page' );
const appContainer = document.querySelector( 'div.app-container' );
const divApp = document.querySelector( 'div.app' );
const nav = document.querySelector( 'spa-nav' );

let brume, ws, token, peer;

async function dialog( type, msg ){ return await ceDialog[ type ]( msg ); }

// app specific code

function app( peer, from = undefined ){
	if( from === undefined ){
		peer.on( 'connect', () => {
			peer.send( `Hi ${ peer.peerUsername }` );
		} );
	}
	peer.on( 'data', data => {
		document.querySelector( '.output' ).innerHTML =
			`message from ${ peer.peerUsername }: ${ data.toString() }`;
		if( from !== undefined ) peer.send( `Hi ${ peer.peerUsername }` );
	} );
	peer.on( 'close', () => {
		document.querySelector( '.output' ).innerHTML = '';
	} );

	//if( from === undefined ) peer.send( `Hi ${ peer.peerUsername }` );
}

function newPeer( to, initiator = false ){
	peer = new SimplePeer( {
		initiator,
		trickle: false
	} );

	// ignore datachannel close that simple-peer treats as error
	const origOnError = peer._channel?.onerror;
	if ( origOnError ) peer._channel.onerror = ( e ) => {
		if ( e.error && e.error.message?.includes( 'Close called' ) ) return;
		origOnError( e );
	};
	brume.setPeer( to, peer );
	peer.myUsername = brume.thisUser;
	peer.peerUsername = to;
	peer.on( 'connect', () => {
		brumeCall.connected();
		appContainer.classList.remove( 'hidden' );
	} );
	peer.on( 'error', ( e ) => {
		if ( !e?.message?.includes( 'Close called' ) )
			Brume.log.error( e );
	} );
	peer.on( 'peerError', async e => {
		if( [ 'ENODEST', 'EBADDEST' ].includes( e?.code ) )
			await dialog( 'alert', `Cannot connect to: ${ e.peerUsername }` );
		Brume.log.warn( `peerError: ${ JSON.stringify( e ) }` );
	} );
	peer.on( 'signal', data => {
		Brume.log.info( `peer.on signal: ${ data.type }` );
		ws.send( JSON.stringify( {
			action: 'send',
			to: peer.peerUsername,
			data
		} ) );
	} );
	return peer;
}

/*** App code ***/

brumeCall.callListener = async () => {
	if( [ brume.thisUser, '' ].includes( brumeCall.name ) ){
		await dialog( 'alert', `Invalid username` );
		return;
	}
	const peer = newPeer( brumeCall.name, true );
	brumeCall.peer = peer;
	peer.on( 'close', () => {
		pcCleanup( peer );
	} );
	app( peer );
};

brumeCall.hangupListener = () => { pcCleanup( brumeCall.peer ); };

async function offerHandler( from, data ){
	if( !( await dialog( 'confirm', `Accept connection from ${ from }` ) ) ) return;
	const peer = newPeer( from );
	peer.on( 'close', () => {
		pcCleanup( peer );
	} );
	brumeCall.peer = peer;
	brumeCall.name = from;
	peer.signal( data );
	app( peer, from );
}

function pcCleanup( peer ){
	brumeCall.name = '';
	brume.setPeer( peer.peerUsername );
	if( !peer.destroyed ) peer.destroy();
	peer = undefined;
	brumeCall.peer = undefined;
	brumeCall.disconnected();
	appContainer.classList.add( 'hidden' );
	if( ws == undefined ){
		document.querySelector( 'div[data-spa="p2p"]' ).classList.remove( 'active' );
		nav.shadowRoot.querySelector( '#p2p' ).style.display = 'none';
		document.querySelector( 'div[data-spa="login"]' ).classList.add( 'active' );
		nav.shadowRoot.querySelector( '#login' ).style.display = '';
	}
}

function wsCloseListener( e ){
	ws = undefined;
}

window.addEventListener( 'load', () => {
	document.querySelector( 'body' ).classList.remove( 'hidden' );
} );

loginPage.classList.add( 'active' );
nav.shadowRoot.addEventListener( 'click', ( e ) => {
	if( e.target.id === 'logout' && ws ) ws.close();
} );
token = await brumeLogin.getToken();
const navChildren = nav.children;
const url = window.LOCAL_BRUME
	? `ws://${ window.location.host }`
	: "wss://brume.occams.solutions/Prod";

const config = { url, token };
nav.shadowRoot.getElementById( 'login' ).style.display = 'none';
loginPage.classList.remove( 'active' );
divApp.classList.add( 'active' );
//nav.shadowRoot.getElementById( 'p2p' ).click();
nav.shadowRoot.getElementById( 'p2p' ).style.display = '';
//nav.shadowRoot.getElementById( 'logout' ).style.display = '';
brume = new Brume( { WebSocket, offerHandler } );
try{
	ws = await brume.start( config );
	divIdp.innerHTML = brume.thisUser;
	ws.addEventListener( 'close', wsCloseListener );
} catch( e ){
	Brume.log.error( `brume.start: ${ e }` );
}
