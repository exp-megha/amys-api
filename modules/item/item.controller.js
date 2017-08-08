const _ = require('lodash');
var { Item } = require('./../../models/item');
var { ApplicationSetting } = require('./../../models/applicationsetting');
var searchAndFilters = require('./../../utils/searchAndFilters');
var constants = require('./../../constants');
var ObjectId = require('mongodb').ObjectId;
var changeCase = require('change-case');

/**
* functuion to add Retailer
* @author Megha
* @return  json
* @creted on 18-May-2017
* @modified on 19-May-2017
*/
var addItem = (req, res) => {
    //item_of => Idea, Sun Direct 
    //item_type => Coupon, Flexy, Easy etc.
    //item_name => RAC 50, RAC 100 etc.
    req.body.item_of = changeCase.titleCase(req.body.item_of);
    req.body.item_name = req.body.item_name.toUpperCase();
    req.body.item_type = changeCase.titleCase(req.body.item_type);
    Item.findOne({ item_of: req.body.item_of, item_type: req.body.item_type, item_amount: req.body.item_amount })
        .then((result) => {
            if (result) {
                return Promise.reject('Item-exists');
            }
            Item.create(req.body, (err, data) => {
                if (err) {
                    return Promise.reject('failed-to-add-Item');
                }
                return res.status(200).message('Item-added-successfully').returnSuccess(data);
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
let updateItem = (req, res) => {
    req.body.item_of = changeCase.titleCase(req.body.item_of);
    req.body.item_name = req.body.item_name.toUpperCase();
    req.body.item_type = changeCase.titleCase(req.body.item_type);
    Item.findOne({ '_id': req.params.id })
        .then((item) => {
            if (!item) {
                return Promise.reject('Item-not-found');
            }
            return Item.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        })
        .then((result) => {
            if (!result) {
                return Promise.reject('failed-to-update-Item-info');
            }
            return res.status(200).message('Item-information-updated').returnSuccess(result);
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

let getItem = (req, res) => {
    let limit = req.query.limit || constants.PAGE_LIMIT;
    let page = (req.query.page) ? parseInt(req.query.page) : 1;
    let skip = page > 0 ? ((page - 1) * limit) : 0;
    var sort_by_field = req.query.sort_by_field || "name";
    var sort_order = req.query.sort_order || "asc";
    if (sort_order == 'desc') {
        sort_by_field = '-' + sort_by_field;
    }
    let item_query = {};
    Promise.all([]).then(() => {
        return searchAndFilters.itemSearchQuery(req, req.query);
    })
        .then((query) => {
            item_query = query;
            return Item.count(query);
        })
        .then((count) => {
            req.query.total_count = count;
            console.log("====", item_query);
            return Item.find(item_query).sort(sort_by_field).limit(limit).skip(skip);
        })
        .then((items) => {
            if (!items) {
                return Promise.reject('no-records-found');
            }
            return res.status(200).message('item-list-success').returnListSuccess(items, req.query);
        }).catch((e) => {
            res.status(200).message(e).returnFailure(null);
        });
};

module.exports = {
    addItem, updateItem, getItem
};