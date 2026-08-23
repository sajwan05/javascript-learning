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

{
    function checkOddOrEven(number){
        return typeof number === "number" ?
            (number % 2 ? "Odd" : "Even" ) :
            "Error input";
    }

    console.log(checkOddOrEven(23));
    console.log(checkOddOrEven(-35));
    // console.log(checkOddOrEven("34"));
    console.log(checkOddOrEven(undefined));
    console.log(checkOddOrEven(34));
}


{
    function checkOddOrEven(number){
        return typeof number === "number" ?
            number % 2 ? "Odd" : "Even" :
            "Please enter valid integer";
    }

    console.log(checkOddOrEven(23));
    console.log(checkOddOrEven(-35));
    // console.log(checkOddOrEven("34"));
    console.log(checkOddOrEven(undefined));
    console.log(checkOddOrEven(34));
}

// convert numbers to string

{
    function convertToString(num){
        if(Number.isInteger(num)){
            return num.toString();
        }

        return "Please enter valid number";
    }

    console.log(convertToString(23));
    console.log(convertToString("Hello"));
}

{
    function convertToString(num){
        return num + "";
    }

    console.log(convertToString(23));
    console.log(convertToString("Hello"));
}

// Reverse The string 

{
    function getReverseString(string){
        return string.split("").reverse().join("");
    }

    console.log(getReverseString("world!"));
    console.log(getReverseString("hello"));
}


{
    function getReversedString(string){
        let reversedString = "";

        for(let i = string.length - 1; i >= 0; i --){
            reversedString += string[i];
        }

        return reversedString;
    }

    console.log(getReverseString("world!"));
    console.log(getReverseString("hello"));
}