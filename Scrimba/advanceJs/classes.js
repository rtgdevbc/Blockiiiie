class Player {
    constructor (name, country){
        this.name = name,
        this.country = country
    }
    playerFunction(name, country){
        console.log(`${this.name} was born in ${this.country}`);
    }
}
class TennisPlayer extends Player {
    constructor (name, age){
        super(name);
        this.age = age;
    };
    tennis (name, age){
        console.log(`${this.name} is ${this.age} years`);
    };
}

const Messi = new Player ("Mbaphe", "France");

Messi.playerFunction();
// TennisPlayer.tennis("Rafel", 25);
const Nadal = new TennisPlayer("nadal", 40);
Nadal.tennis();


