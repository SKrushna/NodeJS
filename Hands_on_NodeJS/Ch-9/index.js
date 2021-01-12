/**
 * A demonstration on how to executes functions defined in different modules
 */
const function1 = require('./fs_stat');
const function2 = require('./ReadFromFile');
const function3 = require('./WriteInFile');
const ex1 = require('./Ex-1.js');
const ex2 = require('./Ex-2.js');
const ex3 = require('./Ex-3.js');
const ex4 = require('./Ex-4.js');
const ex5 = require('./Ex-5.js');
const ex6 = require('./Ex-6.js');

// executing functions according to the definition
//function1();  // immediate calling fs_Stat.js file
//function2();  // immediate calling ReadFromFile.js
//function3();  // immediate calling WriteInFile.js
//ex1();  // immediate calling Ex-1.js\
//ex2();  // immediate calling Ex-2.js
//ex3();  // immediate calling Ex-3.js
//ex4();  // immediate calling Ex-4.js
//ex5();  // immediate calling Ex-5.js
ex6();  // immediate calling Ex-6.js