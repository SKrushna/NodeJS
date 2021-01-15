//Client multicasts the mesaage
var dgram = require('dgram');

var client = dgram.createSocket('udp4');

var message = new Buffer('this is a multicast message');

/* set the Multicast time-to-live to 10 (an arbitrary value here). This TTL tells the network how many
hops (routers) it can travel through before it is discarded.*/
client.setMulticastTTL(10);
client.send(message, 0, message.length, 4000, '239.0.0.0');
client.close();