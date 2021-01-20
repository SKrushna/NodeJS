var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("This message is displaying on localhost");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("server running on port 8888");