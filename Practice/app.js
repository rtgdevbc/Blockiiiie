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
//a();
//console.log(name);//Ram
//Since var is function scope 

//creating our own length method for arrays

function lengthArr(arr){
    let lenth = 0;
    for (el in arr){
        lenth += 1;
    }
    // console.log(lenth);
    return lenth;
}
// console.log(lengthArr([1,2,3,4,5,null, 6]));

const arrFilter = [1,2,3,4,5];

//filter 
// array.filter(arrow function)
// array.filter(el => (function logic))
// filter will allow only elements which satifies the condition inside the arrowfunction logic
let evenArr = arrFilter.filter(el => (el % 2 !== 0));
// console.log(evenArr);

//Map
// array.map(arrow function)
// array.map(el => (logic))
// map will modify each and every element as per the logic
// console.log(arrFilter.map(el => (el *2)));

let total = arrFilter.reduce(
    (acc, val ) => {
    // console.log(`acc: ${acc}`);
    // console.log(`val: ${val}`);
    // console.log(`total: ${acc + val}`);
    return acc + val;
},
0);
// console.log(total);

let arr1 = [1, "ravi", 2, true];
for(el of arr1){
    if(typeof(el) === "number"){
        // console.log(el);
    }
}

let numObj = {
    0 : "Zero",
    1 : "One",
    2 : "Two",
    3 : "Three",
    4 : "Four",
    5 : "Five",
    6 : "Six",
    7 : "Seven",
    8 : "Eight",
    9 : "Nine"
};
for (el in numObj){
    // console.log(numObj[el]);
}
// function toWord(num){
//     let temNum = num;
//     temNum = num / 10;
//     num = num % 10;
// }
// toWord(20);


setTimeout(()=>{
    console.log("1st setTimeout of 1000ms");
    setTimeout(()=>{
        console.log("2nd setTimeout of 900ms");
        setTimeout(()=>{
            console.log("3rd setTimeout of 800ms");
            setTimeout(()=>{
                console.log("4th setTimeout of 700ms");
                setTimeout(()=>{
                    console.log("5th setTimeout of 600ms");
                    setTimeout(()=>{
                        console.log("6th setTimeout of 500ms");
                        setTimeout(()=>{
                            console.log("7th setTimeout of 400ms");
                            setTimeout(()=>{
                                console.log("8th setTimeout of 300ms");
                                setTimeout(()=>{
                                    console.log("9th setTimeout of 200ms");
                                    setTimeout(()=>{
                                        console.log("10th setTimeout of 100ms");
                                        setTimeout(()=>{
                                            console.log("0th setTimeout of 0ms");
                                        }, 0);
                                    }, 100);
                                }, 200);
                            }, 300);
                        }, 400);
                    }, 500);
                }, 600);
            }, 700);
        }, 800);
    }, 900);
}, 1000);





