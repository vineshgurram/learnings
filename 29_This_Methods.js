// call () - calling a function

// function greet(greeting){
//     console.log(`${greeting}, ${this.name} your age is ${this.age}`);
// }

// const user = {
//     name  : "Vinesh",
//     age : 23
// };

// greet.call(user,"Good Morning")

// const user1 = {
//     name : "Vamshi",
//     age : 23,
//     about : function(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`)
//     }
// }

// const user2 = {
//     name : "Sai",
//     age : 25,
// }


// user1.about.call(user2);



// apply() - same as call but uses array
// function about1(hobby,favSports){
//     console.log(hobby,favSports);
// }

// about1.apply(user2,["Reading","Cricket","Hello"]);


// bind() - doesn't call immediately

// function print(greeting){
// console.log(`${greeting}, My name is ${this.name} and age is ${this.age}`);
// }

// const user = {
//     name : "vinesh",
//     age : 23
// }

// const bindUser = print.bind(user,"Hello");

// bindUser();


// function add(a,b){
//     return a + b;
// }

// function sum(){
//     return add.call(this,5,10);
// }

// console.log(sum());