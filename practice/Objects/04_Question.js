// Check if the property "name" exists in student.

const student = {
    name: "Vinesh",
    age: "24",
    marks: {
        english: "40",
        maths: "45",
        science: "40",
        socialScience: "40",
    },
    passOrFail: "pass"
};

console.log("name" in student);
console.log("ame" in student);