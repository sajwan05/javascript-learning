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
    console.log(multiply(2, "3"));
}