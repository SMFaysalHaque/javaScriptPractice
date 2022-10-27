// JavaScript While Loop:
// syntax:
// initialization 
// while (condition){
//     statement
//          &
//     final-expression
// }

var roastGiven = 0;

while(roastGiven < 7){
    console.log(roastGiven);
    console.log('Give me Roast!!!');
    // roastGiven = roastGiven + 1;
    // roastGiven += 1;
    roastGiven ++;
}

console.log('======================================');

// limited, less then number

var number = 0;

while (number < 10){
    console.log('All Number:', number);
    number ++;
}

console.log('======================================');

// limited, less then and equal number

var number = 1;

while (number <= 10){
    console.log('All less then and equal Number:', number);
    number ++;
}

console.log('======================================');

// odd number

var number = 1;

while (number <= 20){
    console.log('Odd Number:', number);
    // number = number + 2;
    number += 2;
}

console.log('======================================');

// even number

var evenNumber = 0;

while (evenNumber <= 20){
    console.log('Even Number:', evenNumber);
    // evenNumber = evenNumber + 2;
    evenNumber += 2;
}