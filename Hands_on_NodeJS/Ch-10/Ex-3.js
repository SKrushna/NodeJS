//Make an HTTP server that saves the request body into a file.
module.exports = function(){
    var options2 = {
        host: 'www.google.com',
        port: 80,
        path: '/upload',
        method: 'POST'
    };
   
    var fs = require('fs');
    var http = require('http');
    var req3 = http.request(options2, function(res){
        //res.setEncoding('utf-8');
        res.on('data', function(chunk){
            fs.open('./a.txt', 'a', function(err, fd){
                var writeBuffer = new Buffer((chunk));
            
                fs.write(fd, writeBuffer, 0, writeBuffer.length, null, function(err, writeBytes){
                    if(err)
                        throw err;
            
                    console.log(' Written ' + writeBytes + ' Bytes');
                });
            });
        });
    });
    req3.write('data \n');
    req3.end();
}