var teaPrice = 10;
var biscuitPrice = 15;
var butterBreadPrice = 30;
// var myBudget = 5;
var packedBread = false;
var myBudget = 40;

if (butterBreadPrice < myBudget) {
    console.log('Wanna eat Butter Bread!!!');
}
else if (biscuitPrice < myBudget){
    console.log('Wanna eat Biscuit!!!');
}
else if(teaPrice < myBudget){
    console.log('Wanna eat Tea!!!');
}
else{
    console.log("You can't eat!!!" );
}

//nested conditions

if(butterBreadPrice < myBudget){
    if(packedBread == true){
        console.log('I will Eat Bread!!!');
    }
    else{
        console.log("I won't eat Bread!!!");
    }
}
