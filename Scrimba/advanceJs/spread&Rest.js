export const data = [1,2,3];

const arr = [1,2,3];
const newArr = arr;
newArr.push(4);
// console.log(arr);
//here we are not copying simply values instead we are just referencing

// SPREAD OPERATOR

const spreadArr = [ ...arr ];
spreadArr.push(5);
// console.log(`spreadArr is: ${spreadArr}, arr is: ${arr}`);
// console.log(arr);


const obj = {
    name: "steve",
};
const newObj = { ...obj, age: 25 };
console.log(newObj);
// { name: 'steve', age: 25 }


