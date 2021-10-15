const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    
}, {timestamps: true})

module.exports = mongoose.model("Order", OrderSchema);