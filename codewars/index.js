// Date Aug 23 2026 -- time 10: 50 PM

{
    function multiply(a, b){
        return a * b;
    }

    console.log(multiply(2, 3));
}

{
    function multiply(a, b){
        if(!a || !b || typeof a !== "number" || typeof b !== "number"){
            throw new Error("Both argument should be number");
        }else {
            return a * b;
        }
    }

    console.log(multiply(3, 6));
    // console.log(multiply(2, "3"));
}

// return "even" for even numbers and "odd" for odd numbers

{
    function checkOddOrEven(number){
        if(!number || !Number.isInteger(number)){
            throw new Error("Please enter valid integer");
        }else if (number % 2 ){
            return "Odd";
        }else {
            return "Even";
        }
    }

    console.log(checkOddOrEven(23));
    console.log(checkOddOrEven(-35));
    // console.log(checkOddOrEven("34"));
    // console.log(checkOddOrEven(undefined));
    console.log(checkOddOrEven(34));
}

{
    function checkOddOrEven(number){
        return typeof number === "number" ?
            (number % 2 ? "Odd" : "Even" ) :
            "Error input";
    }

    console.log(checkOddOrEven(23));
    console.log(checkOddOrEven(-35));
    // console.log(checkOddOrEven("34"));
    console.log(checkOddOrEven(undefined));
    console.log(checkOddOrEven(34));
}


{
    function checkOddOrEven(number){
        return typeof number === "number" ?
            number % 2 ? "Odd" : "Even" :
            "Please enter valid integer";
    }

    console.log(checkOddOrEven(23));
    console.log(checkOddOrEven(-35));
    // console.log(checkOddOrEven("34"));
    console.log(checkOddOrEven(undefined));
    console.log(checkOddOrEven(34));
}

// convert numbers to string

{
    function convertToString(num){
        if(Number.isInteger(num)){
            return num.toString();
        }

        return "Please enter valid number";
    }

    console.log(convertToString(23));
    console.log(convertToString("Hello"));
}

{
    function convertToString(num){
        return num + "";
    }

    console.log(convertToString(23));
    console.log(convertToString("Hello"));
}

// Reverse The string 

{
    function getReverseString(string){
        return string.split("").reverse().join("");
    }

    console.log(getReverseString("world!"));
    console.log(getReverseString("hello"));
}


{
    function getReversedString(string){
        let reversedString = "";

        for(let i = string.length - 1; i >= 0; i --){
            reversedString += string[i];
        }

        return reversedString;
    }

    console.log(getReverseString("world!"));
    console.log(getReverseString("hello"));
}

{
    function returnNegative(num){
        return num >= 0 ? num : -num;
    }

    console.log(returnNegative(3));
    console.log(returnNegative(0));
    console.log(returnNegative(-1));
}

// Date 24 August 2026 --- Time 18:06

// So i have to return count of vowels in given strings

// Pseudocode:
// first I will be declaring and assigning a count variable to count the vowels
// then I will iterate thorugh the string and
    // will check for vowels
    // then if found will increment count by 1
// eventually will return it
{
    function getCountOfVowels(string){
        if(typeof string !== "string") throw new Error ("Please enter valid strings");

        let countVowel = 0;

        const vowels = ["a", "e", "i", "o", "u"];

        for(let i = 0; i < string.length; i ++){
            if(vowels.includes(string[i])){
                countVowel ++;
            }
        }

        return countVowel;
    }

    console.log(getCountOfVowels("suraj sajwan"));
    console.log(getCountOfVowels("suraj singh sajwan"));
    console.log(getCountOfVowels("sooraj singh sajwan"));
}

{
    function getCountOfVowels(string){
        if(typeof string !== "string") return 0;

        string = string.toLowerCase();

        let countVowel = 0;

        for(let i = 0; i < string.length; i ++){
            let char = string[i];

            if(char === "a" || 
               char === "e" ||
               char === "i" ||
               char === "o" ||
               char === "u" 
            ) countVowel ++
        }

        return countVowel;
    }

    console.log(getCountOfVowels("suraj sajwan"));
    console.log(getCountOfVowels("suraj singh sajwan"));
    console.log(getCountOfVowels("sooraj singh sajwan"));
}

{
    function getVowelCount(string){
        if(typeof string !== "string") throw new Error ("Please enter the valid string");
        
        string = string.toLowerCase();

        const vowels = ["a", "e", "i", "o", "u"];

        return string.split("").filter(character => vowels.includes(character)).length;
    }

    console.log(getVowelCount("suraj singh sajwan"));
    console.log(getVowelCount("anshul tiwari"));
    console.log(getVowelCount("aayush khanduri"));
    console.log(getVowelCount("Dev kaushik"));
    console.log(getVowelCount("prashant baghel"));
}

// Disemvowel the trolls --- so basically we have to remove vowels from the trolls comments
// so this is for loser lol -- becomes -- ths s fr lsr ll

// Pseudocode 
// first of all we will convert the comments to an array 
// then we'll have an collection containing all the vowel 
// then we will iterate through the comments array
// and will check for vowels a
// and then if vowels will be there will remove it 
// and then will return the string by converting arrays to strings

{
    function removeVowelsFromComments(comment){
        if(typeof comment !== "string") throw new Error ("Please enter the valid string");

        const commentsArray = comment.split("");

        const vowels = ["a", "e", "i", "o", "u"];

        for(let i = commentsArray.length - 1; i >= 0; i--){
            let char = commentsArray[i];

            if(vowels.includes(char.toLowerCase())){
                commentsArray.splice(i, 1);
            }
        }

        return commentsArray.join("");
    }

    console.log(removeVowelsFromComments("This one is FOR losers LOL"));
}

{
    function removeVowelsFromComments2(comment){

        if(typeof comment !== "string") throw new Error("Please enter valid strings");

        const comments = comment.split("");

        for(let i = comments.length - 1; i >= 0; i--){
            switch(comments[i].toLowerCase()){
                case "a":
                    comments.splice(i, 1);
                    break;
                case "e":
                    comments.splice(i, 1);
                    break;
                case "i":
                    comments.splice(i, 1);
                    break;
                case "o":
                    comments.splice(i, 1);
                    break;
                case "u":
                    comments.splice(i, 1);
            }

        }

        return comments.join("");
    }

    console.log(removeVowelsFromComments2("This is what it is LOSER"));
}

{
    function disemVowelComments(comment){

        const comments = comment.split("");
        const vowels = ["a", "e", "i", "o", "u"];

        return comments.filter(item => !vowels.includes(item.toLowerCase())).join("");
    }

    console.log(disemVowelComments("Hey you are shit, human being."));
}