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

// Date : 10 September 2026 11:40 AM
// Pseudocode
// first we will initialize an empty array
// then we will iterate through the given array 
// then we will push elements which are not duplicate to the intialized array
// then remaining elements we can extract
{
    const numbers = [4, 7, 2, 7, 9, 4, 1];

    function getDuplicateNumbers(numbers){
        const array = [];
        const arrayOfDuplicates = [];

        for(let i = numbers.length - 1; i >= 0; i--){
            const value = numbers[i];

            if(!array.includes(value)){
                array.push(value);
            }else {
                arrayOfDuplicates.push(value);
            }
        }

        return arrayOfDuplicates;
    }

    console.log(getDuplicateNumbers(numbers));
}

{
    function getDuplicates(numbers){
        return numbers.sort((a, b) => a - b).filter((item, index) => index !== numbers.indexOf(item));
    }

    const numbers = [4, 7, 2, 7, 9, 4, 1];

    console.log(getDuplicates(numbers));
}


// Pseudocode :
// first we will intialize an empty array
// then we will iterate through the array
// Then we will iterate from value+1 th index to end of an arrray to find the value
// if value is found so we will push it to the empty array
// otherwise we will go to next iteration

{
    function getDuplicates2(numbers) {

        const duplicates = [];

        for(let i = 0; i < numbers.length; i++){
            const value = numbers[i];

            for(let j = i + 1; j < numbers.length; j++){

                if(value === numbers[j] && !duplicates.includes(value)){
                    duplicates.push(value);
                    break;

                }
            }
        }

        return duplicates;
    }

    const numbersArr = [1, 2, 3, 4, 3, 4, 5, 6, 4, 3, 2, 1, 1 , 4];
    console.log(getDuplicates2(numbersArr));
}

// return true if there are duplicates in your array otherwise false
// Pseudocode: 
// we can iterate through the array 
// then we can use inner loop to check duplicates
// if found true or else false

{
    function isDuplicateNumbers(numbers){

        for(let i = 0; i < numbers.length; i++){
            const value = numbers[i];

            for(let j = i + 1; j < numbers.length; j++){
                if(value === numbers[j]) {
                    return true;
                }
            }
        }

        return false;
    }

    console.log(isDuplicateNumbers([3, 8, 2, 8, 5]));
    console.log(isDuplicateNumbers([6, 7, 8, 2, 3, 4, 11]));
}

// Find the largest number in the given array

// Pseudocode :
// we can sort it out and then return the last value

{
    function findLargestValue(numbers){
        numbers.sort((a, b) => a - b);

        return `${numbers[numbers.length - 1]}`;
    }

    console.log(findLargestValue([4, 9, 2, 7, 5]));
}

// do not use sort
// first we will take the smallest value possible 
// then we will iterate through the array
// then we will compare each element with this smallest value
// then we will see we will upate large based on which is large

{
    function findLargestValue(numbers) {
        let largest = Number.MIN_SAFE_INTEGER;
        
        for(const number of numbers){
            if(number > largest){
                largest = number;
            }
        }

        return largest;
    }

    console.log(findLargestValue([4, 9, 2, 7, 5]));
}

// find smallest number in the array 
// Pseudocode:
// first we will keep first item of array as smallest number so far
// then we will iterate through the array
//      and will compare smallest with each number
//      and if they found number to smaller then smallest then
//          we will update our smallest 
// at end we will return it
{
    const numbers = [7, 3, 11, 2, 9];

    function findSmallest(numbers){
        let smallest = numbers[0];

        for(const number of numbers){
            if(number < smallest){
                smallest = number;
            }
        }

        return smallest;
    }

    console.log(findSmallest(numbers));
}

{
     const numbers = [7, 3, 11, 2, 9];

     function getSmallestNumber(numbers){
        let smallest = numbers[0];

        for(let i = 1; i < numbers.length; i++){
            if(numbers[i] < smallest){
                smallest = numbers[i];
            }
        }

        return smallest;
     }

     console.log(getSmallestNumber(numbers));
}

// Now get the largest letter
// first we will intialize largest with the first animal
// then we will iterate through the array and 
// will compare it with length of each element 
// largest one we will return at last 

