const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'bvl1lkpvd9fp2grsnfun-mysql.services.clever-cloud.com',
  user: 'uhsd8rmzo6gqldwk',
  password: 'N2X2XUOAjG9hsMbNBVMD',
  database: 'bvl1lkpvd9fp2grsnfun'
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL.');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to fetch all products
app.get('/api/products', (req, res) => {
  connection.query('SELECT * FROM products', (error, results) => {
    if (error) {
      console.error('Error fetching products:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    console.log('Results:', results); 
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


