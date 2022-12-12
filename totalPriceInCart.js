let cart = [
    {name: 'laptop', price: 45000, quantity: 1},
    {name: 't-shirt', price: 3000, quantity: 6},
    {name: 'phone', price: 35000, quantity: 1},
    {name: 'watch', price: 1500, quantity: 2}
];


let cartTotal = 0;
for(const product of cart){
    const totalPrice = product.price * product.quantity;
    cartTotal = cartTotal + totalPrice;
}

console.log('Cart Total:', cartTotal);