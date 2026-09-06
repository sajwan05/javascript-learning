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

// Date 12:45 August 25 2026
// return square of each digit concatenated together
// Pseudocode
// first of all we will turn negative numbers to absolute numbers
// then we will have to check if given input in integer/num or not 
// then we will convert our number to string we can also do with array num --- string ---arr
// then we will declare and intialize an empty string
// then we will iterate through the converted strings of number
        // then for each character we will multiply it by itself
        // and will concatenate it to empty strings
// then will convert concatenated squares to number 
// and then will return it
{
    function getConcatenatedSquareOfDigits(number){
        if(!Number.isInteger(number)) throw new Error("Please enter valid number");
        
        if(number < 0 ) number = Math.abs(number);

        let stringOfNumber = number.toString();
        let concatenatedSquare = "";

        for(let i = 0; i < stringOfNumber.length; i++){
            let char = stringOfNumber[i];

            concatenatedSquare += char * char;
        }

        return parseInt(concatenatedSquare);
    }

    console.log(getConcatenatedSquareOfDigits(4567));
}

{
    function getSquareOfDigitsConcatenated(number){
        if(!Number.isInteger(number)) throw new Error("Please enter the valid integers");

        number = Math.abs(number);

        const array = number.toString().split("");

        const concatenatedSquares = [];

        for(const item of array){
            let square = item * item;
            concatenatedSquares.push(square);
        }

        return concatenatedSquares.join("");
    }

    console.log(getSquareOfDigitsConcatenated(345));
    console.log(getSquareOfDigitsConcatenated(908));
    console.log(getSquareOfDigitsConcatenated(1));
}


{
    function getSquares(number){
        return Math.abs(number).
            toString().
            split("").
            map(item => item*item).
            join("");
    }

    console.log(getSquares(456));
    console.log(getSquares(123));
    console.log(getSquares(45678));
}

// string repeat 

{
    function repeatString(word, times){
        let repeatedString = "";

        for(let i = 1; i <= times; i++){
            repeatedString += word;
        }

        return repeatedString;
    }

    console.log(repeatString("suraj", 3));
}

{
    function repeatString(word, times){
        return word.repeat(times);
    }

    console.log(repeatString("hello", 2));
}

// remove first and last character of a string

