console.log("Array Destructing");

let arr1 = [1,2,3,4,5,6,7,8];
// let [value1, , value2] = arr1;
// console.log(value1);
// console.log(value2);

let [value1, value2, ...remainingValue] = arr1;
console.log(value1);
console.log(value2);
console.log(remainingValue);
