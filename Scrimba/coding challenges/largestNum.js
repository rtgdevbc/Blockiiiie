function largestNum (n){
    let num = "";
    for(let i = 0; i<n; i++){
        // num += "9";
        num = num.concat("9");
    }
    return parseInt(num);//converting srting to Int
}
console.log(largestNum(2));

function larnum (num){
    const largeNum = '9'.repeat(num); //'999'
    return largeNum;
}
console.log(larnum(3));
