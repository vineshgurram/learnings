console.log(this);
function myFunc(){
    // "use strict" // after using "this" get undefined
    console.log(this);
}

myFunc();


const user = {
    name : "Vinesh",
    age : 23,
    about : function(){
        console.log(this.name,this.age)
    }
}

user.about();