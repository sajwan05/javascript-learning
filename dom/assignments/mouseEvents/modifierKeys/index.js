console.log("Javascript is key!");

const btnKeys = document.querySelector(".btnKeys");


btnKeys.addEventListener('click', (e) => {
    let keys = [];

    if(e.shiftKey) keys.push("shift");
    if(e.ctrlKey) keys.push("ctrl");
    if(e.altKey) keys.push("alt");
    if(e.metaKey) keys.push("meta");

    const output = document.querySelector("#messageKeys");

    output.textContent = `Keys: ${keys.join('+')}`;
});