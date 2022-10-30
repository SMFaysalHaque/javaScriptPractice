let number = [13, 20, 17, 2, 1, 57];
let even = [];
let odd = [];
for(let i = 0; i < number.length; i++){
    if (number[i] % 2 == 0){
        even.push(number[i]);
    }
    else{
        odd.push(number[i]);
    }
}
// for(let j = 0; j < even.length; j++){
//     console.log(even[j]);
// }
// for(let k = 0; k < odd.length; k++){
//     console.log(odd[k]);
// }

console.log('All even number: ', even);
console.log('All odd number: ', odd);

