function convertUnits(inches, kilometer){
    let feet = inches / 12;
    let meter = kilometer / 1000;
    let result = [feet, meter];
    return result;
};

let output = convertUnits(132, 200);
console.log(output);

// let myInches = 132;
// let feet = convertUnits(myInches);
// console.log(feet);

// let myLength = 200;
// let meter = convertUnits(myLength);
// console.log(meter);

