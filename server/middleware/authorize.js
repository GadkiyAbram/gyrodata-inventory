const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('token');

    console.log(token);
    console.log(req.user);

    // Check if not token
    if (!token) {
        return res.status(403).json({ msg: "authorization denied" });
    }

    // next();

    // Verify token
    try {
        //it is going to give use the user id (user:{id: user.id})
        console.log(process.env.JWT_SECRET);
        const verify = jwt.verify(token, process.env.JWT_SECRET);

        console.log(req.user);

        req.user = verify.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};