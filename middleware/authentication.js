// Auth check middleware for mongoDB
const validator = require('validator');
var { User } = require('../models/user');
var jwt = require('jsonwebtoken');

var nonAuthenticate = (req, res, next) => {
        next();
}


/*
    var authenticate = (req, res, next) => next();
*/
module.exports = { nonAuthenticate };
