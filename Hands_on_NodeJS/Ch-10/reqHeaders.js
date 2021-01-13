module.exports = function(){
    var util = require('util');

    require('http').createServer(function(req, res) {
        //console.log("\nCheck: http://localhost:4003/\n");
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(util.inspect(req.headers));
        
    }).listen(4003);
}