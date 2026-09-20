{
    // object constructor syntax
    let user = new Object();
    console.log(user);
}
{
    // object literal
    let user = {};
}

{
    let user = {
        name: "John",
        age: 30
    };

    console.log(user);
    console.log(user.age);
    console.log(user.name);

    // value can be of any type let's add a boolean type
    user.isAdmin = true;

    console.log(user);

    delete user.age
    
    console.log(user);
}

{

    // trailing or hanging comma
    let user = {
        name: "John",
        age: 30,
        "likes birds": true,
    };

    console.log(user);
}

// for multiword properties, the dot access doesn't work

{
    let user = {
        name: "John",
        age: 30,
        "likes birds": true,
    }

    // user."likes birds" = false;
    // but there is square notation to get it

    
}

{
    let user = {
        name: "Suraj",
        age: 27,
    }

    user["likes her"] = true;
    user["likes birds"] = false;
    user["likes pets"] = true;

    console.log(user);

    console.log(user["likes her"]);
    console.log(user["likes pets"]);

    delete user["likes birds"];

    console.log(user);
}

{
    let key = "likes birds";

    let user = {
        name: "John", 
        age: 30,
    }

    console.log(user);

    user[key] = true;


    console.log(user);
}


{

   
    let user = {
        name: "John",
        age: 30,
        gf: "Rose",
        salary: "2k$ per month",
    }
     let key = "salary";

    // let key = prompt("What do you want to know about the user:", name);
    console.log(user[key]);

    // dot notation can not be used in similar way
}

// computed properties:

{
    // let fruit = prompt("Which fruit to buy?", "apple");

    let fruit = "apple";

    let bag = {
        [fruit]: 5,
    };

    console.log(bag);
    console.log(bag.apple);
}

{
    let fruit = "apple";

    let bag = {
        [fruit + "Computers"] : 5,
    };

    console.log(bag);
    console.log(bag.appleComputers);
}

// Property value shorthand

{
    function makeUser(name, age) {
        return {
            name: name,
            age: age,
            //... other properties
        };
    }

    let user = makeUser("John", 30);

    console.log(user);

}

// shorthand

{
    function makeHuman(name, age){
    return {
        name,
        age,
    }
}

    let human = makeHuman("John", 31);

    console.log(human);
    console.log(human.age);
    console.log(human.name);
}

// Property names limitations
// there are no restriction even you can use reserved words

{
    let obj = {
        for: 1, 
        let: 2, 
        return: 3
    }

    console.log(obj.for + obj.let === obj.return);

    console.log(obj.for + obj.let + obj.return);
}

{
    let obj = {
        0: "test",
    };

    console.log(obj["0"]);
    console.log(obj[0]);
}

// There is a minor gotcha with a special property named _proto_ . We can't set it to a non-object value:
{
    let obj = {};
    obj.__proto__= 5;//can't set it to non-object value

    console.log(obj.__proto__);

    console.log(obj);
}

// Property existence test, "in" operator
{
    let user = {};

    console.log(user.noSuchProperty === undefined);
}

{
    let user = {
        name: "John",
        age:30,
    }

    console.log(user);
    console.log("age" in user);
    console.log("name" in user);
    console.log("tel" in user);

    let key = "name";

    console.log(key in user);
}

{
    let obj = {
        test:undefined
    };
    console.log(obj.test);
    // console.log(obj["test"]);
    console.log("test" in obj);
    console.log("name" in obj);

}

// The for...in loop
// syntax:
/*
    for(key in object) {
        // executes the body for each key among object properties
    }
*/ 

{
    let user = {
        name: "John", 
        age: 30, 
        isAdmin: true,
    };

    for (let key in user){
        console.log(key);

        console.log(user[key]);
    }

    let codes = {
        "49": "Germany",
        "41": "Switzerland",
        "44": "Great Britain",
        "91": "India",
        "1": "USA",
    };

    for(const countryCode in codes){
        console.log(countryCode);

        console.log(codes[countryCode]);
    }


}

{
    // if the keys are non-integer, then they are listed in the creation order, for instance:

    {
        let user ={
            name: "John", 
            surname: "Smith",
        };

        user.age = 25;
        user.gf = "Rose";

        for(let prop in user){
            console.log(prop);
            console.log(user[prop]);
        }
    }
}

{
    let codes = {
        "+49": "Germany",
        "+41": "Switzerland",
        "+44": "Great Britain",

        "+1": "USA"
    }

    for(let code in codes){
        console.log(code);
        console.log(codes[code]);
    }
}

// when you define an primitive it will contain a copy of information provided to it: 
{
    let data = 42;

    let dataCopy = data;

    dataCopy = 43;

    console.log(dataCopy);
    console.log(data);
}

// When you define an object variable, it will contain a reference to the object provided to it:

{
    const obj = {data: 42};
    // obj contains a reference to the object we defined on the right side

    const objCopy = obj;
    // objCopy will contain a reference to the object referenced by obj

    objCopy.data = 43;
    // making changes to objCopy will make changes to the object that it refers to

    console.log(obj);
    console.log(objCopy);
}

{
    function increaseCounterObject(objectCounter) {
        objectCounter.counter += 1;
    }

    function increaseCounterPrimitive(primitiveCounter) {
        primitiveCounter += 1;
    }

    const object = {counter : 0};
    let primitive = 0;

    increaseCounterObject(object);
    increaseCounterPrimitive(primitive);

    console.log(object);
    console.log(primitive);
}

// Reassigning object data type variables

{
    let animal = {species: "dog"};
    let dog = animal;

    // reassigning animal variable with complete new object
    animal = {species: "cat"};

    console.log(animal);
    console.log(dog);
}