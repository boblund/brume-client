export { app, appCleanup };

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

function appCleanup(){
	console.log( 'appCleanup' );
}
