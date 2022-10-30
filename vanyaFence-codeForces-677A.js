let n = 5;
let h = 7;
let heightOfPerson = [4, 5, 14, 7, 9];
let heightPoint = 0;
let bentPoint = 0;
for(let i = 0; i < heightOfPerson.length; i++){
    if (heightOfPerson[i] <= 7){
        heightPoint = heightPoint + 1;
    }
    else{
        bentPoint = bentPoint + 2;
    }
}
let totalResult = heightPoint + bentPoint;
console.log(totalResult);