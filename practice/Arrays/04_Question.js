// 4. Remove duplicates from an array.

const myArray = [5, 4, 5, 8, 0,4,0];

// easiest way - using set

// function duplicatesArray(arr){
//     let noDuplicateArray = [...new Set(arr)]
//     return noDuplicateArray;
// }

function duplicatesArray(arr){
    let result = [];
    let seen = {};

    for(let ele of arr){ 
        if(!seen[ele]){// 5
            seen[ele] = true;
            result.push(ele);
        }
    }
    return result
}

// console.log(duplicatesArray(myArray));
console.log(duplicatesArray(myArray));