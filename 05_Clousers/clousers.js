function india(){
    let help = "India helped me";
    function maldives (){
        // console.log(help);
        return help;
    }
    // maldives();
    return maldives;
}
let china = india();
console.log(china());

//----------------------setTimeout-------------------------------------------------
setTimeout(function (){
    console.log(`1. ${china()}`);
},3000);
setTimeout(function (){
    console.log(`2. ${china()}`);
},2000);
setTimeout(function (){
    console.log(`3. ${china()}`);
},1000);