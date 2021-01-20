var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello Krushna!!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started on port 8888.");

}

exports.start1 = start;