// ITERABLES
// An iterable is any object in JavaScript
// for...of
// sets string and arrays 

const arr = [1,2,3,4];
let string = "string";

for(let item of arr){
    console.log(item);
}

for(let letter of string){
    console.log(letter);
}

// ARRAY LIKE OBJECTS
// can be used .length
// can be access using index
// example string

console.log(string[0])