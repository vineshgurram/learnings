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


// LETS HAVE A QUICK REVISION OF CLASS (I.E ES6 KEYWORD) CONSTRUCTOR WHICH IS SAME AS FUNCTIONAL CONSTRUCTOR UNDER THE HOOD IT IS SAME AS FUNCTIONAL CONSTRUCTOR

class Bike{
    constructor(brand,model,type,average){
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.average = average;
    }

    get about(){
        return `Bike is ${this.brand} its model is ${this.model}. It is a ${this.type}.`;
    }

    mileage(){
        return this.average > 120 ? "It has a good Mileage of "+ this.average + " kmph" : "It has a no good Mileage";
    }
}

const rx100 = new Bike("Yamaha","Rx100","Petrol",100);
console.log(rx100);
console.log(rx100.mileage());
console.log(rx100.about);

const access125 = new Bike("Suzuki","access125","Petrol",150);
console.log(access125);
console.log(access125.mileage());

const active7g = new Bike("Honda","active7g","Petrol",125);
console.log(active7g);
console.log(active7g.mileage());