{
    const words = ["cat", "dog", "elephant", "jaguar", "lion", "bear"];

    function getLargestWord(words){
        let largestWord = words[0];

        for(const animal of words.slice(1)){

            if(animal.length > largestWord.length){
                largestWord = animal;
            }
        }

        return largestWord;
    }

    console.log(getLargestWord(words));
}

// count how many numbers are even 
// Pseudocode :
// so we will have a count variable
// then we will iterate through the array
// then if it is even
// so we will increment count by 1
// and will return count at the end

{
    const numbers = [2, 5, 8, 3, 6];

    function countEvenNumbers(numbers){
        let count = 0;

        for(const number of numbers){
            if(number % 2 === 0) count++;
        }

        return count;
    }

    console.log(countEvenNumbers(numbers));

}

// Find the largest number that is less than 15

// Pseudocode
// so first we will have a largest number which will be first element of the array
// then we will iterate through the array
// and will compare number to the largest and it number should also be less than 15

{
    const numbers = [5, 12, 3, 18, 7];

    function getLargestLessThan15(numbers){
        let largest = Number.MIN_SAFE_INTEGER;

        for(const number of numbers){
            if(number > largest && number < 15){
                largest = number;
            }
        }

        if(largest === Number.MIN_SAFE_INTEGER) return null;

        return largest;
    }

    console.log(getLargestLessThan15(numbers));
    
}

// Interview practice daily 1 question using AI to generate question and validate my pseudocode:

// September 14, 2026
// How many numbers in an array are even:
// Pseudocode:
// First of all we will have a count variable intialized with 0 to count even numbers in array
// then we will iterate through the array
// for each item of array we will check
//      if it is even by modulo operator
//      if yes
//          so we will incerement count by 1
//          otherwise just go to next iteration
// return count at last
{
    function countEven(numbers){
        let count = 0;

        for(const number of numbers){
            if(number % 2 === 0) count++;
        }

        return count;
    }

    const array = [1, 2, 5, 7, 4, 3, 6, 7];

    console.log(countEven(array));
    console.log(countEven([2, 4, 6, 8, 10]));
    console.log(countEven([1, 3, 5, 7, 9]));
    console.log(countEven([17, 42, 91, 8, 13, 26, 55, 64, 73, 100, 101, 202]));
    console.log(countEven([0]));
    console.log(countEven([]));
}

// 15 september 2026
// find the largest element in the given array: 
// first of all we will have a large variable initialized with first element of given collection
// then we will iterate through the array from 1st index 
//      then we will check if large is less than current item in the iteration
//      if yes 
//      so update the large to the current item in iteration
// return large after exiting the loop
{

    function findLargestNumber(numbers){

        let large = numbers[0];

        for(let i = 1; i < numbers.length; i++){
            let value = numbers[i];

            if(large < value){
                large = value;
            }
        }

        return large;
    }

    console.log(findLargestNumber([10, 5, 8, 20, 3]));
    console.log(findLargestNumber([4, 7, 2, 9, 5]));
    console.log(findLargestNumber([1, 2, 3]));
}

// Write a function that takes an array of numbers and returns how many time the largest numbers appear in the array

// Pseudocode: 
// first we will have large and count variable large will be intialized with first element of an array and count will be initialized by 0
// then we will iterate through the array from index  1 
//      and check if lage is smaller than current item if yes
//              we will update the large to the current item
// then we will finally have large variable
// then we will again iterate the array 
//      this time we will check if current item is strictly equal to large which we have if yes
//              we will increment count by 1
// return count

{
    function countOccurenceOfLargest(array){
        let count = 0;
        let large = array[0];

        for(let i = 1; i < array.length; i++){
            const value = array[i];

            if(large < value){
                large = value;
            }
        }

        for(const item of array){
            if(item === large){
                count++;
            }
        }

        return count;
    }

    console.log(countOccurenceOfLargest([4, 2, 7, 7, 3, 7, 1]));
    console.log(countOccurenceOfLargest([5, 5, 2, 5, 1]));
    console.log(countOccurenceOfLargest([2, 35, 6, 7, 3, 4, 2]));

}

// find the smallest variable in an array
// so first we will initialize the variable small with first element of the array
// then we will iterate through the array from index 1
//          then we will check if small variable value is greater than current item
//          if yes
//                  so we will be updating the small to the current item
// return small variable value

