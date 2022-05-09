const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(userId) {
    const payLoad = {
        user: userId
    }

    return jwt.sign(payLoad, process.env.JWT_SECRET, {expiresIn: 60 * 60})
}

module.exports = jwtGenerator;