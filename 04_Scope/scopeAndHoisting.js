/**
 * Global and block level scope
 * {} this curly braces is nothing but block in programming language
 * if, for, while, functions etc., 
 * objects is execption { } for objects is not a block scope it is global only
 */

// let a = 10;
// const b = 20;
// var c = 30;
// d = 40;
//declared in global scope can be access at any location 
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    d = 40; //treated as var only
}

//console.log(a); not defined 
//console.log(b); not defined
// console.log(c); //30
// console.log(d); //40
//when declared in global scope values will be 10 20 30 40
//without mentioning any type will be treated as var only 


//==================================Clousers==================================
//nested scope

function one (){
    let userName = "Ravi";
    function two(){
        //Global variables accessable 
        let roll = 7;
        console.log(`${userName}'s roll number is: ${roll}`);
    }
    //block level variable roll is not accessable outside of block
    //console.log(roll);
    //two();
}
//block level variable userName is not accessable outside of block
//console.log(userName);
//one();

if(true){
    const num = 1;
    if(true){
        const num2 = 2;
        //console.log(num + num2); //nested blocks will have access to its global variables
    }
    //console.log(num2); //block level variable num2 is not accessable at outside of block
}
//console.log(num); //block level variable num2 is not accessable at outside of block

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++HOISTING+++++++++++++++++++++++++++++++++++++++++++

// console.log(addOne(6)); //7 hoisting of fuction takes place and fucntion declaration will allow this
//we can call the fuction before declaring it is possible in JS because of Hoisting
function addOne (num){
    return num+1;
}
//---------------------------------------------------------------------------------------------------
// console.log(addTwo(6)); //error (ReferenceError: Cannot access 'addTwo' before initialization)
const addTwo = function (num){
    return num + 1;
}
// console.log(addTwo(6)); //7
//above type is function expression

//--------------------------- LET & CONST will Hoist ----------------------------
console.log(a); //ReferenceError: Cannot access 'a' before initialization
let a = 10;
/**
 * here a got hoisted but put in a diff memory called Temporal Dead Zone we
 * cannot access them without initilazation 
 * TEMPORAL DEAD ZONE: is time from which hoisting of let and const to initilazation 
 * of variables till then we can't access varaibles 
 * in the above example we cannot access 'a' till line 74 execution.
 * once line 74 executed we can access the variable a 
 */








