// Auth check middleware for mongoDB
const validator = require('validator');
var { User } = require('../models/user');
var jwt = require('jsonwebtoken');

var nonAuthenticate = (req, res, next) => {
    next();
}

var authenticate = (req, res, next) => {
    var bearerToken = req.headers.authorization;
    if (bearerToken) {
        bearerToken = bearerToken.substr(bearerToken.indexOf(' ') + 1);
        req.token = req.header('x-auth');
        jwt.verify(bearerToken, process.env.JWT_SECRET, function (err, user) {
            if (err) {
                return res.status(401).returnFailure();
            }
            User.findOne({ _id: user._id }).lean().then((logged_user) => {
                if (!logged_user) {
                    return Promise.reject();
                }
                req.user = logged_user;
                // console.log('ReqUser: ', req.user);
                next();
            }).catch((err) => res.status(401).returnFailure());
        });
    } else {
        return res.status(401).message('token-not-found').returnFailure(null);
    }
}

/*
    var authenticate = (req, res, next) => next();
*/
module.exports = { nonAuthenticate, authenticate };
