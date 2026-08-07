const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitGuest = [];
const refusedGuest = [];



const length = people.length;

for(let i = 0; i < length; i++){
    if(people[i] === "Phil" || people[i] === "Lola"){
        refusedGuest.push(people[i]);
    }else {
        admitGuest.push(people[i]);
    }
}

console.log(`Please come in: ${admitGuest}.`);
console.log(`Sorry you're not allowed: ${refusedGuest}.`);