const cats = ["Pete", "Beagle", "Jasmine"];

let myCats = "My favorite cats are called ";
let i = 0;
let length = cats.length;

while(i < length){
    if(i === length - 1){
        myCats += `and ${cats[i]}.`;
    }else if(i === cats.length - 2){
        myCats += `${cats[i]} `;
    }else {
        myCats += `${cats[i]}, `;
    }

    i++;
}

console.log(myCats);