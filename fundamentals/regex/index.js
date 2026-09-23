// I will be learning regex here , why? 
// Because I came across a task where I had to clean up my string

// Regex basically is find text that matches this pattern:
{
    const str = "hello123";
    console.log(str.match(/[0-9]/g));
}

{
    const str = "Hi! 123";
    console.log(str.match(/a-zA-Z0-9/g));
}

{
    const str = "Hello, World! 123";
    console.log(str.match(/[^a-zA-Z0-9]/g));
}

{
    const str = "Hello, world! 123. How are you?";

    console.log(str.replace(/[^a-zA-Z0-9]/g, ""));
}

{
    const str = "Hello, World! 123 @ John_Doe";

    console.log(str.replace(/[^a-zA-Z0-9_]/g, ""));
}