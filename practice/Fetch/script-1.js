// using xhr

const xhr = new XMLHttpRequest();
const URL = "https://handlers.education.launchcode.org/static/planets.json";
const root = document.getElementById("root");

xhr.open('GET',URL);

xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        console.log(typeof data);
        console.log(data)
        
        data.map((e)=>{
            root.innerHTML += `<div><img src='${e.image}' alt='${e.name}'><h2>${e.name}</h2></div>` 
        })
    }
}

xhr.onerror = function(){
    console.log("some network error");
}

xhr.send();

// console.log(data)
