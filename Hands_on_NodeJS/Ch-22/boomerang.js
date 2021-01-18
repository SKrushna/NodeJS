// Boomerang effect

var fs= require('fs');

var doWhatWasAsked = function(callback) {
    var aFd, bFd, buffer = new Buffer(10);
    function openA() {
        fs.open(__dirname + '/a.txt', 'r', readFromA);
    }
    function readFromA(err, fd) {
        if (err) { callback(err); return; }
        aFd = fd;
        fs.read(aFd, buffer, 0, 10, 10, openB);
    }
    function openB(err) {
        if (err) { callback(err); return; }
        fs.open(__dirname + '/b.txt', 'a', statB);
    }
    function statB(err, fd) {
        if (err) { callback(err); return; }
        bFd = fd;
        fs.fstat(bFd, writeB);
    }
    function writeB(err, bStats) {
            if (err) { callback(err); return; }
            fs.write(bFd, buffer, 0, 10, bStats.size, callback);
    }
    
    openA();
};

console.log('starting...');
doWhatWasAsked(function(err) {
if (err) { throw err; }
console.log('done');
});


// var async = require('async');
// var exists = require('path').exists;

// var files = [
//     'squaring_server.js'
// ];

// function callback(result) {
//     console.log('of files %j, these exist: %j', files, result);
// }

// async.filter(files, exists, callback);