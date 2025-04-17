import { readFileSync, writeFileSync } from 'fs';
import { Brume } from 'brume-client-api';
import { refreshTokenAuth } from 'brume-auth';
import wrtc from '@koush/wrtc';
import WebSocket from 'ws';

const configFile = process.env.BRUME_CONFIG
	? process.env.BRUME_CONFIG
	: process.env.HOME + '/Brume/brume.conf';

const config = JSON.parse( readFileSync( configFile, 'utf-8' ) );
config.url = process.env?.BRUME_SERVER ? process.env.BRUME_SERVER : 'wss://brume.occams.solutions/Prod';

( async function () {
	let notdone = true;
	try {
		if( !config?.token || !config?.url ) throw( 'token or url not set' );
		const brume = new Brume( { wrtc, WebSocket } );

		brume.on( 'serverclose', ( e ) => {
			Brume.log.info( `serverclose: ${ `serverclose: ${ e.code } ${ e.message }` }` );
			process.exit( 0 );
		} );

		brume.on( 'error', e => {
			notdone = false;
			Brume.log.debug( JSON.stringify( e ) );
		} );

		try{
			await brume.start( config );
		} catch( e ){
			if( e?.code && e.code == '401' ){
				config.token = ( await refreshTokenAuth( config.RefreshToken, brume.thisUser ) ).IdToken;
				writeFileSync( configFile, JSON.stringify( { ...config, url: config.url } ) );
				try{
					await brume.start( config );
				} catch( e ){
					throw( `refresh brume.start error: ${ e }` );
				}
			} else {
				throw( `brume.start error: ${ e }` );
			}
		}
		Brume.log.info( `${ brume.thisUser } connected to Brume server` );

		const peer = await brume.connect( process.argv[ 2 ] );
		peer.on( 'data', data => {
			Brume.log.info( `Message from ${ peer.peerUsername }: ${ JSON.stringify( Brume.decodeMsg( data ) ) }` );
			peer.destroy();
		} );
		peer.on( 'close', () => {
			Brume.log.info( `peer closed` );
			process.exit( 0 );
		} );
		peer.on( 'error', ( e ) => { Brume.log.debug( `peer error` ); } );
		peer.write( Brume.encodeMsg( { type: 'msg', data: 'howdy' } ) );
		Brume.log.info( `sent message` );
	} catch( e ){
		Brume.log.error( e );
		process.exit( 1 );
	}
} )();
