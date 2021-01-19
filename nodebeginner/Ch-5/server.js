var http = require("http");
var cnt=0;
function onRequest(request, response) {
    cnt++;
    console.log("Request received "+ cnt +" times");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Request sent "+ cnt +" times");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");