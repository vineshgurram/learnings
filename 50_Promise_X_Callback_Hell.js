// call back hell using promise

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading1");

function changeText(element, delay, text, color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.style.color = color;
        element.textContent = text;
        resolve();
      } else {
        reject("element not found");
      }
    }, delay);
  });
}

changeText(heading1, 1000, "one", "red")
  .then(() => changeText(heading2, 1000, "two", "blue"))
  .then(() => changeText(heading3, 1000, "three", "green"))
  .then(() => changeText(heading4, 2000, "four", "yellow"))
  .then(() => changeText(heading5, 5000, "five", "pink"))
  .then(() => changeText(heading6, 1000, "six", "orange"));
