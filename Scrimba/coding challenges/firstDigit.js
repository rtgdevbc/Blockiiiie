// let numArr = "1234567890";
// for(let i = 0; i<11; i++){
//     console.log(numArr.charCodeAt(i));
// };

// 48: 0
// 49: 1
// 50: 2
// 51: 3 
// 52: 4
// 53: 5
// 54: 6
// 55: 7 
// 56: 8
// 57: 9

function firstDigit(str){
    for(let i = 0; i<str.length; i++){
        if(str.charCodeAt(i)>47 && str.charCodeAt(i)<58 ){
            console.log(str[i]);
            return;
        }
    }
}
// firstDigit("raviteja90");

function firstDigit1(str){
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars = str.split('');
    for(const char of chars){
        // console.log(char);
        if(nums.includes(char)){
            return char;
        }
    }
}
console.log(firstDigit1("R3avi799"));

