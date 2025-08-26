// default parameter

// old methods
// function addNumber(a,b){
//     if(b == undefined){
//         b=1;
//     }
//     return a + b;
// }

// new methods
// function addNumber(a,b=1){
//     return a + b;
// }

// console.log(addNumber(2));



// rest parameter
function addNumber(...numbers){
    let sum = 0;
    for(let number of numbers){
        sum = sum + number;
    }
    return sum
}

const answer = addNumber(1,2,3,4,5);
console.log(answer);

