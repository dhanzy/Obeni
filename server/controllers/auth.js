

exports.registerUser = (req, res, next) => {
    const { username, email, password } = req.body;
    const emailExists = User.findOne({ email })
    if (emailExists){
        res.status(400);
        throw new Error('A user with that email already exists')
    }
    const usernameExists = User.findOne({ username })
    if (usernameExists){
        res.status(400);
        throw new Error('A user with that username already exists')
    }
    const user = User.Create({
        username,
        email,
        password
    })
}