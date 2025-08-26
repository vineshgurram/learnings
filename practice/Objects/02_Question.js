// Add a new property grade to student.

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

// property - key and value

// student.grade = "A+";
student["grade"] = "A+";

console.log(student);