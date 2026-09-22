const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

// get the list of inventors those were born in 1500s
// Pseudocode 
// we will intialize an empty array
// then we will iterate through the given array of objects
//      then we will check if someone was born b/w 1499 to 1600 if yes
//          we will push those item into new array
// at last will return new array

{
    function bornIn1500s(array){

        const fifteenthCenturyBorn = [];

        for(const item of array){
            if(item.year >= 1500 && item.year < 1600){
                fifteenthCenturyBorn.push(item);
            }
        }

        return fifteenthCenturyBorn;
    }

    console.log(bornIn1500s(inventors));
}
// you can use filter to achieve this

{
    const fifteenthCenturyBorn = inventors.filter(user => user.year < 1600 && user.year >= 1500);

    console.log(fifteenthCenturyBorn);
}

// Give us array of the inventors first and last names

{
    let firstAndLastNames = [];

    for(let i = 0; i < inventors.length; i++){
        firstAndLastNames.push(inventors[i].first, inventors[i].last);
    }

    console.log(firstAndLastNames);
}

{
    let firstAndLastNames = [];

    for(const inventor of inventors){
        firstAndLastNames.push(inventor.first, inventor.last);
    }

    console.log(firstAndLastNames);
}

{
    let firstAndLastNames = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
    console.log(firstAndLastNames);
}

// Sort the inventor by birthdaye, oldest to shortest

{
    const sortedArr = inventors.sort((a, b) => {
        if(a.year > b.year) {
            return 1;
        }else {
            return -1;
        }
    });

    console.log(sortedArr);
}

{
    const sortedArr = inventors.sort((a, b) => a.year - b.year);
}

// How many years did all the inventors live all together

{
    const commulatativeYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year) , 0);

    console.log(commulatativeYears);
}

// sort the inventors by years lived: 

{
    const yearsLivedMaximumtoLowest = inventors.sort((a, b) => {
        if((a.passed - a.year ) > (b.passed - b.year)) {
            return -1;
        }else {
            return 1;
        }
    });

    console.log(yearsLivedMaximumtoLowest);
}

const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

// sort the people alphabetically by last names