console.log("iteration in object");

let person = {
    name : "Vinesh",
    age : 24,
    isDeveloper : true,
};

for(let key in person){
    // console.log(person[key]);
    console.log(`${key} : ${person[key]}`);
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

for(let key of Object.keys(person)){
    console.log(person[key]);
}

