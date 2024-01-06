// JavaScript code​​​​​​‌​‌​​‌​​‌​​​‌​​​‌‌​​‌‌​‌​ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
// const showExpectedResult = true;
// const showHints = true;

// const bookTitle = "Alice's Adventures in Wonderland"
// const bookAuthor = "Lewis Carroll"
// const bookPubYear = 1865
// const bookISBN = 9798369203415

// Your code goes here

function Book(title,author,publicationYear,ISBN)
{
    this.bookName=title,
    this.bookAuthor=author,
    this.publicationYear=publicationYear,
    this.ISBN=ISBN
};
const newBook = new Book("Ramayanam", "valmiki", "3500 BC", null);
//console.log(newBook);

//=====================================================================

function Mobile (name, processor, sResolution, led){
    this.mobileName = name;
    this.processor = processor;
    this.screenType = {
        resolution : sResolution,
        sType : led
    };
}
const onePlus = new Mobile ("onePlus", "SD-8 Gen3", 2160, "Q-O LED");
// console.log(onePlus);

//  const content = `
//  <h1> ${onePlus.mobileName}</h1>
//  <ul>
//      <li>processor: ${onePlus.processor}</li>
//      <li>screen details: </li>
//      <ol>
//          <li>screen resolution: ${onePlus.screenType.resolution}</li>
//          <li>screen type: ${onePlus.screenType.sType}</li>
//      </ol>
//  </ul>
//   `;
// document.body.innerHTML = content;

const year = 1960;
const getCurrentYear = () => new Date().getFullYear();
const cameraAge = (year) => getCurrentYear() - year;

//console.log(typeof cameraAge());
//console.log(getCurrentYear());
//console.log(2024-1960);
//const getCurrentYear1 = () => new Date();
//console.log(Number (getCurrentYear1().getFullYear()));


//=====================================================================

//obj.y(); //refere to obj itself output: MSD
// 21:11 🔑 "call," "apply," and "bind" are important functions used to manipulate the value of "this" when calling methods and sharing them between objects.
// can be used to manipulate the this keyword 
const obj2 = {
    x : 'Dhoni',
}
//obj.y.call(obj2); //Dhoni

// 39:59 🔑 Inside an object's method, 'this' refers to the object itself.
// 44:12 🔑 The 'call' method can be used to invoke a function with a specific 'this' context.
// 46:01 🔑 Arrow functions do not have their own 'this' binding and take the value of the enclosing lexical context.
const obj3 = {
    x : 'MS DHONI',
    y : () => {
        //console.log(this);
    }
}
obj3.y(); //window obj (arrow function don't have this binding this value will be enclosing lexical context)
// 48:46 🔑 In the context of DOM elements, 'this' refers to the specific HTML element being interacted with.
// <button onclick="alert(this)">Click Me </button>


//=====================================================================

/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bike = {
    bikeName : "TVS iQube",
    color : "Titanium Grey",
    batteryCapacity : "2.5kW",
    chargingTime : 4.5,
    seat : {
        capacity: 2,
        seatCover : "leather"
    },
    startBike: function (){
       // console.log(`Bike name is ${this.bikeName}, color is ${bike.color} and its seat capacity is ${this.seat.capacity}`);
    },
    chargingStatus : false,
    changeCharginStatus : function (status){
        this.chargingStatus = status;
    }
}
//console.log(bike);
// let startStatus = bike.startBike();
//console.log(startStatus);

bike.startBike();
//console.log(`charing status earlier:  ${bike.chargingStatus}`);
bike.changeCharginStatus(true);
//console.log(`charing status now: ${bike.chargingStatus}`);



//=====================================================================

