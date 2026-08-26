console.log("Javascript is connected..");
// method 2
const button = document.querySelector("#btn");

button.onclick = () => console.log("You successfully clicked me!");

// method 3

const btn = document.querySelector(".method3");

// function logOnClick(){
//     console.log("You clicked me with method 3");
// }

// btn.addEventListener("click", logOnClick);

// or

btn.addEventListener("click", () => {
    console.log("Hello, World!");
});

// more info about the event

btn.addEventListener("click", (e) => {
    console.log(e);
})