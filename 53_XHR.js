// XMLHttpRequest
// fetch
// axios

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

console.log(xhr);

xhr.open("GET",URL);

console.log(xhr.readyState);

// using on ready state change

// xhr.onreadystatechange = function(){
//     if(xhr.readyState ===  4){
//         const response = xhr.response;
//         // console.log(response);
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(typeof data);
//     }
// }



// using on load

xhr.onload = function(){
    const response = xhr.response;
    
    // console.log(response);

    const data = JSON.parse(response);

    console.log(typeof data);
    console.log(data);
}


xhr.send();