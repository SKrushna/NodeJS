//Router

function route(handle, pathname) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    }
}
    

exports.route = route;

// function router(handle, pathname,res) {
//     console.log("About to route a request for " + pathname);
    
//     if(typeof handle[pathname] === 'function'){
//         handle[pathname]();
//     }
//     else{
//         console.log('No request handler found for '+pathname);
//     }
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.write("Hello..messaage is displaying from router.js file");
//     res.end();
// }
// exports.route = router;