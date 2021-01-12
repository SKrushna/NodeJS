//Having a file named a.txt, print the size of that files in bytes.
module.exports = function(){
    
    var fs = require('fs');

    fs.stat('./a.txt', function(err, stats) {
    if (err) {console.log(err.message); return; }
        console.log('"a.txt" file is ' + stats.size + ' bytes long.');
    });

    /*
    //Second method to print size of file in bytes
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
    */
};