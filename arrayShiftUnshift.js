// add an element in an array.
var ourNames = ['fahad', 'faysal', 'noor', 'nayeem1', 'nayeem2', 'fahim'];
ourNames.unshift('rahim'); // unshift() সব সময় প্রথম string or number add করে। Output: ['rahim', 'fahad',   'faysal', 'noor',    'nayeem1','nayeem2', 'fahim'] 
ourNames.push('karim'); // push() সব সময় শেষে string or number add করে। Output: ['fahad',   'faysal', 'noor',    'nayeem1','nayeem2', 'fahim', 'karim']
console.log('Friends Name Push: ',ourNames);

var friendsAge = [25, 28, 30, 27, 24];
friendsAge.unshift(23); // unshift() সব সময় প্রথম string or number add করে। Output: [23, 25, 28, 30, 27, 24]
friendsAge.push(29); //push() সব সময় শেষে string or number add করে। Output: [25, 28, 30, 27, 24, 29]
console.log('Friends Age Push: ',friendsAge);

// remove an element in an array.
var friendsName = ['fahad', 'faysal', 'noor', 'nayeem1', 'nayeem2', 'fahim'];
friendsName.shift(); // shift() সব সময় প্রথম string or number remove করে। Output: ['faysal', 'noor', 'nayeem1', 'nayeem2', 'fahim']
friendsName.pop(); // pop() এ সব সময় শেষে string or number remove করে। Output: ['fahad',   'faysal', 'noor', 'nayeem1']
console.log('Shift and Pop Output:',friendsName); 

// remove element from an array and store them in a variable and use them another place if we need that variable. example given bellowL:
var peopleName = ['fahad', 'faysal', 'noor', 'nayeem1', 'nayeem2', 'fahim'];
var peopleName2 = ['fahad', 'faysal', 'noor', 'nayeem1', 'nayeem2', 'fahim'];
newArrayPeopleNameShift = peopleName2.shift();
newArrayPeopleName = peopleName.pop();
console.log('People Name Pop:',peopleName);
console.log('People Name Pop and Store:',newArrayPeopleName);
console.log('People Name Pop:',peopleName2);
console.log('People Name Shift and Store:',newArrayPeopleNameShift);
