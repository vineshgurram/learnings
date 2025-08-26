// 1. Write a function that takes an array of numbers and returns only the unique values.

const nums = [1, 2, 3, 2, 4, 1, 5];

function uniqueValues(arr){
    return [...new Set(arr)];
}

console.log(uniqueValues(nums));