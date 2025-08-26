console.log("function prototype");

// object pro

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

function createUserObject(userFName, userLName, age, address) {
    // const user = {}; instead of using this we can inherit method from userMethods using this "Objet.create()"
    const user = Object.create(createUserObject.prototype);
    user.userFName = userFName;
    user.userLName = userLName;
    user.age = age;
    user.address = address;
    return user
}

createUserObject.prototype.about = function () {
    console.log(`${this.userLName} ${this.userFName}`);
}

createUserObject.prototype.eligible = function () {
    console.log(this.age >= 18);
}

createUserObject.prototype.message = function () {
    console.log(`Hi, ${this.userFName}`);
}
console.log(createUserObject.prototype);


const user1 = createUserObject("Vinesh", "Gurram", 23, "my address");
const user2 = createUserObject("Saiprasad", "Ganji", 5, "my address");

user1.about();
user1.message();
user1.eligible();

user2.about();
user2.message();
user2.eligible();