// Create an object with a method and call it.

const newObject = new Object();
Object.assign(newObject, { name: "Vinesh" }, { age: 24 }, {
    marks: {
        english: "40",
        maths: "45",
        science: "40",
        socialScience: "40",
    }
}, { passOrFail: "pass" },{greet: function(){
     console.log("Hello my name is Vinesh")
}});
console.log(newObject);
newObject.greet();