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

//2. Iterate: forEach
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

// 3. Searching in array 
    // indexOf/lastIndexOf and includes
    // array.indexOf(item, from)--- looks for item starting from index from, and returns the index where it was found, otherwise -1.

    // array.includes(item, from ) -- looks for item starting from index from, returns true if found

    {
        const arr = [1, 0, false];

        console.log(arr.indexOf(0));
        console.log(arr.indexOf(false));
        console.log(arr.indexOf(null));

        console.log(arr.includes(1));
        console.log(arr.includes("suraj"));
    }

    {
        const fruits = ["Apple", "Orange", "Apple"];

        console.log(fruits.indexOf("Apple"));
        console.log(fruits.indexOf("Papaya"));

        console.log(fruits.lastIndexOf("Apple"));
    }

    // arr.includes method handle NaN correctly

    {
        const fruits = ["Apple", "Lemon", "Orange", NaN];

        console.log(fruits.indexOf(NaN));
        console.log(fruits.includes(NaN));
    }

    // find and findIndex/findLastIndex

    /*
        Syntax: let result = arr.find(item, index, arr => {
            //if true is returned, item is returned and iteration is stopped
            // for falsy scenario returns undefined
            })
    */

    {
        let users = [
            {id: 1, name: "John"},
            {id: 2, name: "Pete"},
            {id: 3, name: "Mary"}
        ];

        let user = users.find(element => element.id === 1);

        console.log(users);
        console.log(user);

        let userWithName = users.find(item => item.name === "Mary");

        console.log(userWithName);
        console.log(user.id);
        console.log(user.name);
        console.log(userWithName.name);
        console.log(userWithName.id);
    }

    {
        let users = [
            {id: 1, name: "John"},
            {id: 2, name: "Pete"},
            {id: 3, name: "Mary"},
            {id: 4, name: "John"},
        ];

        // find the index of first John

        let firstUserIndex = users.findIndex(item => item.name === "John");
        console.log(firstUserIndex);

        // Find the indexof last john

        let lastUserIndex = users.findLastIndex(user => user.name === "John");

        console.log(lastUserIndex);
    }


    //filter---find method looks for a single(first) element that makes the function return true.
    // if there are many we can use arr.filter(fn)

    {
        // syntax
        const arr = [1, 2, 3];
        let results = arr.filter((item, index, array) => {
            // if true item is pushed to results and the iteration continues
            //returns empty array if nothing found
        });


        let users = [
            {id: 1, name: "John"},
            {id: 2, name: "Pete"},
            {id: 3, name: "Mary"}
        ];

        // returns array of first two users

        let firstTwoUser = users.filter((item, index) => {
            return item.id === 1 || item.id === 2
        });

        console.log(users);
        console.log(firstTwoUser);

        const firstTwoUsers = users.filter(element => element.id < 3);

        console.log(firstTwoUsers);
    }

//4. Transform an array

// map

{
    // syntax: 
    const arr = ["hey"];
    let result = arr.map((item, index,array) =>{
        // returns the new value instead of items
    })

    const users = ["Bilbo", "Gandalf", "Nazgul"];

    // trandform each element into its length

    const eachUsersLength = users.map(item => item.length);

    console.log(users);
    console.log(eachUsersLength);
}

// sort(fn)- sorts arr in place

{
    const numbers = [1, 2, 15];
    console.log(numbers);

    numbers.sort();

    console.log(numbers);

    const number = [1, 0, -1];

    console.log(number.sort());
}

{
    function compare(a, b){
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }

    function compareNumeric(a, b) {
        if ( a > b) return 1;
        if ( a == b) return 0;
        if ( a < b) return -1;
    }


    const numbers = [1, 2, 15];

    numbers.sort(compareNumeric);

    console.log(numbers);
}

{
    const numbers = [1, -2, 15, 0, 8];
    console.log(numbers);
    numbers.sort((a, b) => {
        console.log(a + "<>" + b);
        return a - b;
    });

    const array = [1, 2, 15];

    array.sort((a, b) => a - b);

    console.log(array);

}

{
    let countries = ['Österreich', 'Andorra', 'Vietnam'];
    console.log(countries);


    console.log(countries.sort((a, b) => a > b ? 1 : -1));

    console.log(countries.sort((a, b) => a.localeCompare(b)));
}

// sort (fn)

{
    const array = [1, 2, 15];

    array.sort();

    console.log(array);
}

{
    function compare(a, b){
        if (a > b) return 1;
        if(a == b) return 0;
        if(a < b) return -1;
    }
}

