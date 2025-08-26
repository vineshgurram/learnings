// Create an object student with name, age, marks and print it.
// print this too : "Vinesh scored 45 in Maths and his overall result is pass."

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


console.log(student);

// using dot notation
console.log(`${student.name} scored ${student.marks.maths} in Maths and his overall result is ${student.passOrFail}.`);

// using bracket notation
console.log(`${student["name"]} scored ${student["marks"]["maths"]} in Maths and his overall result is ${student["passOrFail"]}.`);