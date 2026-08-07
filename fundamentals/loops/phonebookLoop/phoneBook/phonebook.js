console.log("hello!");
// question :Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find?
// Pseudocode 
// first of all we will want a input for the name we want to search
// then because we have array collection of data
// Then we'll iterate through whole array
// and will split each item into array of its own
// then we'll check if inputted name exist in our collection 
// if yes we'll show the number 
// if no we'll say not exist or number not found

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

const searchName = prompt("Please enter the name you want to search: ", "").trim().toLowerCase();


function getNumber(){
    for(const contact of contacts){
        const contactNumberAndName = contact.split(":");

        if(contactNumberAndName[0].toLowerCase() === searchName){
           return contactNumberAndName[1];
        }
    }
}

function showAvailableNumber(){
    const result = getNumber();

    if(result){
        console.log(`${searchName}'s number is ${result}`);
    }else {
        console.log("Number not found!");
    }
}

showAvailableNumber();























// function displayAvailableNumbers(){
//     for(const contact of contacts){
//         const contactNumberArray = contact.split(":");
//         if(contactNumberArray[0].toLowerCase() === searchName){
//             console.log(`${contactNumberArray[0]}'s number is ${contactNumberArray[1]}`);
//             return;
//         }

//     }

//     console.log(`Number not found for ${searchName}`);
// }

// displayAvailableNumbers();











// for(const contact of contacts){
//     const contactNumber = contact.split(":");

//     if(contactNumber[0].toLowerCase() === searchName){
//         console.log(`${contactNumber[0]}'s number is ${contactNumber[1]}`);
//         break;
//     }

//     else {
//         console.log(`${searchName}'s number not found!`);
//     }
// }