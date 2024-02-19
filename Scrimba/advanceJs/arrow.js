function arr(num){
    return num;
}
console.log(arr(1));//1

//-------------ARROW FUNCTION ---------------------

const arrFn = (num) => {
    return num;
}
console.log(arrFn(2)); //2

const arrFn1 = (num) =>  num;
console.log(arrFn(3)); //3


const arrFn2 = num => num;
console.log(arrFn(4)); //4


//default parameters

const basket = (grocery = "something") => { return `I'am going to buy ${grocery} now`};

console.log(basket("milk")); //I'am going to buy milk now
console.log(basket()); //I'am going to buy something now

