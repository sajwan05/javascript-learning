const input = document.querySelector("#message");

input.addEventListener("keydown", (event) => {
    console.log("Keydown event fired");
    console.log(event.key);
});

input.addEventListener("keyup", (event) => {
    console.log("key up event is fired");
});

input.addEventListener("keypress", (event) => {
    console.log("keypress event is fired");
});

input.addEventListener("keydown", (event) => {
    console.log(`key = ${event.key}, code = ${event.code}`);
});