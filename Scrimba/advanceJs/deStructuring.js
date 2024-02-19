const obj = {
    name : "Ravi",
    cls: "JavaScript",
    profession: {
        designation: "JavaScript Full Stack Developer"
    }
}

// console.warn(obj.name);
// console.log(obj.cls);
// console.log(obj.profession.designation);

// const {name, cls, profession: {designation}} = obj;
// console.log("with destructring");
// console.log(name);
// console.log(cls);
// console.log(designation);

function addressMaker ( city, state ) {
    const newAddress = {
        city : city,
        state : state
    };
    console.log(`${newAddress.city}, ${newAddress.state}`);
    console.log(newAddress);
}
addressMaker("KNL", "AP");
//KNL, AP
// { city: 'KNL', state: 'AP' }

//we know that if key and value are same then we can write only variable name as below
function addressMaker1(city, state) {
    const newAddress = {
        city,
        state
    }
    console.log(`${newAddress.city}, ${newAddress.state}`);
    console.log(newAddress);
}
addressMaker1("KNL", "AP");
//KNL, AP
// { city: 'KNL', state: 'AP' }

function addressMaker2( address ) {
    const newAddress = {
        city : address.city,
        state : address.state
    }
    console.log(`${newAddress.city}, ${newAddress.state}`);
    console.log(newAddress);
}
addressMaker2( {city: "KNL", state: "AP"} );
//KNL, AP
// { city: 'KNL', state: 'AP' }

function addressMaker3( address ) {
    const { city, state } = address; //object de-structuring
    const newAddress = {
        city : city,
        state : state
    }
    console.log(`${newAddress.city}, ${newAddress.state}`);
    console.log(newAddress);
}
addressMaker3( {city: "KNL", state: "AP"} );
//KNL, AP
// { city: 'KNL', state: 'AP' }

function addressMaker4( address ) {
    const { city, state } = address; //object de-structuring
    const newAddress = {
        city,
        state
    }
    console.log(`${newAddress.city}, ${newAddress.state}`);
    console.log(newAddress);
}
addressMaker4( {city: "KNL", state: "AP"} );
//KNL, AP
// { city: 'KNL', state: 'AP' }



