let note = document.querySelector(".note");

function highlights(elem) {
    const bgColor = "yellow";

    elem.style.backgroundColor = bgColor;

    // create custom events

    let events = new CustomEvent("mark", {
        detail: {
            backgroundColor: bgColor
        }
    });

    note.dispatchEvent(events);
}

function addBorder(item) {
    item.style.border = "3px solid red";
}

note.addEventListener("mark", function(e){
    addBorder(this);

    console.log(e.detail);
});

highlights(note);