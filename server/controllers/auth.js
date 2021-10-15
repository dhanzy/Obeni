const User = require('../model/User');
const generateToken = require('../utils/generateToken');
const asyncHandler = require('express-async-handler');

const loginUser = asyncHandler(async(req, res)=> {
    const { email, password } = req.body
    const user = await User.findOne({email});
    if (user && (await user.matchPassword(password))){
        const { password, ...other } = user._doc
        const token = generateToken(other);
        const secondsInWeek = 604800;

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: secondsInWeek * 1000
        })
        res.status(200).json(user)
    } else {
        res.status(401).json('Invalid credentials');
        throw new Error("Invalid email or password");
    }
});

const registerUser = asyncHandler(async(req, res) => {
    
    const { firstname, lastname, email, password } = req.body;
    const emailExists = await User.findOne({ email });
    if (emailExists){
        res.status(400);
        throw new Error(" A user with that email already exists");
    }
    const new_user = new User({
        firstname, lastname, email, password
    })
    const user = await User.create({
        firstname,
        lastname,
        email,
        password
    });
    
    if (user){
          res.status(201).json(user)
    }
    else{
        res.status(401);
        throw new Errror("Invalid email or password")
    }
});

module.exports = { loginUser, registerUser }