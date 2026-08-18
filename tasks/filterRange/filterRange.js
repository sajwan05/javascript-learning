/*
    first we will declare an empty array
    then we will iterate through the original array
    and then for each item we'll check if it is between a and b
    if yes so we will put that particular element in new array 
    and then we'll get the new array
*/ 

{
    function getFilterInRange(arrays, min, max){
        if(min > max) [min, max] = [max, min];

        const filterdArray = [];

        for(const item of arrays){
            if(item >= min && item <= max){
                filterdArray.push(item);
            }
        }

        return filterdArray;
    }

    const numbers = [5, 3, 8, 1];

    const filtered = getFilterInRange(numbers, 1, 4);

    console.log(filtered);
    console.log(numbers);

    console.log(getFilterInRange([2, 4, 5, 7, 8, 9], 7, 3));
}


{
    function getFilterRange(array, min, max){
        if(min > max){
            let temp = min;
            min = max;
            max = temp;
        }

        const filteredInRange = [];

        for(let i = 0; i < array.length; i++){
            if(array[i] >= min && array[i] <= max){
                filteredInRange.push(array[i]);
            }
        }

        return filteredInRange;
    }

    const numbers = [5, 3, 8, 1];
    const res = getFilterRange(numbers, 1, 4);

    console.log(numbers);
    console.log(res);

    console.log(getFilterRange([2, 4, 5, 7, 8, 9], 7, 3));
    console.log(getFilterRange([2, 4, 6, 7, 9, 10, 12, 16, 19, 20, 23], 22, 11));

    console.log(getFilterRange([2, 3, 4, 5, 7, 9], 3, 6));


}

{
    function getFilterRange(array, min, max){
        if(min > max) [min, max] = [max, min];

        const filteredNumbers = [];

        for(let i = array.length - 1; i >= 0; i--){
            if( !(array[i] < min || array[i] > max) ){
                filteredNumbers.push(array[i]);
            }
        }

        return filteredNumbers;
    }

    const numbers = [5, 3, 8, 1];
    const res = getFilterRange(numbers, 1, 4);

    console.log(numbers);
    console.log(res);

    console.log(getFilterRange([2, 4, 5, 7, 8, 9], 7, 3));
    console.log(getFilterRange([2, 4, 6, 7, 9, 10, 12, 16, 19, 20, 23], 22, 11));

    console.log(getFilterRange([2, 3, 4, 5, 7, 9], 3, 6));
}

{
    function getFilter(arr, min, max){
        if(min > max) [min, max] = [max, min];

        let filteredNumbers = arr.filter(item => item >= min && item <= max);

        return filteredNumbers;
    }

    const numbers = [5, 3, 8, 1];
    const res = getFilter(numbers, 1, 4);

    console.log(numbers);
    console.log(res);

    console.log(getFilter([2, 4, 5, 7, 8, 9], 7, 3));
    console.log(getFilter([2, 4, 6, 7, 9, 10, 12, 16, 19, 20, 23], 22, 11));

    console.log(getFilter([2, 3, 4, 5, 7, 9], 3, 6));
}
