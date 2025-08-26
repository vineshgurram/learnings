// 7. Merge two arrays into one.

const myArray1 = [5, 4, 5, 8, 0, 4, 0];
const myArray2 = [3,2,8,9,0];

function mergeTwoArrays(arr1,arr2){
    const mergedArray = [].concat(arr1,arr2)
    return mergedArray;
}

// function mergeTwoArrays(arr1,arr2){
//     const mergedArray = [...arr1,...arr2];
//     return mergedArray;
// }



console.log(mergeTwoArrays(myArray1,myArray2));


// Merge two arrays and return a new array with only unique elements.

function mergedArraysInUnique(arr1,arr2){
    const mergedArray = [...arr1,...arr2];
    const seen = {};
    const result = [];

    for(let ele of mergedArray){
        if(!seen[ele]){
            console.log(ele)
        }
    }
    return mergedArray
}

mergedArraysInUnique(myArray1,myArray2);

