const imageBoxWrapper = document.querySelector(".img-box-wrapper");
const imageBoxImg = document.querySelectorAll(".img-box img");
const fullscreenImgElement = document.querySelector(".full-screen-wrapper img");

imageBoxWrapper.addEventListener("click",(e)=>{
    console.dir(e.target);
    // e.target.style.border="1px solid red";
    if(e.target.tagName === "IMG"){
        fullscreenImgElement.src = e.target.src;
        imageBoxImg.forEach(img => {
            img.style.border = "2px solid #fff";
        });
    }
      e.target.style.border = "2px solid red";
});