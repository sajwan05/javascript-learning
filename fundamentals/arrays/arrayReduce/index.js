const items = [
    { name: "Rice", price: 5},
    { name: "Book", price: 20},
    { name: "Chicken", price: 10,},
    { name: "Monitor", price: 100},
];

let totalPrice = 0;

items.forEach((item) => {
    totalPrice += item.price;
});

console.log(totalPrice);

// Reduce 

{
    const totalPrice = items.reduce((total, current) => {
        console.log(`Total: ${total}`);
        console.log(`Item: ${current.price}`);
        return total + current.price;
    }, 0);

console.log(totalPrice);
}

// array of people

const people = [
    { name: "Kyle", age: 26, }, 
    { name: "John", age: 31},
    { name: "Sally", age: 42},
    { name: "Jill", age: 42},
];

const groupedById = people.reduce((groupedPeople, person) => {
    let age = person.age;
    if(groupedPeople[age] == null) groupedPeople[age] = []

    groupedPeople[age].push(person);

    return groupedPeople;
}, {});

console.log(groupedById);