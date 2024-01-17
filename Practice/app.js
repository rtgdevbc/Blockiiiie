const arr = [1,2,3,4,5,6];
let sum = 0;
let doubleArr = [];
for (const el of arr){
    //console.log(arr);
    doubleArr.push(el*2);
    //console.log(doubleArr);
    sum += el;
}
//console.log(doubleArr);

//arrow functions

const squareArr = (numbers) => {
    let newArr = [];
    for (const el of numbers){
        newArr.push(el**3);
    }
    return newArr;
}

//console.log(squareArr([1,2,3,4,5,6]));


//with for in we can count the number of elements present in the string array

const str = "Hello this is string for counting purpose";

const strCount = (str) => {
    let count = 0;
    for (const el in str){
        count = Number(el) + 1;
    }
    return {count };
}
//console.log(strCount(str));

//shortform for counting number of elements in a string array is 

var name = "Ram";
function a (){
    var name = "ravi";
    console.log("inside function");
}
a();
console.log(name);//Ram
//Since var is function scope 