{
    function compareNumeric(a, b) {
        if(a > b) return 1;
        if(a == b) return 0;
        if(a < b) return -1;
    }

    const arr = [1, 2, 15];

    arr.sort(compareNumeric);

    console.log(arr);
}

{
    const array = [1, 2, 15];

    array.sort((a,b) => {
        return a - b;
    });

    console.log(array);
}

{
    let countries = ['Österreich', 'Andorra', 'Vietnam'];

    console.log(countries.sort((a, b) => a - b));

    console.log(countries.sort((a, b) => a.localeCompare(b)));
}

// reverse

{
    const arr = [1, 2, 3, 4, 5, 6];
    arr.reverse();

    console.log(arr);
}

// split and join

{
    let names = 'Bilbo, Gandalf, Nazgul';

    const array = names.split(", ");

    console.log(names);
    console.log(array);

    for(let name of array){
        console.log(`A message to ${name}`);
    }

}

{
    let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(", ", 2);
    console.log(arr);
}

{
    const str = "test";

    console.log(str.split(""));
}

// arr.join(glue)

{
    const arr = ['Bilbo', 'Gandalf', 'Nazgul'];
    let str = arr.join(";");

    console.log(str);
}

// reverse

{
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers);
    numbers.reverse();

    console.log(numbers);
}

// split and join

{
    const names = "Bilbo, Gandalf, Nazgul";
    const arrayOfNames = names.split(", ");

    console.log(arrayOfNames);

    for(const name of arrayOfNames){
        console.log(`A message to ${name}`);
    }
}

{
    const messageTo = "Khanduri, Tiwari, Prashant, Kaushik, Mohit";

    const arrayOfNames = messageTo.split(", ");

    for(const message of arrayOfNames){
        console.log(`A message to ${message}`);
    }

    const arrayAfterLimit = messageTo.split(", ", 3);

    console.log(arrayAfterLimit);
}

{
    // split into letters

    const word = "test";

    const characterArray = word.split("");
    console.log(characterArray);
}

// arr.join
{
    const names = ["Khanduri", "Tiwari", "Adarsh", "Ankush", "Tejas"];
    console.log(names);

    const stringNames = names.join();
    console.log(stringNames);

    const stringNames1 = names.join(" ");
    console.log(stringNames1);
    
}

// reduce/reduceRight

/*
    Syntax: 

    let value = arr.reduce(function(accumulator, item, index, array){
    }, [initial]);
*/

{
    const numbers = [1, 2, 3, 4, 5];

    const result = numbers.reduce((sum, current) => sum + current , 0);
    console.log(result);
}

{
    const numbers = [1, 2, 3, 4, 5];

    const sumOfNumbers = numbers.reduce((total, current) => total + current);
    console.log(sumOfNumbers);
}

// Array.isArray

{
    console.log(typeof 1);
    console.log(typeof "1");
    console.log(typeof true);
    console.log(typeof undefined);
    console.log(typeof []);
    console.log(typeof {});


}

{
    console.log(Array.isArray({}));
    console.log(Array.isArray([]));
}

// Most method support "thisArg";

{
    const army = {
        minAge : 18, 
        maxAge : 27, 

        canJoin(candidate){
            return candidate.age >= this.minAge && this.maxAge
        }
    }

    const users = [
        {age: 16},
        {age: 20}, 
        {age: 23},
        {age: 30},
    ];

    let soldiers = users.filter(army.canJoin, army);

    console.log(army);
    console.log(users);
    console.log(soldiers);
    console.log(soldiers.length);
    console.log(soldiers[0].age);
    console.log(soldiers[1].age);
}

{
    const arr = [1, 2, 3, 4, 5];

    // console.log(arr.0);
    console.log(arr[arr.length - 1]);

    const years = [20, 22, 23, 24, 25, 26, 27, 28];

    console.log(years[2]);
    console.log(years["2"]);

    console.log(years[2] == years["02"]);
}

// Relationship between length and numerical properties

{
    const fruits = [];
    console.log(fruits);

    fruits.push("Banana", "Apple", "peach");

    console.log(fruits);
    console.log(fruits.length);

    fruits[5] = "Mango";

    console.log(fruits[5]);

    console.log(fruits);

    console.log(Object.keys(fruits));

    console.log(fruits["3"]);
    console.log(fruits[4]);

    console.log(fruits.length);

    fruits.length = 10;

    console.log(fruits);
    console.log(Object.keys(fruits));

    console.log(fruits.length);
    console.log(fruits[8]);

    fruits.length = 2;

    console.log(Object.keys(fruits));

    console.log(fruits.length);
}