/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */
const technology = {
    name : "Rama",
    techName : "Blockchain Technology",
    isCentralized : false,
    techUses : {
        network : "peer to peer",
        hashFunction: "SHA256",
    },
    webTech : function (tName, network){
        this.techName = tName;
        this.techUses.network = network;
    },
    switchToOwnership : function (ownership){
        this.isCentralized = ownership;
    },
    changeOfHashing : function (hashMethod){
        this.techUses.hashFunction = hashMethod;
    }
};
//console.log(`current technology is ${technology.techName} which uses ${technology.techUses.network} network and ${technology.techUses.hashFunction} technologies`);
//technology.webTech("FullStack", "TraditionalDB"); 
technology.switchToOwnership(true);
technology.changeOfHashing("SHA512");
//console.log(`current technology is ${technology.techName} which uses ${technology.techUses.network} network and ${technology.techUses.hashFunction} technologies`);

//to delete a property of an obj 

delete technology.techUses['hashFunction'];
//console.log(technology.techUses);

//creating function(object) outside the obj which are still accessable to the obj.

technology.greeting = function() {
    //console.log(`Hello ${technology.name}...!`);//can access the obj properties outside the obj too
}

technology.greeting();

//console.log(technology.greeting);



//=====================================================================

//singleton obj

//const tinderUser = new Object();

const tinderUser = {}; //obj literals
//console.log(tinderUser);

//properties declaring for the obj outside it

tinderUser.userName = 'tRavi';
tinderUser.userId = 7;
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

//nested objects inside the objs

const regularUser = {
    email : "user@email.com",
    fullName : {
        userFullName : {
            firstName : 'Ravi',
            lastName : 'Teja',
        }
    }
}

// console.log(regularUser);//whole obj access
// console.log(regularUser.fullName);//access to fullName value
// console.log(regularUser.fullName.userFullName);//access to userFullName value
// console.log(regularUser.fullName.userFullName.lastName); //access to nested value

//+++++++++++++++++++++ OBJECTS MERGE +++++++++++++++++++++++++++
const ob1 = {1: 'a', 2: 'b'};
const ob2 = {3: 'a', 4: 'b'};

//const ob3 = {ob1, ob2};
//console.log(ob3);

//OUTPUT : { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'a', '4': 'b' } }


const ob3 = Object.assign(ob1, ob2);
//above case ob1 and ob3 both are same after the execution 
//console.log(ob3 === ob1); //true;

//console.log(ob3);
//OUTPUT { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const ob3 = Object.assing(target, source);
const ob4 = Object.assign({}, ob1, ob2); //adding empty obj in the target will make sure that all the source objs will get merged into target empty obj
//{} is target obj (here it is empty obj) and ob1 & ob2 are source which will be merged into target ob ({})
//console.log(ob4);
//OUTPUT { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//++++++++++++++++++++++++++ MERGE WITH SPREAD OPERATOR +++++++++
// ++++++=======++++ MOST USED METHOD FOR MERGING OBJECTS ++++====+++++
const ob5 = {...ob1, ...ob2}
//console.log(ob5);
//OUTPUT { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//=============from database we get data in ArrayOfObjects ==========

const users = [
    {id : 1,
    email: 'user1@email.com'
    },
    {id : 2,
        email: 'user2@email.com'
    }
]

//console.log(users[1]); 
//accessing element from array which is now obj { id: 2, email: 'user2@email.com' }
//console.log(users[1].email);
//after accessing array element which is obj then we can use all the obj properties 

//RETREIVING ALL THE KEY, VALUES

//console.log(Object.keys(ob1)); //returns keys in an array format
//[ '1', '2', '3', '4' ]

//console.log(Object.values(ob1)); //Returns an array of values of the enumerable properties of an object
//returns values in an array format
//[ 'a', 'b', 'a', 'b' ]
//will be usefull for looping through the keys and values for usefull operations

const objKeys = Object.keys(ob1);
for (let i = 0; i<objKeys.length; i++){
    //console.log(`key ${objKeys[i]} is objects ${i+1} key`);
}

//++++++++ ENTRIES +++++++++++++++++++++

//console.log(Object.entries(ob1));

//[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'a' ], [ '4', 'b' ] ]

//array's 1st element called key and 2nd element called value

//++++++++ TO CHECK THE PRESENCE OF PROPERTY OF AN OBJ++++++++

//console.log(ob1.hasOwnProperty('4'));
//true

//console.log(ob1.hasOwnProperty('ravi'));//false




