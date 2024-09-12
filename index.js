import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { userRouter } from './controller/usersController.js';
import { productRouter } from './controller/productsController.js';
import cartRouter from './controller/cartController.js';
import cors from 'cors';

// Create an Express app
const app = express();
const port = +process.env.PORT || 3300;

// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
});

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter); // Register the cart router

// Middleware for serving static files and parsing request bodies
app.use(express.static('./static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Root route providing API documentation
app.get('^/$|/api-docs', (req, res) => {
    res.status(200).send(`
        <html>
        <head><title>API Documentation</title></head>
        <body>
            <h1>API Documentation</h1>
            <p>Welcome to the API documentation. Below are the available routes:</p>
            <ul>
                <li><strong>GET /users</strong> - Retrieve all users</li>
                <li><strong>GET /users/:id</strong> - Retrieve a specific user by ID</li>
                <li><strong>POST /users</strong> - Create a new user</li>
                <li><strong>PATCH /users/:id</strong> - Update a user by ID</li>
                <li><strong>DELETE /users/:id</strong> - Delete a user by ID</li>
                <li><strong>GET /products</strong> - Retrieve all products</li>
                <li><strong>GET /products/:id</strong> - Retrieve a specific product by ID</li>
                <li><strong>POST /products</strong> - Add a new product</li>
                <li><strong>PATCH /products/:id</strong> - Update a product by ID</li>
                <li><strong>DELETE /products/:id</strong> - Delete a product by ID</li>
                <li><strong>GET /cart</strong> - Retrieve all items in the cart</li>
                <li><strong>POST /cart</strong> - Add an item to the cart</li>
                <li><strong>PATCH /cart/:id</strong> - Update an item in the cart by ID</li>
                <li><strong>DELETE /cart/:id</strong> - Remove an item from the cart by ID</li>
            </ul>
        </body>
        </html>
    `);
});

// 404 handler
app.get('*', (req, res) => {
    res.status(404).json({
        status: 404,
        msg: 'Resource not found'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});


