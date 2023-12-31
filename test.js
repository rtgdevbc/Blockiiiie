let arr = [1, "2", true, function(){return 2+3}, {a: 12, b : "ravi"}]
//console.log(arr[3](), arr[4].b);

//=============== Objects =====================

let objArr = { 
    bio : {
        name : 'teja',
        roll : 30
    }
}
console.log(objArr.bio.name); //do notation
console.log(objArr.bio["name"]); // array like call
console.log(objArr["bio"]["name"]); // deep array like call

