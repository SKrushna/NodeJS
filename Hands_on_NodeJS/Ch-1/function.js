#!/usr/bin/env node
//All the below  programs produces the same output on the console: Hii Krushna

//Method 1:

(function myFunc(){
	console.log('Hii Krushna');
})(); //This function will be immediately called

//Method 2:

function func2(){
	console.log('Hii Krushna')
}//This function will never be called

func2();//After executing this line, func2 will be called and the message will be displayed 


//Method 3:

var myFunc = function func2(){
	console.log('Hii Krushna')
}
myFunc();

//All the above programs produces the same output: Hii Krushna