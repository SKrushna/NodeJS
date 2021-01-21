var exec = require("child_process").exec;

function start(response) {
    console.log("\nRequest handler 'start' was called.\n");
    var content = "empty";

    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }
    // sleep(10000);

    exec("find /", 
        { timeout: 10000, maxBuffer: 20000*1024 },
        function(error, stdout, stderr){
        content = stdout;
        console.log(content);
        response.writeHead(300, {"Content-Type": "text/plain"});
        
        response.write(content);
        response.end();
    })//content will be displayed after 10 seconds

    //response.write("Hello Start\n");
    //return content;
}
    
function upload(response) {
    console.log("\nRequest handler 'upload' was called.\n");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
    //return "Hello Upload";
}
   
exports.start = start;
exports.upload = upload;