// Extend Car into ElectricCar

class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    getDetails() {
        return `${this.brand} ${this.model} ${this.price}`;
    }
}


class ElectricCar extends Car {
    goodForDrive(){
        return true?"it is good for drive":"not good for drive"
    }
}

const altrozEv = new ElectricCar("TATA", "Altroz EV", 60000);

console.log(altrozEv);
console.log(altrozEv.getDetails());
console.log(altrozEv.goodForDrive());