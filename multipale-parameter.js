// multiple parameter function using for Addition.

function addTwoNumbers(firstNumber, secondNumber){
    console.log(firstNumber, secondNumber);
    var total = firstNumber + secondNumber;
    return total;
}

var number1 = 47;
var number2 = 35;
var result = addTwoNumbers(number1, number2);
console.log('Total result:', result);

console.log('===================================================');

// multiple parameter function using for Multiplication.

function multiplyTwoNumbers(num1, num2){
    var result = num1 * num2;
    return result;
}

var firstNumber = 5;
var secondNumber = 100;
var total = multiplyTwoNumbers(firstNumber, secondNumber);
console.log('Multiply result:', total);

console.log('===================================================');

// multiple parameter function using for Subtraction.


function subtractionTwoNumbers(num1, num2){
    var subtractionResult = num1 - num2;
    return subtractionResult;
}

var firstNumber = 500;
var secondNumber = 100;
var total = subtractionTwoNumbers(firstNumber, secondNumber);
console.log('Subtraction result:', total);

console.log('===================================================');

// multiple parameter function using for Division.


function divisionTwoNumbers(num1, num2){
    var divisionResult = num1 / num2;
    return divisionResult;
}

var firstNumber = 500;
var secondNumber = 100;
var total = divisionTwoNumbers(firstNumber, secondNumber);
console.log('Division result:', total);