const jwt = require('jsonwebtoken');
const ExpressError = require('./ExpressError');


const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        // return res.status(401).json({ message: 'No token, authorization denied' });
        throw new ExpressError("No token, authorization denied", 401)
    }
    try {
        jwt.verify(token, 'secretKey', (err, user) => {
            if (err) {
                // return res.status(401).json({ message: 'Token is not valid' });
                throw new ExpressError("Token is not valid", 401)
            }
            req.user = user;
            next();
        });
    } catch (err) {
        // res.status(401).json({ message: 'Token is not valid' });
        throw new ExpressError("Token is not valid", 401)
    }
}

module.exports = auth;