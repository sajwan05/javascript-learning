console.log("Hello, World!");

const inputLimit = document.querySelector(".limit");
const generateButton = document.querySelector(".generate");
const clearButton = document.querySelector(".clear");

const outputSquare = document.querySelector(".output");



function getSquare(number) {
    return number * number;
}

function clearSquares(){
    outputSquare.textContent = "";
}

generateButton.addEventListener("click", () => {
    outputSquare.textContent = "";
    const maxLimit = parseInt(inputLimit.value.trim());

    for(let i = 1; i <= maxLimit; i++){
        let squareResult = `${i} * ${i} =  ${getSquare(i)}\n`;

        outputSquare.textContent += squareResult;
    }

    outputSquare.textContent += "\nFinished\n\n";

    inputLimit.value = "";
    inputLimit.focus();
});

clearButton.addEventListener("click", clearSquares);







































// function displaySquares(){

//     let limit = parseInt(inputLimit.value);
//     for(let i = 1; i <= limit ; i++){
//         let square = getSquare(i);

//         outputSquare.innerText += ` ${i} * ${i} = ${square}\n`;
        
//     }

//     outputSquare.innerText += `\nFinished\n\n`;
//     inputLimit.value = "";
//     inputLimit.focus();
// }

// generate.addEventListener("click", displaySquares);
// clearButton.addEventListener("click", clearSquares);