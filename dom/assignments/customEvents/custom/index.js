const div = document.querySelector(".note");

function highlight(elem){

    const bgColor = "yellow";

    elem.style.backgroundColor = bgColor;

    // create the cutom event

    let event = new CustomEvent("mark", {
        detail: {
            backgroundColor : bgColor
        }
    });

    // dispatch the event

    elem.dispatchEvent(event);
}


function addBorder(elem) {
    elem.style.border = "1px solid red";
}



// listen to the highlight event

div.addEventListener("mark", function(e) {
    addBorder(this);
    console.log(e.detail);
});

highlight(div);