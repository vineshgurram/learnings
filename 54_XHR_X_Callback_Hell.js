// xhr X callback hell

const xhr = new XMLHttpRequest();
const URL = "https://jsonplaceholder.typicode.com/posts";

xhr.open("GET", URL)

xhr.onload = () =>{
    if(xhr.status >= 200 && xhr.status < 300){
        const response = xhr.response;
        const data = JSON.parse(response);
        
        console.log(data);
        console.log(typeof data);
        
        const xhr2 = new XMLHttpRequest();
        xhr2.open("GET",`${URL}/2`);
        xhr2.send();

    }
    else{
        console.log("something went wrong");
    }
}

xhr.onerror = ()=>{
    console.log("network error");
}

xhr.send();