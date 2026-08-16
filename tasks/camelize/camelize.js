/*
    Pseudocode :

    // so firsts we will transform the given string into array
    // Then we'll iterate through the arrays and 
    // Then we'll lowercase the first index and will capitalize all other indexes
*/ 

{
    function getCamelize(str) {

        const array = str.split("-");

        for(let i = 0; i < array.length; i++){
            if (i === 0){
                array[i] = array[i].toLowerCase();
            }else {
                array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
            }
        }

        return array.join("");
    }

    console.log(getCamelize("background-color"));
    console.log(getCamelize("list-style-image"));
    console.log(getCamelize("-webkit-transition"));
}

// I can write a generic function for camelize