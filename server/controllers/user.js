const User = require('../model/User');

const getAllUsers =  async(req, res, next) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find({ _id: -1}).sort().limit(1) : await User.find()
        return res.status(200).json(users)
    }
    catch {
        return res.status(500).json("Unable to get user")
    }
}

const getUserById = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)
        return res.status(200).json(user)
    }
    catch(error) {
        return res.status(500).json(`Unable to get user: ${error}`)
    }
}


const deleteUserById = async(req, res, next) => {
    try {
        const user = await User.findbyIdAndDelete(req.params.userId)
        return res.status(200).json(user)
    }
    catch(error) {
        return res.status(500).json("Unable to get user")
    }
}


const updateUserById = async(req, res, next) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.userId,{
            $set: req.body
        }, {new:true})
        return res.status(200).json(updatedUser)
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

module.exports = { getUserById, updateUserById, getAllUsers, deleteUserById, userStats };