import { Brume } from 'brume-client-api';
import { getToken } from 'brume-web';

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

const brume = new Brume(),
	callElem = customElements.get( 'brume-call' ) ? document.getElementById( 'call' ) : null,
	dataArea = document.querySelector( '#dataArea' ),
	brumeLogin = document.querySelector( '#brumelogin' ),
	divApp = document.querySelector( 'div#app' );

let serverConnection = false;
brume.on( 'serverclose', () => {
	serverConnection = false;
	if( callElem.name.value == '' ){
		divApp.hidden = true;
		brumeLogin.hidden = false;
	}
} );

let token = localStorage?.Authorization,
	triedLogin = false;

function endPeerConnection( peer = undefined ) {
	if( peer ) peer.destroy();
	dataArea.innerHTML = '';
	callElem.call();
	callElem.name.value = '';
	if( !serverConnection ){
		divApp.hidden = true;
		brumeLogin.hidden = false;
	}
}

async function offerHandler( { peer, accept } ) {
	if( await dialog( 'confirm', `Accept call from ${ peer.peerUsername }?` ) ){
		peer.on( 'close', () => {
			endPeerConnection();
		} );
		peer.on( 'data', data => {
			dataArea.innerHTML = `Data from ${ peer.peerUsername }: ${ JSON.stringify( Brume.decodeMsg( data ) ) }`;
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
		peer.send( Brume.encodeMsg( { type: 'msg', data: `Hi ${ callElem.name.value }` } ) );
	}
} );

callElem.call();
brume.onconnection = offerHandler;

while( true ){
	try {
		if( !token ) {
			//divLogin.style.display = '';
			brumeLogin.hidden = false;
			token = await getToken();
			//localStorage.Authorization = token;
			triedLogin = true;
		}
		await brume.start( { token, url: 'wss://brume.occams.solutions/Prod' } );
		serverConnection = true;
		break;
	} catch( e ) {
		if( triedLogin ) await dialog( 'alert', `Connection to Brume failed: ( ${ e } ). Try signing in again.` );
		token = null;
		delete localStorage.Authorization;
	}
}

document.querySelector( '#idP' ).innerHTML = `User: ${ brume.thisUser }`;
brumeLogin.hidden = true;
brumeLogin.password.value = '';
divApp.style.display = '';
