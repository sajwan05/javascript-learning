// generate fibonacci sequence until a number: 

{
    function fibonacciSequence(countArg) {

        let count;

        if(typeof countArg !== "number"){
            count = parseInt(countArg);
        }else {
            count = countArg;
        }

        if(count < 0) return "OOPS";
        if(count === 0) return 0;

        if(count === 1 || count === 2) return 1;

        let previous = 0;
        let current = 1;

        let sequence = " " + previous + " " + current;
        for(let i = 2; i <= count; i++){
            let next = previous + current;

            previous = current;
            current = next;

            sequence += " "+ next;
        }

        return sequence;
    }

    console.log(fibonacciSequence(10));
}

// get the nth fibonacci element

{
    function fibonacci(number){
        let num;
        if(typeof number !== "number"){
            num = parseInt(number);
        }else {
            num = number;
        }

        if(num < 0) return "OOPS";
        if(num === 0) return 0;

        if(num === 1 || num === 2) return 1;
        let previous = 1; 
        let current = 1;

        let next;

        for(let i = 2; i < num; i++){
            
            next = previous + current;
            previous = current;
            current = next;
        }

        return next;
    }

    console.log(fibonacci(10));
    console.log(fibonacci(3));
    console.log(fibonacci(15));
}

{
    function fibonacciSequence(countArg){

        let count;
        if(typeof countArg !== "number"){
            count = parseInt(countArg);
        }else {
            count = countArg;
        }

        let sequence = "0 1 1";

        let previous = 1;
        let current = 1;

        let next;
        for(let i = 2; i < count; i++){
            next = previous + current;

            previous = current;
            current = next;

            sequence += ` ${next}`;
        }

        return sequence;
    }

    console.log(fibonacciSequence(11));
}