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