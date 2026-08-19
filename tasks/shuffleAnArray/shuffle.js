{
    function shuffleArr(array){
        
        for(let i = 0; i < array.length; i++){
            const randomIndex = Math.floor(Math.random() * array.length);

            array[i] = array[randomIndex];
        }

        return array;
    }

    // console.log(shuffleArr([1, 2, 3]));

    // I was approaching it all wrong!
}

/*
Pseudocode:

first i will iterate through the given arrray
then i will generate random index 
then i will swap random index with already itrable index and tada 
then i will return the shuffled array
*/ 

{
    function shuffleArr(array){

        const length = array.length;
        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * length);

            const temporary = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = temporary;
        }

        return array;
    }

    console.log(shuffleArr([1, 2, 3]));
}

{
    function shuffleArr(array){

        for(let i = 0; i < array.length; i++){

            const randIndex = Math.floor(Math.random() * array.length);

            [array[i], array[randIndex]] = [array[randIndex], array[i]];
        }

        return array;
    }

    console.log(shuffleArr([1, 2, 3]));
}


