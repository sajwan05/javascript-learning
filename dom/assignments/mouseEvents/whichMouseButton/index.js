console.log("Javascript is connected!12");


const btn = document.querySelector(".btn");
console.log(btn);


btn.addEventListener("contextmenu", (event) => {
    console.log("BUTTON CONTEXTMENU", event);
    event.preventDefault();
});

btn.addEventListener("focus", () => {
    console.log("BUTTON GOT FOCUS");
});

btn.addEventListener("blur", () => {
    console.log("BUTTON LOST FOCUS");
});

btn.addEventListener("pointerdown", (e) => {
    console.log("POINTER DOWN", e.button, e.buttons);
});

btn.addEventListener("mousedown", (e) => {
    console.log("MOUSE DOWN", e.button, e.buttons);
});

btn.addEventListener("mouseup", (e) => {
    console.log("MOUSE UP", e.button, e.buttons);
});




// btn.addEventListener("contextmenu", (e) => {
//     console.log("button context menu");
//     console.log("target", e.target);

//     console.log(e.target === btn);

//     e.preventDefault();
// });


// document.addEventListener("mousedown", (e) => {
//     console.log("mousedown");
//     console.log("target:", e.target);
//     console.log("button:", e.button);
//     console.log("buttons:", e.buttons);
// });


// btn.addEventListener("contextmenu", (event) => {
//     console.log("contextmenu fired!");
//     event.preventDefault();
// });

// btn.addEventListener("mousedown", (event) => {
//     console.log(event.button, event.buttons);
// } );






// document.addEventListener("contextmenu", (e) => {
//     console.log("contex menu fired");
//     e.preventDefault();
// })

// document.addEventListener("mousedown", (e) => {
//     console.log(e.button, e.buttons);

// })

































// const btn = document.querySelector("#btn");

// // console.log(btn)

// // btn.addEventListener("mousedown", (e) => {
// //     console.log("mousedown ", e.button);
// // });

// // btn.addEventListener("mouseup", (e) => {
// //     console.log("mouseup ", e.button)
// // })

// //  btn.addEventListener("contextmenu",(event) => {
// //     console.log("CONTEXT MENU EVENT");
// //     event.preventDefault();
// // });

// // btn.addEventListener("mouseup", (event) => {

// //    console.log(event.button);
// //     // let msg = document.querySelector(".msg");

    

// //     // switch(event.button){
// //     //     case 0:
// //     //         msg.textContent = `left mouse button is clicked!`;
// //     //         break;

// //     //     case 1:
// //     //         msg.textContent = `middle/scroll wheel is pressed`;
// //     //         break;

// //     //     case 2:
// //     //         msg.textContent = `right mouse button is clicked!`;
// //     //         break;
// //     //     default:
// //     //         msg.textContent = `Unknown mouse button is cliked`;
// //     // }
// // });

// console.log(btn);

// document.addEventListener("mousedown", (event) => {
//     console.log(event.button, event.buttons, event);
// })