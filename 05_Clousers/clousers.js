function india(){
    let help = "India helped me";
    // function maldives (){
    //     // console.log(help);
    //     return help;
    // }
    // // maldives();
    // return maldives;
    return function maldives (){
        // console.log(help);
        return help;
    }
}
let china = india();
//console.log(china());
// china();

//----------------------setTimeout-------------------------------------------------
// setTimeout(function (){
//     console.log(`1. ${china()}`);
// },3000);
// setTimeout(function (){
//     console.log(`2. ${china()}`);
// },2000);
// setTimeout(function (){
//     console.log(`3. ${china()}`);
// },1000);
// for(let i = 0; i<3; i++){
//     setTimeout(function(){
//         console.log(`${i+1}. ${china()}`);
//     },(i+1)*1000);
// }
// var i = 1;
// for (var i = 0; i<3; i++){
//     setTimeout(function (){
//         console.log(i);
//     },(i+1)*1000);
// }

//==========================IIFE solution to the closure and setTimeout problem=====

for (var i = 0; i < 3; i++) {
    (function (index) {
        setTimeout(function () {
            //console.log(index);
        }, (index + 1) * 1000);
    })(i);
}


//console.log(i+"outside");

// function heavyLoad(i) {
//     const bigArr = Array(2000).fill('☀️');
//     console.log(bigArr[i]);
// }
// heavyLoad(100);
// heavyLoad(300);
/**
 * here everytime I was calling the heavyLoad function every time array was creating and initializing the data 
 * hence to avoid it I am using closures 
 * one time I will initialize the array and every time I will use that array ref for future use
 * 
 */
function heavyLoad(i) {
    const bigArr = Array(2000).fill('☀️');
    console.log('test');
    return function (){
        console.log(bigArr[i]);
    }
    
}
//const checkTheValue = heavyLoad(100);
// checkTheValue(200);
// checkTheValue(300);
// heavyLoad(100);



