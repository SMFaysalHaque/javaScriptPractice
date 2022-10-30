function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let firstFactorialNumber = getFactorial(3);
console.log('First Factorial Number:', firstFactorialNumber);

let secondFactorialNumber = getFactorial(7);
console.log('First Factorial Number:', secondFactorialNumber);