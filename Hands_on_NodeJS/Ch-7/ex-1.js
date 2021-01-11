//Build a pseudo-class named “Ticker” that emits a “tick” event every 1 second.

//var util = require('util'),
//EventEmitter = require('events').EventEmitter;
var Ticker = function() {
    var self = this;
    setInterval(function() {
        self.emit('tick');
        //console.log('hello');
    }, 1000);
};
