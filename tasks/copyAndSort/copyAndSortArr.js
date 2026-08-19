/*
Pseudocode:
first we will copy the array 
then we will sort the copied array 
and that's it we'll return it or display it
*/ 

{
    function getCopySorted(arr){
        const copyArr = Array.from(arr);

        return copyArr.sort();
    }

    const technologies = ["HTML", "JavaScript", "CSS"];

    const sorted = getCopySorted(technologies);

    console.log(technologies);
    console.log(sorted);
}

{
    function getCopySorted(arr){
        const copyArr = arr.slice();

        return copyArr.sort();
    }

    const technologies = ["HTML", "JavaScript", "CSS"];

    const sorted = getCopySorted(technologies);

    console.log(technologies);
    console.log(sorted);
}

{
    function getCopySorted(arr){
        const copiedArr = [...arr];

        return copiedArr.sort();
    }

    const technologies = ["HTML", "JavaScript", "CSS"];

    const sorted = getCopySorted(technologies);

    console.log(technologies);
    console.log(sorted);
}

// Deep copy

{
    function getCopySorted(arr){
        const copiedArray = JSON.parse(JSON.stringify(arr));

        return copiedArray.sort();
    }

    const technologies = ["HTML", "JavaScript", "CSS"];

    const sorted = getCopySorted(technologies);

    console.log(technologies);
    console.log(sorted);
}