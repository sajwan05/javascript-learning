"use strict";
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

// Concat 
// arr.concat

// arr.concat(arg1, arg2...);

{
    let arr = [1, 2];

    // create an array from: arr and [3, 4]
    const array = [3, 4];

    // console.log(arr.concat(array));

    const array2 = arr.concat(array);

    const array3 = array2.concat([5, 6], 7, 8);

    console.log(arr);
    console.log(array);
    console.log(array2);
    console.log(array3);
}

{
    let arr = [1, 2];

    let arrayLike = {
    0: "something",
    length: 1
    };

    console.log( arr.concat(arrayLike) );
}

{
    const arr = [1, 2];

    let arrayLike = {
        0: "something", 
        length: 1,
    };

    console.log(arr.concat(arrayLike));

    let contacts = {
        suraj: 973,
        adarshTheAvoidantCreature: 567,
        khanduriTheOffMan: 3438,
        bagwariTheBakuMan: 3435,
        tiwariTheGenuineGuy: 3435,
        gauravRawatNotSoGenuineGuy: 345,
    }

    console.log(arr);
    const array2 = arr.concat(arrayLike);
    console.log(array2);

    const array3 = array2.concat(contacts);
    console.log(array3);
}

{
    const array = [1, 2];

    const arrayLike = {
        0: "something",
        1: "else", 
        [Symbol.isConcatSpreadable] : true, 
        length: 2,
    };

    console.log(array.concat(arrayLike));
}

// Iterate: forEach
// Syntax: arr.forEach(function (item, index, array){
// ...do something with an item
// })

{
    const names = ["Suraj", "Tiwari", "Khanduri"];

    names.forEach(name => console.log(`My friends name is ${name}`));

    names.forEach(console.log);

    names.forEach((name, index, array) => {
        console.log(`${name} is at index ${index} in array ${array}`);
    });
}