// Array methods and empty slots

{
    const colors = ["red", "yellow", "blue"];
    colors[5] = "purple";

    colors.forEach((element, index) => {
        console.log(`${index}: ${element}`);
    })

    console.log(colors.filter(element => element));

    console.log(colors.reverse());

    console.log(colors.concat("yellow", "red"));
    console.log(colors.reverse());


}

{
    const colors = ["red", "yellow", "blue"];

    colors[5] = "purple";

    const iterator = colors.keys();

    console.log(colors);
    console.log(iterator);

    for(const key of iterator){
        console.log(`${key}: ${colors[key]}`);
    }

    console.log(colors);
    const newColors = colors.toReversed();

    console.log(newColors);

    const reverseAgainColors = newColors.reverse();

    console.log(reverseAgainColors);
}

// Copying methods and mutating methods

{
    const fruits = ["Mango", "Banana", "Guvava"];

    fruits.shift();
    console.log(fruits);

    fruits.unshift("Mango");

    console.log(fruits);

    const slicedFruits = fruits.slice(1);

    console.log(fruits);
    console.log(slicedFruits);
}

{
    const numbers = [1, 2, 3, 4];
    console.log(numbers);
    numbers.copyWithin(0, 1, 2);
    console.log(numbers);

}

{
    const numbers = [1, 2, 3, 4, 5, 6];

    const copyNumbers = numbers.slice();
    const arr2 = copyNumbers.copyWithin(0, 1, 2);

    console.log(numbers);
    // console.log(copyNumbers);
    console.log(arr2);

    const arr3 = [...numbers].copyWithin(0, 1, 2);

    console.log(numbers);
    console.log(arr3);
}

// Iterative methods

{
    function method(callbackFn, thisArg){

        const length = this.length;

        for (let i = 0; i < length; i ++){
            if (i in this){
                const result = callbackFn.call(thisArg, this[i], i, this);
                // do something with the result maybe return early
            }
        }
    }


}


// Generic array methods

{
    const arrayLike = {
        0: "a", 
        1: "b", 
        length : 2,
    };

    console.log(Array.prototype.join.call(arrayLike, " + "));
}

// Normalization of the length property

{
    const a = {length : 0.7};
    console.log(a);

    Array.prototype.push.call(a);

    console.log(a);
    console.log(a.length);
}

// array like objects 

{
    function f() {
        console.log(Array.prototype.join.call(arguments, " + "));
    
    }

    f("a", "b");
}

// Create an array

{
    const fruits = ["Apple", "Banana"];
    console.log(fruits);
    console.log(fruits.length);

    const fruits2 = new Array("Apple", "Banana", "Mango");
    console.log(fruits2);

    const fruits3 = "Apple, Banana".split(", ");

    console.log(fruits3);
}

// create string from an array

{
    const fruits = ["Apple", "Banana"];

    const fruitsString = fruits.join(", ");
    console.log(fruits);
    console.log(fruitsString);
}

// Access an array item by its index

{
    const fruits = ["Apple", "Banana"];

    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[fruits.length - 1]);

    console.log(fruits[100]);
}

// Find index of an item in an array

{
    const fruits = ["Apple", "Banana"];
    console.log(fruits.indexOf("Banana"));
}

{
    const fruits = ["Apple", "Banana"];
    const isThereBanana = fruits.includes("Banana"); 
    const isThereCherry = fruits.includes("Cherry");

    console.log(isThereBanana);
    console.log(isThereCherry);

    const isThereBan = fruits.indexOf("Banana") !== -1;
    const isCherry = fruits.indexOf("Cherry") !== -1 ;

    console.log(isThereBan);
    console.log(isCherry);

    console.log(fruits.indexOf("Banana"));
}

// Append an element to an array 

{
    const fruits = ["Apple", "Banana"];
    const newLength = fruits.push("Orange");
    console.log(fruits);

    console.log(newLength);
}

// Remove the last item from an array

{
    const fruits = ["Apple", "Banana", "Orange"];
    const removedItem = fruits.pop();
    console.log(fruits);
    
    console.log(removedItem);
}

// Remove multiple items from the end of an array
{
    const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
    console.log(fruits);

    const index = -3;

    const removedItems = fruits.splice(index, 3);

    console.log(fruits);
    console.log(removedItems);
}

// Truncate an array down to just first N items

