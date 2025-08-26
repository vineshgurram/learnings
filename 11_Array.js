// Arrays - collections of element
// ordered collections of items

let fruit = ["apple","mango","banana"];
console.log(fruit);

// how to clone array

// slice method
// let fruit2 = fruit.slice(0);

// concat method
let fruit2 = [].concat(fruit);

// spread operator 
// let fruit2 = [...fruit,"grapes","pineapple"];


console.log(fruit2);


fruit.push("new fruit");
console.log(fruit);
console.log(fruit2);


let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4)
console.log(arr1);
console.log(arr2);