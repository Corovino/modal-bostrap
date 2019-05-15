const jwt = require('jsonwebtoken'),
    config = require('../config');

module.exports = (req, res, next) => {
    let token = req.headers['authorization'];

    if (token) {
        jwt.verify(token, config.secret, (err, decode) => {
            if (err) {
                res.json({
                    success: false,
                    message: "Failed to authenticate"
                });
            } else {
                req.decode = decode;
                next();
            }

        })

    } else {
        res.status(403).json({
            success: false,
            message: "No token provided"
        })
    }

}