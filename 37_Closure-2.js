function outer(){
    let counter = 0;

    return function(){
        if(counter < 1){
            console.log("You called me");
            counter ++;
        }else{
            console.log("You already called me. Are you mad or what!!");
        }
    }
}

const myFunc = outer();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();