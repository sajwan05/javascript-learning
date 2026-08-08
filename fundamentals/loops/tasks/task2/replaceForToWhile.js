// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// we have to replace it from for to while

{
    let counter = 0;

    while(counter < 3){
        console.log("number is " + counter);
        counter++;
    }
}

{
    let number = 2;

    while(number <= 10){
        if(!(number % 2 !== 0)){
            console.log(number);
        }
        number++;
    }
}