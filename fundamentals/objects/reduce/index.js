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

// Level 1
// Use reduce to produce ["A", "B", "C"]
{
    const users = [
        { name: "A", age: 20 },
        { name: "B", age: 25 },
        { name: "C", age: 20 }
    ];

    const arrayOfNames = users.reduce((obj, user) => {
        obj.push(user["name"]);
        return obj;
    }, []);

    console.log(arrayOfNames);
}

// Level2: 
// produe 

/*
    {
        1: "A",
        2: "B",
        3: "C"
    }
*/
{
    const users = [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" }
    ];

    const result = users.reduce((obj, user) => {
        obj[user.id] = user.name;
        return obj;
    }, {});

    console.log(result);
}

// Level 2.5 
/*
{
  Laptop: 50000,
  Mouse: 1000,
  Keyboard: 2000
}
*/

{
    const products = [
        { id: 101, name: "Laptop", price: 50000 },
        { id: 102, name: "Mouse", price: 1000 },
        { id: 103, name: "Keyboard", price: 2000 }
    ];

    const productsPrice = products.reduce((obj, product) => {
        obj[product.name] = product.price;
        return obj;
    }, {});

    console.log(productsPrice);
}
