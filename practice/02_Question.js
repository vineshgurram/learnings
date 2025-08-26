//     Swap two variables without using a third variable.

let a = 2;
let b = 4;

console.log(a, "a");
console.log(b,"b");


a = a + b;
b = a - b;
a = a - b;


console.log(a, "a");
console.log(b,"b");