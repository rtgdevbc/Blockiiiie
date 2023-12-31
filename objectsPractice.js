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
        console.log(`Bike name is ${this.bikeName} and its color is ${this.color}`);
    }
}
//console.log(bike);
// let startStatus = bike.startBike();
//console.log(startStatus);

bike.startBike();