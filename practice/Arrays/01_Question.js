// 1. Reverse an array without using reverse().

const myArray = [1, 2, 3, 4, 5, 6];

// method 1
// function reverseArray(arr){
//     const reverse = [];
//     for(let i=arr.length-1;i>=0;i--){
//         reverse.push(arr[i]);
//     }
//     return reverse
// }

// method 2 - main
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        // arr[]
        // console.log(end);
        // console.log(start);
        [arr[end],arr[start]] = [arr[start],arr[end]];
        start++;
        end--;
    }
    return arr
}



// console.log(myArray);
// console.log(reverseArray(myArray));
// console.log(myArray.reverse())
console.log(reverseArray([1, 2, 3, 4, 5, 6]))
// reverseArray([1, 2, 3, 4, 5, 6])
