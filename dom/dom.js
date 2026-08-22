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

// Dom methods 

// Query Selector
// element.querySelector(selector) -returns a reference to the first match of selector
// element.querySelectorAll(selector) - returns a "NodeList" containing references to all of the matches of the Selectors.

// Element creation 
// document.createElement(tagName, [options])

// Append element
    // parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.
    // parentNode.insertBefore(newNode, referenceNode)-- insert newNode into parentNode before referenceNode.

// Remove elements
    // parentNode.removeChild(child)

// Altering elements

{
    const div = document.createElement("div");

    div.style.color = "blue";
    div.setAttribute("style", "color:blue; background: #fff;");

    console.log(div);

    div.setAttribute("id", "theDiv");

    console.log(div.getAttribute("id"));
    console.log(div);

    div.removeAttribute("id");
}
