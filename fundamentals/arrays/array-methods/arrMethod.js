// Array methods
// Add remove items

// splice

{
    let arr = ["I", "go", "home"];

    // arrays are basically objects, so we can use delete 

    console.log(delete arr[1]);

    console.log(arr);

    console.log(arr[1]);

    console.log(arr.length);
}

// syntax: arr.splice(start[, deletecount, elem1, ..., elemN ]); return array of the removed elements

{
    const studies = ["I", "study", "Javascript"];
    console.log(studies);

    const splicedArray = studies.splice(1, 1);
    console.log(splicedArray);
    console.log(studies);
}

{
    // I study js rn ---> let's dance right now

    const sentence = ["I", "Study", "Javascript", "right", "now"];
    console.log(sentence);

    let splicedArr = sentence.splice(0, 3, 'Let\'s', "dance");
    console.log(splicedArr);

    console.log(sentence);

    sentence.splice(0, 2, "I", "study", "JavaScript");

    console.log(sentence);

    const removed = sentence.splice(0, 2);
    console.log(removed);
    console.log(sentence);
}

{
    const arr = ["I", "Study", "JavaScript"];

    const spliced = arr.splice(2, 0, "complex", "language");

    console.log(arr);
    console.log(spliced);
}

// Negative indexes allowed

{
    const numbers = [1, 2, 5];

    numbers.splice(-1, 0, 3, 4);

    console.log(numbers);
}

// slice 

// syntax: arr.slice([start], [end]);

{
    let vowels = ["a", "e", "i", "o", "u"];

    console.log(vowels.slice(1, 3));
    console.log(vowels);
    console.log(vowels.slice(-2));
}
// To create copy of an array

{
    let arr = ["t", "e", "s", "t"];

    let array = arr.slice();

    console.log(array);
}