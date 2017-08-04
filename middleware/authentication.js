// Auth check middleware for mongoDB
const validator = require('validator');
var { User } = require('../models/user');
var { Serviceprovider } = require('../models/serviceprovider');
var jwt = require('jsonwebtoken');

var authenticate = (req, res, next) => {
    var bearerToken = req.headers.authorization;
    if (bearerToken) {
        bearerToken = bearerToken.substr(bearerToken.indexOf(' ') + 1);
        req.token = req.header('x-auth');
        jwt.verify(bearerToken, process.env.JWT_SECRET, function (err, user) {
            if (err) {
                return res.status(401).returnFailure();
            }
            platformValidation(req, res, (err) => {
                if (req.platform == 'webportal') {
                    Serviceprovider.findOne({ _id: user._id }).lean().then((logged_user) => {
                        if (!logged_user) {
                            return Promise.reject();
                        }
                        logged_user.user_type = 'portalUser';
                        req.user = logged_user;
                        if (!hasPermission(req, user._id)) return res.status(403).message('no-permission').returnFailure(null);
                        next();
                    }).catch((err) => res.status(401).returnFailure());
                } else {
                    User.findOne({ _id: user._id }).lean().then((logged_user) => {
                        if (!logged_user) {
                            return Promise.reject();
                        }
                        logged_user.user_type = 'appUser';
                        req.user = logged_user;
                        if (!hasPermission(req, user._id)) return res.status(403).message('no-permission').returnFailure(null);
                        next();
                    }).catch((err) => res.status(401).returnFailure());
                }
            })
        });
    } else {
        return res.status(401).message('token-not-found').returnFailure(null);
    }
}

var nonAuthenticate = (req, res, next) => {
        next();
}

var platformValidation = (req, res, callback) => {
    var platform = (req.headers.platform) ? req.headers.platform : null;
    var appversion = (req.headers.appversion) ? req.headers.appversion : null;
    var deviceid = (req.headers.deviceid) ? req.headers.deviceid : null;
    if (platform == null) {
        return res.status(400).message('platform-required').returnFailure(null);
    } else req.platform = platform;
    if (platform == "ios" || platform == "android") {
        if (appversion == null) {
            return res.status(400).message('app-version-required').returnFailure(null);
        } else req.appversion = appversion;
        if (deviceid == null) {
            return res.status(400).message('device-id-required').returnFailure(null);
        } else req.deviceid = deviceid;
    }
    return callback(null);
}

var hasPermission = (req, logged_user_id) => {
    var original_url = req.originalUrl;
    if (req.user.user_type == 'appUser') { // mobile users
        if (original_url.indexOf('serviceProviders') > -1) { // used  the sam eroute for mobile app
            return true;
        } else if (req.params.id) {
            if (req.params.id == logged_user_id) return true;
            else return false;
        } else return true;
    }
    if (req.user.user_type == 'portalUser') { // portal users
        if (req.user.user_role == 'superAdmin') return true;
        else if (original_url.indexOf('users') > -1) { // used  the sam eroute for mobile app
            return true;
        } else {
            if (req.params.id) {
                if (req.params.id == logged_user_id) return true;
                else return false;
            } else return true;
        }
    }
}

/*
    var authenticate = (req, res, next) => next();
*/
module.exports = { authenticate, nonAuthenticate };
