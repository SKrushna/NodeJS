//main file

const client = require('./TCP_client.js');
const server = require('./TCP_server.js');
const ex1 = require('./Ex-1.js');
const ex2 = require('./Ex-2.js');

// executing functions according to the definition
//ex1();  // immediate calling Ex-1.js
//ex2();  // immediate calling Ex-2.js
client();
server();