{
    function getSmallestNumber(array){

        if(array.length < 1) throw Error ("please enter an array with at least 1 item");

        let small = array[0];

        for(let i = 1; i < array.length; i++){
            let value = array[i];

            if(value < small){
                small = value;
            }
        }

        return small;
    }

    console.log(getSmallestNumber([7, 3, 9, 2, 5]));
    console.log(getSmallestNumber([10, -4, 6, 2, -9]));
}

// problem solving day 3:
// return largest numbers from the given array
// Pseudocode:
// so first we will initialize large variable with first element of the array
// then we will iterate through the array from index 1
//      we will check if currentItem is greater than large varibale value
//      if yes
//          so we will update the large variable with currentItem
// return large variable's value

{
    function getLargestInArray (array){

        if(array.length < 1) throw Error("Please enter an array with at least one element.");
        let large = array[0];

        for(let i = 1; i < array.length; i++){
            const currentItem = array[i];

            if(currentItem > large){
                large = currentItem;
            }

        }

        return large;
    }

    console.log(getLargestInArray([4, 9, 2, 7, 1]));
}

// count even numbers in an given array
// Pseudocode:
// so first we will intialize count by 0
// then we will iterate through the array
//      then we will check if currentItem is completely divisible by 2 if yes
//              so we will increment count by 1

// return count

{
    function countEvenNumbers(array){

        if(array.length === 0) return 0;

        let count = 0;

        for(const item of array){
            if(item % 2 === 0 ) count++;
        }

        return count;
    }

    console.log(countEvenNumbers([3, 8, 2, 7, 10, 5]));
}

// count positive numbers in an array:
// Pseudocode:
// first of all if input array is empty we will return 0
// then we will intialize count by 0
// then we will iterate through the input array
//      we will check if item is greater than 0
//          if yes
//              we will increment count by 1
// return count

{
    function countPositiveNumbers(array){

        if(array.length === 0) return 0;

        let count = 0;
        for(const item of array){
            if(item > 0){
                count++;
            }
        }

        return count;
    }

    console.log(countPositiveNumbers([3, -2, 7, 0, -5, 9]));
}

// find the first number greater than 10 from on input array
// Pseudocode:
// we will start iterating through the array 
// then we will check if any element is greater than 10
// if yes so we will return that item/element
// and if not then we will return undefined

{
    function findFirstGreaterThanTen(array){

        for(const item of array){
            if(item > 10){
                return item;
            }
        }

        return undefined;
    }

    console.log(findFirstGreaterThanTen([5, 6, 7, 8, 9, 10, 11, 12]));
    console.log(findFirstGreaterThanTen([20, 3, 15, 4, 30]));
    console.log(findFirstGreaterThanTen([1, -10, -5, -1, 11, 3]));
}

// find the first occurrence. Given an array and a target number, return the index of the first time that target appears. And if it's not there, return minus one.

{
    function getIndexOfTarget(array, target){

        for(let i = 0; i < array.length; i++){
            if(array[i] === target) {
                return i;
            }
        }

        return -1;
    }

    console.log(getIndexOfTarget([4, 7, 10, 9], 7));
    console.log(getIndexOfTarget([10, 5, 3, 8], 8));
    console.log(getIndexOfTarget([1, 2,3 ,4 ], 9));
    console.log(getIndexOfTarget([5, 5, 5, 5], 5));
}

// find how many times the given target appears in the array and return count.
// Pseudocode:
// first of all we will have a count variable intialized with 0
// then we will iterate through the array
//      and will check if currentItem is strictly equal to target, if yes
//              we will increment count by one
// return count

{
    function getCountTarget(array, target){

        if(array.length === 0) return 0;

        let count = 0;

        for(const item of array){
            if(item === target) count++;
        }

        return count;
    }

    console.log(getCountTarget([4, 7, 2, 7, 9, 7], 7));
    console.log(getCountTarget( [5, 5, 3, 5, 1], 5));
    console.log(getCountTarget([1, 2, 3, 4], 9));

    // time complexity = O(n)
    // space complexity = O(1)
}

// Given an array return the largest even number 
// Pseudocode:
// so first we will iterate through the array
// then we will check if currentItem is even
// if yes
//  then we will intialize largestEven to that number
//  then we will check if currentItem > largestEven 
//  if yes
//  so we will update largestEven to the currentItem
// then at last we will return the largestEven

