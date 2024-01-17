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
    // console.log(c); //100
}
// console.log(c); //100

// var x = 10;//both are declared in same level hence throw an error
// let x = 10;
// //illegal
// let y = 10;
// {
//     var y = 10; //declared in global and let y is in script which is same level 
// }
//illegal
//should not cross the limit or boundary

//lexical block scope
let z = 1;
{
    let z = 2;
    {
        let z = 3;
        {
            let z = 4;
            console.log(z);
        }
        console.log(z);
    }
    console.log(z);
}
console.log(z);





