const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve("element is present");
      }
      else{
        reject("element does not exist");
      }
    }, 1000);
  });
}


changeText(heading1,"one","red").then(()=>{
    return changeText(heading2,"two","blue");
}).then(()=>{
    return changeText(heading3,"three","green");
}).then(()=>{
    return changeText(heading4,"four","orange");
}).then(()=>{
    return changeText(heading5,"five","skyblue");
}).then(()=>{
    return changeText(heading6,"five","yellow");
})