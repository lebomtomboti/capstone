const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3300;

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL database connection
const db = mysql.createConnection({
  host: 'bvl1lkpvd9fp2grsnfun-mysql.services.clever-cloud.com',
  user: 'uhsd8rmzo6gqldwk',
  password: 'N2X2XUOAjG9hsMbNBVMD',
  database: 'bvl1lkpvd9fp2grsnfun'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Routes
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.render('products', { products: results });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
