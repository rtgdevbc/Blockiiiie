setTimeout(function(){
    console.log("Timer");
},5000);
function x (y){
    console.log('X');
    y();
}
x(function (){
    console.log("y");
});
