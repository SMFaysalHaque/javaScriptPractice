// Math.abs()
const number1 = -5;

const output1 = Math.abs(number1); //Math.abs() এর জন্য সকল ঋণাত্মক মান ধনাত্মক হবে। output: 5
console.log(output1); // 5

console.log("================");

// Math.ceil()
const number2 = 6.0398;

const output2 = Math.ceil(number2); // Math.ceil() এর জন্য দশমিকের পর যে কয় ঘর যে পরিমাণ সংখ্যাই থাকুক না কেনো সেটা পরবর্তি পূর্ণ সংখ্যা হবে। output: 7
console.log(output2); // 7

console.log("================");

// Math.floor()
const number3 = 6.0398;

const output3 = Math.floor(number3); // Math.floor() এর জন্য দশমিকের পর যে কয় ঘর যে পরিমাণ সংখ্যাই থাকুক না কেনো সেটা আর পরবর্তি পূর্ণ সংখ্যা হবে, বরং দশমিকের পূর্বে যে পূর্ণ সংখ্যা আছে সেটাই থাকবে । output: 6
console.log(output3); // 6

console.log("================");

// Math.random()
const output4 = Math.random() 
console.log(output4);

console.log("================");

// Math.random()
const output5 = Math.random() * 10;
console.log(output5);

console.log("================");

// Math.round()
const output6 = Math.random() * 10;
const output7 = Math.round(output6) // এখানে Math.round() ছাড়া Math.floor()ও করা যায়।
console.log(output7);