// sum all rest parameter number

{
    function sum(...rest){
        let total = 0;

        for(const num of rest){
            total += num;
        }

        return total;
    }

    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
    console.log(sum(1, 2, 3, 4));
}

/*
    //some syntax restriction:
        // fn defintion can only have one rest parameter
        // it must be last parameter in fn definition
        // trailing commas are not allowed after the rest parameter
        // the rest parameter can not have a defeault value 
*/ 

{
    function myFun(a, b, ...manyMoreArgs){
        console.log("a", a);
        console.log("b: ", b);
        console.log("manyMoreArgs", manyMoreArgs);
    }

    myFun(3, 4, 6, 7, 8, 11, 34, 56);
    myFun("one", "two", "three", "four", "five", "six");
}

{
    function multiply(multiplier, ...theArgs){
        return theArgs.map(item => item * multiplier);
    }

    console.log(multiply(3, 10, 15, 25));
    console.log(multiply(2, 10, 20, 30));
}