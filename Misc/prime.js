let count = 0;
let num = 209;
for (let i = 2; i<(Math.ceil(num/2)); i++){
    if (num%i==0){
        count++;
    }
    if (count > 0){
        console.log(`${num} is not a prime number`);
        // console.log(i);
        // console.log(num/i);
        // console.log(count);
        break;
    }
}
if (count == 0){
    console.log(`${num} is a prime number...! hurray`);
   }

