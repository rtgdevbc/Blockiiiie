// function elCount (string){
//     const obj = {};
//     for(let i=0; i<string.length; i++){
//         const ch = string[i].toUpperCase();
//         if (!obj[ch]){
//             obj[ch]=0;
//         }obj[ch]++;
//     }return obj;
//     // for(let j = 0; )
// }
// let Res = elCount("javaScript");
// console.log(Res);

// function playerHandScore(hand) {
//     const scores = {
//         "K": 4,
//         "Q": 3,
//         "J": 2
//     }
//     const handArr = hand.split("");
//     let sum = 0;
//     for(let i = 0; i < handArr.length; i++) {
//         const score = scores[handArr[i]];
//         sum += score;
//     }

//     return sum;
// }
// console.log(playerHandScore("JQ"));

// const string = "Ravi";
// const stringArr = string.split("");
// console.log(stringArr);

// let age = 9;
// console.log(age || 10);

// let userName = {user : 'Teja'};
// // console.log(userName['user']);
// function uName(Name){
//     return (Name && Name.user);
// }
// console.log(uName());

// function throwError() {
//     throw new Error ("I am throughing an Error!");
// }
// throwError();

// for (let i = 0; i <= 100; i++){
//     if (i%2===0){
//         console.log(i);
//     }
// }
// let name = prompt("Enter your name:");
// console.log(`@${name}${name.length}`);

// const arrowMul = (a, b) => {return a*b;}
// console.log(arrowMul(2, 5));


// function abc(a,b){
//     return [ a*b, b];
// }
// console.log(abc(2,3));
// const arrFn = (a, b) => {return [(b-a)+a, (a-b)-a]};
// console.log(arrFn(10, 2));

// const obj = {
//     firstName: "Ravi",
//     lastName: "Teja",
//     jobStatus: true,
//     exp: 5,
//     skills: ["JavaScript", "HTML", "CSS", "SQL", "Java"],
//     comms: {language: "python"},
//     getDetails: (fName, lName)=>{
//         return (`${fName} ${lName}`);
//     }
// }
// console.log(obj.skills.length);
// console.log(obj.comms.language);
// console.log(obj.getDetails(obj.firstName, obj.lastName));

// const funObj = {
//     firstName: "Ravi",
//     lastName: "Gunda",
//     getDetail: ()=>{
//         return (`${this.firstName} ${this.lastName}`);
// }
// }
// console.log(funObj.getDetail());

// const squareRoot = (a)=> {return a*a;}
// console.log(squareRoot(12));

const squareRoot = (a)=> console.log(a*a);
squareRoot(12);
