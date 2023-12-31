let marksArr = [10, 9, 8, 9, 7, 10];
let sum = 0;
let percent = 0;
for (let i =0; i<marksArr.length; i++){
    sum = sum + marksArr[i];
}
console.log(sum);
percent = (sum/(marksArr.length*10))*100;
console.log(percent);
if (percent > 75){
    console.log(`you got distinction`);
}
else if (percent > 65){
    console.log(`you got First Class`);
}
else if (percent > 45){
    console.log(`you got second class`);
}
else {
    console.log(`you are failed try again`);
}