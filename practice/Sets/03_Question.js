// Find the common elements between two arrays using Set.

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

function commonElementInArray(arr1,arr2){
    const set2 = new Set(arr2);
    return arr1.filter(num => set2.has(num));
}

console.log(commonElementInArray(a,b))