{
    function findLargestEven(array){

        let foundEven = false;
        let largestEven = Number.MIN_SAFE_INTEGER;

        for(const item of array){
            
            if(item % 2 === 0){
                foundEven = true;
                if(item > largestEven){
                    largestEven = item;
                }
            }
        }

        return foundEven ? largestEven : -1;
    }

    console.log(findLargestEven([3, 8, 9, 10, 12]));
    console.log(findLargestEven([21, 8, 14, 18]));
    console.log(findLargestEven([3, 5, 7, 9]));
    console.log(findLargestEven([-11, -8, -3, -14]));
}

// okay so 2nd appraoch

{
    function getLargestEven(array){

        let foundEven = false;
        let largestEven;

        for(const item of array){
            if(item % 2 === 0 && foundEven === false){
                largestEven = item;
                foundEven = true;
            }else if(item % 2 === 0){
                    if(item > largestEven) {
                    largestEven = item;
                }
            }
        }

        return foundEven ? largestEven : -1;
    }

    console.log(getLargestEven([3, 8, 9, 10, 12]));
    console.log(getLargestEven([21, 8, 14, 18]));
    console.log(getLargestEven([3, 5, 7, 9]));
    console.log(getLargestEven([-11, -8, -3, -14]));
}

// 18 september 2026 8:45 AM 
// given an array return second largest number from an array

// Pseudocode:
// so first of all we will have two variable to keep track of largest and secondLargest
// then we will iterate through the array
//      then we will check if item is greater than largest if yes
//              so we will update secondLargest to largest and
//              largest to item
//      otherwise we will check if item is less than largest but item is greater than secondLargest if yes
//               so we will update secondLargest to item
// then at last we will return second largest 

{
    function findSecondLargest(array){

        let currentLargest = Number.MIN_SAFE_INTEGER;
        let secondLargest = Number.MIN_SAFE_INTEGER;

        for(const currentItem of array){

            if(currentItem > currentLargest){
                secondLargest = currentLargest;
                currentLargest = currentItem;
            }else if (currentItem < currentLargest && 
                    currentItem > secondLargest
            ){
                secondLargest = currentItem;
            }
        }

        return (secondLargest === Number.MIN_SAFE_INTEGER) ?
                -1 :
                secondLargest;

    }

    console.log(findSecondLargest([10, 5, 8, 20, 15]));
    console.log(findSecondLargest([4, 9, 2, 7]));
    console.log(findSecondLargest([10, 15]));
    console.log(findSecondLargest([20, 10, 5, 8]));
    console.log(findSecondLargest([10, 20, 20, 15, 5]));
    console.log(findSecondLargest([-10, -5, -20, -8, -15]));
    console.log(findSecondLargest([4, 9, 2, 9, 7, 4, 8]));
}

// given an array of numbers, find the first number that appears more than once. and return that number 
// Pseudocode:
// so first we will have an empty array
// then we will iterate through the given array
//      then we will check if empty array doesn't have currentItem if it doesn't
//              so we will push it to the empty array
//      otherwise if it already have it
//              we will return the item

{
    function findFirstDuplicates(array){

        const isDuplicates = [];

        for(const number of array){
            if(!isDuplicates.includes(number)){
                isDuplicates.push(number);
            }else {
                return number;
            }
        }

        return -1;
    }

    console.log(findFirstDuplicates([4, 7, 3, 7, 4, 6]));
    console.log(findFirstDuplicates([4, 7, 2, 7, 9]));
    console.log(findFirstDuplicates([]));
    console.log(findFirstDuplicates([1]));
    console.log(findFirstDuplicates([2, 1]));
    console.log(findFirstDuplicates([2, 1, 2]));
    console.log(findFirstDuplicates([3, 5, 3, 5]));
    console.log(findFirstDuplicates([9, 9]));
}

