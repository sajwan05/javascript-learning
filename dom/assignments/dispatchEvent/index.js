// to generate an event programatically 
    // first, create a new Event object using Event constructor.
    // Then, trigger the event using element.dispatchEvent() method

// Event constructor syntax:
// let event = new Event(type, [, options]);
// default options object is {bubbles:false, cancelable:false}

// let clickEvent = new Event("click");

const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
    console.log(event.isTrusted);
    console.log("Mouse clicked");
});

let clickEvent = new Event("click");
btn.dispatchEvent(clickEvent);

let clickEvent2 = new MouseEvent("click",{
    bubbles: true,
    cancelable: true,
    clientX : 150,
    clientY: 150
});

btn.dispatchEvent(clickEvent2);
