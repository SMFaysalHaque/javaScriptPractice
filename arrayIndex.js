// Discussion about array index, get and set by index and indexOf:

console.log('Array Index Topic:');

var ourNames = ['fahad', 'faysal', 'noor', 'nayeem1', 'nayeem2', 'fahim'];

// only one index and that index position name.
// var ourNamesIndex = ourNames.indexOf('faysal'); //যেহেতু এটা ভ্যালিড তাই এটি সঠিক indexOf এ পজিশন দেখাবে।
var ourNamesIndex = ourNames.indexOf('rahim'); //যদি কোনো কিছু কে indexOf দিয়ে খোজা হয় আর সেটা যদি এরের মধ্যে না থাকে তাহলে "-1" output আসবে। 
console.log('Index of this Array:', ourNamesIndex); // এখানে আমরা নামের মাধ্যমে ইন্ডেক্সের পজিশন পাচ্ছি।
console.log('Name In this Index: ', ourNames[3]); // এখানে আমরা ইন্ডেক্সের মধ্যে নাম পাচ্ছি। 
console.log('Name In this Index: ', ourNames[10]); // যখন কোনো ইন্ডেক্স ভ্যালিড হবে না তখন সেটি undefined দেখাবে। 

console.log('=======================================================================');


// it is showing all Index and It's all name.
for (let index = 0; index < ourNames.length; index++) {
    const allNames = ourNames[index];
    const element = index;
    const lastElement = ourNames.length - 1;  
    console.log('All Index Element: ', allNames); //এটা ইন্ডেক্স সহ নাম গুলোও দেখাচ্ছে।
    console.log('All Index: ', element); //এটা শুধু সব গুলো ইন্ডেক্স দেখাচ্ছে।
    console.log('Total Index of this Array:', lastElement); //এটা সর্বোমোট index এর সংখ্যা বুঝাচ্ছে। 
}


var oddNumbers = [1, 3, 5, 7, 9, 11, 13];
console.log('Showing Odd Numbers: ', oddNumbers); // all odd numbers. 
oddNumbers[3] = 65;
console.log('Showing Update Odd Numbers: ',oddNumbers); // now number 3 index change its value.
