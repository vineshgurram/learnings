// Level 2 – Prototype Inheritance

// Create a constructor Animal(type) with a method eat().

// Create another constructor Dog(name) that should inherit from Animal.

// Add a method bark() to Dog.


class Animal{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    eat(){
        return true? "is eating" : "is not eating"
    }
}

class Dog extends Animal{
    constructor(name,age,breed){
        super(name,age);
        this.breed= breed;
    }

    bark(){
        return "Barking";
    }
}

const elephant = new Animal("Elephant",40);
console.log(elephant.eat());

const dog = new Dog("Tommy", 3, "Labrador");
console.log(dog.bark())