// Given an array of numbers, find the smallest +ve number in the array
// Pseudocode:
// so first of all we will have a variable currentSmallest
// then we will iterate through the input array
//      and will check if currentItem is greater than zero and it is smaller than current smallest 
//              so we will update the currentSmallest
// and at last we will return currentSmallest
{

    function findSmallestPositive(array){

        let currentSmallest = Number.MAX_SAFE_INTEGER;

        for(const currentItem of array){
            
            if(currentItem > 0 && currentItem < currentSmallest){
                currentSmallest = currentItem;
            }
        }

        return (currentSmallest == Number.MAX_SAFE_INTEGER) ?
                -1 : currentSmallest;
    }

    console.log(findSmallestPositive([4, -2, 7, 1, -5, 3]));
    console.log(findSmallestPositive([-4, -2, -7]));
    console.log(findSmallestPositive([5, 2, 8, 3]));
    console.log(findSmallestPositive([0, -3, 4, 0, 2]));
}

// Problem: Move Zeros to the End
// Pseudocode: 
// so first of all we will iterate through the input array backwards
//      and will check if currItem is equal to zero if yes
//              we will splice at that index and then would push that removed item to array 
// we will return mutated array at last

{
    function moveZeroesToEnd(array){

        for(let i = array.length - 1; i >= 0; i--){

            if(array[i] === 0){
               const removedZero = array.splice(i, 1);
               array.push(removedZero[0]);
            }
        }

        return array;
    }

    console.log(moveZeroesToEnd([0, 1, 0, 3, 12]));
    console.log(moveZeroesToEnd([1, 0, 2, 0, 3]));
    console.log(moveZeroesToEnd([0, 0, 0]));
    console.log(moveZeroesToEnd([1, 2, 3]));
    
}

// 20 September 2026

// Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// Sunday

// 21september 2026

// find occurences of target element in an input array fn([1, 3, 4, 5, 3,4 ], 3) => 2
// Pseudocode:
// first we will have a count variable intialized with 0, to count number of times target appears
// then we will iterate through the array
//          then we will check if currentItem is strict equal to target if yes
//                  we will increment count by 1
//          otherwise
//                  we will move to next element
// and at last we will return the count

{
    function countOcuurenceOfTarget(array, target){

        if(array.length === 0) return 0;

        let count = 0;

        for(const item of array){

            if(item === target){
                count ++;
            }
        }

        return count;
    }

    console.log(countOcuurenceOfTarget([1, 2, 2, 3, 2], 2));
    console.log(countOcuurenceOfTarget([5, 5, 1, 5, 2], 5));
    console.log(countOcuurenceOfTarget([1, 2, 3], 7));
    console.log(countOcuurenceOfTarget([], 4));
}

// given an string count occurences of vowel in an array
// Pseudocode:
// first of all we will have countVowel initialized with 0
// then we will iterate through the string
//         then we will use logical operator OR to check if currentItem is vowel if yes 
//              so we will increment countVowel by 1
// at last we will return the countVowel
{
    function countVowels(str){

        let countVowel = 0;

        for(let item of str){
            item = item.toLowerCase();

            if(item === "a" || item === "e" || 
                item === "i" || item === "o" ||
                item === "u"
            ){
                countVowel++;
            }
        }

        return countVowel ? countVowel : 0;
    }

    console.log(countVowels("hello"));
    console.log(countVowels("javascript"));
    console.log(countVowels("aeiou"));
    console.log(countVowels("HELLO"));
    console.log(countVowels("xyz"));
    console.log(countVowels("a1e2i3o4u5"));
    console.log(countVowels("beautiful"));
}

// reverse the given string
// Pseudocode
// we will have intialize an empty string
// then we will iterate through the string backwards
//      then for each character we will concatenate it to the variable (empty) above
// at last we will return the variable which is containing reversed String

{
    function reverseString(string){

        if(typeof string !== "string") throw new Error("Please enter valid string");

        let reversedString = "";

        for(let i = string.length - 1; i >= 0; i--){
            reversedString += string[i];
        }

        return reversedString;
    }

    console.log(reverseString("hello"));
    console.log(reverseString("javascript"));
    console.log(reverseString("a"));
    console.log(reverseString(""));
    console.log(reverseString("12345"));
    console.log(reverseString("hello world"));
    console.log(reverseString("a b c"));
    console.log(reverseString("racecar"));
}

// Check if an array is sorted in ascending order, return true if it is else false

// Pseudocode:
// we will iterate through the array from index 1
//      so we will check if previous element is greater than currentItem /element if yes
//      return false
// if you condition never becomes true we will return true after end of the loop

