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