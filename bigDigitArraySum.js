let ar = [4503599627370496, 4503599627370496, 4503599627370496];
let sum = 0n; //bigint হলে সেটা যাতে সঠিক ভাবে কাজ করে তার জন্য সংখ্যার শেষে n লিখতে হয় অথবা BigInt('string') key type ব্যবহার করতে হয়।
for(let i = 0; i < ar.length; i++){
    sum = sum + BigInt('' + ar[i]);
}
console.log(sum);
