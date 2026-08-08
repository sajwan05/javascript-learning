// prime number from 2 to n 

let n = 30;

// let initialize = 2;

// for(initialize; initialize <= n; initialize++){

//     // 2 to n generated now checking for primality

//     for(let i = 2; i < initialize; i++){
//         if(initialize % i !== 0){
//             console.log(`${initialize} is prime`);
//             break;
//         }
//     }
// }

// prime number 

for(let i = 2; i <= n ; i++){
    let count = 0;

    for(let j = 1; j <= i; j++){
        if(i % j === 0){
            count++;
        }
    }

    if(count === 2){
        console.log("number is prime " + i );
    }
}


nextPrime: 
for(let i = 2; i <= n; i++){

    for(let j = 2; j < i; j++){
        if (i % j == 0) continue nextPrime;
    }

    console.log("prime " + i);
}

