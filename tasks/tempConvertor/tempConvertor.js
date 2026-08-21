{
    function getFahrenheitToCelsius(tempInF){
        let tempInC = (tempInF - 32.0) * 5 / 9;

        return Math.round(tempInC * 10) / 10;
    }

    console.log(getFahrenheitToCelsius(98.4));
    console.log(getFahrenheitToCelsius(76));
    console.log(getFahrenheitToCelsius(32));
}

{
    function getTempInFahrenheit(tempInC){
        let tempInF = tempInC * (9 / 5) + 32;

        return Math.round(tempInF * 10) / 10;
    }

    console.log(getTempInFahrenheit(36.9));
    console.log(getTempInFahrenheit(100));
    console.log(getTempInFahrenheit(0));
}

{

    function getFahrenheitToCelsius(tempInF){
        let tempInC = (tempInF - 32.0) * 5 / 9;

        return parseFloat((tempInC).toFixed(1))
    }

    console.log(getFahrenheitToCelsius(98.4));
    console.log(getFahrenheitToCelsius(76));
    console.log(getFahrenheitToCelsius(32));

}

{
    function getTempInFahrenheit(tempInC){
        let tempInF = tempInC * (9 / 5) + 32;

        return parseFloat((tempInF).toFixed(1));
    }

    console.log(getTempInFahrenheit(36.9));
    console.log(getTempInFahrenheit(100));
    console.log(getTempInFahrenheit(0));
}