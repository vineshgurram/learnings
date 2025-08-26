// // object proto

// const userMethods = {
//     about: function () {
//         console.log(`${this.userLName} ${this.userFName}`);
//     },
//     eligible: function () {
//         console.log(this.age >= 18);
//     },
//     message: function () {
//         console.log(`Hi, ${this.userFName}`);
//     }
// }

// function createUserObject(userFName, userLName, age, address) {
//     // const user = {}; instead of using this we can inherit method from userMethods using this "Objet.create()"
//     const user = Object.create(userMethods);
//     user.userFName = userFName;
//     user.userLName = userLName;
//     user.age = age;
//     user.address = address;
//     /*
//     This is not a to create object and its method due to size of memory

//     user.about = function(){
//         console.log(`${this.userLName} ${this.userFName}`);
//     }
//     user.eligible = function(){
//         console.log(this.age >= 18);
//     }
//     user.message = function(){
//         console.log(`Hi, ${this.userFName}`);
//     }
//     */

//     /*
//      still there is some problem
//     user.about = userMethods.about;
//     user.eligible = userMethods.eligible;
//     user.message = userMethods.message;
//     __proto__ and [[prototype]] are same 
//     */
//     return user
// }

// const user1 = createUserObject("Vinesh", "Gurram", 23, "my address");
// const user2 = createUserObject("Saiprasad", "Ganji", 25, "my address");

// console.log(user1);
// user1.about();
// user1.eligible();
// user1.message();

// console.log(user2);
// user2.about();
// user2.eligible();
// user2.message();

// const usersFunctions = {
//     about: function () {
//         return `Our Student name is ${this.name} he stays at ${this.address}`;
//     },
//     greetings: function (greetings) {
//         return `${greetings}, ${this.name}`;
//     }
// }

// LETS HAVE A QUICK REVISION OF CONSTRUCTOR FUNCTIONS
// LETS START
function cObject(name, age, address= "India") {
    // const obj = Object.create(cObject.prototype);
    this.name = name;
    this.age = age;
    this.address = address;
}
// When you call it with new, JavaScript automatically:
// 1. Creates an empty object {}.
// 2. Links it to cObject.prototype (so the new object can access prototype methods).
// 3. Sets this inside the function to point to that new object.
// 4. Returns the new object.

cObject.prototype.about = function (greetings) {
    return `Our Student name is ${this.name} he stays at ${this.address}`;
}

cObject.prototype.greetings = function (greetings) {
    return `${greetings}, ${this.name}`;
}
// 5. Both methods are attached to cObject.prototype.
// 6. That means all objects created with new cObject(...) share the same functions in memory instead of copying them for each object.

const vamshiObj = new cObject("Vamshi", 23, "myaddress");
console.log(vamshiObj);
console.log(vamshiObj.about());
console.log(vamshiObj.greetings("Hello"));
console.log("");

const saiObj = new cObject("Saiprasad", 24, "my address");
console.log(saiObj);
console.log(saiObj.about());
console.log(saiObj.greetings("Hi"));
console.log("");

const vighneshObj = new cObject("Vighnesh", 23, "my address");
console.log(vighneshObj);
console.log(vighneshObj.about());
console.log(vighneshObj.greetings("Hey"));

// 7. Each object gets its own name, age, address but they share the methods from the prototype.
