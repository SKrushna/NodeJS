//Exploring different functionalities

setTimeout(function(){
    console.log("Plant maize");
},1000);

setTimeout(function() {
  console.log("Water plant")
},3000);

//----------------------------------------------------------------------------

setTimeout(function(){ 
    console.log("Add fertilizer"); //displays after 1 second
},1000);

//----------------------------------------------------------------------------

setInterval(function() {
  console.log('hello!'); //continuously displays after every 1 second
}, 1000);

//----------------------------------------------------------------------------

const list    = ['man', 'woman', 'child']

// create a new array
// loop over the array and map the data to new content
const newList = list.map(function(val) {
  console.log( val + " kind");
});

// newList = ['man kind', 'woman kind', 'child kind']