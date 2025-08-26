// Object destructing

let obj = {
    name : "Vinesh",
    age : 24,
    surname : "Gurram"
}

// easiest way 
let {name, age} = obj; 

// set a custom variable name
// let {name:firstName, age: userAge} = obj;          
console.log(name);
console.log(age);

// console.log(firstName);
// console.log(userAge);