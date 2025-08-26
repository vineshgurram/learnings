console.log("class");

class Animal{
    constructor(name,age,animalType){
        this.name= name;
        this.age= age;
        this.animalType= animalType;
    }

    about(){
        console.log(`${this.name} in zoo is ${this.age} years old and it is ${this.animalType}`);
    }
}

const animal1 = new Animal("Elephant","20","Herbivrous");
console.log(animal1);
animal1.about();