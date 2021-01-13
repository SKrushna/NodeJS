module.exports = function(){
    var http = require('http');

    //Server 1
    var server = http.createServer();
    server.on('request', function(req, res) {
        //console.log("\nCheck: http://localhost:4000/\n");
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World!');
        res.end();
    });
    server.listen(4000);

    //Server 2
    require('http').createServer(function(req, res) {
        //console.log("\nCheck: http://localhost:4011/\n");
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Cache-Control': 'max-age=3600'
        });
        res.end('Hello!');
    }).listen(4011);

    //http.get() method
    var options = {
    host: 'www.youtube.com',
    port: 80,
    path: '/index.html'
    };

    http.get(options, function(res) {
    console.log('\ngot response: ' + res.statusCode + " using http.get() method\n");
    }).on('error', function(err) {
    console.log('got error: ' + err.message)
    });

    //http.request() method
    var options2 = {
        host: 'www.google.com',
        port: 80,
        path: '/upload',
        method: 'POST'
    };
      
    var req = require('http').request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });
    
    // write data to request body
    req.write("data\n");
    req.write("data\n");
    req.end();
}