let products = [
    {name: 'laptop', price: 45000, quantity: 1},
    {name: 't-shirt', price: 3000, quantity: 6},
    {name: 'phone', price: 35000, quantity: 1},
    {name: 'watch', price: 1500, quantity: 2}
];

let totalPrice = 0;
let totalQuantity = 0;

// for of loop
// for(let product of products){
//     totalPrice = totalPrice + product.price;
//     totalQuantity = totalQuantity + product.quantity;
// }

// for loop
for(let i = 0; i < products.length; i++){
    totalPrice = totalPrice + products[i].price;
    totalQuantity = totalQuantity + products[i].quantity;
}

console.log('Total Price:', totalPrice);
console.log('Total Quantity:', totalQuantity);