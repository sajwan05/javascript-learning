const note = document.querySelector(".note");

function highlight(elem, callback){
    elem.style.backgroundColor = "yellow";

    if(callback && typeof callback === "function"){
        callback(elem);
    }
}

function addBorder (elem){
    elem.style.border = `2px solid red`;
}

highlight(note, addBorder);


// // Creating javascript cutom events to make code more flexible

// let event = new CustomEvent('mark', {
//     detail: {backgroundColor: aqua}
// });

// // dispatching custom events