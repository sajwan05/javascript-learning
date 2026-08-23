// Date Aug 23 2026 -- time 10: 50 PM

{
    function multiply(a, b){
        return a * b;
    }

    console.log(multiply(2, 3));
}

{
    function multiply(a, b){
        if(!a || !b || typeof a !== "number" || typeof b !== "number"){
            throw new Error("Both argument should be number");
        }else {
            return a * b;
        }
    }

    console.log(multiply(3, 6));
    // console.log(multiply(2, "3"));
}

// return "even" for even numbers and "odd" for odd numbers

{
    function checkOddOrEven(number){
        if(!number || !Number.isInteger(number)){
            throw new Error("Please enter valid integer");
        }else if (number % 2 ){
            return "Odd";
        }else {
            return "Even";
        }
    }

    console.log(checkOddOrEven(23));
    console.log(checkOddOrEven(-35));
    // console.log(checkOddOrEven("34"));
    // console.log(checkOddOrEven(undefined));
    console.log(checkOddOrEven(34));
}