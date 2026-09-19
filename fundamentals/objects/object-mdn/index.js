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