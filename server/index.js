const express = require('express');
const dotenv = require('dotenv');

const { json } = express;

dotenv.config();
app = express();

app.use(json())

app.listen(3001, () => {
    console.log('Backend server running...')
})