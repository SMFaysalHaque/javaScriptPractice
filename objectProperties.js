var computer = {
    price: 20000,
    color: 'silver',
    processor: 'intel i5',
    storage: '512GB'
};

console.log(computer);
var computerPrice = computer.price;
console.log('Computer Price:',computerPrice);
console.log('Computer Color:', computer.color);
computer.color = 'red';
console.log('Computer Color:', computer.color);
var computerColor = computer.color;
console.log(computerColor);
computer["processor"] = 'intel i9';
console.log('Update properties:', computer);

// How can we access an object; Three ways:
var storageProperty = 'storage';
computer[storageProperty] = '1TB';
computer['storage'] = '2TB';
computer.storage = '5TB';

console.log(computer);

