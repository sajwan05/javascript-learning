// repeatString n number of times 

/*
Pseudocode : 
So first we will intialize an empty string 
then we'll handle negative values of number of times 
then we will iterate until number of times 
and will keep concatenating original string to the new intialized empty string 
*/ 

{
    function getRepeatedString(string, times){
        if(times < 0) return "ERROR";

        let repeatedString = "";

        for(let i = 0; i < times; i++){
            repeatedString += string;
        }

        return repeatedString;
    }

    console.log(getRepeatedString("Hello", 3));
    console.log(getRepeatedString("Hey", 4));
    console.log(getRepeatedString("you", -4));
}