/**
 * A demonstration on how to executes functions defined in different modules
 */
const func1 = require('./httpServer.js');
const func2 = require('./reqHeaders.js')
const ex1 = require('./Ex-1.js');
const ex2 = require('./Ex-2.js');
const ex3 = require('./Ex-3.js');
const ex4 = require('./Ex-4.js');

// executing functions according to the definition
func1();  // immediate calling httpServer.js file
func2();  // immediate calling reqHeaders.js file
ex1();  // immediate calling Ex-1.js
ex2();  // immediate calling Ex-2.js
ex3();  // immediate calling Ex-3.js
ex4();  // immediate calling Ex-4.js