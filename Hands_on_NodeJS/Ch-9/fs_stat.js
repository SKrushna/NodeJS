//this will print the meta info of the file from /etc/passwd. \
//No need to manually create any folder or files to run this program, as every PC has this folder inbuilt
var fs = require('fs');

fs.stat('/etc/passwd', function(err, stats) {
if (err) {console.log(err.message); return; }
    console.log(stats);
    //This will print "this file is 2871 bytes long.""
    console.log('this file is ' + stats.size + ' bytes long.');
});

//You can also create a sample.txt file having some data in it and then try to run this program 
//by changing line no. 3 to fs.stat('./hello.txt', function(err, stats) {