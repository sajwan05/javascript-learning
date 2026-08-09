// Declaration

{
    let array = new Array();
    let arr = [];
    console.log(array);
    console.log(arr);
}

{
    let fruits = ["Apple", "Orange", "Plum"];

    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[2]);

    console.log(fruits);
    fruits[fruits.length - 1] = "Tomato";
    console.log(fruits);

    fruits[fruits.length] = "Lemon";
    console.log(fruits);

    // The total count of the element in the array is 

    console.log(fruits.length);
}


{
    // An array can store element of any type

    const arr = ["apple", {name: "Suraj"}, true, function () {return "Hello, "}];

    // get the object at index 1 and then show its name
    console.log(arr);
    console.log(arr[1].name);

    // get the function at last element and run it

    const runFunction = arr[arr.length - 1]();

    // run function at last index and concatenate name from the object available at index 1

    const greeting = runFunction + arr[1].name;

    console.log(runFunction);

    console.log(greeting);
}

{
    let fruits = ["Apple", "Orange", "Plum"];
    // for last element 
    const lengthOfFruitsArray = fruits.length;

    console.log(fruits[lengthOfFruitsArray - 1]);

    console.log(fruits.at(-1));

    // 2nd element using at 

    console.log(fruits.at(0));
    console.log(fruits.at(1));
    console.log(fruits.at(2));
    console.log(fruits.at(-1));
}

// methods

// method that work with the end of the array:

{
    let fruits = ["Apple", "Orange", "Pear"];
    console.log(fruits);

    const poppedElement = fruits.pop();
    console.log(poppedElement);
    console.log(fruits);

    // push

    const pushReturns = fruits.push(poppedElement);

    console.log(fruits);
    console.log(pushReturns);
}

// methods that work at the beginning of an array
// shift and unshift

{
    let fruits = ["Apple", "Orange", "Pear"];

    console.log(fruits);
    console.log(fruits.shift());

    console.log(fruits);

    console.log(fruits.unshift("Tomato"));
    console.log(fruits);

    // method push and unshift can add multiple elements at once:

    fruits.push("Lemon", "Mango");
    fruits.unshift("Banana", "Ananas");

    console.log(fruits);
}

{
    let fruits = ["Banana"];

    let arr = fruits;

    console.log(fruits === arr);

    fruits.push("Apple");
    arr.unshift("Lemon");

    console.log(fruits === arr);

    console.log(arr);
    console.log(fruits);
}

{
    // not recommended
    let fruits = ["Apple", "Banana"];
    // fruits[999] = 5;
    console.log(fruits);

    fruits.age = 27;
    console.log(fruits);

    console.log(typeof fruits.at(-1));

    console.log(fruits.at(-1));

    for(const fruit of fruits){
        console.log(fruit);
    }

    for(const key in fruits){
        console.log(fruits[key]);
    }

    // not recommended
}
// push pop faster shift unshift slow(because of reindexing)

// Iterating through the array

{
    let fruits = ["Apple", "Orange", "Pear"];

    for(let i = 0; i < fruits.length; i++){
        console.log(fruits[i]);
    }

    for(const fruit of fruits){
        console.log(fruit);
    }

    for(let key in fruits){
        console.log(fruits[key]);
    } //this one is not recommended suitable for objects
}

{
    const fruits = [];
    fruits[123] = "Apple";

    console.log(fruits);
    console.log(fruits.length);
}

{
    let fruits = ["Apple", "Orange", "Pear"];

    fruits.push("Lemon", "plum");
    console.log(fruits);
    fruits.length = 3;
    console.log(fruits);

    fruits.length = 8;
    console.log(fruits);

    fruits.length = 0;

    console.log(fruits);
}

// constructor method

{
    const arr = new Array("Apple", "Plum", "Orange");

    console.log(arr);
}

// Multidimensional arrays

{
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    console.log(matrix[1][1]);
}

