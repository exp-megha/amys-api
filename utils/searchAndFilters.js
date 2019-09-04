var moment = require('moment');
var constants = require('../constants');
var ObjectId = require('mongodb').ObjectId;
const _ = require('lodash');

var retailerSearchQuery = (req, reqQuery, platform) => {
    let filter_query = {
        "platform": platform
    };
    // var filter_query = {};
    if (reqQuery.search_text) {
        var re = new RegExp(reqQuery.search_text, 'i');
        filter_query = {
            $or: [{
                    "first_name": {
                        $regex: re
                    }
                },
                {
                    "last_name": {
                        $regex: re
                    }
                },
                {
                    "specialisation": {
                        $regex: re
                    }
                },
                {
                    "email": {
                        $regex: re
                    }
                },
                {
                    "company": {
                        $regex: re
                    }
                },
                {
                    "address": {
                        $regex: re
                    }
                },
                {
                    "city": {
                        $regex: re
                    }
                },
                {
                    "state": {
                        $regex: re
                    }
                },
                {
                    "country": {
                        $regex: re
                    }
                },
                {
                    "phone_number": {
                        $regex: re
                    }
                }
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
    if (reqQuery.is_active) {
        var is_active = (reqQuery.is_active == 'true') ? true : false;
        filter_query['is_active'] = is_active;
    }
    return filter_query;
}

let itemSearchQuery = (request, platform) => {
    let search_query = {
        "platform": platform
    };
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
    if (request.is_active) {
        var is_active = (request.is_active == 'true') ? true : false;
        search_query['is_active'] = is_active;
    }
    return search_query;
}

let invoiceSearchQuery = (request, platform) => {
    let search_query = {
        "platform": platform
    };
    // let search_query = {};
    if (request.retailer_id) {
        search_query["retailer_id"] = ObjectId(request.retailer_id);
    }
    if (request.month) {
        search_query["month"] = Number(request.month);
    }
    if (request.year) {
        search_query["year"] = Number(request.year);
    }
    if (request.invoice_number) {
        search_query["invoice_number"] = new RegExp('^.*' + request.invoice_number + '.*$', "i");
    }
    if (request.retailer_name) {
        search_query["retailer_name"] = new RegExp('^.*' + request.retailer_name + '.*$', "i");
    }
    if (request.invoice_date) {
        search_query["invoice_date"] = request.invoice_date;
    }
    if (request.is_active) {
        var is_active = (request.is_active == 'true') ? true : false;
        search_query['is_active'] = is_active;
    } else {
        search_query['is_active'] = true;
    }
    if (request.startDate && request.endDate) {
        search_query["invoice_date"] = {
            "$gte": request.startDate,
            "$lt": request.endDate
        };
    }
    return search_query;
}
let mobileInvoiceSearchQuery = (request, platform) => {
    let conditions = [];
    let search_query = {};
    let filter_query = {};
    let final_query = {};
    // let search_query = {};
    if (request.retailer_id) {
        conditions.push({"retailer_id": ObjectId(request.retailer_id)});
        // search_query["retailer_id"] = ObjectId(request.retailer_id);
    }
    if (request.month) {
        // search_query["month"] = Number(request.month);
        conditions.push({"month": Number(request.month)});
    }
    if (request.year) {
        // search_query["year"] = Number(request.year);
        conditions.push({"year": Number(request.year)});
    }
    if (request.invoice_number) {
        // search_query["invoice_number"] = new RegExp('^.*' + request.invoice_number + '.*$', "i");
        conditions.push({"invoice_number":new RegExp('^.*' + request.invoice_number + '.*$', "i")});
    }
    if (request.keyword) {
        // var re = new RegExp(reqQuery.search_text, 'i');
        var re = new RegExp('^.*' + request.keyword + '.*$', "i");
        conditions.push({
            $or: [
                { "customer_name": { $regex: re } },
                { "customer_address": { $regex: re } },
                {"item_list.item_name": { $regex: re }}
            ]
        });        
    }
    
    if (request.invoice_type) {
        // search_query["item_name"] = new RegExp('^.*' + request.item_name + '.*$', "i");
        conditions.push({"invoice_type": new RegExp('^.*' + request.invoice_type + '.*$', "i")});
    }
    if (request.item_name) {
        // search_query["item_name"] = new RegExp('^.*' + request.item_name + '.*$', "i");
        conditions.push({"item_list.item_name": new RegExp('^.*' + request.item_name + '.*$', "i")});
    }
    if (request.mobile_id) {
        // search_query["item_name"] = new RegExp('^.*' + request.item_name + '.*$', "i");
        conditions.push({"item_list.mobile_id": ObjectId(request.mobile_id )});
    }
    if (request.item_type) { // mobile, cards, other etc
        conditions.push({"item_list.item_type": request.item_type });
    }
    if (request.invoice_date) {
        // search_query["invoice_date"] = request.invoice_date;
        conditions.push({"invoice_date": request.invoice_date});
    }
    if (request.is_active) {
        var is_active = (request.is_active == 'true') ? true : false;
        conditions.push({"is_active": is_active});
    } else {
        search_query['is_active'] = true;
    }
    if (conditions.length > 0) {
        filter_query = {
            $and: conditions
        };
    }   

    return filter_query;
}

module.exports = {
    retailerSearchQuery,
    itemSearchQuery,
    invoiceSearchQuery,
    mobileInvoiceSearchQuery
}