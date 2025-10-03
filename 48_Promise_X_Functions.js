// function returning promises

const kitchen = ["milk", "water", "tea", "masala"];

function teaProcess() {
  return new Promise((resolve, reject) => {
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
}

teaProcess()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
