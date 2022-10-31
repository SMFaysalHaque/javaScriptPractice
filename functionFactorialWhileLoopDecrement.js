// using while loop:
function getFactorialNumber(number){
    let factorial = 1;
    let i = number;
    while(i >= 1){
        console.log(i);
        factorial = factorial * i;
        console.log('Output: ', factorial);
        i--;
    }
    return factorial;
}

let newFactorialNumber = getFactorialNumber(5);
console.log("Total Factorial Result: ", newFactorialNumber);


console.log("=====================================");

// using for loop:
function factorialNumber(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
        console.log(i);
        console.log('Output: ', factorial);
    }
    return factorial;
}

let validFactorialNumber = factorialNumber(6);
console.log("Total Factorial Result: ", validFactorialNumber);