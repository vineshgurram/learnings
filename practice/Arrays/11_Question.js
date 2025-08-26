// 11. Flatten a nested array
// Example: [[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]

const arr = [[1, 2], [3, 4], [5]];

// const result = [];

// for(let element of arr){
//     for(let i of element){
//         result.push(i);
//     }
// }

// console.log(result);


const result = arr.reduce((acc,cuv)=>{
    return acc.concat(cuv)
},[]);

console.log(result);    