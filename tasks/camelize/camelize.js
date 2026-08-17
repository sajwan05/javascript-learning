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

{
    function capitalize(str){
        
        return str
            .at(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    console.log(capitalize("hello"));
    console.log(capitalize("heyYou"));
}


{
    function capitalizes(str){
        let capitalizeStr = "";

        for(let i = 0; i < str.length; i++){
            if ( i === 0){
                capitalizeStr += str[i].toUpperCase();
            }else {
                capitalizeStr += str[i].toLowerCase();
            }
        }

        return capitalizeStr;
    }

    console.log(capitalizes("hheyYOU"));
}

{
    function capitalizes3(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    }

    console.log(capitalizes3("what!"));
}

{
    function camelize(str){

        const array = str.split("-");
        const arr = array.filter(item => item);

        arr.forEach((item, index) => {
            if(index === 0){
                arr[index][0].toUpperCase() + arr[index].slice(1);
            }else {
               arr[index] = capitalize(arr[index]);
            }
        })

        return arr.join("");
    }

    console.log(camelize("border-left-width"));
    console.log(camelize("-webkit-transition"));
    console.log(camelize("list-style-image"));
}

// camele Case 

{
    function getCapitalize(string) {
        return string
            .at(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function getCamelize(string){
        const array = string.split("-");

        for(let i = 0; i < array.length; i++){
            if(i === 0){
                array[i] = array[i].toLowerCase();
            }else {
                array[i] = getCapitalize(array[i]);
            }
        }

        return array.join("");
    }

    console.log(getCamelize("my-short-string"));
    console.log(getCamelize("MY-ShOrt-string"));
    console.log(getCamelize("-my-short-STRing"));
}

{
    function capitalize(string){
        return string.
            at(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function camelize(string){
        const array = string.split("-");
        const arr = array.filter(item => item);

        for(let i = 0; i < arr.length; i ++){
            if(i === 0) {
                arr[i] = arr[i].toLowerCase();
            }else {
                arr[i] = capitalize(arr[i]);
            }
        }

        return arr.join("");
    }

    console.log(camelize("my-short-string"));
    console.log(camelize("background-color"));
    console.log(camelize("--My-SHORt-String"));
}

{


    function capitalize(string){
        return string.
            at(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function camelize(str){
        return str.split("-")
            .filter(item => item)
            .map((element, index) => {
               return  index === 0 ? element.toLowerCase() :
                capitalize(element);
            }).join("");
    }

    console.log(camelize("my-short-string"));
    console.log(camelize("background-color"));
    console.log(camelize("--My-SHORt-String"));
}
