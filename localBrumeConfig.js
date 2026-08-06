function base64url( input ) {
	return btoa( input )
		.replace( /=/g, "" )
		.replace( /\+/g, "-" )
		.replace( /\//g, "_" );
}

function buildJwt( payload ) {
	const header = { alg: "none", typ: "JWT" };

	const encodedHeader = base64url( JSON.stringify( header ) );
	const encodedPayload = base64url( JSON.stringify( payload ) );

	// "none" alg means an empty signature segment
	return `${ encodedHeader }.${ encodedPayload }.`;
}

if( process.argv.length != 3 ){
	console.log( `Usage: ${  process.argv[0].split( '/' ).pop() } ${ process.argv[1].split( '/' ).pop() } <brume_name>` );
	process.exit( 1 );
}

console.log( JSON.stringify( { token: buildJwt( { 'custom:brume_name': process.argv[ 2 ] } ) } ) );
