// What callbacks look like
const notes = ["do", "re", "me"];

notes.forEach((note) => console.log(note));

notes.forEach(function (note) {
    console.log(note);
});

notes.forEach(console.log);