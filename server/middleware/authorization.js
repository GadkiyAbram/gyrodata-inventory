const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header('token');

        if (!jwtToken) {
            return res.status(403).json('Not Authorized');
        }

        const payLoad = jwtToken.verify(jwtToken, process.env.JWT_SECRET);

        req.user = payLoad.user;
    } catch (err) {
        console.log(err);
        return res.status(403).json('Not Authorized');
    }
}