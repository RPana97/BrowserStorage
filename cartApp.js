// Initializes the cart in local storage if it doesn't already exist
function initializeCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
};

// Adds an item to the cart and updates local storage
function addItem(item) {
    const cart = JSON.parse(localStorage.getItem('cart')); // Retrieves the current cart from local storage
    cart.push(item); // Adds the new item to the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Updates local storage with the new cart
};

// Removes an item from the cart based on its ID and updates local storage
function removeItem(itemName) {
    const cart = JSON.parse(localStorage.getItem('cart')); // Retrieves the current cart from local storage
    const updatedCart = cart.filter(item => item.id !== itemName); // Filters out the item to be removed
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Updates local storage with the new cart
};

// Displays the current contents of the cart in the console
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')); // Retrieves the current cart from local storage
    console.log(cart); // Logs the cart to the console
};

// Adds an event listener to the form for adding items to the cart
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const itemName = document.getElementById('itemName').value; // Gets the item name from the input field
    const itemPrice = document.getElementById('itemPrice').value; // Gets the item price from the input field
    const item = { id: Date.now(), name: itemName, price: itemPrice }; // Creates an item object with a unique ID, name, and price
    addItem(item); // Adds the item to the cart
    document.getElementById('addItemForm').reset(); // Resets the form fields
});

// Adds an event listener to the button for displaying the cart
document.getElementById('displayCartButton').addEventListener('click', displayCart);

// Initializes the cart when the script is first run
initializeCart();
