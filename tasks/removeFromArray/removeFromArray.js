/*
Pseudocode:
first we will iterate through the given array backwards
then we will check if our rest parameter have current item of array in it 
if yes
    so we will remove it 
else 
    move on
then we will get the resultant array
*/ 

{
    function removeFromAnArray(array, ...args){

        for(let i = array.length - 1; i >= 0; i--){
            if(args.includes(array[i])){
                array.splice(i, 1);
            }
        }

        return array;
    }

    console.log(removeFromAnArray([2, 3, 5, 6, 7, 8, 9, 11], 3, 7, 9));
}

{
    function removeFromAnArray2(arr, ...args){
        return arr.filter((item, index) => !args.includes(item));
    }

    console.log(removeFromAnArray2([2, 3, 5, 6, 7, 8, 9, 11], 3, 7, 9));
}

// There can be more solution like without using splice

{
    function removeFromAnArray3(array, ...args){
        const newArray = [];

        for(let i = 0; i < array.length; i++){
            if(!args.includes(array[i])){
                newArray.push(array[i]);
            }
        }

        return newArray;
    }

    console.log(removeFromAnArray3([2, 3, 5, 6, 7, 8, 9, 11], 3, 7, 9));
    console.log(removeFromAnArray3([1, 2, 3, 4, 5, 6, 7, "hello", "you"], 1, "hello", "you"));
}

{
    function removeFromAnArray4(array, ...rest){
        const newArray = [];

        array.forEach((item) => {
            if(!rest.includes(item)){
                newArray.push(item);
            }
        })

        return newArray;
    }

    console.log(removeFromAnArray4([2, 3, 5, 6, 7, 8, 9, 11], 3, 7, 9));
    console.log(removeFromAnArray4([1, 2, 3, 4, 5, 6, 7, "hello", "you"], 1, "hello", "you"));
}

{
    function removeFromAnArray5(arr, ...rest){
        const array = [];

        for(const item of arr){
            if(rest.includes(item)){
                continue;
            }else {
                array.push(item);
            }
        }

        return array;
    }

    console.log(removeFromAnArray5([2, 3, 5, 6, 7, 8, 9, 11], 3, 7, 9));
    console.log(removeFromAnArray5([1, 2, 3, 4, 5, 6, 7, "hello", "you"], 1, "hello", "you"));

}