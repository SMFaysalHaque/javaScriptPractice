//2! = 2 * 1
//3! = 3 * 2 * 1
//4! = 4 * 3 * 2 * 1                  

let multiplication = 1;
for(let i = 1; i <= 5; i++){
    multiplication = multiplication * i; //এখানে i কোনো ইন্ডেক্স নয়। এটি প্রতিটি ধাপকে ১ করে বাড়াচ্ছে। যার জন্য i এর মান এক করে বৃদ্ধি পাচ্ছে। 5! = 5 * 4 * 3 * 2 * 1
    console.log(multiplication); //আমরা যখন একটি লুপের মাঝে প্রিন্ট করি তখন সেটি ততোবার প্রিন্ট হবে যতবার কন্ডিশন দেয়া থাকবে। যেমন এই লুপের মধ্যে কন্ডিশন ৫ এর ছোট এবং ৫ বারের সমান দেয়া আছে তাই এটি ৫ বার চলবে। সেই সাথে আলদা করে প্রতিটি লাইনে দেখাবে, যতবার কন্ডিশন থাকবে। 
}

console.log('Answer of The Factorial: ', multiplication);