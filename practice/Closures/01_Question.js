// Create a function createCounter() that returns an inner function which increases a counter every time it is called.

// Expected Output 
// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

function createCounter(){
    let counter = 1;
    return function(){
        return counter++;
    }
}


const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
