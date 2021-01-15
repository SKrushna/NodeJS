//Create a UDP server that echoes the messages ot receives back into the origin socket.

var dgram = require('dgram');

var socket = dgram.createSocket('udp4', function(message, rinfo){
    console.log(rinfo);
    socket.send(message, 0, message.length, rinfo.port, rinfo.address);
});
socket.bind(4002);

//test this code using netcat like: echo 'hello' | netcat -u -w 1 localhost 4002
//And then you can type a message and hit Return, and you should get the same message back.