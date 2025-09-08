console.log("Scope Chain");

// The scope chain is the way JavaScript looks for variables.
// If a variable is not found in the current scope
// JavaScript looks in the outer scope
// and keeps going until it reaches the global scope.
// It’s like a chain of levels (local → outer function → global).

var globalVar = "I am global";

function outerFunc(){
    let outerVar = "I am outer";

    function innerFunc(){
        let innerVar = "I am inner";

        console.log(innerVar);
        console.log(outerVar);
        console.log(globalVar);

    }

    innerFunc();
}

outerFunc();