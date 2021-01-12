var timeoutA = setTimeout(function() {
    console.log('timeout A');
}, 2000);

var timeoutB = setTimeout(function() {
    console.log('timeout B');
    clearTimeout(timeoutA);
});

//process.nextTick
process.nextTick(function() {
    // this runs on the next event loop
    console.log('yay!');
});