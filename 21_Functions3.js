// parameter destructing

const details = {
    firstName : "Vinesh",
    age : 23,
    role : "Front-end Developer"
}

// function printDetail(obj){
//     console.log(obj.firstName);
//     console.log(obj.age);
//     console.log(obj.role)
// }

function printDetail({firstName,age,role}){
    console.log(firstName);
    console.log(age);
    console.log(role);
}

printDetail(details)