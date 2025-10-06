const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL).then(response =>{
  if(response.ok){
    return response.json();
  }
  else{
    throw new Error("cannot fetch");
  }
})
.then(data =>{
    console.log(data);
}).catch(error =>{
    console.log(error);
});