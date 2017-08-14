var moment = require('moment');
var constants = require('../constants');
var ObjectId = require('mongodb').ObjectId;

var retailerSearchQuery = (req, reqQuery) => {
    var filter_query = {};
    if (reqQuery.search_text) {
        var re = new RegExp(reqQuery.search_text, 'i');
        filter_query = {
            $or: [
                { "first_name": { $regex: re } },
                { "last_name": { $regex: re } },
                { "specialisation": { $regex: re } },
                { "email": { $regex: re } },
                { "company": { $regex: re } },
                { "address": { $regex: re } },
                { "city": { $regex: re } },
                { "state": { $regex: re } },
                { "country": { $regex: re } },
                { "phone_number": { $regex: re } }
            ]
        };
    }
    if (reqQuery.name)
        filter_query['name'] = new RegExp('^.*' + reqQuery.name + '.*$', "i");
    if (reqQuery.pan_number) {
        filter_query['pan_number'] = new RegExp('^.*' + reqQuery.pan_number + '.*$', "i");
    }
    if (reqQuery.gst_registration_number) {
        filter_query['gst_registration_number'] = new RegExp('^.*' + reqQuery.gst_registration_number + '.*$', "i");
    }
    if (reqQuery.phone_number) {
        filter_query['phone_number'] = new RegExp('^.*' + reqQuery.phone_number + '.*$', "i");
    }
    var is_active = (reqQuery.is_active == 'true') ? true : false;
    filter_query['is_active'] = is_active;
    return filter_query;
}

let itemSearchQuery = (request) => {
    let search_query = {};
    if (request.item_name) {
        search_query["item_name"] = new RegExp('^.*' + request.item_name + '.*$', "i")
    }
    if (request.item_of) {
        search_query["item_of"] = request.item_of;
    }
    if (request.item_type) {
        search_query["item_type"] = request.item_type;
    }
    if (request.item_amount) {
        search_query["item_amount"] = request.item_amount;
    }
    if (request.hsn_sac_code) {
        search_query["hsn_sac_code"] = request.hsn_sac_code;
    }
    return search_query;
}

module.exports = {
    retailerSearchQuery, itemSearchQuery
}