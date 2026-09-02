console.log("Javascript!");

const track = document.querySelector(".track");
const log = document.querySelector(".log")

track.addEventListener("mousemove", (event) => {
    
    log.textContent = `
        Screen X/Y: (${event.screenX}, ${event.screenY})
        Client X/Y: (${event.clientX}, ${event.clientY})
    `;
});