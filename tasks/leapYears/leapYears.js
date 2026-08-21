/*
Leap years :
Leap years are basically years which are divisible by four and not divisible by hundred
or divisible by four hundred
*/ 

{
    function leapYears(year){
        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            return true;
        }else {
            return "sorry not a leap year";
        }
    }

    console.log(leapYears(2024));
    console.log(leapYears(1984));
    console.log(leapYears(1900));
    console.log(leapYears(1800));
    console.log(leapYears(1600));
}