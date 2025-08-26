// 2. Write a function that checks if an array has duplicate elements using a Set.

const arr = [10, 20, 30, 40, 40, 20];

function checkDuplicateInArray(arr) {
    const newSet = [...new Set(arr)];
    return newSet.length === arr.length ? "there is no duplicates" : "there is duplicates"
}

console.log(checkDuplicateInArray(arr));