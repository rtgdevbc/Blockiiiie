const user = {
    userName : "Ravi",
    price : 777,
    welcomeMessage : function (){
        console.log(`welcome ${this.userName}`); //this referes to current context here current context is user object
        console.log(this);//refer to current context user object
    }
}
//console.log(user);
/**
 * {
    userName: 'Ravi',
    price: 777,
    welcomeMessage: [Function: welcomeMessage]
    }
 */
//user.welcomeMessage();
//welcome Ravi
//console.log(this);// {} empty object, here this is current context which is empty objet refers to window object in browser and empty object in node 

user.userName = "teja";
//user.welcomeMessage();
//welcome teja
//console.log(user);
//   {
//     userName: 'teja',
//     price: 777,
//     welcomeMessage: [Function: welcomeMessage]
//   }

//this inside function

function bro(){
    userName = "brooooo"; //var like it is treating hence able to access 
    //let userName = "broooo";
    console.log(`${this}`); //[object global]
}

//bro(); //brooooo 
//bro()//undefined
let roll = 7 //global variable
const bro1 = function (){
    let userName = "Ravi";
    console.log(`${this.userName} and roll is: ${roll}`);//brooooo coming from top function wherein userName is declared as global which is access from anywhere
}
//bro1();//brooooo
// brooooo and roll is: 7

//inside function this refers to global if any variable available on global which will be available inside function


//++++++++++++++++ -----------> arrow function ----------> ++++++++++++++++++++++

const arrowFun = () => {
    const userName = "teja";
    console.log(`${this.userName}`); //undefined 
    console.log(this); //{}
    console.log(this.roll);//undefined
}
//arrowFun();
//this inside arrow function referes to empty object doesn't even access to global variables

// () => {}
// const variable = () => {}

const addition = (num1, num2) => { //if {} return is must if we use curly braces
    return num1+num2;
}
console.log(addition(3,4)); //7

const addition1 = (num1, num2) => num1+num2; //no return 
console.log(addition1(1,2));
//arrow function with { } should have use return 
//arrow function without { } should not use return 

//objects inside the arrow functions

const objArrow = () => ({userName: "GuestUser"}) //objects need to be wrapped insided paranthesis
console.log(objArrow().userName);//GuesUser (to access values inside arrow function of object)





