// 5. Check if an element exists in an array.

const myArray = [5, 4, 5, 8, 0,4,0];

// function elementPresent(arr,ele){
//     return arr.includes(ele) ? `${ele} is pressent`: `${ele} is not present`
// }

function elementPresent(arr,ele){
    for(let i of arr){
        if(i == ele){
            return `${ele} is present`;
        }
        // console.log(i)
    }
    return `${ele} is not present`;
}

console.log(elementPresent(myArray,9));