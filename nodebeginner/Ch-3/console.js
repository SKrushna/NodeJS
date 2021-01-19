//Passing functions around
function say(word) {
    console.log(word);
}
   
function execute1(someFunction, value) {
    someFunction(value);
}
    
execute1(say, "Method 1: Passing a function as a parameter to another function by its name\n");


//Another method to pass a function as an argument to another function
function execute2(someFunction, value) {
    someFunction(value);
}
    
execute2(function(word){ console.log(word) }, "Method 2: Passing an Anonymous function as a parameter to another function\n");