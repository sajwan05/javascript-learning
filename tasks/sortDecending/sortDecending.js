// sort in decreasing order

function compareNumeric(a, b){
    if(a < b) return 1;
    if(a == b) return 0;
    if (a > b) return -1;
}

const arr = [5, 2, 1, -10, 8];
const sortDescending = arr.sort(compareNumeric);
console.log(arr);
console.log(sortDescending);


function compareNumericA(a, b){
    if(a > b) return 1;
    if(a === b) return 0;
    if (a < b) return - 1;
}

arr.sort(compareNumericA);
console.log(arr);

{
    const arr = [2, 5, -6, 3, 8, 1];
    const sortedArrayD = arr.sort((a, b) => - (a - b));
    console.log(arr);
    console.log(sortedArrayD);
}
