// Check if a string is a palindrome (e.g., madam, racecar).

function stringIsPalindrome(string){
    let reversed = string.split("").reverse().join("");
    return string == reversed;
}

console.log(stringIsPalindrome("madam"));