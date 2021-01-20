//Router

function router(pathname,res) {
    console.log("About to route a request for " + pathname);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("messaage from router");
    res.end();
}
exports.route = router;