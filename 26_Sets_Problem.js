const arr = [1, 2, 2, 3, 4, 4, 5];


// remove duplicate
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);


// check all values are unique 
function uniqueValues(){
    return arr.length === new Set(arr).size;
}

console.log(uniqueValues());


// check if element is present
let mySet = new Set([1,2,3,4,5]);
console.log(mySet.has(3));
mySet.delete(3);
console.log(mySet);