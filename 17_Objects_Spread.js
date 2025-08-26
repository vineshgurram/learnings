console.log("spread operator object");

let object1 = {
    key1 : "value1",
    key2 : "value2"
};

let object2 = {
    key3 : "value3",
    key4 : "value4",
    key1 : "valuenew"
};

let newMergedArray = {
    ...object1,...object2
};



console.log(newMergedArray);