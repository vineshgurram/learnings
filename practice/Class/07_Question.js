// Level 4 – Chaining Inheritance

// Create a base constructor Vehicle(type) with method start().

// Extend it into Car(brand, model).

// Extend Car into ElectricCar(brand, model, battery).

// Ensure each level adds its own method.

class Vehicle {
    constructor(type) {
        this.type = type;
    }

    start() {
        return "Vehicle started";
    }
}

class Car extends Vehicle {
    constructor(type, brand, model) {
        super(type);
        this.brand = brand;
        this.model = model;
    }

    drive() {
        return `${this.brand} ${this.model} is driving`;
    }
}

class ElectricCar extends Car {
    constructor(type, brand, model, battery) {
        super(type, brand, model);
        this.battery = battery;
    }

    charge() {
        return `${this.brand} ${this.model} is charging with ${this.battery} battery`;
    }
}

const altrozEV = new ElectricCar("Achback", "TATA", "Altroz", "Good");
console.log(altrozEV);
console.log(altrozEV.start());
console.log(altrozEV.drive());
console.log(altrozEV.charge());