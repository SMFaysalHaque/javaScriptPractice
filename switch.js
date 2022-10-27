// how to write switch case:
// switch (expression) {
// case value1:
//     //Statements executed when the
//     //result of expression matches value1
//     [break;]
// case value2:
//     //Statements executed when the
//     //result of expression matches value2
//     [break;]
// ...
// case valueN:
//     //Statements executed when the
//     //result of expression matches valueN
//     [break;]
// [default:
//     //Statements executed when none of
//     //the values match the value of the expression
//     [break;]]
// }

// example given bellow: (if we forget to give 'break')
const foo = 0;
switch (foo) {
    case -1:
        console.log('negative 1');
        break;
    case 0: // Value of foo matches this criteria; execution starts from here
        console.log(0); 
        // Forgotten break! Execution falls through
    case 1: // no break statement in 'case 0:' so this case will run as well
        console.log(1);
        break; // Break encountered; will not continue into 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}
// Logs "0" and "1"

console.log('===================================================');

// example given bellow: (if we give 'break')
const fruits = 'mango';

switch(fruits){
    case 'banana':
        console.log('I love Banana!!!');
        break;
    case 'orange':
        console.log("I don't like to eat Orange!!!");
        break;
    case 'pine-apple':
        console.log('This pine-apple looks so sweet!!!');
        break;
    case 'mango':
        console.log('Oh my Allah!!! I love mango so much!!!');
        break;
    default:
        console.log('Your fate is not support you to eat fruit, what you like most!!!');

}

console.log('===================================================');

// if we compare with 'if-else' condition:

const color = 'red';

if(color == 'green'){
    console.log('The color is green!!!');
}
else if(color == 'yellow'){
    console.log('The color is yellow!!!');
}
else if(color == 'grey'){
    console.log('The color is grey!!!');
}
else if(color == 'red'){
    console.log('The color is Red');
}
else{
    console.log('The color is Black');
}

// 'switch' case is faster than 'if-else'