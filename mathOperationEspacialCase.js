// especial case
var a = 0.1;
var b = 0.2;
var total = a + b;
console.log(parseFloat(total));
console.log(parseFloat(total.toFixed(1))); // it is a way to show fixed 

// another way to show fixed
newTotal = parseFloat(total);
console.log('String Output: ',newTotal.toFixed(2)); // output is string.এর জন্য এটি দুই ঘর পর্যন্ত দেখিয়েছে। কিন্তু সংখ্যা হলে আর দশমিকের পর ঘর লিমিট করে দিলে আর দেখাইতো না। 

// numeric/number output
numericTotal = total.toFixed(3); 
console.log('Number Output: ',parseFloat(numericTotal)); //এটা দশমিকের পর শুধু একটা ঘর দেখাবে। কারন, দশমিকের নিয়ম অনুযায়ী, দশমিকের পর শেষের শূণ্যের দাম নেই। যেহেতু এখানে দশমিকের পর ৩ ঘর পর্যন্ত ফিক্সড করা সেহেতু আর কোনো সংখ্যা দেখায় নাই।