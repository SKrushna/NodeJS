// var dgram = require('dgram');

// var client = dgram.createSocket('udp4');

// var message = new Buffer('this is a message');
// client.bind(4001);
// client.send(message, 0, message.length, 4000, 'localhost');
// client.close();

var dgram = require('dgram');

var client = dgram.createSocket('udp4');
const buf1 = Buffer.from('Some ');
const buf2 = Buffer.from('bytes');
//var message = new Buffer('this is a message');
client.bind(4001);
client.send([buf1,buf2], 0, message.length, 4000, 'localhost',(err)=>{
    client.close();
});

client.on('message', function(message, rinfo) {
    console.log('and got the response: ' + message);
    client.close();
});