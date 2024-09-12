import express from 'express';
import bodyParser from 'body-parser';
import Cart from '../model/cart.js';

const cartRouter = express.Router();

// Fetch cart
cartRouter.get('/cart', async (req, res) => {
  try {
    const cart = new Cart();
    const result = await cart.fetchCart();
    res.json(result);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to retrieve cart'
    });
  }
});

// Add item to cart
cartRouter.post('/addToCart', bodyParser.json(), async (req, res) => {
  try {
    const cart = new Cart();
    await cart.addToCart(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to add item to cart'
    });
  }
});

// Update item in cart
cartRouter.patch('/updateCart/:id', bodyParser.json(), async (req, res) => {
  try {
    const cart = new Cart();
    await cart.updateCart(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to update item in cart'
    });
  }
});

// Delete item from cart
cartRouter.delete('/deleteFromCart/:id', async (req, res) => {
  try {
    const cart = new Cart();
    await cart.deleteFromCart(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to delete item from cart'
    });
  }
});

export default cartRouter;



