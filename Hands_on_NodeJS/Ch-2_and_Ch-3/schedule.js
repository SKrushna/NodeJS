/*
Program 1: Node Event Loop

setTimeout(function() {
	console.log('World!'); //"World" Prints after 2 seconds
	}, 2000);
console.log('Hello');

//Output: Hello 
          World
*/

/*
//Program 2: Every 5 seconds, Hello World prints on the console 
(function schedule() {
	setTimeout(function() {
        console.log('Hello World!');
        schedule(); //Schedule a timeout
	}, 5000);
})();
*/

//Program 3
//This program will go on waiting for infinite time as it never processes a timeout event 
var open = false;

setTimeout(function() {
    open = true;
}, 1000)

while(!open) {
    // wait
}
console.log('opened!');