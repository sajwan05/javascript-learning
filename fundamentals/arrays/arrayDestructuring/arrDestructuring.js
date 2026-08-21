// The syntax with destructuring 
{
    const [first, second, third] = ["Laide", "Gabriel", "Jets"];

    console.log(first);
    console.log(second);
    console.log(third);
}


// The syntax without destructuring
{
    const first = "Laide",
      second = "Gabriel",
      third = "Jets";

      console.log(third);
}

// This will throw an error bcz you can not use Numbers for destructuring because numbers can't be variable names


{
    const householdItems = ["Table", "Chair", "Fan"];

    const [a, b, c] = householdItems;

    console.log(c);
    console.log(a);
    console.log(householdItems);
}

// Declaration and assignment can be done separately in destructuring

{
    let first, second;

    [first, second] = ["Male", "Female"];
    console.log(first);
}

{
    const householdItems = ["Table", "Chair", "Fan", "Rug"];
    const [a, b, c, d, e] = householdItems;

    console.log(c);
    console.log(d);
    console.log(e);
}


{
    const householdItems = ["Table", "Chair", "Fan", "Rug"];
    const [a, b, c] = householdItems;

    console.log(c);
    console.log(a);
    console.log(b);
}

// Destructuring returned arrays
{
    function runners(){
        return ["Sandra", "Ola", "Chi"];
    }

    const [a, b, c] = runners();

    console.log(a);
    console.log(b);
    console.log(c);
}

// Default value

{
    let a, b;

    [a = 40, b = 4] = [];
    console.log(a);
    console.log(b);

    [a = 40, b = 4] = [23, 27];

    console.log(a);
    console.log(b);
}

// Default value can also refer to other variables including the one in the same array literal.

{
    const [first = "Cotlin", second = first] = [];

    console.log(first);
    console.log(second);

}

{
    const [first = "kotlin", second = first] = ["Koku"];

    console.log(first);
    console.log(second);

}

{
    const [first = "kotlin", second = first] = ["Koku", "Lydia"];

    console.log(first);
    console.log(second);
}

// Ignoring some values

{
    let a, b;

    [a, , b] = ["Lordy", "Crown", "Roses"];

    console.log(a);
    console.log(b);
}

{
    const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    const [first, , third, ...others] = planets;

    console.log(first);
    console.log(third);
    console.log(others);
}

