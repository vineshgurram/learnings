console.log("class")

// Create a constructor function Person that takes name and age.

// Add a method sayHi inside the constructor.

// Create two objects using new.

// What problem do you see with defining methods inside the constructor?

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;

        // everytime it creates a new methods for object which takes and consumes lot of memory
        // this.sayHi= function(){
        //     return `Hi, ${this.name}.`
        // }
    }
    
    sayHi(){
        return `Hi, ${this.name}.`
    }
}

const vinesh = new Person("Vinesh",23);
console.log(vinesh);
console.log(vinesh.sayHi());


const saiprasad = new Person("Saiprasad",25);
console.log(saiprasad);
console.log(saiprasad.sayHi());