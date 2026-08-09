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