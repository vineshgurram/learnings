// Write a function that counts how many properties are in an object.

const student = {
    name: "Vinesh",
    age: "24",
    marks: {
        english: "40",
        maths: "45",
        science: "40",
        socialScience: "40",
    },
    passOrFail: "pass",
};

function numberOfProperty(object){
let number = Object.keys(object).length;
return number;
}

console.log(numberOfProperty(student));