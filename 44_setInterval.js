let i = 0;
const setIntervalId = setInterval(function(){
    i++;
    console.log(i);
},1000);

console.log(setIntervalId);
clearInterval(setIntervalId);
