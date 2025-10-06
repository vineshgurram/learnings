// Async Await X promise X fetch

const URL = "https://jsonplaceholder.typicode.com/postss";

async function getData(){
    const dataFetch = await fetch(URL);
    if(!dataFetch.ok){
        throw new Error("Something went wrong");
    }
    const dataResponse = await dataFetch.json();    
    return dataResponse;
}

getData()
.then(res => console.log(res))
.catch(err => console.log(err))