import { data } from './Scrimba/spread&Rest.js';
console.log(data);

//to push only unique values

const arr = [1,2,3];

const pushValue = (num) => {
    if (arr.indexOf(num) === -1){
        arr.push(num);
    };
    return arr;
};

// console.log(pushValue(2)); //[1,2,3]
// console.log(pushValue(8)); //[1,2,3,8]

//above code will push the value only if values are not there in the existing array



//finding duplicate values and creating new array with unique values 

// const arr1 = [1,2,3,4,2,5,3,1,2,3,1,2,3,1,2,3,6,7,1,9,10,8];

const uniqueArr = (...arr1) => {
    let newArr = [];
    for(let i = 0; i<arr1.length; i++){
        if (newArr.includes(arr1[i]) === false){ //if(newArr.indexOf(arr1[i])=== -1){}
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}
// console.log(uniqueArr(1,2,3,4,2,5,3,1,2,3,1,2,3,1,2,3,6,7,1,9,10,8));

const listIngradient = ["flour", "milk", "sugar", "chocolate"];
if(listIngradient.includes("chocolate")){
    // console.log("we are going to make chocolate cake..!");
}
else {
    // console.log("we are not going to make chocolate cake because we are missing ingradient chocolate");
}




