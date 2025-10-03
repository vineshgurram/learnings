// PROMISE CHAINING
// Promise.resolve

function myPromiseFunction() {
  return new Promise((resolve, reject) => {
    !true ? resolve("Vinesh") : reject("reject");
  });
}

myPromiseFunction()
  .then((value) => {
    console.log(value);
    return value;
  })
  .then((value) => {
    value += " A. ";
    console.log(value);
    return value;
  })
  .then((value) => {
    value += "Gurram";
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

const myPromise = Promise.resolve(5);

myPromise
  .then((value) => {
    console.log(value);
    return value;
  })
  .then((value) => {
    value++;
    console.log(value);
    return value;
  })
  .then((value) => {
    value++;
    console.log(value);
  });
