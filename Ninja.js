class Ninja {
    constructor(name){
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.force = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("health: ", this.health, "\nspeed: ", this.speed, "\nforce: ", this.force);
    }
    drinkSake (){
        this.health += 10;
    } 
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

