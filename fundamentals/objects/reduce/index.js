const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const result = fruits.reduce((obj, fruit) => {
    if(obj[fruit]){
        obj[fruit]++;
    }else {
        obj[fruit] = 1;
    }

    return obj;
}, {});

console.log(result);

const countOfFruits = fruits.reduce((obj, value) => {
    obj[value] = (obj[value] || 0) + 1;
    return obj;
}, {});

console.log(countOfFruits);

