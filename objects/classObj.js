class Kitchen {
    constructor (stove, baking, fridge, utensils)
    {
        this.stove = stove;
        this.baking = baking;
        this.fridge = fridge;
        this.utensils = utensils;
    };
    toChangeUtensils(newUtensils){
        this.utensils = newUtensils;
    };
    
}

export default Kitchen;