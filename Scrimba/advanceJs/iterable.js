let incomes = [10000, 25000, 40000];

let total = 0;

for (const income of incomes){
    // console.log(income);
    total += income;
}

// console.log(total);

let name = "Ravi Teja";
let length = 0;
for (const char of name){
    // console.log(char);
    length++;
}
// console.log(`legth of your name "${name}" is: ${length} letters which includes space`);

// R
// a
// v
// i
 
// T
// e
// j
// a
// legth of your name "Ravi Teja" is: 9 letters which includes space



const student = [
    { name : "Ravi", city : "KNL"},
    { name : "Teja", city: "HYD"},
    { name : "Gunda", city: "UnderWorld"}
];

for (const details of student){
    // console.log(`${details.name} lives in ${details.city}`);
}

// Ravi lives in KNL
// Teja lives in HYD
// Gunda lives in UnderWorld