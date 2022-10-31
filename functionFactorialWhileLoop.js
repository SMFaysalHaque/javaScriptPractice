function getFactorialNumber(number){
    let factorial = 1;
    let i = 1;
    while(i <= number){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

let newFactorialNumber = getFactorialNumber(5);
console.log(newFactorialNumber);