{
    const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

    const index = 2;

    const removedItems = fruits.splice(index);

    console.log(fruits);
    console.log(removedItems);
}

// Remove the first item from an array

{
    const fruits = ["Apple", "Banana"];
    const removedItem = fruits.shift();
    console.log(fruits);
    // ["Banana"]
    console.log(removedItem);
}

// Remove multiple items from the beginning of an array

{
    const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];

    const start = 0;
    const end = 3;

    const removedItems = fruits.splice(start,end);

    console.log(fruits);
    console.log(removedItems);
}

// Add a new first item to an array

{
    const fruits = ["Banana", "Mango"];
    const newLength = fruits.unshift("Strawberry");
    console.log(fruits);
    // ["Strawberry", "Banana", "Mango"]
    console.log(newLength);
}

// remove a single item by index

{
    const fruits = ["Strawberry", "Banana", "Mango"];
    // let's suppose we have to remove "banana";
    console.log(fruits);

    const index = fruits.indexOf("Banana");
    const number = 1;

    const removedItem = fruits.splice(index, number);

    console.log(fruits);
    console.log(removedItem);
}

// Remove multiple items by index

{
    const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
    console.log(fruits);

    const indexOfBanana = fruits.indexOf("Banana");
    

    const deleteItems = fruits.splice(indexOfBanana, 1);
    const indexOfStraw = fruits.indexOf("Strawberry");
    const delteStrawberrtToo = fruits.splice(indexOfStraw, 1);

    console.log(fruits);
}

// Replace multiple items in an array

{
    const fruits = ["Apple", "Banana", "Strawberry"];
    console.log(fruits);
    const start = -2;
    const deleteCount = 2;

    const removedItems = fruits.splice(start, deleteCount, "Lemon", "Tomato");

    console.log(removedItems);
    console.log(fruits);
}

// Iterate over an array

{
    const fruits = ["Apple", "Mango", "Cherry"];

    for(const fruit of fruits){
        console.log(fruit);
    }
}

// Call a function on each element in an array

{
    const fruits = ["Apple", "Mango", "Cherry"];

    fruits.forEach((fruit, index) => {
        console.log(`${index}: ${fruit}`);
    })
}

// Merge multiple arrays together

{
    const fruits = ["Apple", "Banana", "Strawberry"];
    const moreFruits = ["Mango", "Cherry"];

    const combinedFruits = fruits.concat(moreFruits);

    console.log(fruits);
    console.log(moreFruits);
    console.log(combinedFruits);
}

// Copy an array

{
    const fruits = ["Strawberry", "Mango"];

    const fruitsCopy = [...fruits];
    console.log(fruits);
    console.log(fruitsCopy);

    fruitsCopy[2] = "Apple";

    console.log(fruits);
    console.log(fruitsCopy);

    const fruitsCopy2 = Array.from(fruits);
    console.log(fruitsCopy2);

    const fruitsCopy3 = fruits.slice();

    console.log(fruitsCopy3);

    const fruitsCopy4 = fruits.concat();

    console.log(fruitsCopy4);

    const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));

    console.log(fruitsDeepCopy);

    fruitsDeepCopy[2] = "Banana";

    console.log(fruitsDeepCopy);
    console.log(fruits);
}

{
    const fruits = ["Strawberry", "Mango"];

    const fruitsAlias = fruits;

    console.log(fruits === fruitsAlias);

    fruits.unshift("Apple", "Banana");

    console.log(fruits);
    console.log(fruitsAlias);
}

// Creating a two-dimensional array:

{
    const board = [
        ["R", "N", "B", "Q", "K", "B", "N", "R"],
        ["P", "P", "P", "P", "P", "P", "P", "P"],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        ["p", "p", "p", "p", "p", "p", "p", "p"],
        ["r", "n", "b", "q", "k", "b", "n", "r"],
    ]

    console.log(board);

    console.log(`${board.join("\n")}\n\n`);

    board[4][4] = board[6][4];

    board[6][4] = " ";

    console.log(board.join("\n"));
}

// Using an array to tabulate a set of values

{
    const values = [];

    for(let x = 0; x < 10; x++){
        values.push([2 ** x, 2 * x ** 2]);
    }

    console.log(values);
}

// Creating an array using the result of a match

{
    // Match one d followed by one or more b's followed by one d
    // Remember matched b's and the following d
    // Ignore case

    const myRe = /d(b+)(d)/i;

    const execResult =  myRe.exec("cdbBdbsbz");

    console.log(execResult.input);
    console.log(execResult.index);
    console.log(execResult);
}