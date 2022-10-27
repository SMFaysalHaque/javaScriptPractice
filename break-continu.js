//while loop without break:
var j = 0;

while (j <= 15){
    console.log('while loop without break:',j);
    j++;
}

console.log('===================================================');

//while loop with break:
var i = 0;

while (i < 10){
    console.log('while loop with break:',i);
    if(i == 5){
        break;
    }
    i++;
}

console.log('===================================================');

//for loop without break:
for(var k = 1; k <= 20; k++){
    console.log('for loop without break:',k);
}

console.log('===================================================');

//for loop with break:
for(var k = 1; k <= 20; k++){
    console.log('for loop with break:',k);
    if(k > 10){
        break;
    }
}

console.log('===================================================');

// in array using break and continue:
// break:
var numbers = [40, 58, 31, 75, 102, 89, 97];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
    if(number > 100){
        break;
    }
}

console.log('===================================================');

// continue:
var digits = [35, 76, 12, 98, 66, 91, 100, 97];

for( var k = 0; k < digits.length; k++){
    var digit = digits[k];
    if(digit > 90 && digit < 99){
        continue;
    }
    console.log(digit);
}