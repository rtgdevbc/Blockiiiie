//to store value 
//variable doesn't have any type but data will have
//based on the type of value stored in the variable that variable will be considered by JavaScript since it is a loosely typed language
//variables = containers
//variable address will be given one name 
//to declare any variable in JS 
//we will use var, let, const
age = '24'//string
console.log(age);

console.log(typeof age);//tells us type of data inside the variable
var price = 1000;
console.log(price);
console.log(typeof price);
//variable names shoulb be given meaningful and camelCaseType
//dynamically typed language 
//no need to tell which type of data we are going to store inside the variable before storing 
fname = 'ravi';
fname = 28;
console.log(fname);//dynamical example
myName = undefined;
console.log(myName);
//-----varialbe rules------
//1 names are case sensitive
//2 only letter, digits, $ and _ allowed for giving names no spaces 
//3 1st letter either _, alphabet, $ but not number
//4 reserved words cannot be variable names.


/*------> let, const & var <-----*/
let name = 'Tom Cruise';
console.log(name);
//old usage for decalring variables is var
var language = "JavaScript";
//var can be re-declared
var language = "Java";//no error
//var is a global scope variable
//even if we declare inside the function one can utilize the same variable outside the function block.
function cage(){
    var fName = 'Ravi';
    return fName;
}
console.log(cage());
//console.log(fName);
