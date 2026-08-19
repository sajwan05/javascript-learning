/*
Pseudocode: 
    first we will iterate through the original array
    then for each element we will check if it is not between the given range 
    if not so we will remove it with some array method

*/ 

{
    function getFilterRangeInPlace(arr, min, max){

        arr.forEach((item, index) => {
            if(item < min || item > max){
                arr.splice(index, 1);
            }

            
        })
        // I know this is wrong

        console.log(arr);
    }

    getFilterRangeInPlace([5, 3, 8, 1], 1, 4);
    getFilterRangeInPlace([2, 4, 6, 7, 8, 10, 34, 54, 65], 1, 40);
}

{
    function getFilterRangeInPlace(arr, min, max){

        for(let i = 0; i < arr.length; i++){

            if(arr[i] < min || arr[i] > max){
                arr.splice(i, 1);
                i--;
            }
        }

        console.log(arr);
    }

    getFilterRangeInPlace([5, 3, 8, 1], 1, 4);
    getFilterRangeInPlace([2, 4, 6, 7, 8, 10, 34, 54, 65], 1, 40);
    getFilterRangeInPlace([2, 4, 6, 7, 8, 10, 34, 54, 65], 11, 40);
    getFilterRangeInPlace([2, 4, 6, 7, 8, 10, 34, 54, 65], 6, 34);
}

{
    function getFilterRange(arr, min, max){
        if(min > max){
            let temporary = max;
            max = min;
            min = temporary;
        }

        for(let i = arr.length - 1; i >= 0; i --){
            if(arr[i] < min || arr[i] > max){
                arr.splice(i, 1);
            }
        }

        console.log(arr);
        return arr;
    }

    getFilterRange([5, 3, 8, 1], 1, 4);
    getFilterRange([2, 4, 6, 7, 8, 10, 34, 54, 65], 1, 40);
    getFilterRange([2, 4, 6, 7, 8, 10, 34, 54, 65], 11, 40);
    getFilterRange([2, 4, 6, 7, 8, 10, 34, 54, 65], 6, 34);
    getFilterRange([2, 4, 6, 7, 8, 10, 34, 54, 65], 10, 4);
}