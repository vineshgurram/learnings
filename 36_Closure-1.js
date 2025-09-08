// A closure is when a function remembers and can access variables from its lexical (outer) scope 
// even after that outer function has returned. 
// It enables private state and powerful patterns like function factories.


function myFuncOne(str){
    let a = "String"; // a - uninitalized
    let b = 12; // b - uninitalized

    function myFuncTwo(){
        console.log(a,b,str);
    }

    return myFuncTwo;
}


const ans = myFuncOne("MyString");

ans();


