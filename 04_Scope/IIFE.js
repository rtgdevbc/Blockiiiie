//Immediately Invoked Function Expression (IIFE)

//we want to execute the function very very immediately even without storing some variables 
//even while at starting of the JS file
//sometimes if global variables will make some problem if they run the function after the global variables are available
//to avoid this even before glabal variables we can use this IIFE to execute first this IIFE function
//first of all we need to execute this function 

//()()
//()this 1st braces is function definition 
//()this 2nd braces is function calling
//UnNamed IIFE
(function (){
    console.log("Connected");
})(); 
//Connected

// (;) is very important to execute another IIFE since IIFE will immediately invokes but it doesn't know where to end

(function (){
    console.log("Connected1");
})();

(function iife(){
    console.log(`this is IIFE with named function`);
})();

//Named IIFE Function

( () => {
    console.log("this is IIFE without named fucntion or unNamed Function or using arrow");
})();
//arrow unnamed IIFE function

