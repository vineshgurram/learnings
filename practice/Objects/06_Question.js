// Merge two objects into one.

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

const studentDetail = {
    rollNo : 1,
    address : "Mumbai",
    Intial : "G"
};


// const studentFullInfo = {...student, ...studentDetail};

const studentFullInfo = Object.assign({},student,studentDetail); // older method

console.log(studentFullInfo);