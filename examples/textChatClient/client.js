//our username 
var name; 
var connectedUser; 

//connecting to our signaling server 
var conn = new WebSocket('ws://localhost:9090'); 

conn.onopen = function () { 
	console.log("Connected to the signaling server");
};
 
//when we got a message from a signaling server 
conn.onmessage = function (msg) { 
	console.log("Got message", msg.data); 
	var data = JSON.parse(msg.data); 
   
	switch(data.type) { 
		case "login": 
			handleLogin(data.success); 
			break; 
			//when somebody wants to call us 
		case "offer": 
			handleOffer(data.offer, data.name); 
			break; 
		case "answer": 
			handleAnswer(data.answer); 
			break; 
			//when a remote peer sends an ice candidate to us 
		case "candidate": 
			handleCandidate(data.candidate); 
			break; 
		case "leave": 
			handleLeave(); 
			break; 
		default: 
			break; 
	} 
}; 

conn.onerror = function (err) { 
	console.log("Got error", err); 
}; 

//alias for sending JSON encoded messages 
function send(message) { 

	//attach the other peer username to our messages
	if (connectedUser) { 
		message.name = connectedUser; 
	} 
   
	conn.send(JSON.stringify(message)); 
};
 
//****** 
//UI selectors block 
//****** 

var loginPage = document.querySelector('#loginPage'); 
var usernameInput = document.querySelector('#usernameInput'); 
var loginBtn = document.querySelector('#loginBtn'); 

var callPage = document.querySelector('#callPage'); 
var callToUsernameInput = document.querySelector('#callToUsernameInput');
var callBtn = document.querySelector('#callBtn'); 

var hangUpBtn = document.querySelector('#hangUpBtn');
hangUpBtn.disabled = true;

var msgInput = document.querySelector('#msgInput');

var sendMsgBtn = document.querySelector('#sendMsgBtn');
sendMsgBtn.disabled = true;

var chatArea = document.querySelector('#chatarea'); 
var peerConnection = null; 
var dataChannel = null; 
callPage.style.display = "none"; 

// Login when the user clicks the button 
loginBtn.addEventListener("click", function (event) { 
	name = usernameInput.value; 
   
	if (name.length > 0) { 
		send({ 
			type: "login", 
			name: name 
		}); 
	} 
   
});
 
function handleLogin(success) { 
	if (success === false) {
		alert("Ooops...try a different username"); 
	} else { 
		loginPage.style.display = "none"; 
		callPage.style.display = "block"; 
      
		peerConnection = new RTCPeerConnection(
			{ "iceServers": [{ "url": "stun:stun2.1.google.com:19302" }] },
			{optional: [{RtpDataChannels: true}]}
		); 
      
		// Setup ice handling 
		peerConnection.onicecandidate = function (event) { 
			if (event.candidate) { 
				send({ type: "candidate", candidate: event.candidate }); 
			} 
		};      
	}
};
 
//initiating a call 
callBtn.addEventListener("click", function () {
	peerConnection = new RTCPeerConnection(
		{ "iceServers": [{ "url": "stun:stun2.1.google.com:19302" }] },
		{optional: [{RtpDataChannels: true}]}
	); 
		
	// Setup ice handling 
	peerConnection.onicecandidate = function (event) { 
		if (event.candidate) { 
			send({ type: "candidate", candidate: event.candidate }); 
		} 
	};

	var callToUsername = callToUsernameInput.value; 
   
	if (callToUsername.length > 0) { 
		connectedUser = callToUsername;
		dataChannel = peerConnection.createDataChannel("channel1", {reliable:true});

		//when we receive a message from the other peer, display it on the screen 
		dataChannel.onmessage = function (event) { 
			chatArea.innerHTML += connectedUser + ": " + event.data + "<br />"; 
		};

		dataChannel.onerror = function (error) { 
			console.log("Ooops...error:", error); 
		 };

		 dataChannel.onclose = function () { 
			console.log("data channel is closed");
			peerConnection = null;
			dataChannel = null;
			chatArea.innerHTML = '';
			hangUpBtn.disabled = true;
			sendMsgBtn.disabled = true;
			callBtn.disabled = false;
		 };
		// create an offer 
		peerConnection.createOffer(function (offer) { 
			send({ 
				type: "offer", 
				offer: offer 
			}); 
			peerConnection.setLocalDescription(offer); 
		}, function (error) { 
			alert("Error when creating an offer"); 
		});

		hangUpBtn.disabled = false;
		callBtn.disabled = true;
	} 
   
});
 
//when somebody sends us an offer 
function handleOffer(offer, name) {
	peerConnection = new RTCPeerConnection(
		{ "iceServers": [{ "url": "stun:stun2.1.google.com:19302" }] },
		{optional: [{RtpDataChannels: true}]}
	); 
		
	// Setup ice handling 
	peerConnection.onicecandidate = function (event) { 
		if (event.candidate) { 
			send({ type: "candidate", candidate: event.candidate }); 
		} 
	};

	connectedUser = name; 
	peerConnection.setRemoteDescription(new RTCSessionDescription(offer)); 
   
	peerConnection.ondatachannel = function (event) {
		sendMsgBtn.disabled = false;
		console.log('dataChannel opened');
		dataChannel = event.channel;
 
		dataChannel.onmessage = function (event) { 
			chatArea.innerHTML += connectedUser + ": " + event.data + "<br />"; 
		};

		dataChannel.onerror = function (error) { 
			console.log("Ooops...error:", error); 
	 };

	 dataChannel.onclose = function () { 
			console.log("data channel is closed");
			peerConnection = null;
			dataChannel = null;
			chatArea.innerHTML = '';
			hangUpBtn.disabled = true;
			sendMsgBtn.disabled = true;
			callBtn.disabled = false;
	 };
	};

	//create an answer to an offer 
	peerConnection.createAnswer(function (answer) { 
		peerConnection.setLocalDescription(answer); 
		send({ 
			type: "answer", 
			answer: answer 
		}); 
	}, function (error) { 
		alert("Error when creating an answer"); 
	});

	 hangUpBtn.disabled = false;
	 callBtn.disabled = true;
};
 
//when we got an answer from a remote user 
function handleAnswer(answer) { 
	peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
	sendMsgBtn.disabled = false;
};
 
//when we got an ice candidate from a remote user 
function handleCandidate(candidate) { 
	peerConnection.addIceCandidate(new RTCIceCandidate(candidate)); 
};
 
//hang up 
hangUpBtn.addEventListener("click", function () { 
	send({ type: "leave" }); 
   
	handleLeave(); 
}); 

function handleLeave() { 
	connectedUser = null;
	if(peerConnection) { 
		peerConnection.close(); 
		peerConnection.onicecandidate = null;
	}
};
 
//when user clicks the "send message" button 
sendMsgBtn.addEventListener("click", function (event) { 
	var val = msgInput.value; 
	chatArea.innerHTML += name + ": " + val + "<br />"; 
   
	//sending a message to a connected peer 
	dataChannel.send(val); 
	msgInput.value = ""; 
});
