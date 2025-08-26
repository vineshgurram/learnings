// Level 1 – Constructors Basics

// 1. What is the difference between a constructor function and a class constructor?

// Answer:

// A constructor function is just a regular function used with new keyword.

// A class constructor introduced in ES6, but internally works the same way.


function Car(brand, model, features) {
    this.brand = brand;
    this.model = model;
    this.features = features;
}

Car.prototype.about = function () {
    return `${this.brand} ${this.model} has a features like ${this.features}`
}

Car.prototype.isSafety = function(){
    return true? "Safe": "Not Safe";
}

const city = new Car("Honda", "city", "ADAS, good ground clearance, Dolby, Atmos Speaker, Sunroof , Good Engine, Rear wheel Drive");
console.log(city);
console.log(city.about());
console.log(city.isSafety());


class Bike{
    constructor(brand, model) {
       this.brand = brand;
       this.model = model; 
    }

    about(){
        return `${this.brand} ${this.model}`;
    }
}

const r15 = new Bike("Yamaha","r15");
console.log(r15);
console.log(r15.about());


