// Pseudocode 

// we'll ask user to enter number again and again 
// then we'll check if user entered the no. greater than 100 or empty or else


while(true){
    const number = parseInt(prompt("Please keep entering number or enter no. greater than 100 to exit:"));

    if(!number || number > 100){
        console.log("let's go!");
        break;
    }
}