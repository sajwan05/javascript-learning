const btn = document.querySelector("#btn");

function handleClick(e){
    console.log(`button was clicked!`);
    console.log(e);
}

btn.addEventListener("click", handleClick);

// shorter way to do it is 

btn.addEventListener("click", (e) => {
    console.log(`It was clicked`);
});

btn.addEventListener("click", function(e){
    console.log("handled with anonymous function clicked!");
})

btn.addEventListener("click", (e) => {
    console.log(e.type);
    console.log(e.target);
    console.log(e.bubbles);
    console.log(e.currentTarget);
    console.log(e.detail);
    console.log(e.eventPhase);
    e.stopPropagation();
})



// preventDefault()

const link = document.querySelector("a");

link.addEventListener("click", (e) => {
    console.log(e.type);
    console.log(e.target);
    console.log(e.bubbles);

    e.preventDefault();
})

document.body.addEventListener("click", () => {
    console.log("body was clicked");
})