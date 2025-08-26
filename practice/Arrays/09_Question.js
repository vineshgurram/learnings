// 9. Sort numbers in ascending and descending order without using .sort() (logic-based).

const myArray = [5, 4, 3, 2];

for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length - i - 1; j++) {
        let temp = myArray[j];
        myArray[j] = myArray[j + 1];
        myArray[j + 1] = temp;
    }
}

console.log(myArray);