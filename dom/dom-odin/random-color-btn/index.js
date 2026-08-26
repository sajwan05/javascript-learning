// const button = document.querySelector(".random-color");

// function random(number){
//     return Math.floor(Math.random() * number);
// }

const button = document.querySelector(".random-color");
console.log(button);


function random(number){
    return Math.floor(Math.random() * number);
}

function changeBgColor(e){
    const randomColor = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;

    return e.target.style.backgroundColor = randomColor;
}

button.addEventListener("click", changeBgColor);

















// const button = document.querySelector(".random-color");
// console.log(button);

// function random (number){
//         return Math.floor(Math.random() * number);
//     }

// button.addEventListener("click", function(e){

//     const randomColor = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;

//     const target = e.target;
//     // console.log(target);
//    target.setAttribute("style", `background: ${randomColor};`);

// })