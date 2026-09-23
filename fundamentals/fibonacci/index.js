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