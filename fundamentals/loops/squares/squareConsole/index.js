// Calculating squares

// Pseudocode

// so first we'll store a value in a variable till where we want our squares
// we'll loop through 1 to the stored variable
// then will multiply counter with itself so we'll get the squae
// then we'll show the square

// let squaresUntil = 10;

// for(let i = 1; i <= squaresUntil; i++){
//     console.log(`${i} * ${i} = ${i * i}`);
// }

//2nd way

// let number = 10;
// function getSquares(n){
//     for(let i = 1; i <= n; i++){
//         console.log(`${i} * ${i} = ${i * i}`);
//     }
// }

// getSquares(number);

// 3rd way

function getSquares(number){
    return number * number;
}

function showSquares(numberUntil){
    for(let i = 1; i <= numberUntil; i++){
        const square = getSquares(i);
        console.log(`${i} * ${i} = ${square}`);
    }
}

let number = 10;

showSquares(number);


