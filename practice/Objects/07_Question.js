// Convert an object into an array of key-value pairs.

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

// method 1 
// const studentKeyValues = Object.entries(student);

// method 2
const studentKeyValues = [];
for(let key in student){
studentKeyValues.push([key,student[key]]);
}

console.log(studentKeyValues)