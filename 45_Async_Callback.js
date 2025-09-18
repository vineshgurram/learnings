// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

// function printAndAddNumbers(number1,number2,callback){
//     console.log(number1,number2);
//     callback(number1,number2);
// }
// printAndAddNumbers(1,"2",addTwoNumbers);


function printAndAddNumbers(number1,number2,callback1,callback2){
    console.log(number1,number2);
    callback1(number1,number2);
    callback2(number1,number2);
}

printAndAddNumbers(1,2,(num1,num2)=>{
    console.log(num1+num2);
},(num1,num2)=>{
    console.log(num1-num2);
})