import { Brume } from 'brume-client-api';
import { app, appCleanup } from './app.mjs';
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
const appContainers = document.querySelectorAll( 'div.app-container' );
const divApp = document.querySelector( 'div.app' );

async function dialog( type, msg ){ return await ceDialog[ type ]( msg ); }

const apps = [ app ];
const appsCleanup = [ appCleanup ];
let brume, ws;

window.addEventListener( 'load', () => {
	document.querySelector( 'body' ).classList.remove( 'hidden' );
} );

function newPeer( to, initiator = false ){
	const peer = new SimplePeer( {
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
		appContainers.forEach( ac => { ac.classList.remove( 'hidden' ); } );
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
	apps.forEach(
		app => app( peer )
	);
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
	apps.forEach(
		app => app( peer, from )
	);
}

function pcCleanup( peer ){
	brumeCall.name = '';
	brume.setPeer( peer.peerUsername );
	if( !peer.destroyed ) peer.destroy();
	peer = null;
	brumeCall.peer = null;
	brumeCall.disconnected();
	appContainers.forEach( ac => { ac.classList.add( 'hidden' ); } );
	appsCleanup.forEach( app => app() );
}

async function wsCloseListener( e ){
	Brume.log.info( `Brume ws closed: ${ e.code } ${ e.reason }` );
	loginPage.classList.add( 'active' );
	divApp.classList.remove( 'active' );
	ws = await brume.start( config );
	ws.addEventListener( 'close', wsCloseListener );
}

loginPage.classList.add( 'active' );
const token = await brumeLogin.getToken();
const config = { "url": "wss://brume.occams.solutions/Prod", token };
loginPage.classList.remove( 'active' );
divApp.classList.add( 'active' );
brume = new Brume( { WebSocket, offerHandler } );
try{
	ws = await brume.start( config );
	divIdp.innerHTML = brume.thisUser;
	ws.addEventListener( 'close', wsCloseListener );
} catch( e ){
	Brume.log.error( `brume.start: ${ e }` );
}
