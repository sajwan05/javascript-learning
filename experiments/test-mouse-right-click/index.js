console.log("Javascript is connected!");

document.addEventListener("mousedown", (event) => {
    console.log("mousedown", event.button, event.buttons);
});

document.addEventListener("contextmenu", (event) => {
    console.log("contextmenu", event.button);
    event.preventDefault();
});

// test is working now back to the issue