// Number 1 task completed

// boolean 
let pass = true;
console.log(typeof pass);

// string
let name = 'faysal'
console.log(typeof name);

// number
let age = 30;
console.log(typeof age);

// Number 2 task completed

// let variable can be changed:
let a = 5;
a = 10;
console.log(a);

// const variable can not be changed:
const b = 5;
// b = 6;
console.log(b); // output: here const variable do not give the permission to change "b" value.

// দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।

let x = 10;
let y = 15;

let sum = x + y;
console.log('Total Sum:', sum);

let subtraction = x - y;
console.log('Subtraction Answer:', Math.abs(subtraction)); // here I use "Math.abs(subtraction)" because I want to change the "negative number to positive number."

console.log('Reminder:', sum % 3);

let division = y / x;
console.log('Division Answer:',division);

let multiplication = x * y;
console.log('Multiplication Answer:', multiplication);


