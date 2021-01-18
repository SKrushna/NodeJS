var fs = require('fs');
var options = {
key: fs.readFileSync(__dirname + '/Ex-2/server-key.pem'),
cert: fs.readFileSync(__dirname + '/Ex-2/server-cert.pem'),
ca: fs.readFileSync(__dirname + '/Ex-1/private/cakey.pem')
};
require('tls').createServer(options, function(socket) {
socket.pipe(socket);
}).listen(4001);