// let givenInputString = "racecar";
let originalString = "raceCar";
let caselessString = originalString.toLowerCase();
let reverseString = caselessString.split('').reverse().join('');
console.log(`short form methods: ${reverseString}`);
let newString = "";
function isPalindrome ( givenString ){
    let str = givenString.toLowerCase();
    for(let i = str.length -1; i>=0; i--){
        newString += str[i] ;
    }
    console.log(newString);
    // if((newString) === (str) ){
    //     console.log(`given string: ${str} is a palindrome`);
    // }
    // else{
    //     console.log(`given string: ${str} is not a palindrome`);
    // }
    return newString === str;
}
console.log(isPalindrome("RaceCar"));
