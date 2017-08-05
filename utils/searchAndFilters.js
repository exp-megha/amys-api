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
    filter_query['is_active'] = true;
    return filter_query;
}

let generateUserQuery = (request) => {
    let search_query = {};
    if (request.user_name) {
        search_query = {
            $or: [{ "last_name": new RegExp('^.*' + request.user_name + '.*$', "i") },
            { "first_name": new RegExp('^.*' + request.user_name + '.*$', "i") }]
        };
    }
    if (request.status == "false") {
        search_query["is_active"] = false;
    } else if (request.status == "true") {
        search_query["is_active"] = true;
    }
    if (request.email) {
        search_query["email"] = new RegExp('^.*' + request.email + '.*$', "i")
    }
    search_query["is_deleted"] = false;
    return search_query;
}

module.exports = {
    retailerSearchQuery, generateUserQuery
}