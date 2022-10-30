function leapYear(years){
    let result;
    if (years % 4 == 0 || years % 400 == 0){
        result = true;
    }
    else{
        result = false;
    }
    return result;
}

let inputYear = leapYear(2021);
console.log(inputYear);