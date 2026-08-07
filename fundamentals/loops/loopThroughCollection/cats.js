const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for(const cat of cats){
    myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats);

// But I don't want that I want last item of array to have period and "and";

{
    const cats = ["Pete", "Biggles", "Jasmine"];

    let myFavoriteCats = "My cats are called ";

    for(const cat of cats){
        myFavoriteCats += `${cat}, `;
    }

    const indexOfLastComma = myFavoriteCats.lastIndexOf(",");
    
    let formattedCats = myFavoriteCats.slice(0, indexOfLastComma);

    formattedCats += ".";

    console.log(formattedCats);
}

// better would be to use for loop

{
    const cats = ["Pete", "Biggles", "Jasmine"];

    let myFavoriteCats = "My favorite cat is ";

    for(let i = 0; i < cats.length; i++){
        if(i === cats.length - 1){
            myFavoriteCats += `and ${cats[i]}.`;
        }else {
            myFavoriteCats += `${cats[i]}, `;
        }
    }

    console.log(myFavoriteCats);
}