const giftPromise = new Promise((resolve,reject)=>{
   console.log("Waiting for response......");
    setTimeout(() => {
     const specialDay = 25;
    if(specialDay === 25){
        resolve("Hey here is your RC Car in you special day");
    }else{
        reject(new Error("Sorry buddy"))
    }
   }, 5000);
    // console.log(resolve);
    // console.log(reject);
});

giftPromise.then((gift)=>{
    console.log(gift)
}).catch((error)=>{
    console.log(error);
})
