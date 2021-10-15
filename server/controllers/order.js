const Order = require('../model/Order');

const getAllOrders =  async(req, res, next) => {
    const query = req.query.new;
    try {
        const orders = query ? await Order.find({ _id: -1}).sort().limit(1) : await User.find()
        return res.status(200).json(orders)
    }
    catch {
        return res.status(500).json("Unable to get orders")
    }
}

const getOrderById = async(req, res, next) => {
    try {
        const order = await Order.findbyId(req.param.orderId)
        return res.status(200).json(order)
    }
    catch(error) {
        return res.status(500).json("Unable to get order")
    }
}


const deleteOrderById = async(req, res, next) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.orderId)
        return res.status(200).json(order)
    }
    catch(error) {
        return res.status(500).json("Unable to delete order")
    }
}


const updateOrderById = async(req, res, next) => {
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId,{
            $set: req.body
        }, {new:true})
        return res.status(200).json(updatedOrder)
    }
    catch(error) {
        return res.status(500).json(error)
    }
}

const userStats = async(req, res, next) => {
    const date = new Date()
    const lastyear = new Date(date.setFullYear(date.getFullYear() -1));
    try{
        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastyear}}},
            {$project: {
                month: {$month: '$createdAt'},
            }},
            {$group: {
                _id: "$month",
                total: {$sum: 1}
            }}
        ])
        res.status(200).json(data)
    } catch(error) {
        res.status(500).json(error)
    }
}

module.exports = { getOrderById, updateOrderById, getAllOrders, deleteOrderById, userStats };