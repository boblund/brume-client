import { readFileSync, writeFileSync } from 'fs';
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import { Brume } from 'brume-client-api';
import wrtc from '@koush/wrtc';
import WebSocket from 'ws';
import SimplePeer from 'simple-peer';

/*** Peer creation and cleanup ***/

function pcCleanup( peer ){
	brume.setPeer( peer.peerUsername );
	peer.destroy();
}

function newPeer( to, initiator = false ){
	const peer = new SimplePeer( { initiator, trickle: false, wrtc } );
	brume.setPeer( to, peer );
	peer.myUsername = brume.thisUser;
	peer.peerUsername = to;
	peer.on( 'peerError', e => {
		if( [ 'ENODEST', 'EBADDEST' ].includes( e?.code ) ) pcCleanup( brume.getPeer( e.peerUsername ) );
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

/*** App ***/

function offerHandler( from, data ){
	const peer = newPeer( from );
	//brume.setPeer( from, peer );
	peer.on( 'data', _data => {
		const data = Brume.decodeMsg( _data );
		Brume.log.info( `Message from ${ peer.peerUsername }: ${ JSON.stringify( data ) }` );
		peer.send( Brume.encodeMsg( { type: 'msg', data: 'Howdy' } ) );
	} );
	peer.on( 'close', () => {
		//brume.setPeer( peer.peerUsername );
		//peer.destroy();
		pcCleanup( peer );
		Brume.log.info( `offer peer closed` );
		ws = undefined;
		process.exit( 0 );
	} );
	peer.on( 'error', ( e ) => { Brume.log.debug( `peer error` ); } );
	peer.signal( data );
}

function sender( peer ){
	peer.on( 'connect', () => {
		Brume.log.info( `peer connect: ${ peer.peerUsername }` );
		peer.write( Brume.encodeMsg( { type: 'msg', data: 'howdy' } ) );
		Brume.log.info( `sent message` );
	} );
	peer.on( 'error', e => { Brume.log.error( `peer error: ${ e.message }` ); } );
	peer.on( 'data', data => {
		Brume.log.info( `Message from ${ peer.peerUsername }: ${ JSON.stringify( Brume.decodeMsg( data ) ) }` );
		peer.destroy();
	} );
	peer.on( 'close', () => {
		Brume.log.info( `sender peer closed` );
		//brume.setPeer( peer.peerUsername );
		//peer.destroy();
		pcCleanup( peer );
		ws = undefined;
		process.exit( 0 );
	} );
	peer.on( 'error', ( e ) => { Brume.log.debug( `peer error` ); } );
}

function wsCloseListener( e ){
	Brume.log.info( `wsCloseListener: ${ e.code }` );
	brume.stop();
	ws = undefined;
}

async function startClient(){
	ws = await brume.start( config );
	Brume.log.info( `connected to Brume signaling server` );
	ws.addEventListener( 'close', wsCloseListener );
	if( process.argv.length === 3 ){
		sender( newPeer( process.argv[ 2 ], true ) );
	}
}

const USAGE = 'Usage: node brumeClient.mjs [ receiverUserName ]\n'
	+ 'Start receiver first: node brumeClient.mjs\n'
	+ 'then start sender: node brumeClient.mjs receiverUserName';

if( process.argv.length > 3 || process.argv[ 2 ] === '-h' ){
	console.log( USAGE );
	process.exit( 1 );
}

const configFile = process.env.BRUME_CONFIG
	? process.env.BRUME_CONFIG
	: process.env.HOME + '/Brume/brume.conf';

const config = JSON.parse( readFileSync( configFile, 'utf-8' ) );
config.url = process.env?.BRUME_SERVER ? process.env.BRUME_SERVER : 'wss://brume.occams.solutions/Prod';

let ws;
let brume = new Brume( { WebSocket, offerHandler } );
try{
	await startClient();
}catch( e ){
	if( e.message.includes( 'non-101 status code' ) || e.message.includes( '401' ) ){
		Brume.log.info( `refreshing Brume ID token` );
		const userPool = new CognitoUserPool( { UserPoolId: 'us-east-1_p5E3AsRc8', ClientId: '6dspdoqn9q00f0v42c12qvkh5l' } );
		const cognitoUser = new CognitoUser( { Username: brume.thisUser, Pool: userPool } );
		try{
			config.token = await new Promise( ( res, rej ) => {
				cognitoUser.refreshSession( { getToken(){ return config.RefreshToken; } }, ( err, session ) => {
					err ? rej( err ) : res( session.getIdToken().getJwtToken() );
				} );
			} );
			writeFileSync( configFile, JSON.stringify( { ...config, url: config.url } ) );
			await startClient();
		} catch( e ){
			Brume.log.error( `brume.start error: ${ e.message }` );
			process.exit( 1 );
		};
	} else {
		Brume.log.error( `brume.start error: ${ e.message }` );
		process.exit( 1 );
	}
}
