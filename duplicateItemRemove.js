// without function:
let numbers = [10, 13, 23, 22, 10, 23, 99];

let unique = [];

for(let i = 0; i < numbers.length; i++){
    // let element = numbers[i];
    if(unique.indexOf(numbers[i]) == -1){
        unique.push(numbers[i]);
    }
}
console.log(unique);

// with function:
function sameItem(allNames){
    let uniqueName = [];
    for(let i = 0; i < allNames.length; i++){
        if(uniqueName.indexOf(allNames[i]) == -1){
            uniqueName.push(allNames[i]);
        }
    }
    return uniqueName;
}

let names = ['fahad', 'fahim', 'azad', 'nayeem', 'fahad', 'azad', 'nayeem'];
let uniqueOutput = sameItem(names);
console.log(uniqueOutput);



