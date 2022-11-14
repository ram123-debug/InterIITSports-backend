const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token){
            return res.status(401).json({
                msg: "No authenticated token, access denied"
            });
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) {
            return res.status(401).json({
                msg: "Token verification failed, authorization denied"
            })
        }
        if (verified.isAdmin){
            next();
        } else {
            return res.status(401).json({
                msg: "Permission denied"
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

module.exports = auth;