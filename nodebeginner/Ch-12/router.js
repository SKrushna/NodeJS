//Router

function route(handle, pathname, response) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
        //return handle[pathname]();
    } 
    else {
        console.log("\nNo request handler found for " + pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Error: 404 Not found");
        response.end();
        //return "Error: 404 Not found"; 
    }
}
    

exports.route = route;