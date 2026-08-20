// sum all rest parameter number

{
    function sum(...rest){
        let total = 0;

        for(const num of rest){
            total += num;
        }

        return total;
    }

    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
    console.log(sum(1, 2, 3, 4));
}