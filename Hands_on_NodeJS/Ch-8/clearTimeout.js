//Program 1: Here the timeout will never execute because we clear it right after we set it.

var timeoutHandle = setTimeout(function() { console.log('yehaa!'); }, 1000);
clearTimeout(timeoutHandle);

//Program 2:

var timeoutA = setTimeout(function() {
    console.log('timeout A');
}, 2000);

var timeoutB = setTimeout(function() {
    console.log('timeout B');
    clearTimeout(timeoutA);
}, 1000);


//Program 3(Set Interval): Prints "tick" every 1 second
var period = 1000; // 1 second
var interval = setInterval(function() {
console.log('tick');
}, period);


//Program 4(process.nextTick):
process.nextTick(function() {
    // this runs on the next event loop
    console.log('yay!');
});