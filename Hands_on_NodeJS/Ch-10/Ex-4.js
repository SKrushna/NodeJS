//Make a script that accepts a file name as first command line argument and uploads this file into the
//server built on the previous exercise.

module.exports = function(){
    var http = require('http'),
    fs = require('fs');

    if (process.argv.length < 5) {
        console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' ');
        return;
    }


    var options3 = {
        host: process.argv[2],
        port: parseInt(process.argv[3], 10),
        path: '/',
        method: 'PUT'
    };

    var req = http.request(options3);

    console.log('piping ' + process.argv[4]);
    fs.createReadStream(process.argv[4]).pipe(req);
}