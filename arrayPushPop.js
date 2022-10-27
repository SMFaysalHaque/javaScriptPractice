// add an element in an array.
var ourNames = ['fahad', 'faysal', 'noor', 'nayeem1', 'nayeem2', 'fahim'];
ourNames.push('rahim'); // push() সব সময় শেষে string or number add করে। Output: ['fahad',   'faysal', 'noor',    'nayeem1','nayeem2', 'fahim',  'rahim'] 
ourNames.push('karim'); // push() সব সময় শেষে string or number add করে। Output: ['fahad',   'faysal', 'noor',    'nayeem1','nayeem2', 'fahim',  'rahim', 'karim']
console.log('Friends Name Push: ',ourNames);

var friendsAge = [25, 28, 30, 27, 24];
friendsAge.push(23); //push() সব সময় শেষে string or number add করে। Output: [25, 28, 30, 27, 24, 23]
friendsAge.push(29); //push() সব সময় শেষে string or number add করে। Output: [25, 28, 30, 27, 24, 23, 29]
console.log('Friends Age Push: ',friendsAge);

// remove an element in an array.
var friendsName = ['fahad', 'faysal', 'noor', 'nayeem1', 'nayeem2', 'fahim'];
friendsName.pop(); // pop() এ সব সময় শেষে string or number remove করে। Output: ['fahad',   'faysal', 'noor', 'nayeem1', 'nayeem2']
friendsName.pop(); // pop() এ সব সময় শেষে string or number remove করে। Output: ['fahad',   'faysal', 'noor', 'nayeem1']
console.log(friendsName); 

// remove element from an array and store them in a variable and use them another place if we need that variable. example given bellowL:
var peopleName = ['fahad', 'faysal', 'noor', 'nayeem1', 'nayeem2', 'fahim'];
newArrayPeopleName = peopleName.pop();
console.log('People Name Pop:',peopleName);
console.log('People Name Pop and Store:',newArrayPeopleName);