{
    function isSortedAscending(array){

        for(let i = 1; i < array.length; i++){
            if(array[i - 1] > array[i]){
                return false;
            }
        }

        return true;
    }

    console.log(isSortedAscending([1, 2, 3, 4, 5]));
    console.log(isSortedAscending([1, 2, 2, 3, 4]));
    console.log(isSortedAscending([1, 3, 2, 4]));
    console.log(isSortedAscending([5, 4, 3, 2, 1]));
    console.log(isSortedAscending([1]));
    console.log(isSortedAscending([]))
}

// Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
// we can use maps

{
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [john, pete, mary];
    console.log(users);
    let names = users.map((item) => item.name);
    console.log(names);
}
// Without using methods

{
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [john, pete, mary];

    function getNames(array){

        const namesArray = [];

        for(let i = 0; i < array.length; i++){
            const value = array[i];

            namesArray.push(value["name"]);

        }

        return namesArray;
    }

    console.log(getNames(users));
}

// Map to objects

{
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [ john, pete, mary ];

    let usersMapped = [];

    for(let i = 0; i < users.length; i++){
        let user = users[i];

        let fullName = `${user.name} ${user.surname}`;
        let id = user.id;

        usersMapped.push({fullName, id});


    }

    console.log(usersMapped);
    // console.log( usersMapped[0].id )
    console.log( usersMapped[0].fullName );
    console.log(usersMapped[0].id);
}

{
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [ john, pete, mary ];

    let usersMapped = users.map((item) => {
        let fullName = `${item.name} ${item.surname}`;

        let id = `${item.id}`;

        return {fullName, id};
    });

    console.log(usersMapped);

    // console.log( usersMapped[0].id )
    console.log( usersMapped[0].fullName );
    console.log(usersMapped[0].id);
}

// Map to objects
{
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [ john, pete, mary ];

    let userMapped = users.map((item) => ({
        fullName: `${item.name} ${item.surname}`,
        id: item.id,
    }));

    console.log(userMapped);

    console.log(userMapped[2].fullName);
    console.log(userMapped[1]["id"]);
}

// Sort users by age
// Pseudocode:


{
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [ pete, john, mary ];
    console.log(arr);
    arr.sort((a, b) => a.age - b.age);

    console.log(arr);

    console.log(arr[0].name);
    console.log(arr[1].name);
    console.log(arr[2].name);
}

// Get average age

{
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [ john, pete, mary ];
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]["age"];
    }

    let averageAge = (sum / arr.length);

    console.log(averageAge);
}

// Create keyed object from array

{
    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    function groupById(array){
        
        let userById = {};

        for(let i = 0; i < array.length; i++){
            const user = array[i];

            let userId = `${user.id}`;

            userById[userId] = user;
        }

        return userById;
    }

    console.log(groupById(users));
}

// with reduce method

{
    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    function groupById(users){
        return users.reduce((final, currentItem) => final["id"] = currentItem, {});
    }

    let userById = groupById(users);
    console.log(userById);
}

{
     let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    function groupById(array){

        return array.reduce((obj, members) => {
            obj[members["id"]] = members;
            return obj;
        }, {});

    }

    let usersById = groupById(users);
    console.log(usersById);
}

// 22 september 2026
// Given an array of numbers, return the first value that appears more than once.
// Pseudocode:
// so first of all we will initialize our new empty array
// then we will iterate through the input array
//      and will check if currentItem is not available in new array so we will push it into new array
//      otherwise if it is already availble then and there we will just return the currentItem
// we will return -1 if no duplicates are found

{
    function findFirstDuplicate(array){

        const duplicateChecks = [];

        for(const item of array){
            
            if(duplicateChecks.includes(item)){
                return item;
            }else {
                duplicateChecks.push(item);
            }
        }

        return -1;
        
    }

    console.log(findFirstDuplicate([2, 1, 3, 5, 3, 2]));
    console.log(findFirstDuplicate([1, 2, 3, 4]));
    console.log(findFirstDuplicate([5, 5, 1, 2]));
    console.log(findFirstDuplicate([1, 2, 3, 2, 1]));
}

// Find the sum of all numbers in an array.

{
    function sumArray(array){

        let total = 0;

        for(const item of array){
            total += item;
        }

        return total;
    }

    console.log(sumArray([1, 2, 3, 4, 5]));
    console.log(sumArray([10, 20, 30]));
    console.log(sumArray([5]));
    console.log(sumArray([]));
}

