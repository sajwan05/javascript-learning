// What callbacks look like
const notes = ["do", "re", "me"];

notes.forEach((note) => console.log(note));

notes.forEach(function (note) {
    console.log(note);
});

notes.forEach(console.log);

// How callbacks work

function myForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}

const myArray = [3, 5,7, 9];

myForEach(myArray, (item) => {
    console.log(item + 1);
});


// possibly map under the hood


function myMap(array, callback){
    const myNewArray = [];

    for(let i = 0; i < array.length; i++){
        const callbackResult = callback(array[i]);

        myNewArray.push(callbackResult);
    }

    return myNewArray;
}

const addedArray = myMap([1, 2, 3, 4], (arrItem) => {
    return arrItem + 2;
})

console.log(addedArray);