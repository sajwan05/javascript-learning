/*
Pseudocode: 
first we will intialize an empty string
then we will iterate through each item of given string from last character
then we'll concatenate it at every step to intitilaized string
and then will return it

method 2

we can first split it into array
then we can either push it into new array from behind by iterating from behind
or we can just split it reverse it and join it back
*/ 

{
    function reverseString(string){
        let reversedString = "";

        for(let i = string.length - 1; i >= 0; i--){
            reversedString += string[i];
        }

        return reversedString;
    }

    console.log(reverseString("hello, there!"));
}