// 10. Get only even numbers from an array.

const myArray = [5, 4, 3, 2];

function getEvenNumbers(arr){
    const newArr = [];
    for (let i of arr){
        if(i%2==0){
            newArr.push(i);
        }
    }
    return newArr
}

console.log(getEvenNumbers(myArray));