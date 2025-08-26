const company = {
    name: "TechCorp",
    employees: {
        emp1: {
            name: "Vinesh",
            age: 24,
            skills: ["HTML", "CSS", "JavaScript"]
        },
        emp2: {
            name: "Raj",
            age: 26,
            skills: ["React", "Node.js", "MongoDB"]
        }
    },
    location: "Mumbai"
};

// Print the name of the second employee.

// Print the second skill of the first employee.

// Add a new property experience: "2 years" to emp1.

// Count how many employees are in the company.

// List all skills of all employees in a single array.

console.log(company["employees"]["emp2"]["name"]);

console.log(company["employees"]["emp1"]["skills"][1]);

company["employees"]["emp1"]["experience"] = "2 years";

console.log(company["employees"]["emp1"]["experience"]);

console.log(Object.keys(company["employees"]).length);

const skillArray = [];

for (let key in company.employees) {
    skillArray.push(...company["employees"][key]["skills"]);
}

console.log(skillArray)