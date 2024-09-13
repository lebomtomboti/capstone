import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { config } from 'dotenv';
import cors from 'cors';


import { userRouter } from './controllers/UserController.js';
import { productRouter } from './controllers/ProductController.js'; 
import { cartRouter } from './controllers/CartController.js'; 
import { errorHandling } from './middleware/ErrorHandling.js';


config();

const app = express();
const port = +process.env.PORT || 3300;

// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "*");
  next();
});

app.use(
  express.static('./static'),
  express.json(),
  express.urlencoded({
    extended: true,
  }),
  cookieParser(),
  cors()
);


app.get('^/$|/home', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './static/index.html'));
});


app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});


