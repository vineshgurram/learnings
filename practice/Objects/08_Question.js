// Create a nested object and access a value inside it.

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

console.log(student.marks.english);
// console.log(student.marks?.history);