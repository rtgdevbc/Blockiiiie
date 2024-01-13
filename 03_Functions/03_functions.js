/**
 * function defination
 * function funcationName(parameters,...){
 * }
 * function call
 * functionName(arguments,...)
 */
function funName(){
    console.log("ravi");
}
//funName();

/**
 * passing parameters to the function
 */
function addTwoNumbers(num1, num2){
    return num1 + num2;
}
//console.log(addTwoNumbers(1,2));
//3
//console.log(addTwoNumbers(1,"2"));
//12
//console.log(addTwoNumbers(1,"a"));
//1a

/**
 * values passing into the function are parameters and values in calling fun are arguments
 */

/**
 * importance of return from the funcation
 */
function ret(a, b){
    console.log(a+b);//not returing any value to the calling function
}
//const result = ret(1,3);
//4 (since calling function and inside fun we have console.log that is giving this output and fucntion not returnign any value to the calling function)
//console.log(result); 
//undefined (no return from function)
//console.log(ret(2,3));//5 output is coming because of consloe.log inside the fuction 
//undefined coming because function not returnign anything to the calling function hence console gives undefined

const ret1 = (a, b) => {return a+b}; //arrow function returning
let result1 = ret1(7,7);
//console.log(result1);

/**
 * instructions after return will never execute
 */
function afterRet(){
    return "Hello";
    console.log("ravi")//unreachable code
}
//console.log(afterRet());
//Hello

/**
 * default parameters no parameter passed to the function
 */

function loginUser(userName){
    return `${userName} has just logged in`;
}

//console.log(loginUser("Raviteja"));
//Raviteja has just logged in
//what if you not provide any parameter to the function
//console.log(loginUser(""));
//has just logged in

//to avoid the above suituation we need to check whether parameter has passed or not to the fuction

function loginUser1(userName){
    console.log(userName);
    if (userName === undefined){
        console.log("Kindly Enter a Valid user Name");
        return; //once return encounter in by the JS engine it will come out of the function further no execution of the code below the return line
    }
    return `${userName} has just logged in`;
}
//console.log(loginUser1());//not passed any value to the fuction so parameter will be undefined 

/**
 * further modifications
 * default parameter if nothing has passed to the function then default value will be considered otherwise passed value will be considered
 */
function login1 (userName = "Guest User"){
    return `${userName} has just logged into the system`;
}
//console.log(login1());//Guest User has just logged into the system (default value considered since no value has passed to the function)
//console.log(login1("Ram"));//Ram has just logged into the system (even though default is there priority will be to the passed value to the function)


//======================================================================
/**
 * rest operator
 * rest operator (...) will simiple combines all the arguments passed to the function into an Array
 */
function takeValues (...num){
    //console.log(`length of arguments are: ${num.length}`);
    for(el of num){
       // console.log(`value of each el: ${el}`);
    }
    return num;
}
//console.log(takeValues(10, null, 111, 180, 150, 999));

//[ 10, null, 111, 180, 150, 999 ]

//to capture many parameters with the single variable

function restOpeTrick (val1, val2, ...val){
    return val;
}
//console.log(restOpeTrick(1,2,3,4,5,6));

// [ 3, 4, 5, 6 ] since 1 and 2 taken by val1 and val2 resp and remaining will be stored into rest operator in this case (...val)


/**
 * can pass objects inside the function 
 * 
 */
const obj1 = {
    value: 1237,
    uName: "Dhoni"
};
function passObj(obj){
    return obj.value;
}
//console.log(passObj(obj1));
//1237
// we can directly pass objs with the call function

// console.log(passObj({value:7}))
//passing directly obj with calling fuction 

/**
 * passing array in to the function
 */
function passArr(arr){ //particular value passing not array
    return arr;
}
// console.log(passArr([1,2,3,4]));
let arrOut = [9,8,7];
console.log(passArr(arrOut[2]));//particular element or value passing







