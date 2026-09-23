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

// Level 3 : 
/*
    {
  Delhi: [
    { name: "A", city: "Delhi" },
    { name: "C", city: "Delhi" },
    { name: "D", city: "Delhi" }
  ],
  Mumbai: [
    { name: "B", city: "Mumbai" },
    { name: "E", city: "Mumbai" }
  ]
}
*/

{
    const users = [
        { name: "A", city: "Delhi" },
        { name: "B", city: "Mumbai" },
        { name: "C", city: "Delhi" },
        { name: "D", city: "Delhi" },
        { name: "E", city: "Mumbai" }
    ];

    const groupByCity = users.reduce((acc, user) => {
        if(!acc[user.city]){
            acc[user.city] = [];
        }

        acc[user.city].push(user);

        return acc;
    }, {});

    console.log(groupByCity);

}

// Level 3.5 
/*
    {
        apple: 6,
        banana: 7,
        orange: 3,
    }
*/ 

{
    const orders = [
        { product: "apple", quantity: 2 },
        { product: "banana", quantity: 5 },
        { product: "apple", quantity: 4 },
        { product: "orange", quantity: 3 },
        { product: "banana", quantity: 2 }
    ];

    const quantityOfFruits = orders.reduce((acc, fruit) => {
        if(!acc[fruit.product]){
            acc[fruit.product] = 0;
        }

        acc[fruit.product] += fruit.quantity;

        return acc;
    }, {});

    console.log(quantityOfFruits);

    const numberOfFruits = orders.reduce((acc, fruit) => {
        if(!acc[fruit.product]){
            acc[fruit.product] = fruit.quantity;
        }else {
            acc[fruit.product] += fruit.quantity;
        }

        return acc;
    }, {});

    console.log(numberOfFruits);
}

// Level 4:

/*
    {
    A: 7,
    B: 5
}
*/ 

{
    const orders = [
        { customer: "A", product: "apple", quantity: 2 },
        { customer: "B", product: "banana", quantity: 3 },
        { customer: "A", product: "orange", quantity: 4 },
        { customer: "B", product: "banana", quantity: 2 },
        { customer: "A", product: "apple", quantity: 1 }
    ];

    const totalByEachUser = orders.reduce((acc, user) => {
        if(!acc[user.customer]){
            acc[user.customer] = 0;
        }

        acc[user.customer] += user.quantity;

        return acc;
    }, {});

    console.log(totalByEachUser);

}

// Level 4.5

/*
    {
        A: {
            apple: 3,
            orange: 4
        },
        B: {
            banana: 5
        }
    }
*/ 

{
    const orders = [
        { customer: "A", product: "apple", quantity: 2 },
        { customer: "B", product: "banana", quantity: 3 },
        { customer: "A", product: "orange", quantity: 4 },
        { customer: "B", product: "banana", quantity: 2 },
        { customer: "A", product: "apple", quantity: 1 }
    ];

    const result = orders.reduce((acc, order) => {
        if(!acc[order.customer]){
            acc[order.customer] = {};
            acc[order.customer][order.product] = order.quantity;
        }else if(!acc[order.customer][order.product]) {
            acc[order.customer][order.product] = order.quantity;
        }else {
            acc[order.customer][order.product] += order.quantity;
        }
        
        

        return acc;
    }, {});

    console.log(result);
}

{
    const orders = [
        { customer: "A", product: "apple", quantity: 2 },
        { customer: "B", product: "banana", quantity: 3 },
        { customer: "A", product: "orange", quantity: 4 },
        { customer: "B", product: "banana", quantity: 2 },
        { customer: "A", product: "apple", quantity: 1 }
    ];

    const result = orders.reduce((acc, order) => {
        if(!acc[order.customer]){
            acc[order.customer] = {}
        }

        if(!acc[order.customer][order.product]){
            acc[order.customer][order.product] = 0;
        }

        acc[order.customer][order.product] += order.quantity;
        
        return acc;
    }, {});
}


{
    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    let usersById = users.reduce((acc, user) => {

        acc[user.id] = user;
        return acc;
    }, {});

    console.log(usersById);
}
