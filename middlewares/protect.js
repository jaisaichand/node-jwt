let mongoose = require('mongoose');

let userr = require('../models/userjwtmod');

let jwt = require('jsonwebtoken');

let dotenv = require('dotenv');

dotenv.config();

let protect = async (req, res, next) => {
    if (req) {
        // console.log(req)
        if (req.headers) {
            let token = req.headers.authorization.split(' ')[1];
            let user = jwt.verify(token, process.env.token_secret);
            console.log(user)
            let userdet = await userr.findById(user.id);
            console.log(userdet);
            req.user = userdet;
            next();
        }
    }
}


module.exports = protect;