// Pseudocode 
// Given array of contacts

// first we'll store the name we want to search for in a variable
// then we will get the number
    // we will iterate through the array
    // and for each item we will transform it into a name and number array basically for individual contact
    // then we'll compare it with the name we have already stored (basically for which we're searching)
    // then if it is available then we will say yes

// then we will display if number is found or not
    // we will call the previous result 
    // then if number is available 
        // display
    // otherwise
        // say sorry

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

const searchName = prompt("Please enter the name you want to search for: ").trim().toLowerCase();

function getNumber(){

    for(const contact of contacts){

        const individualContactArray = contact.split(":");

        if(individualContactArray[0].toLowerCase() === searchName){
            const number = individualContactArray[1];

            return number;
        }
    }

    return false;
}

function displayNumberForNameInPhonebook(){
    const result = getNumber();

    if(result){
        console.log(`${searchName}'s number is: **${result}**`);
    }else {
        console.log("Number not found for " + searchName);
    }
}

displayNumberForNameInPhonebook();