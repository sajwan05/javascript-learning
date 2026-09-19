{
    const person = {
        name: ["Bob", "Smith"],
        age: 32,

        bio: function() {
            console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
        },
        
        introduceSelf: function () {
            console.log(`Hi! I'm ${this.name[0]}.`);
        },
    };
}
// There is a shorter syntax:
{
    const person = {
        name: ["Bob", "Smith"],
        age: 32,

        bio(){
            console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
        },

        introduceSelf(){
            console.log(`Hi! I'm ${this.name[0]}.`);
        },
    };

    console.log(person.age);
    console.log(person.bio());
    console.log(person.introduceSelf());
}

// Objects as object properties

{
    const person = {
        name: {
            first: "Bob",
            last: "Smith",
        },
        age: 32,

        bio() {
            console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
        },

        introduceSelf() {
            console.log(`I'm ${this.name.first}`);
        }
    }

    console.log(person.bio());
    console.log(person.introduceSelf());
}

// Bracket notation 

{
     const person = {
        name: {
            first: "Bob",
            last: "Smith",
        },
        age: 32,

        bio() {
            console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
        },

        introduceSelf() {
            console.log(`I'm ${this.name.first}`);
        }
    }

    console.log(person["name"]["first"]);
    console.log(person["bio"]());
}

{
    const person = {
        name: ["Bob", "Smith"],
        age: 32,
    };

    function logProperty(propertyName) {
        console.log(person[propertyName]);
    }

    logProperty("name");
    logProperty("age");

   
}

// Setting object members
{
    const person = {
        name: {
            first: "Bob", 
            last: "Smith",
        },

        age: 32,
    }

    console.log(person);

    person.age = 45;
    person["name"]["first"]["last"] = "Cratchit";

    console.log(person)
    console.log(person.age);
    
    
}

{
    const person = {};

    person.age = 45;

    console.log(person);

    person["name"]["last"] = "Crachit";
}