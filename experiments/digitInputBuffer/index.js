let completedValue = null;
let currentValue = "";

function addDigit(digit){
    currentValue += digit;
    return currentValue;
}

function submit(){
    completedValue = parseInt(currentValue);
    currentValue = "";
    return completedValue;
}

console.log(completedValue);
console.log(currentValue);

addDigit("4");
addDigit("5");
addDigit("6");

console.log(submit());
console.log(completedValue);
console.log(currentValue);