// index.js (or any other relevant file where you manage instances)
import { Users } from './users.js';
import { Products } from './products.js';
import Cart from './cart.js';

// Create instances of Users, Products, and Cart
const users = new Users();
const products = new Products();
const cart = new Cart(); // Create an instance of Cart

// Export instances
export {
    users,
    products,
    cart // Export the Cart instance
};
