const _ = require('lodash');
var { Retailer } = require('./../../models/retailer');
var { ApplicationSetting } = require('./../../models/applicationsetting');
var searchAndFilters = require('./../../utils/searchAndFilters');
var constants = require('./../../constants');
var ObjectId = require('mongodb').ObjectId;
var changeCase = require('change-case');

/**
 * function to invoke the get Provider details functionality
 * @author Megha
 * @return json
 * @createdOn 09-May-2017
 */
let applicationSettings = (req, res) => {
    ApplicationSetting.find({})
        .then((settings) => {
            if (!settings) {
                return Promise.reject('no-records-found');
            }
            return res.status(200).message('Application-settings-retrieved-successfully').returnSuccess(settings);
        }).catch((err) => {
            res.status(400).message(err).returnFailure(null);
        });
}

module.exports = {
    applicationSettings
};
