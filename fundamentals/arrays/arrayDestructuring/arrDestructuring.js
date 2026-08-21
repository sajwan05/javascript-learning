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
}

