function jsEngine(code){
    return code.split(/\s+/);
}
//console.log(jsEngine("This    is a sentence with multiple  words."));
//console.log(jsEngine("const a = 10"));

/**
 * split(/\s+/);
 * is a split method on string 
 * which spilts the string in to an array of strings
 * based on the whitespaces
 * \s matches one white space
 * + one or more preceeding elemets
 */

/**
 * above code is demo of simpliar to parser code which parses the code into understandable tokens
 * 
 */

//===================================

function sum (a,b){
    return a+b;
}
let arr = [];
for (let i =0 ; i <3; i++){
    arr.push(sum(i, i+1));
}
console.log(arr);
