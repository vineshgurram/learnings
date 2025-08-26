console.log("new");

// called as construcor function
// while creating constructor function name should be Captialize
function CreateUserObject(userFName, userLName, age, address) {;
    this.userFName = userFName;
    this.userLName = userLName;
    this.age = age;
    this.address = address;
}

CreateUserObject.prototype.about = function () {
    console.log(`${this.userLName} ${this.userFName}`);
}

CreateUserObject.prototype.eligible = function () {
    console.log(this.age >= 18);
}

CreateUserObject.prototype.message = function () {
    console.log(`Hi, ${this.userFName}`);
}
// console.log(CreateUserObject.prototype);


const user1 = new CreateUserObject("Vinesh", "Gurram", 23, "my address");
const user2 = new CreateUserObject("Saiprasad", "Ganji", 5, "my address");

// new
// create a empty object
// Set the prototype of that object
// return  object

user1.about();
user1.message();
user1.eligible();

// user2.about();
// user2.message();
// user2.eligible();