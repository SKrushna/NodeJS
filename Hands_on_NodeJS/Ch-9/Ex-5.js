//Having a file named a.txt, append UTF-8-encoded string “abc” to file a.txt.
module.exports = function(){
    
    var fs = require('fs');

    fs.open('./a.txt', 'a', function(err, fd) {
        var writeBuffer = new Buffer('abc'),
        bufferOffset = 0,
        bufferLength = writeBuffer.length,
        filePosition = null;

        fs.write(
            fd,
            writeBuffer,
            bufferOffset,
            bufferLength,
            filePosition,
            function(err, written) {
                if (err) { throw err; }
                console.log('wrote ' + written + ' bytes');
            }
        );
    });
};