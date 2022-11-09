// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;
/*
// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    const product = products.find(p => p.id == id);
    if (product) {
        cartList.push(product)
    }
}

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = cartList.reduce((sum, p) => sum + p.price, 0);
}
*/

// Exercise 2 Refactor
function cleanCart() {
    cart = [];
}

// Exercise 3 Refactor
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = cart.reduce((sum, p) => p.subtotalWithDiscount ? sum + p.subtotalWithDiscount : sum + p.price * p.quantity  , 0);
}

/*
// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = []
    cartList.map(p => {
        cart[p.id] ? cart[p.id].quantity += 1 : cart[p.id]={ ...p , quantity: 1 }
    });
}
*/

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.map(p => {
        if(p.offer && p.quantity >= p.offer.number) p.subtotalWithDiscount = (p.price * p.quantity * (100 - p.offer.percent)/100);
    });
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    applyPromotionsCart()
    calculateTotal()
    
    let rows = "";
    cart.map( p => { 
        rows += `
                <tr>
                <th scope="row"> ${p.name} </th>
                <td> $ ${p.price} </td>
                <td> ${p.quantity} </td>
                <td>$ ${ p.subtotalWithDiscount ? p.subtotalWithDiscount + "<small class='text-danger ms-4'>" + p.offer.percent + "% off</small>" : p.price * p.quantity}</td>
                </tr>
            `
    });

    document.getElementById("cart_list").innerHTML = rows;
    document.getElementById("total_price").innerHTML = total;                        
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    products.map(prod => {
        if(prod.id == id) cart[prod.id] ? cart[prod.id].quantity += 1 : cart[prod.id]={ ...prod , quantity: 1 }
    });

}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    cart.map(prod => {
        if(prod.id == id) prod.quantity > 1 ? cart[prod.id].quantity -= 1 : cart[prod.id].pop
    });
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}