// FUNCTION X PROMISES
// function returning promises

function myPromiseFunction(){
 return new Promise((resolve,reject)=>{
    if(!true){
        resolve("resolve");
    }
    else{
        reject("reject");
    }
 })
}

myPromiseFunction().then(
    (msg)=> console.log(msg),
    (err)=> console.log(err)
)