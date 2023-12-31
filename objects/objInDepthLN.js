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
    console.log(`Hello ${technology.name}...!`);//can access the obj properties outside the obj too
}

technology.greeting();

console.log(technology.greeting);


