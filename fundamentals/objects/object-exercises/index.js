// Given an array of objects representing people with a birth and death year, return the oldest person.

{
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

    // return the oldest person object
    // so let's first sort it based on age

    const sortOldest = people.sort((aAge, bAge) => {
       return  (aAge.yearOfDeath - aAge.yearOfBirth > bAge.yearOfDeath - bAge.yearOfBirth) ? -1 : 1;

    });

    console.log(sortOldest);
}

{
    const peopleArray = [
        { id: 123, name: "dave", age: 23 },
        { id: 456, name: "chris", age: 23 },
        { id: 789, name: "bob", age: 23 },
        { id: 101, name: "tom", age: 23 },
        { id: 102, name: "tim", age: 23 }
    ];

    // const peopleObject = {
    //     "123": { id: 123, name: "dave", age: 23 },
    //     "456": { id: 456, name: "chris", age: 23 },
    //     "789": { id: 789, name: "bob", age: 23 },
    //     "101": { id: 101, name: "tom", age: 23 },
    //     "102": { id: 102, name: "tim", age: 23 }
    // }

    const peopleObject =  peopleArray.reduce((acc, user) => {
          if(!acc[user.id]){
            acc[user["id"]] = user;
          }

          return acc;
    }, {});

    console.log(peopleObject);
}