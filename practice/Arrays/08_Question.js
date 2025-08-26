// 8. Find the index of a given element in an array.

const myArray = [5, 4, 5, 8, 0, 4, 0];

function indexOfElement(arr,ele){
    // for(let i in arr){
    //     if(arr[i] === ele){
    //         return i;
    //     }
    // }

    for(let i =0;i<arr.lenght;i++){
        if(arr[i] === ele){
            return i
        }
    }
    return -1;
}

console.log(indexOfElement(myArray,0));