const btn = document.querySelector(".btn");
const output = document.querySelector(".output");


btn.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

btn.addEventListener("mouseup", (e) => {
    switch(e.button){
        case 0:
            output.textContent = `Left mouse button is clicked!`;
            break;
        case 1:
            console.log("middle");
            output.textContent = "Middle mouse button is clicked";
            break;
        case 2:
            console.log("right");
            output.textContent = "Right button is clicked!";
            break;
        default:
            output.textContent = `Unknown button is clicked! ${e.button}`;
    }
});