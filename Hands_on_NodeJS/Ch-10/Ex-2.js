//Make an HTTP server that outputs plain text with 100 timestamps new-line separated every second.

module.exports = function(){
    http = require('http');
    http.createServer(function(req,res){
        res.writeHead(200,{'Content-type':'text/plain'});
        var left = 10;
        var interval = setInterval(function(){
            for(var i=0; i<left; i++)
                res.write(Date.now()+"\n");
            if(--left==0){
                clearInterval(interval);
                res.end();
            }
        },1000)//1 second
    }).listen(4002);
}