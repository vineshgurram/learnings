// Create a constructor Car with properties: brand, model, price.

// Add a method getDetails using prototype that prints Brand: Tesla | Model: X | Price: 50000.

// Create two different car objects and test if they share the same method reference.

// (Hint: console.log(car1.getDetails === car2.getDetails) should be true)


class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    // getDetails() {
    //     return `${this.brand} ${this.model} ${this.price}`;
    // }
}

Car.prototype.getDetails = function () {
    return `${this.brand} ${this.model} ${this.price}`;
}

const tesla = new Car("Tesla", "X", 50000);
console.log(tesla);
console.log(tesla.getDetails());

const suzuki = new Car("Suzuki", "Jimny", 600000);
console.log(suzuki);
console.log(suzuki.getDetails());

console.log(tesla.getDetails === suzuki.getDetails)