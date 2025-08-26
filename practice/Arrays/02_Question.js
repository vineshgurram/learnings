// 2. Find the maximum and minimum numbers in an array.


const myArray = [5,4,5,8,0];


function minMaxNumber(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 1;i<arr.length;i++){
        // console.log(i);
        if(arr[i] > max){ 
            max = arr[i];
        }
        
        if(arr[i] < min){            
            min = arr[i];
        }
    }
    return {min:min,max:max}
    // return {min:Math.min(...arr),max:Math.max(...arr)}
}
// minMaxNumber(minMaxNumber(myArray));
console.log(minMaxNumber(myArray))

// const minMaxNumberObject = minMaxNumber(myArray);

// console.log(minMaxNumberObject.min,minMaxNumberObject.max)

