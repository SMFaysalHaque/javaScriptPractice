// 1. calculate Feet to Inch:

console.log('Conversion Feet to Inch:'); //just heading before a problem.

function feetToInch (feet){
    const inch = feet * 12;
    return inch;
}

const totalInch = feetToInch(11)
console.log('Total Inch:', totalInch, 'inch');

console.log('----------------------------------------------------------');

// 2. calculate Centimeter to Meter:

console.log('Conversion Centimeter to Meter:'); //just heading before a problem.

function centimeterToMeter (centimeter){
    const meter = centimeter / 100;
    return meter;
}

const totalMeter = centimeterToMeter(11)
console.log('Total Meter:', totalMeter, 'meter');

console.log('----------------------------------------------------------');

// 3. Calculate pages:

console.log('Calculate Pages:'); //just heading before a problem.

function calculatePages (book1, book2, book3){
    const pages1 = 100;
    const pages2 = 200;
    const pages3 = 300;

    book1 = book1 * pages1; 
    book2 = book2 * pages2;
    book3 = book3 * pages3;

    const totalPages = book1 + book2 + book3;

    return totalPages;
}

const allPages = calculatePages(3, 2, 4);
console.log('Total Pages Need:', allPages);

console.log('----------------------------------------------------------');

// 4. Find out Largest Name (string) from an Array:

console.log('Largest Name:'); //just heading before a problem.

// const names = ['faysal', 'fahad', 'noor', 'nayeem', 'fahim'];

function largestName (arr){

    let maxName = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(maxName.length <= arr[i].length){
            maxName = arr[i];
        }
    }
    return maxName;
}

// const findLargeName = largestName(names);
console.log(largestName (['faysal', 'a', 'fahad', 'noor', 'nayeem', 'fahim', 'aaaaaa']));

console.log('----------------------------------------------------------');

// 5. Find out Negative Number from an Array:

console.log('Negative Number:'); //just heading before a problem.

let number = [10, 3, 2, -25, -5, 17, 6];

for(let i = 0; i < number.length; i++){
    // if(number[i] < 0){
    //     console.log(number[i]);
    // }
    // console.log(number[i]);
    console.log(number[i]);
    if(number[i] < 0){
        break;
    }
}


