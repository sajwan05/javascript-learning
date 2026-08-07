// Pseudocode

// so firstly we'll store the number which is limit
// then we'll generate number from one to stored limit
// then we will only generate number which are perfect square by checking for integers
// otherwise we'll continue 
// that's it


let number = 50;

for(let i = 1; i <= number; i++){
    let squareRoot = Math.sqrt(i);

    if(!Number.isInteger(squareRoot)){
        continue;
    }else {
        console.log(`${i} is perfect square`);
    }
}

{
    const limit = 100;

    function square(number) {
        return number * number;
    }

    function displayPerfectSquareTillLimit(limit){
        
        for(let i = 1; i <= limit; i++){

            const perfectSquare = square(i);

            if(perfectSquare > limit){
                continue;
            }else {
                console.log(`${perfectSquare}`);
            }
        }
    }

    displayPerfectSquareTillLimit(limit);
}