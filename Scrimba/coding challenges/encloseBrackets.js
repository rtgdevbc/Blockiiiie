let inputString = "everything will be enclosed in a round brackets";

let length = inputString.length;

inputString = inputString.padStart(length+1, "(");
inputString = inputString.padEnd(length+2, ")");
console.log(inputString);


