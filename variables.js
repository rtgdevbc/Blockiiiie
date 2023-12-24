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

//data type

//Number
let num = 10;
console.log(typeof num);

//String
let myString = 'Raviteja';
console.log(typeof myString);

//array
let myArr = [1, 2, 3];
console.log(typeof myArr);

//object
let myObj = {
    stdName: 'Raviteja',
    rollNo: 27,
    cgpa: 7.92,
    isPassed: true
}
console.log(myObj['rollNo']);
console.log(myObj.rollNo);
console.log(myObj["cgpa"]);
//we can modify content inside of the obj even though obj is declared as const
//1 ex.
const product = {
    pName: "Parker Jotter Std",
    rating: 4.5,
    price: 270,
    deal: false
}
console.log(product.pName);
console.log(product['rating']);
console.log(product["price"]);
//2 ex.
const profile = {
    userName: "shradhkapra",
    isFollow: false,
    following: 500,
    followers: 2000,
}

//console.log(profile);
console.log(typeof profile);
console.log(typeof profile.followers);
console.log(typeof profile['userName']);

