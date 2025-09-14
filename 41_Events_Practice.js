const body = document.body;
const button = document.querySelector(".btn-change-color");
const currentColorText = document.querySelector(".current-color");

function randomColorGenerate(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgbColor = `rgb(${red},${green},${blue})`;
    return rgbColor;
}

button.addEventListener("click",function(){
    const randomColor = randomColorGenerate()
    body.style.backgroundColor = randomColor;
    currentColorText.textContent = randomColor;
})