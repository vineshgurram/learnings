let numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);

console.log(numbers);


let elementPresent = numbers.has(3);
console.log(elementPresent);


const arr = [1,2,3,4,5];
numbers.add(arr);
numbers.add(arr);
numbers.add([3,4,5,1,2]);
console.log(numbers);


