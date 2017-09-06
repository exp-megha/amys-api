const _ = require('lodash');
var { Retailer } = require('./../../models/retailer');
var { ApplicationSetting } = require('./../../models/applicationsetting');
var { User } = require('./../../models/user');
var searchAndFilters = require('./../../utils/searchAndFilters');
var constants = require('./../../constants');
var ObjectId = require('mongodb').ObjectId;
var changeCase = require('change-case');
var async = require('async');
/**
 * function to invoke the get Provider details functionality
 * @author Megha
 * @return json
 * @createdOn 09-May-2017
 */
let applicationSettings = (req, res) => {
    let settings_array = [];
    ApplicationSetting.find({})
        .then((settings) => {
            if (!settings) {
                return Promise.reject('no-records-found');
            }
            async.eachSeries(settings, function (data, callback) {
                let new_obj = {};
                new_obj[data.settings_name] = data.settings_value;
                // console.log('new_obj: ',new_obj);
                settings_array.push(new_obj);
                callback();
            }, function () {
                return res.status(200).message('Application-settings-retrieved-successfully').returnSuccess(settings_array);
            });
        }).catch((err) => {
            res.status(400).message(err).returnFailure(null);
        });
}

let login = (req, res) => {
    console.log('--------------------', req.body);
    User.findByCredentials(req.body)
        .then((user) => {
            user.generateAuthToken().then((token) => {
                if (token) {
                    return res.status(200).message('login-successful').returnSuccess(user);
                } else {
                    return Promise.reject('login-failed');
                }
            })
        }).catch((e) => res.status(401).message('in errorrrrrr').returnFailure(null));
}

module.exports = {
    applicationSettings, login
};
