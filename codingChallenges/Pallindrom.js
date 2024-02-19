function pallinChecker(strInput){
    let newStr = "";
    // for(let i = strInput.length-1; i>=0; i--){
    //     newStr += strInput[i];
    // }
    newStr = strInput.split("").reverse().join("");
    console.log(newStr);
    // if(strInput === newStr){
    //     console.log("given string is a pallindrom string");
    // }
    // else{
    //     console.log("give string is not a pallindrom string");
    // }
    return strInput === newStr;
}

console.log(pallinChecker("racecar"));
console.log("ravi".split(""));//[ 'r', 'a', 'v', 'i' ] //to make an array from a string
console.log("ravi".split("").reverse());//[ 'i', 'v', 'a', 'r' ] //to reverse the array
console.log("ravi".split("").reverse().join(""));//ivar to join the array elements into string
