
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}function buy(id) {
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
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
