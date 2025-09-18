const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "red";

//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.color = "blue";

//         setTimeout(() => {
//             heading3.textContent = "three";
//             heading3.style.color = "green";

//             setTimeout(() => {
//                 heading4.textContent = "four";
//                 heading4.style.color = "yellow";

//                 setTimeout(() => {
//                     heading5.textContent = "five";
//                     heading5.style.color = "pink";

//                     setTimeout(() => {
//                         heading6.textContent = "six";
//                         heading6.style.color = "orange";

//                         setTimeout(() => {
//                             heading7.textContent = "seven";
//                             heading7.style.color = "grey";
//                         }, 1000);

//                     }, 3000);

//                 }, 2000);
//             }, 1000);

//         }, 2000);

//     }, 2000);

// }, 1000)


function changeText(heading, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (heading) {
            heading.textContent = text;
            heading.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
            else {
                onFailureCallback();
            }
        }
    }, time);
}


// pyramid of doom

changeText(heading1, "one", "red", 1000, () => {

    changeText(heading2, "two", "blue", 1000, () => {

        changeText(heading3, "three", "green", 1000, () => {

            changeText(heading4, "four", "yellow", 1000, () => {

                changeText(heading5, "five", "pink", 1000, () => {

                    changeText(heading6, "six", "orange", 1000, () => {

                        changeText(heading7, "seven", "grey", 1000, () => {

                        }, () => {
                            console.log("Your Heading Element does not exist.");
                        })
                    }, () => {
                        console.log("Your Heading Element does not exist.");
                    })
                }, () => {
                    console.log("Your Heading Element does not exist.");
                })
            }, () => {
                console.log("Your Heading Element does not exist.");
            })
        }, () => {
            console.log("Your Heading Element does not exist.");
        })
    }, () => {
        console.log("Your Heading Element does not exist.");
    });
}, () => {
    console.log("Your Heading Element does not exist.");
})