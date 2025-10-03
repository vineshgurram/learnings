// Promise or Future Value
// create promise using new keyword with Promise

const kitchen = ["milk", "water", "tea1", "masala"];

const makeTea = new Promise((resolve, reject) => {
  if (
    kitchen.includes("milk") &&
    kitchen.includes("water") &&
    kitchen.includes("tea") &&
    kitchen.includes("masala")
  ) {
    resolve("Here is your kadak masaledar tea");
  } else {
    reject(new Error("Something is missing"));
  }
});

// makeTea.then(
//   // when promise get resolved
//   (message) => {
//     console.log(message);
//   },
//   // when promise get rejected
//   (message) => {
//     console.log(message);
//   }
// );

    makeTea
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
