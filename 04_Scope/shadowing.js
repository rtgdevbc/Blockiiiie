//let will be stored in special memory called BLOCK inside the block scope and SCRIPT on global scope but on global scope 
let a = 10;
{
    let a = 7;
    // console.log(a);//7
}
//console.log(a);//10

//const will be stored in special memory called BLOCK inside the block scope and SCRIPT on global scope but on global scope 
const b = 1;
{
    const b = 2;
    // console.log(b); //2
}
// console.log(b);//1


//var will be stored in global scope even in blocks also so all b's are referring to same variable
var c = 10;
{
    var c = 100;
    console.log(c); //100
}
console.log(c); //100

