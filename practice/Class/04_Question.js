// Create an object animal with a method makeSound.
// Create another object dog using Object.create(animal) and add its own method bark.

// Call both dog.makeSound() and dog.bark().

// Explain how __proto__ is helping here.


function makeSound(animalName, animalAge, animalType){
    const animal = Object.create(makeSound.prototype);
    animal.animalName = animalName;
    animal.animalAge = animalAge;
    animal.animalType = animalType;
    return animal;
}

const elephant = makeSound("Elephant", 20,"Heribivorous");

console.log(elephant)

