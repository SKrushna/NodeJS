//Exercise-1
//Create an uninitialized buffer with 100 bytes length and fill it with bytes with values starting from
//0 to 99. And then print its contents.
var buf = new Buffer(100); //buffer with 100 bytes length

for(var i=0; i<buf.length; i++){
    buf[i]=i;
    console.log(buf[i]);
}
