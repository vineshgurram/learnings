console.log("objects");

// objects are key value pairs
// keys can be strings or symbols
// values can be anything strings, numbers, boolean, arrays, other objects or function

let person = {
    name : "Vinesh",
    age : 24,
    isDeveloper : true,
    greet : function(){
        return "Hello";
    }
};



console.log(person.age);


// create another key and values
person.employmentStatus = "Unemployed";
console.log(person);


// update values
person.employmentStatus = "Employed";
console.log(person);

// dots and bracket notation
console.log(person["name"]);
console.log(person.name);