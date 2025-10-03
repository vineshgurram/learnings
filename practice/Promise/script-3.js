// BASIC PROMISES - FUTURE VALUE

// settimeout is added in callback queue

setTimeout(() => {
    console.log("set time out"); 
}, 0);

const myPromise = new Promise((resolve, reject)=>{
  // this is executor function

  if(true){
    resolve("This is true"); // this is method/ function 
    // passed value will be return during call by passing arugument
  }else{
    reject("This is false");
  }
});


myPromise.then((msg)=>{
    console.log(msg);
},(err)=>{
    console.log(err);
});

for (let i = 0; i < 100; i++) {
    console.log(Math.random())
}


// promises are added on microtask queue
// settimeout is added in callback queue
// microtask queue has more priority then callback queue