// for each -- used for iterating elements like loops

const myArray = [0,1,22, 7,5, 4, 3, 2];

// const squareMyArray = [];
// myArray.forEach((element,index)=>{
//     squareMyArray.push(element*element);
// });

// console.log(squareMyArray);

// map()

// Creates a new array by applying a function to each element.
// Does not modify original array.

const squareMyArray= myArray.map(element=>{
    return element*element
});

console.log(squareMyArray);

const evenMyArray = myArray.filter(element=>{
    return element%2==0
});

console.log(evenMyArray);


const arr = [1,2,3,4,5];

arr.forEach(item =>{
    console.log(item*item);
});


const squreArr= arr.map(function(item){
    return item*item;
});

console.log(squreArr);

const evenArr=arr.filter(function(item){
    return item % 2 ==0;
});

console.log(evenArr);


const sumArr = arr.reduce(function(acc,cur){
    return acc + cur;
});

console.log(sumArr);

const findElement = arr.find(element =>{
    return element%10==0;
});

console.log(findElement);

const someElement = arr.some(element => element%2==0);
console.log(someElement);

const everyElement = arr.every(element => element%2==0);
console.log(everyElement);

const sortElement = arr.sort((a,b) => b - a);
console.log(sortElement);


