const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const sessions = require('express-session')
const connectDB = require('./db');

const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const orderRouter = require('./routes/order');
const cartRouter = require('./routes/cart');

dotenv.config()

const app = express();
app.use(express.json());
app.use(cookieParser());


connectDB();

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter)
app.use('/api/cart', cartRouter)
app.use('/api/ogbeni/webhook')

app.listen(process.env.PORT || 3001, ()=>{
    console.log(`Backend Server running on ${process.env.PORT ? process.env.PORT : 3001}`);
})