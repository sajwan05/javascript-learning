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


{
    const users = [
        { name: "A", age: 20, city: "Delhi" },
        { name: "B", age: 25, city: "Mumbai" },
        { name: "C", age: 20, city: "Delhi" },
    ];

    console.log(users);

    const result = users.reduce((obj, value) => {
        if(!obj[value["city"]]){
            obj[value.city] = [];
        }

        obj[value["city"]].push(value);
        return obj;
    }, {});

    console.log(result);
}
