console.log("Javascript is connected!");

const button = document.querySelector("#btn");



button.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    console.log(e.bubbles);
});