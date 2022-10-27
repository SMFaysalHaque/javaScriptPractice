// two type of number. 1. Integer (int) 2. Float (float)
// 1. Integer
var bat = 2;
// 2. Float
var price = 99.99;
var priceNumber = parseInt(price);
console.log('Float number convert in Integer Number:', priceNumber); // output = 99,

console.log('=======================================================================');

// Integer + parseInt()
// add two string but they will be numeric number. Example given bellow:
var eggPrice = '25';
var onionPrice = '65';
var totalPrice = eggPrice + onionPrice;
var totalPriceNumber = parseInt(totalPrice);
console.log(totalPriceNumber); // In this, output is = 2565 (this is a integer number but not a summation. They just sit side by side.) 

// If we want to summation of two or more string in the end of the output, then we have to follow this:
var eggPrice = '25';
var onionPrice = '65';
var eggPriceNumber = parseInt(eggPrice);
var onionPriceNumber = parseInt(onionPrice);
var totalPrice = eggPriceNumber + onionPriceNumber;
console.log('Total Price Of Product in Numeric Number:',totalPrice);

// If the egg and values are float on that time we use parseInt(), the value will be Integer number. Example given bellow:
var eggPrice = '25.38';
var onionPrice = '65.19';
var eggPriceNumber = parseInt(eggPrice);
var onionPriceNumber = parseInt(onionPrice);
var totalPrice = eggPriceNumber + onionPriceNumber;
console.log('Total Price Of Product in Numeric Integer Number:',totalPrice);

// var divider = '=======================================================================';
// console.log(divider);
console.log('=======================================================================');

// Integer + parseFloat()
// add two string but they will be numeric number. Example given bellow:
var eggPrice = '25.38';
var onionPrice = '65.19';
var totalPrice = eggPrice + onionPrice;
var totalPriceNumber = (totalPrice);
console.log('Float String Output:', totalPriceNumber); //এটি একটি স্ট্রিং এবং এত output = 25.3865.19
var totalPriceNumber = parseFloat(totalPrice);
console.log(totalPriceNumber); // In this, output is = 25.3865 (this is a numeric float number but not a summation. They just sit side by side but they don't add '.19'. যেহেতু দশমিক নম্বরের মধ্যে শুধু একটাই '.' দশমিক চিহ্ন থাকে তাই ২৫.৩৮৬৫ এরপর '.১৯' আসে নি।) 

// If the egg and values are float on that time we want to float numeric number, then we have to follow this way.
var eggPrice = '25.38';
var onionPrice = '65.19';
var eggPriceNumber = parseFloat(eggPrice);
var onionPriceNumber = parseFloat(onionPrice);
var totalPrice = eggPriceNumber + onionPriceNumber;
console.log('Total Price Of Product in Numeric Float Number:',totalPrice);