// Given two arrays, find the elements that appear in both arrays.

// Pseudocode:
// so first of all we will have result array for common elements we will intialize it with empty array
// then we will iterate through one array
//         and will check if second array includes any current item if yes and if it is already not availble in resultant array 
//              then we will push it in result array
// we will return the resultant array at last 

{
    function findCommonElements(array1, array2){

        const result = [];

        for(const item of array1){

            if(array2.includes(item) && !result.includes(item)){
                result.push(item);
            }

        }

        return result;
    }

    console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]));
    console.log(findCommonElements([1, 2, 3], [4, 5, 6]));
    console.log(findCommonElements([],[1, 2, 3]));
    console.log(findCommonElements([1, 2, 3],[]));
    console.log(findCommonElements([1, 2, 2, 3],[2, 4, 2]));
    console.log(findCommonElements( [1, 2, 3],[1, 2, 3]));
    console.log(findCommonElements([1, 1, 2, 2, 3, 3], [2, 2, 3, 3, 4]));
}

// Reverse an array in place without using reverse method
// Pseudocode: 
// So we will iterate through the input array until left is less then right
// then we will initialize left at 0th index or maybe i can be left and we will intialize right by last index
//      then for each iteration we will swap values of left and right index 
//      then we will increment left and decrement right
// return the array;

{
    function reverseArrayInPlace(array){

        for(let left = 0,right = array.length - 1; left < right; left++, right-- ){
            let temp = array[right];
            array[right] = array[left];
            array[left] = temp;
        }

        return array;
    }

    console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
    console.log(reverseArrayInPlace([1, 2, 3, 4]));
    console.log(reverseArrayInPlace([10, 20]));
    console.log(reverseArrayInPlace([7]));
    console.log(reverseArrayInPlace([]));
    console.log(reverseArrayInPlace([-1, -2, -3, -4]));
    console.log(reverseArrayInPlace([1, 2, 2, 3, 1]));
    
}

{
    function reverseInPlaceNow(array){

        for(let left = 0, right = array.length - 1; left < right; left++, right-- ){
            let leftValue = array[left];
            let rightValue = array[right];

            let temp = rightValue;
            rightValue = leftValue;
            leftValue = temp;

            array[left] = leftValue;
            array[right] = rightValue;
        }

        return array;

    }
}

{
   function reverseInPlaceArray(array){

    for(let left = 0, right = array.length - 1; left < right; left++, right--){
        let leftValue = array[left];
        let rightValue = array[right];

        [leftValue, rightValue] = [rightValue, leftValue];

        array[left] = leftValue;
        array[right] = rightValue;
    }

    return array;

   }
}

{
    function reverseArrayInPlace(array){

        for(let left = 0, right = array.length - 1; left < right; left++, right--){
            [array[left], array[right]] = [array[right], array[left]];
        }

        return array;
    }

    console.log(reverseArrayInPlace([3, 5, 6, 7, 3, 4]));
}

// Problem 18: Reverse array in place

// Pseudocode: 
// first we will initialize left as first element and right as last element 
// then we will iterate through the input array until left is less than right
//      then we will swap item at left and right index and then we will increment left and decrement right
// after looping through all the elements and exiting loop 
// we will return array(which will be reversed ofcourse)

{
    function reverseArrayInPlace(array){

        for(let left = 0, right = array.length - 1; left < right; left++, right--){

            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
        }

        return array;
    }

    console.log(reverseArrayInPlace([1, 4, 5, 6, 3, 5, 3]));
}

// Find missing number
// Pseudocode:
// first we will sort the array
// then we will iterate through the sorted array
//      then we will check if index is equal to value at index if not
//      so that's our missing value and we will return it
// otherwise return -1 if no missing value is available

{
    function findMissingValue(array){

        const sortedArray = array.sort((a, b) => a - b);

        for(let index = 0; index < sortedArray.length; index++){
            if(index !== sortedArray[index]){
                return index;
            }

        }

        return sortedArray.length;
    }

    console.log(findMissingValue([3, 0, 1]));
    console.log(findMissingValue([0, 1]));
    console.log(findMissingValue([9, 6, 4, 2, 3, 5, 7, 0, 1]));
    console.log(findMissingValue([0]));
}


