const jwt = require('jsonwebtoken');
const User = require('../model/User')

const protect = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader){
        const token = authHeader.split(" ")[1];
        try{
            const user = jwt.verify(token, process.env.JWT_SECRET);
            req.user = user;
            next();
        } catch(error){
            res.status(401).send(`Token is not valid: ${error}`)
        }
    }
    else {
        return res.status(401).json('You are not authenticated')
    }
}

const adminUserProtect = (req, res, next) => {
    protect(req, res, () => {
        if (req.user.id === req.params.userId || req.user.isAdmin){
            next()
        } else {
            return res.status(403).json('You are not authorized')
        }
    })
}


const adminProtect = (req, res, next) => {
    protect(req, res, () => {
        if (req.user.isAdmin){
            next()
        } else {
            return res.status(403).json('You are not authorized')
        }
    })
}


module.exports = { protect, adminUserProtect, adminProtect }