"use strict";

// TimedQueue calls cb with queue entry at specified time
function TimedQueue(cb) {
	var activeTimer = null
			, queue = []
	;

	// Dequeue entry on timeout
	function timerCB() {
		let event = queue.shift().event;
		if(queue.length > 0) {
			activeTimer = setTimeout(timerCB, queue[0].eventTime - Date.now()); // Next timeout
		}
		if(event.constructor.name !== 'Object') {
			event()
		} else {
			cb(event);
		}
	}

	// array.findIndex comparison
	//function f(e) {
	//	return this<=e.eventTime;													// 'this' is second arg in findIndex call
	//}

	this.push = function(e, delayMsec) {
		let entry = {event: e, eventTime: Date.now() + delayMsec};
		//let i = queue.length == 0 ? 0 : queue.findIndex(f, entry.eventTime)
		// Find where this entry should go in the time orderd queue
		let i = queue.length == 0 ? 0 : queue.findIndex(function(e){return this<=e.eventTime}, entry.eventTime)
		if(i == -1){																			// Add entry to end of queue
			queue.push(entry)
		} else {
			if(i == 0) {																		// Entry goes at front of queue. Reset timer.
				clearTimeout(activeTimer);										// Stop existing timer
				activeTimer = setTimeout(timerCB, delayMsec)	// Start new timer for entry delayMsec
			}
			queue.splice(i, 0, entry)												// Insert entry
		}
	}
}

module.exports = TimedQueue
