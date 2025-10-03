// const myPromise = new Promise((resolve, reject) => {
//   let isTrue = !true;
//   if (isTrue) {
//     resolve("Success");
//   } else {
//     reject("Unsucess");
//   }
// });

// myPromise
//   .then((message) => console.log(message))
//   .catch((message) => console.log(message));

const isPhoneStore = !true;
const isPhoneAvailable = true;

function processMessage(resolveCallback, rejectCallback) {
  if (!isPhoneStore) {
    rejectCallback({
      name: "Wrong Callback",
      message: "We donSorry, this is a food store!",
    });
  } else if (!isPhoneAvailable) {
    rejectCallback({
      name: "Out of Stock",
      message: "Sorry, the X phone is out of stock!",
    });
  } else {
    resolveCallback({
      name: "Ok",
      message: "The X phone is available! How many you want to buy?",
    });
  }
}

processMessage(
  (value) => console.log(value),
  (reason) => console.log(reason)
);
