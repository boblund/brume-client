import { readFileSync, writeFileSync } from 'fs';
//import { Brume } from '../core/Brume.mjs';
import { Brume } from 'brume-client-api';
import wrtc from '@koush/wrtc';
import WebSocket from 'ws';

const configFile = process.argv.length == 3
	? process.argv[2]
	: process.env.BRUME_CONFIG
		? process.env.BRUME_CONFIG
		: process.env.HOME + '/Brume/brume.conf';

const config = JSON.parse( readFileSync( configFile, 'utf-8' ) );
config.url = process.env.BRUME_SERVER ? process.env.BRUME_SERVER : 'wss://brume.occams.solutions/Prod';

( async function () {
	try{
		if( !config?.token || !config?.url ) throw( 'token or url not set' );
		const brume = new Brume( { wrtc, WebSocket } );

		brume.on( 'reauthorize', newconfig => {
			Brume.log.debug( 'reauthorize' );
			writeFileSync( configFile, JSON.stringify( { ...newconfig, url: config.url } ) );
		} );

		brume.on( 'serverclose', ( e ) => {
			Brume.log.info( `serverclose: ${ `serverclose: ${ e.code } ${ e.message }` }` );
			process.exit( 0 );
		} );

		brume.on( 'error', e => {
			Brume.log.debug.error( JSON.stringify( e ) );
		} );

		await brume.start( config );
		Brume.log.info( `${ brume.thisUser } connected to Brume server` );
		brume.onconnection = async ( { peer, accept } ) => {
			peer.on( 'data', _data => {
				const data = Brume.decodeMsg( _data );
				Brume.log.info( `Message from ${ peer.peerUsername }: ${ JSON.stringify( data ) }` );
				peer.send( Brume.encodeMsg( { type: 'msg', data: 'Howdy' } ) );
			} );
			peer.on( 'close', () => {
				Brume.log.info( `peer closed` );
				process.exit( 0 ); } );
			peer.on( 'error', ( e ) => { Brume.log.debug( `peer error` ); } );
			await accept(); //accept connection
		};
	} catch( e ){
		Brume.log.error( e );
	}
} )();
