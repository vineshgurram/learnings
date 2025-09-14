const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const button = document.querySelector("button");
// Event Bubbling: Event flows from target element up to root (child → parent).
// Event Capturing: Event flows from root down to target (parent → child).

// grandParent.addEventListener("click",()=>{
//     console.log("capturing grand parent");
// },true);

// parent.addEventListener("click",()=>{
//     console.log("capturing parent");
// },true);

// grandParent.addEventListener("click",()=>{
//     console.log("this is me grand parent");
// });

// parent.addEventListener("click",()=>{
//     console.log("this is me parent");
// });

// button.addEventListener("click",()=>{
//     console.log("button")
// })


// event delegation
// It’s a technique in JavaScript where instead of adding event listeners to many child elements, you add one event listener to their parent and use event.target to find which child was clicked.

grandParent.addEventListener("click",(e)=>{
    console.log(e.target);
})