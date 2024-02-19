let score = "33";
console.log(typeof score); //we can check what type of data it is by typeof method 
console.log(typeof(score));//method type 

//to convert string to number

let valueToNumber = Number(score);
//to make sure data is always number we can convert it to explicitly 
console.log(typeof valueToNumber);
//but always conversion is not usefull or will give wrong data

let age = "20a"//which is not a number but it is string
let ageToNum = Number(age);
console.log(typeof ageToNum); // type will give number but value will be NaN
console.log(ageToNum); //NaN which is not as expected 

let temp = null;
let tempToNum = Number(temp);//trying to convert null to number
console.log(typeof tempToNum);//
console.log(tempToNum);
 
