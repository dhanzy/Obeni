const Cart = require('../model/Cart');

const getCarts = async(req, res) => {  
    try{
        const carts = Cart.find()
        res.status(200).json(carts)
    }catch(error){
        res.status(500).json(error)
    }
}

const updateCart = async(req, res) => {
    try{
        const carts = Cart.findByIdAndUpdate(req.body)
        res.status(200).json(carts);
    } catch(error) {
        res.status(500).json(error)
    }
}

module.exports = { getCarts, updateCart };