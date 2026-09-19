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