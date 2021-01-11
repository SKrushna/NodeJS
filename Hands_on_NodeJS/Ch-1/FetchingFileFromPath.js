//This will Display the file descriptor after fetching the file from the path

const fs = require('fs'); // Defining `fs` at the beginning of the script
fs.open('/home/rahul/Documents/NodeJS/Hands_on_nodeJS/Ch-1/function.js', function(err, fd) {
	if (err) { 
		// handle error if any; 
		return; 
	}
	console.log('opened file and got file descriptor ' + fd);
})
