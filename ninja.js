//pair programming with Spencer's July Python cohort:Richard, Daisy, Kye, Eric, Anthony

class Ninja{
    constructor(name, health=90, speed=3, strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName(){
        console.log (`The ninja's name is ${this.name}.`);
        return;
    }
    showStats(){
        console.log(`The ninja's name is ${this.name}.`);
        console.log(`The ninja's strength is ${this.strenth}.`);
        console.log(`The ninja's speed is ${this.speed}.`);
        console.log(`The ninja's health is ${this.health}.`);
        return;
    }
    drinkSake(){
        this.health +=10;
        console.log(`The ninja's new health is ${this.health}.`);
        return;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


