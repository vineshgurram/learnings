const accordion = document.querySelector(".accordion");
const accordionItem = document.querySelectorAll(".accordion-item");

accordion.addEventListener("click",(e)=>{
    accordionItem.forEach((ele)=>{
        // ele.style.display = "none";
        ele.querySelector(".accordion-answer").style.display = "none";
    });

    e.target.nextElementSibling.style.display = "block";
});