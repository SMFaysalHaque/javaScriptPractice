// using Math.min() method:
let arr = [3, 10, 6, 9, 15];
let minResult = Math.min(...arr);
console.log('Min Result is: ', minResult);
console.log('Min Result is: ', Math.min(...arr));

//using loop:
const myArray = [20, 23, 30, 27];

let minElement = myArray[0]; // এখানে myArray[0] দ্বারা myArray = [20, 23, 30, 27] এর প্রথম ইলিমেন্ট 20 কে বুঝাচ্ছে।
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < minElement) {
        minElement = myArray[i];
    }
}

console.log('Min Number:', minElement); // 30

//using function:
function minValue(arr){
    let minNumber = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(minNumber > arr[i]){
            minNumber = arr[i];
        }
    }
    return minNumber;
}

let arrayInput = minValue([20, 3, 30, 27]);
console.log('Min find from Array:', arrayInput);

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var lowest= array[0];

for (i=0; i<=lowest;i++){
    if (array[i]<lowest) {
        lowest=array[i];
    }
}
console.log(lowest);

function findMinNumber(first, second){
    if(first < second){
        return first;
    }
    else{
        return second;
    }
}

let result = findMinNumber(22, 55);
console.log('Min:', result);

// let first = 22;
// let second = 55;
// let result = (first, second);
// console.log('Min:', result);


// using Math.min() method:
const a = 20;
const b = 12;
const c = 27;

let min = Math.min(a, b, c);
console.log('Min Number:', min);
