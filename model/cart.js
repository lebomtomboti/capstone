import { connection } from '../config/index.js';

class Cart {
  async fetchCart() {
    try {
      const result = await connection.execute('SELECT * FROM cart');
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  // Method to add an item to the cart
  async addToCart(req, res) {
    const qry = `INSERT INTO cart SET ?;`;
    const values = {
      itemID: req.body.itemID,
      quantity: req.body.quantity,
      // ...
    };
    connection.execute(qry, values, (err, results) => {
      if (err) {
        console.error(`Error adding item to cart: ${err}`);
        return res.status(500).json({
          status: 'error',
          message: 'Failed to add item to cart'
        });
      }
      res.json({
        status: 'success',
        message: 'Item added to cart',
        results
      });
    });
  }

  // Method to update an item in the cart
  async updateCart(req, res) {
    const qry = `UPDATE cart SET ? WHERE itemID = ?;`;
    const values = {
      itemID: req.body.itemID,
      quantity: req.body.quantity,
      // ...
    };
    connection.execute(qry, [values, req.params.id], (err, results) => {
      if (err) {
        console.error(`Error updating item in cart: ${err}`);
        return res.status(500).json({
          status: 'error',
          message: 'Failed to update item in cart'
        });
      }
      res.json({
        status: 'success',
        message: 'Item updated in cart',
        results
      });
    });
  }

  async deleteFromCart(req, res) {
    const qry = `DELETE FROM cart WHERE itemID = ?;`;
    connection.execute(qry, [req.params.id], (err, results) => {
      if (err) {
        console.error(`Error deleting item from cart: ${err}`);
        return res.status(500).json({
          status: 'error',
          message: 'Failed to delete item from cart'
        });
      }
      res.json({
        status: 'success',
        message: 'Item deleted from cart',
        results
      });
    });
  }
}

export default Cart;





