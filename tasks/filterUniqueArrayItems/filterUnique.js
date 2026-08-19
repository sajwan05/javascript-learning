/*
Pseudocode:
So first of all we'll initialize an empty array
then we will iterate through the original array
and will check if new array already have particular item
if not we'll push it to the new array otherwise 
will just move to next item
*/ 

{
    function getUniqueArray(array){
        const uniqueArray = [];

        for(const item of array) {
            if(!uniqueArray.includes(item)){
                uniqueArray.push(item);
            }
        }

        return uniqueArray;
    }
    
    const arrOfStrings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
    const unique = getUniqueArray(arrOfStrings);

    console.log(arrOfStrings);
    console.log(unique);
}