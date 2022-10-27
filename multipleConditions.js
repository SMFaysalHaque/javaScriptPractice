// AND (ekhane joto gula sorto thakbe shobgulai mante hobe.)

var gotJob = true;
var moneySaved = 250000;
var hasFlat = false;
var hasHouse = true;
// var gotJob = false;

if(gotJob == true && moneySaved > 200000 && hasFlat == true){
    console.log('You can get marry!!!');
}
else{
    console.log("You don't Marry!!!");
}

// output: You don't Marry!!!
// because, ekhane gotJob ar moneySaved sorto fullfil kortiche. kintu hasFlat sorto mane na. tai eti "You don't Marry!!!" output dekhacche. 

// OR (ekhane jekono ekta sorto manlei hobe.)

if(gotJob == true || moneySaved > 200000){
    console.log('You can get marry!!!');
}
else{
    console.log("You don't Marry!!!");
}

// output: You can get marry!!!

// complex AND, OR operator:

if((gotJob == true && moneySaved > 200000) || hasHouse == true){
    console.log('You can get marry!!!');
}
else{
    console.log("You don't Marry!!!");
}

// output: You can get marry!!!