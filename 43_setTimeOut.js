const setTimeoutId = setTimeout(function(){
    console.log("hello");
},0); 
// set time out returns id 

for(let i =0;i<=500;i++){
    console.log(i);
}

console.log(setTimeoutId);
// clearTimeout(setTimeoutId); // to stop set time out
