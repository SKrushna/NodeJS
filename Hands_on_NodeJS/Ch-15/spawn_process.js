var spawn = require('child_process').spawn;
var child = spawn('tail', ['-f', './a.txt']);
    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    child.kill(); //or "child.kill('SIGKILL');"
});