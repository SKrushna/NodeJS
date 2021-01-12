//Reads data from hello.txt file
module.exports = function(){
    
    var fs = require('fs');
    fs.open('./a.txt', 'r', function(err, fd) {
        if (err) { throw err }
        var readBuffer = new Buffer(1024),
        bufferOffset = 0,
        bufferLength = readBuffer.length,
        filePosition = 0;
        fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function(err, readBytes) {
            if (err) { throw err; }
            console.log('\njust read ' + readBytes + ' bytes\n');
            if (readBytes > 0) {
                console.log(readBuffer.slice(0, readBytes).toString());
            }
        });
    });
};