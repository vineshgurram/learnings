function square(power){
    return function(number){
        return number ** power;
    }
}

const squareOfNumber = square(2);

console.log(squareOfNumber(2));
console.log(squareOfNumber(4));
console.log(squareOfNumber(6));
console.log(squareOfNumber(7));