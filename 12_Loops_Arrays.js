// for of loops

// let fruits = ["apple","mango","banana"];
// let fruits2 = [];
// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }

// console.log(fruits);
// console.log(fruits2);


// for in loops

let fruits = ["apple","mango","banana"];
let fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}

console.log(fruits2);