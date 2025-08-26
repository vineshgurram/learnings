// Count how many times each letter appears in a string and store it in an object.

// console.log(letterCount);

function countStringLetter(str){
    let letterCount = {};
    for(let char of str){
        // console.log(char);
        if(char !== " "){
            char = char.toLowerCase();
            letterCount[char] = (letterCount[char] || 0) +1;
        }
    }
    return letterCount
}

let string = "My name is Vinesh";
console.log(countStringLetter(string));