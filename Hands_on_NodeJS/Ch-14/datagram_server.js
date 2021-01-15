/*
Run this server first by writing "node datagram_server.js" in console, and then run datagram_client
by writing "node datagram_client.js" in console.
This will outputs(in the server terminal) as below:
    server listening on 0.0.0.0:4000
    server got message: this is a message from 127.0.0.1:4001"
*/
//Or write "netcat 'hello' | -u -w 1 localhost 4000" in another terminal and hello will be received here.

var dgram = require('dgram');

var server = dgram.createSocket('udp4');//either udp4 or udp6 or unix_dgram will work
server.on('message', function(message, rinfo) {
    console.log('server got message: ' + message + ' from ' + rinfo.address +':' + rinfo.port);
});

server.on('listening', function() {
    var address = server.address();
    console.log('server listening on ' + address.address + ':' + address.port);
});

server.bind(4000);