let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
console.log(...arr1, ...arr2); //spread operator 

function restSpreadOpt (...num){ //rest op
    return num;
}
console.log(restSpreadOpt(1,2,3,4,5));

// call()

const obj1 = {
    x : "you are so sweet ",
    y : "you are so bad",
    z : function(){
        return this.x + this.y;
    }
}
console.log(obj1.z());

const obj2 = {
    x : "you are actually mental ",
    y : "Need to take care",
}

console.log(obj1.z.call(obj2));

// apply()

const obj3 = {
    x : "Ravi ",
    y : "Teja",
    z : function(a, b){
        return a + b;
    }
}

console.log(obj3.z());

const obj4 = {
    x : 1,
    y : 2
}

console.log(obj3.z.apply([obj4,1,2]));
