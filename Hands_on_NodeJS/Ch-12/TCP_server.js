module.exports = function(){
    require('net').createServer(function(socket) {
        // new connection
        socket.on('data', function(data) {
            // got data
            console.log("data = "+data.toString());
        });
        socket.on('end', function(data) {
            // connection closed
            console.log("Connection closed");
        });
        socket.write('Some string');
        
        var port = 4001;
        var host = '0.0.0.0';
        var server = require('http').createServer();
        server.listen(port, host, function() {
            console.log('server listening on port ' + port);
        });

        socket.setTimeout(60000, function() {
            socket.end('idle timeout, disconnecting, bye!');
        });

        server.close();
        server.on('close', function() {
            console.log('server closed!');
        })
    }).listen(4000);
}