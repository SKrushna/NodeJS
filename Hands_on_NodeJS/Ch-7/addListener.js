//This will call hello.txt file, reads the data from that file and prints it on the console 

var fs = require('fs'); // get the fs module
var readStream = fs.createReadStream('./hello.txt');
readStream.on('data', function(data) {
    console.log(data.toString());
});
readStream.on('end', function() {
    console.log('file ended');
});
