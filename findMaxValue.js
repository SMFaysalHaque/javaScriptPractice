// using Math.max() method:
let arr = [3, 10, 6, 9, 15];
let maxResult = Math.max(...arr);
console.log('Max Result is: ', maxResult);
console.log('Max Result is: ', Math.max(...arr));

//using loop:
const myArray = [20, 23, 30, 27];

let maxElement = myArray[0]; // এখানে myArray[0] দ্বারা myArray = [20, 23, 30, 27] এর প্রথম ইলিমেন্ট 20 কে বুঝাচ্ছে।
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > maxElement) {
        maxElement = myArray[i];
    }
}

console.log('Max Number:', maxElement); // 30

//using function:
function maxValue(arr){
    let maxNumber = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(maxNumber < arr[i]){
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}

let arrayInput = maxValue([20, 3, 30, 27]);
console.log('Max find from Array:', arrayInput);

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= array[0];

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        largest=array[i];
    }
}
console.log(largest);

function findMaxNumber(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}

let result = findMaxNumber(22, 55);
console.log('Max:', result);

// let first = 22;
// let second = 55;
// let result = (first, second);
// console.log('Max:', result);


// using Math.max() method:
const a = 20;
const b = 12;
const c = 27;

let max = Math.max(a, b, c);
console.log('Max Number:', max);
