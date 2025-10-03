const myPromise = new Promise((resolve, reject) => {
  console.log("Fetching data......");
  setTimeout(() => {
    let value = !true;
    if (value) {
      resolve("Operation is successful");
    } else {
      reject("Operation Abort!!!");
    }
  }, 5000);
});

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

myPromise.then(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error);
  }
);
