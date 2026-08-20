/*
Pseudocode

so first of all we will check first and 2nd integer for positiveness and then will check if it is integers and number also
then what if first integer greater than second we can just swap the values 
then we intialize a variable with 0 for sum
then we will iterate from 1st int to 2nd and 
will keep adding it to variable which is storing sum in each iteration
then at end will display the result
*/ 

{
    function getSumAll(min, max){
        if(!(Number.isInteger(min) && Number.isInteger(max)) || min < 0 || max < 0) return "ERROR";

        if(min > max) {
            let temp = max;
            max = min;
            min = temp;
        }

        let total = 0;

        for(let i = min; i <= max; i++){
            total += i;
        }

        return total;
    }

    console.log(getSumAll(1, 10));
    console.log(getSumAll(1, 100));
    console.log(getSumAll(1, 200));
    console.log(getSumAll(1000, 1));
}