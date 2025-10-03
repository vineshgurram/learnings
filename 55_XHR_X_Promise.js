// promise X xhr

const URL = "https://jsonplaceholder.typicode.com/posts";

function httpRequest(method,url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () =>{
            // console.log(xhr.response);
            
            if(xhr.status >= 200 && xhr.status < 300){
                const response = xhr.response;
                // const data = JSON.parse(response);
                resolve(response);
            }else{
                reject("something went wrong");
            }
        }
        xhr.send();        
        
        xhr.onerror = () =>{
            console.log("network issue");
        }
    })
}

httpRequest("GET",URL)
.then(data => {
    // console.log(data);
    return JSON.parse(data);
})
.then(data =>{
    const id = data[1].id;
    return id;
})
.then(id =>{
    const URL2 = `${URL}/${id}`;
    const response = httpRequest("GET",URL2);
    return response;
})
.then(response =>{
    const newData = JSON.parse(response);
    console.log(newData);
})
.catch((message)=>{
    console.log(message);
})