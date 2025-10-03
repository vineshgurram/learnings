const orderingPizza = new Promise((resolve, reject)=>{
    const isPizzaShopOpen = !true;
    
    setTimeout(()=>{
        if(isPizzaShopOpen){
        resolve("Pizza is ready");
    }
    else{   
        reject("Sorry Pizza Shop is closed");
    }
    },2000)
});

orderingPizza.then(message => console.log(message)).catch(error => console.log(error));