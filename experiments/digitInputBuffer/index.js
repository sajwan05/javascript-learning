let completedValue = null;
let currentValue = "";

function addDigit(digit){
    currentValue += digit;
}

function submit(){
    completedValue = parseInt(currentValue);
    currentValue = "";
}

console.log(completedValue);
console.log(currentValue);

addDigit("4");
addDigit("5");
addDigit("6");

submit();
console.log(completedValue);
console.log(currentValue);

addDigit("1");
addDigit("2");
addDigit("3");

console.log(currentValue);
console.log(completedValue);
submit();

console.log(completedValue);

addDigit("9");
addDigit("8");
submit();
console.log(completedValue);
console.log(currentValue);

submit();
console.log(completedValue);
addDigit("5");
addDigit("6");

console.log(completedValue);
console.log(currentValue);
submit();
submit();
console.log(completedValue);


addDigit("0");
submit();
console.log(completedValue);

addDigit("0007");
console.log(currentValue);
submit();
console.log(completedValue);

// Two number inputs
{
    let currentValue = "";
    let firstValue = null; 
    let secondValue = null;

    function addDigit(digit){
        currentValue += digit;
    }

    function confirmFirst(){
        firstValue = parseInt(currentValue);
        currentValue = "";
    }

    function confirmSecond(){
        secondValue = parseInt(currentValue);
        currentValue = "";
    }

    function reset(){
        currentValue = "";
        firstValue = null;
        secondValue = null;
    }

    addDigit("4");
    addDigit("7");
    addDigit("2");
    confirmFirst();

    console.log(currentValue);
    console.log(firstValue);
    console.log(secondValue);

    addDigit("8");
    addDigit("5");
    confirmSecond();

    console.log(currentValue);
    console.log(firstValue);
    console.log(secondValue);

    reset();

    console.log(currentValue);
    console.log(firstValue);
    console.log(secondValue);
    
}

// Problem 3: 
{
    let currentValue = "";
    let firstNumber = null;
    let secondNumber = null;
    let operator = null;
    let result = equalOperator("=");

    function concatenateDigits(digit){
        currentValue += digit;
    }

    function getOperator(operation){
        firstNumber = parseInt(currentValue);
        operator = operation;
        currentValue = "";
    }

    function equalOperator(operation){
        secondNumber = parseInt(currentValue);
        currentValue = "";

        let result = calculator(operator, firstNumber, secondNumber);

        firstNumber = result;
        if(operator !== "="){
            operator = operation;
        }else {
            operator = null;
        }

        secondNumber = null;
        
        return result;
    }

    function calculator(operator, num1, num2){
        
        switch(operator){
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "x":
                return num1 * num2;
            case "/":
                return num1 / num2;
        }
    }

    concatenateDigits("4");
    concatenateDigits("7");
    getOperator("+");
    concatenateDigits("8");
    concatenateDigits("5");
    let res = equalOperator("+");
    concatenateDigits("4");
    concatenateDigits("0");
    let r = equalOperator("=");

    console.log(res);
    console.log(r);
    console.log(firstNumber);
    console.log(operator);
}