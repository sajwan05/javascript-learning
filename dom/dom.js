const container = document.querySelector(".container");

console.log(container);

// select first child of the container



{
    const display = container.firstElementChild;
    console.log(display);
}
const display = document.querySelector(".container > .display");
console.log(display);

// select the control div

const controls = document.querySelector(".controls");
console.log(controls);

const control = document.querySelector(".container > .controls");
console.log(control);

const display2 = control.previousElementSibling;
console.log(display2);

const controls4 = display.nextElementSibling;

console.log(controls4);
