const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'bvl1lkpvd9fp2grsnfun-mysql.services.clever-cloud.com',
  user: 'uhsd8rmzo6gqldwk',
  password: 'N2X2XUOAjG9hsMbNBVMD',
  database: 'bvl1lkpvd9fp2grsnfun'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to get a user's cart
app.get('/user/:id/carts', (req, res) => {
  const userId = req.params.id;

  // Query to get cart items for a specific user
  const query = 'SELECT * FROM carts WHERE user_id = ?';

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching cart items:', err);
      return res.status(500).json({ message: 'Server error', error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.json(results[0]); // Assuming one cart per user
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
