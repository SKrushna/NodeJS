var fs = require('fs');
var conn = require('net').createConnection('./socket.sock');
conn.on('fd', function(fileDesc) {
    fs.write(fileDesc, "this is the child!\n", function() {
        conn.end();
    });
});