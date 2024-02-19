function maxMul (divisor, bound){
    for(let i = 1; i<= bound; i++ ){
        // let num = divisor * i;
        if((divisor*i)>bound){
            
            return (divisor*i)-divisor;
        }
    }
    // return num;

}
// console.log(maxMul(3, 10));


function maxMul1(divisor, bound ){
    const remainder = bound % divisor;
    return bound - remainder;
}
console.log(maxMul(6,10));
