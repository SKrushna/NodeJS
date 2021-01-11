//Program 1:
var schedule = function(timeout, callbackfunction) {
	return {
	start: function() {//When called, sets a timeout to call a function that is passed in as the “callbackfunction” argument
		setTimeout(callbackfunction, timeout)//Schedules a callback function after 2 seconds
		}
	};
};
(function() {
	var timeout = 2000; //this program waits for 2 second to produce the output in the console log
	var count = 0;
	schedule(timeout, function doStuff() {
		console.log(++ count);
		schedule(timeout, doStuff);
	}).start(timeout);
})(); //Immediately executed
