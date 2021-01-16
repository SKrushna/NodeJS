require('http').createServer(function(req, res) {
    var rs = fs.createReadStream('./a.txt');
        rs.on('data', function(data) {
            if (!res.write(data)) {
                rs.pause();
            }
            console.log("data");
        });
        res.on('drain', function() {
            console.log("hello");
            rs.resume();
        });
        rs.on('end', function() {
            res.end();
        });
        req.write("data\n");
        req.write("data\n");
    }).listen(4000);