{
    function removeTeminalEnds(string){
        if(typeof string !== "string") throw new Error ('Please enter valid string please.');

        return string.slice(1, string.length - 1);
    }

    console.log(removeTeminalEnds("eloquent"));
    console.log(removeTeminalEnds("a"));
    console.log(removeTeminalEnds("ab"));
    console.log(removeTeminalEnds("abc"));
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

{
    function getHighAndLow(numbers){
        let array = numbers.split(" ");

        const max = Math.max(...array);
        const min = Math.min(...array);

        return `${max} ${min}`;
    }

    console.log(getHighAndLow("1 2 3 4 5 6"));
    console.log(getHighAndLow("5"));
}

{
    function getHighAndLow(numbers){
        const array = numbers.split(" ");

        array.sort((a, b) => b - a);

        return `${array[array.length - 1]} ${array[0]}`;
    }

    console.log(getHighAndLow("3 6 7 -7 4 5"));
    console.log(getHighAndLow("5"));

}

// August 26 2026 8 AM

// square sum in given array so we have to square each element of given array and then sum it

// Psuedocode 
// we can do map and reduce
// but for problem solving purposes
// first we will have a variable initialized with zero which will keep track of sum
// then we will iterate through the given collection
    // then we will square each element 
    // then will sum it in each iteration 
// at last will return the sum

{
    function getSumOfSquares(numbers){
        let sum = 0;

        for(const number of numbers){
            sum += number * number;
        }

        return sum;
    }

    console.log(getSumOfSquares([1, 2, 3]));
}

{
    function getSumOfSquares2(numbers){
        return numbers.map(number => number * number)
                    .reduce((sum, number) => sum + number, 0);
    }

    console.log(getSumOfSquares2([1, 2, 3]));
}


{
    function getSumOfSquares3(numbers){
        return numbers 
            .reduce((total, number) => total + number * number, 0);
    }

    console.log(getSumOfSquares3([1, 2, 3]));
}

// filter list given an array of numbers and strings filter out strings and return array with only number element

// Pseudocode
// first we will iterate through the array backward
    // then we will check for each item if it is string
        // if yes 
            // delete it
// return the array

{
    function filterListFromString(array){
        for(let i = array.length - 1; i >= 0; i--){
            if(typeof array[i] === "string"){
                array.splice(i, 1);
            }
        }

        return array;
    }

    console.log(filterListFromString([1, 2, 4, 5, "a", 5, "b"]));
}

{
    function filterListFromString1(list){
        const arrayOfNumbers = [];

        for(const item of list){
            if(typeof item !== "string"){
                arrayOfNumbers.push(item);
            }
        }

        return arrayOfNumbers;
    }

    console.log(filterListFromString1([1, 2, 4, 5, "a", 5, "b"]));
}

// improvement

{
    function filterListFromString3(list){

        const arrayNumbers = [];

        for(const item of list){
            if(typeof item === "number"){
                arrayNumbers.push(item);
            }
        }

        return arrayNumbers;
    }

    console.log(filterListFromString3([1, 2, 5, "adf", 8, "dh", "hj", 67]));
}

{
    function filterList2 (list){
        return list 
            .filter(item => typeof item === "number");
    }

    console.log(filterList2([1, "b", "c", "b", 6, 4, 5]));
}

// function takes non negative integer and return it with its digits in descending order esentially rearrange the digits to create the highest possible number.

// pseudocode
// we will convert the number to string and then array
// then will sort the array in descending order
// and then will convert it back to string and number
// and return the highest number possible

{
    function getHighestNumber(number){
        const array = number.toString().split("");

        array.sort( (a, b) => b - a );

        return parseInt(array.join(""));
    }

    console.log(getHighestNumber(3453432566));
}


// Date 27th August 2026 ---- 9:20 AM

// given a number find if it is perfect square or not

// Pseudocode 
// so we can generate number from 0 to n
// and then multiply number by itself 
// and if it ever comes equal to given number so we will know that it is perfect square

{
    function isPerfectSquare(number){
        for(let i = 0; i <= Math.sqrt(number); i++){
            let value = i * i;

            if(value === number){
                return true;
            }
        }
        return false;
    }

    console.log(isPerfectSquare(3));
    console.log(isPerfectSquare(4));
    console.log(isPerfectSquare(1));
    console.log(isPerfectSquare(0));
    console.log(isPerfectSquare(-1));
}

{
    function isPerfectSquare(number){
        let result = Math.sqrt(number);

        return Number.isInteger(result);
    }
    console.log(isPerfectSquare(3));
    console.log(isPerfectSquare(4));
    console.log(isPerfectSquare(1));
    console.log(isPerfectSquare(0));
    console.log(isPerfectSquare(-1));
}

{
    function isPerfectSquare(number){
        let sqrt = Math.sqrt(number);

        if(Math.floor(sqrt) === sqrt){
            return true;
        }

        return false;
    }

    console.log(isPerfectSquare(3));
    console.log(isPerfectSquare(4));
    console.log(isPerfectSquare(1));
    console.log(isPerfectSquare(0));
    console.log(isPerfectSquare(-1));
}

// 28 august 2026 rakshabandahan morning session before going at cousins place

// given an array with true and false undefined null NaN event find number of items in array which are true find sheeps

{
    function findSheeps(array){

        const itemArrays = [];

        for(const item of array){
            if(item === true){
                itemArrays.push(item);
            }
        }

        return itemArrays.length;
    }

    console.log(findSheeps([true, undefined, false, undefined, true, 0, NaN, true]));
}

{
    function findSheep(sheeps){
        return sheeps.filter(sheep => sheep).length;
    }

    console.log(findSheep([true, undefined, false, undefined, true, 0, NaN, true, true, false, true, undefined]));
}

// Codewars august 30 2026 7:47 PM

// given string with spaces return string without spaces
// pseudocode:

// first of all we will initialize an empty strings
// then we will check each character for
        // we will check if it is not empty
        // so we will concatenate it to initialized string
// then we will return the concatenated string 

// or
// we can just use string to array and back to string
{
    function getStringWithoutSpaces(str){
        
        let stringWithoutSpaces = "";

        for(let i = 0; i < str.length; i ++){

            if(str[i].trim() !== ""){
                stringWithoutSpaces += str[i];
            }
        }

        return stringWithoutSpaces;
    }

    console.log(getStringWithoutSpaces("8 j 8"));
    console.log(getStringWithoutSpaces("4 jkl 5 l d f jkl lk"));
}

{
    function getStrWoSpaces(str){
        return str.split(" ").join("");
    }

    console.log(getStrWoSpaces("5 k l jh"));
}

// Codewars --- August 31 2026 --- 1: 33 PM 

// given a and b and limit so we have to return an array consisting of multiple of both a and b till a limit

// Pseudocode 
// first of all we will initialize an empty array
// then we will start iterating from a & will loop until we reach limit and will increment loop by a 
        // then for each number 
        // we will check if it is divisible by b
        // if yes 
            // so we will push it to empty array
// then we will return the array 

{
    function getMultipleOfBoth(a, b, limit){

        const multipleOfBoth = [];
        for(let i = a; i <= limit; i += a){
            if(i % b === 0){
                multipleOfBoth.push(i);
            }
        }

        return multipleOfBoth;
    }

    console.log(getMultipleOfBoth(3, 7, 50));
}

{
    function getMultipleOfBoth(a, b, limit){
        const multipleOfBoth = [];

        for(let i = a; i <= limit; i ++){
            if(i % a === 0  && i % b === 0){
                multipleOfBoth.push(i);
            }
        }

        return multipleOfBoth;
    }

    console.log(getMultipleOfBoth(4, 16, 56));
}

// Isograms:
// Pseudocode
// so first we will convert the string into array
// then we will intialize an empty array
// then we will iterate through the converted array
//      and check if empty array do not already include 
//      items of an array
//      if it doesn't so we will push it otherwise
//      we will return false and that's it
// and return true 
{
    function checkIsograms(word){

        const array = [];

        const arrayOfString = word.split("");

        for(const item of arrayOfString){

            if(!array.includes(item.toLowerCase())){
                array.push(item.toLowerCase());
            }else {
                return false;
            }
        }

        return true;

    }

    console.log(checkIsograms("aba"));
    console.log(checkIsograms("duckworthle"));
    console.log(checkIsograms("helloWorld"));
    console.log(checkIsograms("oOl"));
    console.log(checkIsograms("hHjkLl"));
    console.log(checkIsograms("Ool"));
}

// Not so efficient

{
    function isIsogram(word){

        const arrToCompare = [];

        const array = word.split("");

        for(const item of array){

            if(!arrToCompare.includes(item.toLowerCase())){
                arrToCompare.push(item.toLowerCase());
            }
        }

        return arrToCompare.join("") === word.toLowerCase();
    }

    console.log(isIsogram("aba"));
    console.log(isIsogram("duckworthle"));
    console.log(isIsogram("helloWorld"));
    console.log(isIsogram("oOl"));
    console.log(isIsogram("hHjkLl"));
    console.log(isIsogram("Ool"));
}

{
    function isIso(word){
        let seen = "";

        for(let i = 0; i < word.length; i ++){
            if(!seen.includes(word[i].toLowerCase())){
                seen += word[i].toLowerCase();
            }else {
                return false;
            }
        }

        return true;
    }

    console.log(isIso("bob"));
    console.log(isIso("oOl"));
    console.log(isIso("Oolbc"));
    console.log(isIso("hey"));
}

// Codewars September 1 2026 12:15 PM

// Get the middle character
// Pseudocode 
// so first of all we will get the length of the string
// then if length is odd so we will get the middle character
// else if length is even we will get two middle character

{
    function getMiddleCharacter(word){
        let wordLength = word.length;

        if(wordLength % 2 ){
            const index = Math.floor(wordLength / 2);
            return word[index];
        }else {
            const index = Math.floor(wordLength / 2) - 1;
            const i = index + 1;

            return `${word[index]}${word[i]}`;
        }
    }

    console.log(getMiddleCharacter("suraj"));
    console.log(getMiddleCharacter("sajwan"));
}

// get multiple of 3 and 5 below given number and sum them together and return the sum 

// Pseudocode
// so first of all we will intialize sum to 0
// then we will generate number from 1 to below given number
// then we will check if it is multiple of 3 or 5 and sum them 
// return sum

{
    function getSumOfMultiples(number){
        let sum = 0;

        for(let i = 1; i < number; i++){

            if(i % 3 === 0 && i % 5 === 0){
                sum += i;
            }else if (i % 3 === 0){
                sum += i;
            }else if(! (i % 5) ){
                sum += i;
            }
        }

        return sum;
    }

    console.log(getSumOfMultiples(10));

}

{
    function getSumOfMultiplesOfThreeAndFive(number){

        let sum = 0;

        for(let i = 1; i < number; i++){
            if(i % 5 === 0 || i % 3 === 0){
                sum += i;
            }
        }

        return sum;
    }

    console.log(getSumOfMultiplesOfThreeAndFive(10));
}

// Excercism september 6, 2026

{
     function timeToMixJuice(name) {
  let timeTakenToMixJuice = 0;
  switch(name){
    case "Pure Strawberry Joy":
      timeTakenToMixJuice += 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      timeTakenToMixJuice += 1.5;
      break;
    case "Tropical Island":
      timeTakenToMixJuice += 3;
      break;
    case "All or Nothing":
      timeTakenToMixJuice += 5;
      break;
    default:
      timeTakenToMixJuice += 2.5;
  }

  return timeTakenToMixJuice;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
 function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let limesNeedsToCut = 0;

  while(limesNeedsToCut < limes.length && wedges < wedgesNeeded){
    const sizeOfLime = limes[limesNeedsToCut];

    switch(sizeOfLime){
      case "small":
        wedges += 6;
        break;
      case "large":
        wedges += 10;
        break;
      case "medium":
        wedges += 8;
    }
    limesNeedsToCut ++;
  }
  return limesNeedsToCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
 function remainingOrders(timeLeft, orders) {
  let time = 0;
  let i = 0;
  do{
    const timeTakenToPrepareJuice = timeToMixJuice(orders[i]);
    orders.splice(i, 1);
    i--;
    time += timeTakenToPrepareJuice;
    i++;
  }
  while(time < timeLeft && i < orders.length);
   
  console.log(orders);
  return orders;
  
}

console.log(remainingOrders(10, ["All or Nothing", "Tropical Island", "lime soda", "mohito"]));
}