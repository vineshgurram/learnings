// A Map is a collection of key-value pairs (like an object).
// Any type can be a key → string, number, boolean, object, even functions.

let myMap = new Map(); // creating map

myMap.set("name","Vinesh Gurram");
myMap.set("age",22);
myMap.set("address","Ulwe, Navi Mumbai");
myMap.set(true,"boolean is key");
myMap.set({1: "one",2:"two"},"object is key");

// console.log(myMap);

myMap.set("name","Mallesh Gurram");

// console.log(myMap);


for(let [key,value] of myMap){
    console.log(key,value)
}