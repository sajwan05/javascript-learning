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

    // person["name"]["last"] = "Crachit";
}

// Setting object members

{
    const person = {
        name: "John",
        age: 32,
    };

    console.log(person);

    person.age = 45
    console.log(person);

    person["name"]["last"] = "Crachit";

    console.log(person);

    console.log(person["name"]);
    console.log(person["age"]);
    console.log(person["name"]["last"]);


}

// Setting object members

{
    const person = {
        age: 32,
        name: {
            first: "John",
        }
    }

    console.log(person);
    person.age = 45;
    person["name"]["last"] = "Crachit"

    console.log(person.age);
    console.log(person["name"]["first"]);

    person["eyes"] = "hazel";
    person.farewell = function () {
        console.log("Bye everybody!");
    }

    console.log(person);

    console.log(person.farewell());
    console.log(person["farewell"]());
}

// Setting object members 

{
    // When met p
    const person = {
        age: 25, 
        name: {
            first: "Suraj",
        },
    }

    console.log(person);
    // persent

    person.age = 27;
    person["name"]["last"] = "Sajwan";
    person["gf"] = true;
    person.eyes = "Black";

    console.log(person);

    person.farewell = function () {
        console.log("Bye Everybody!");
    };

    person.getJob = function(){
        console.log("Will get job > 50k per month by July 2027");
    };

    console.log(person["name"]["last"]);
    console.log(person.name["first"]);

    console.log(person.getJob());
    console.log(person.gf);
    console.log(person["farewell"]());

    const myDataName = "height";
    const myDataValue = "1.73m";

    person[myDataName] = myDataValue;

    console.log(person["height"]);
    console.log(person.height);
    console.log(person);
}

// What is "this"?

{
    const person = {
        name: "Suraj",
        age: 27,
        gf: true,

        introduceSelf(){
            console.log(`I'm ${this["name"]}`);
        },
    }

    console.log(person.introduceSelf());
}

{
    const person1 = {
        name: "Suraj",
        introduceSelf() {
            console.log(`I'm ${this.name}.`);
        },
    }

    const person2 = {
        name: "Pri",
        introduceSelf: function () {
            console.log(`I'm ${this["name"]}. I am successful women and gf of ${person1.name}.`);
        }
    }

    console.log(person1.introduceSelf());
    console.log(person2.introduceSelf());
}

{
    const myNotification = new Notification("Hello");
    alert(myNotification.title);
}