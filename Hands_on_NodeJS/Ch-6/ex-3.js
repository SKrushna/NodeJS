//Exercise-3:
//Do what is asked on exercise 1 and then copy bytes ranging 40 to 60 into a new buffer. And then print it. 
var buf = new Buffer(100); //buffer with 100 bytes length

for(var i=0; i<buf.length; i++){
    buf[i]=i;
    //console.log(buf[i]);
}
var slice = new Buffer(20);
buf.copy(slice,0,40,60); //copy 20 bytes from buf ranging from 40 to 60
console.log(slice);