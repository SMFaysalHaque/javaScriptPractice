// JavaScript For Loop:
// syntax:
// for([initialization]; [condition]; [final-expression]){
//     statement
// }

for(var roastGiven = 0; roastGiven < 7; roastGiven++){
    console.log('Give me Roast!!!');
}

console.log('======================================');

// limited, less then number

for(var number = 0; number < 10; number++){
    console.log('All Number:', number);
}

console.log('======================================');

// limited, less then and equal number

for(var number = 1; number <= 10; number ++){
    console.log('All less then and equal Number:', number);
}

console.log('======================================');

// odd number

for(var number = 1; number <= 20; number += 2){
    console.log('Odd Number:', number);
}

console.log('======================================');

// even number

for(var evenNumber = 0; evenNumber <= 20; evenNumber += 2){
    console.log('Even Number:', evenNumber);
}