//Exercise-2: 
//Do what is asked on the previous exercise and then slice the buffer with bytes ranging 40 to 60.
//And then print it.
var buf = new Buffer(100); //buffer with 100 bytes length

for(var i=0; i<buf.length; i++){
    buf[i]=i;
    //console.log(buf[i]);
}
var slice = buf.slice(40,60); //slice the buffer with bytes ranging 40 to 60
console.log(slice);