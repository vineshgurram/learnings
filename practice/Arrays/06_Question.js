// 6. Count how many times an element appears in an array.

const myArray = [5, 4, 5, 8, 0, 4, 0];

function countElementRepeatInArray(arr, el) {
    let count = 0;
    for (let i of arr) {
        if (i === el) {
            count++;
        }
    }
    return count
}

// Count occurrences of all elements in one go
function countElementInArray(arr){
    let obj = {};
    for(let i of arr){
        obj[i] = (obj[i] || 0) + 1;
    }
    return obj;
}


console.log(countElementRepeatInArray(myArray, 5));
console.log(countElementInArray(myArray));