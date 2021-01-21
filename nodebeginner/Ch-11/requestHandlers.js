function start() {
    console.log("\nRequest handler 'start' was called.");
}
   
function upload() {
    console.log("\nRequest handler 'upload' was called.");
}
   
exports.start = start;
exports.upload = upload;