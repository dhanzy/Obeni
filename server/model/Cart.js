const mongoose = require('mongoose');


const CartSchema = new mongoose.Schema({
    user:{
        type: String
    },
    product: {
        type: Array
    }
}, {timestamps: true});


module.exports = mongoose.model('Cart', CartSchema)