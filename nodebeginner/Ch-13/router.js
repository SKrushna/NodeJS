//Router

function route(handle, pathname, response, postData) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } 
    else {
        console.log("\nNo request handler found for " + pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Error: 404 Not found");
        response.end();
    }
}
exports.route = route;