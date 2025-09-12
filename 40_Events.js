

const buttonOne = document.querySelector(".btn1");

const button = document.querySelectorAll("button");

button.forEach(function (e) {

    // When you attach an event listener in JavaScript, the callback function automatically receives a special object called the Event object.
    //     The callback doesn’t return anything itself (unless you explicitly return from your function).
    // But it receives the event object as its first argument, automatically provided by the browser.
    // "event" in callback is event object we receive from browser

    e.addEventListener("click", function (event) {
        console.log(event.currentTarget);
    })
})


