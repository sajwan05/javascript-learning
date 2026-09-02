const btnKeys = document.querySelector(".btnKeys");
const msg = document.querySelector("#messageKeys")

btnKeys.addEventListener("click", (event) => {
    let keys = [];

    if(event.shiftKey) keys.push("Shift");
    if(event.ctrlKey) keys.push("Ctrl");
    if(event.altKey) keys.push("Alt");
    if(event.metaKey) keys.push("meta");

    msg.textContent = `Keys: ${keys.join("+")}`;
    
});