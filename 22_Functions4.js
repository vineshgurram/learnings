// callback functions 
// also known as higher order function

// function func(a){
//     console.log("func is called");
//     console.log("")
//     a("vinesh");
// }

// function func2(name){
//     console.log("func 2 is called");
//     console.log(`My  name is ${name}`);
// }

// func(func2);


// function returning function

function func(){
    function innerFunc(){
        return "Hello world";
    }
    return innerFunc
}

const newFunc = func();
console.log(newFunc());