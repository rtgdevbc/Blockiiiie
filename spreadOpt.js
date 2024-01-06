let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
console.log(...arr1, ...arr2); //spread operator 

function restSpreadOpt (...num){ //rest op
    return num;
}
console.log(restSpreadOpt(1,2,3,4,5));


