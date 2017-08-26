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
let getRetailerDetails = (req, res) => {
    if (!req.params.id) {
        res.status(400).message('Retailer-id-required').returnFailure(null);
    }
    Retailer.findOne({ '_id': req.params.id })
        .then((retailer) => {
            if (!retailer) {
                return Promise.reject('Retailer-not-found');
            }
            return res.status(200).message('Retailer-information-retrieved-successfully').returnSuccess(retailer);
        }).catch((err) => {
            res.status(400).message(err).returnFailure(null);
        });
}

/**
* functuion to add Retailer
* @author Megha
* @return  json
* @creted on 18-May-2017
* @modified on 19-May-2017
*/
var addRetailer = (req, res) => {
    req.body.name = changeCase.titleCase(req.body.name);
    req.body.email = req.body.email.toLowerCase();
    req.body.address = changeCase.titleCase(req.body.address);
    req.body.state = changeCase.titleCase(req.body.state);
    Retailer.findOne({ name: req.body.name, phone_number: req.body.phone_number })
        .then((result) => {
            if (result) {
                return Promise.reject('retailer-exists');
            }
            req.body.platform = req.user.platform;
            Retailer.create(req.body, (err, data) => {
                if (err) {
                    return Promise.reject('failed-to-add-retailer');
                }
                return res.status(200).message('retailer-added-successfully').returnSuccess(data);
            })
        }).catch((e) => res.status(400).message(e).returnFailure(null));
}

/**
 * function to UpdateProviderinfo
 * @author binil baby
 * @return json
 * @createdOn 19-May-2017
 * @updatedOn 29-June-2017 Sachin Kumar
 */
let updateRetailer = (req, res) => {
    req.body.name = changeCase.titleCase(req.body.name);
    req.body.email = req.body.email.toLowerCase();
    req.body.address = changeCase.titleCase(req.body.address);
    req.body.state = changeCase.titleCase(req.body.state);
    Retailer.findOne({ '_id': req.params.id })
        .then((retailer) => {
            if (!retailer) {
                return Promise.reject('retailer-not-found');
            }
            req.body.platform = req.user.platform;
            return Retailer.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        })
        .then((result) => {
            if (!result) {
                return Promise.reject('failed-to-update-retailer-info');
            }
            return res.status(200).message('retailer-information-updated').returnSuccess(result);
        }).catch((err) => {
            res.status(400).message(err).returnFailure(null);
        });
}

/**
 * function to get th eretailer list
 * @updatedBy Megha S
 * @return json
 * @createdOn 19-May-2017
 */

let getRetailer = (req, res) => {
    let limit = req.query.limit || constants.PAGE_LIMIT;
    let page = (req.query.page) ? parseInt(req.query.page) : 1;
    let skip = page > 0 ? ((page - 1) * limit) : 0;
    var sort_by_field = req.query.sort_by_field || "name";
    var sort_order = req.query.sort_order || "asc";
    if (sort_order == 'desc') {
        sort_by_field = '-' + sort_by_field;
    }
    let retailer_query = {};
    Promise.all([]).then(() => {
        return searchAndFilters.retailerSearchQuery(req, req.query, req.user.platform);
    })
        .then((query) => {
            console.log("query: ", query);
            retailer_query = query;
            return Retailer.count(query);
        })
        .then((count) => {
            req.query.total_count = count;
            let select_fields = {};
            if (req.query.from == 'dropdown') {
                select_fields = { _id: 1, name: 1, text: 1, id: 1 };
            }
            return Retailer.find(retailer_query).select(select_fields).sort(sort_by_field).limit(limit).skip(skip);
        })
        .then((retailers) => {
            if (!retailers) {
                return Promise.reject('no-records-found');
            }
            return res.status(200).message('retailer-list-success').returnListSuccess(retailers, req.query);
        }).catch((e) => {
            res.status(200).message(e).returnFailure(null);
        });
};

var activateInactivate = (req, res) => {
    Retailer.findOne({ _id: req.params.id }, (err, result) => {
        if (!result) {
            return res.status(400).message('user-not-found').returnFailure(null);
        }
        Retailer.findByIdAndUpdate(req.params.id, { $set: { 'is_active': req.body.is_active } }, { new: true }, (err, updated_item) => {
            if (updated_item) {
                if (req.body.is_active == true) {
                    return res.status(200).message('activated-successfully').returnSuccess(updated_item);
                } else {
                    return res.status(200).message('inactivated-successfully').returnSuccess(updated_item);
                }
            }
            return res.status(400).message('retailer-update-failed').returnFailure(null);
        })
    });
}

module.exports = {
    addRetailer, updateRetailer, getRetailer, getRetailerDetails, activateInactivate
};
