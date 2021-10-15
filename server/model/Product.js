const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: true,
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {timestamps: true});


module.exports = mongoose.model('Product', ProductSchema)