// object pro

const userMethods = {
    about: function () {
        console.log(`${this.userLName} ${this.userFName}`);
    },
    eligible: function () {
        console.log(this.age >= 18);
    },
    message: function () {
        console.log(`Hi, ${this.userFName}`);
    }
}

function createUserObject(userFName, userLName, age, address) {
    // const user = {}; instead of using this we can inherit method from userMethods using this "Objet.create()"
    const user = Object.create(userMethods);
    user.userFName = userFName;
    user.userLName = userLName;
    user.age = age;
    user.address = address;
    /*
    This is not a to create object and its method due to size of memory

    user.about = function(){
        console.log(`${this.userLName} ${this.userFName}`);
    }
    user.eligible = function(){
        console.log(this.age >= 18);
    }
    user.message = function(){
        console.log(`Hi, ${this.userFName}`);
    }
    */

    /*
     still there is some problem
    user.about = userMethods.about;
    user.eligible = userMethods.eligible;
    user.message = userMethods.message;
    __proto__ and [[prototype]] are same 
    */
    return user
}

const user1 = createUserObject("Vinesh", "Gurram", 23, "my address");
const user2 = createUserObject("Saiprasad", "Ganji", 25, "my address");

console.log(user1);
user1.about();
user1.eligible();
user1.message();

console.log(user2);
user2.about();
user2.eligible();
user2.message();