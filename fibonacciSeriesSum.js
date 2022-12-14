// 0, 1, 1, 2, 3, 5, 8, 13, 21.......
/*
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
... ... ... ...
... ... ... ...
... ... ... ...
100th = 99th + 98th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/

const fibo = [0, 1]; // এখানে প্রথম দুইটি ভ্যালু ধরে নিয়েছি কারণ, fibonacci সিরিজে প্রথম দুইটি ভ্যালু অপরিবর্তিত থাকে। এখান থেকেই পরের সকল এরের ইলিমেন্ট এডড হয়।
for(let i = 2; i <= 10; i++){ //এখানে i = 2 নেয়া হয়েছে। কারণ, এখানে i এর আগের দুইটি ইনডেক্স 0 এবং 1 আমরা প্রথমেই ধরে নিয়েছি fibo variable এর মধ্যে। 
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

// using function:
function fibonacciSeries(num){
    const fibo = [0, 1];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
let getNumber = fibonacciSeries(10);
let result = getNumber;
console.log('Using Function:', result);
