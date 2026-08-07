const cats = ["Pete", "Beagle", "Jasmine"];

let myCatsNames = "My cats are called ";

const length = cats.length;

let i = 0;

do{
    if(i === length - 1){
        myCatsNames += `and ${cats[i]}.`;
    }else if(i === length - 2){
        myCatsNames += `, ${cats[i]} `;
    }else {
        myCatsNames += cats[i];
    }

    i++;
}while(i < length)

console.log(myCatsNames);