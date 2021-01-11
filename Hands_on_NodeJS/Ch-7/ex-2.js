//Build a script that instantiates one Ticker and bind to the “tick” event, printing “TICK” every time
//it gets one.

//Method 1:

var util = require('util'),
EventEmitter = require('events').EventEmitter;

var Ticker = function() {
    var self = this;
    setInterval(function() {
        self.emit('tick');//Event Emitter
    }, 1000);
};

util.inherits(Ticker, EventEmitter)

var tick = new Ticker();

tick.on('tick', function() {//Event Listener
    console.log('TICK');
});

/*
//Method 2
var period = 1000; // 1 second
var interval = setInterval(function() {
    console.log('TICK');
}, period);
*/