// 3. Sum all numbers in an array.

const myArray = [5, 4, 5, 8, 0];

function sumOfNumbers(arr) {
    let sum = 0;

    for (let ele of arr) {
        sum += ele;
    }

    return sum;
}



console.log(sumOfNumbers(myArray));