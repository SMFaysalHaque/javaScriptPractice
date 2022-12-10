const phones = [
    {name: 'smasung s22', price: 45000, camera: 20, storage: 32},
    {name: 'oppo f9', price: 15000, camera: 10, storage: 64},
    {name: 'realme 22', price: 25000, camera: 20, storage: 128},
    {name: 'iphone', price: 55000, camera: 20, storage: 256}
];

let cheapest = phones[0];
for(let phone of phones){
    console.log(cheapest.price);
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);