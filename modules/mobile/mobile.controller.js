const _ = require('lodash');
var {
    Mobile
} = require('./../../models/mobile');

var {
    ApplicationSetting
} = require('./../../models/applicationsetting');
var searchAndFilters = require('./../../utils/searchAndFilters');
var constants = require('./../../constants');
var changeCase = require('change-case');
const moment = require('moment');
const generator = require('generate-serial-number');
const excelExport = require('node-excel-export');
const Excel = require('exceljs');
var path = require("path");
var nodeExcel = require('excel-export');

const getItemList = async (req, res) => {
    let limit = parseInt(req.query.limit) || constants.PAGE_LIMIT;
    let page = (req.query.page) ? parseInt(req.query.page) : 1;
    let skip = page > 0 ? ((page - 1) * limit) : 0;
    var sort_by_field = (req.query.sort_by_field) ? req.query.sort_by_field : "createdAt";
    var sort_order = (req.query.sort_order) ? req.query.sort_order : "desc";
    if (sort_order == 'desc') {
        sort_by_field = '-' + sort_by_field;
    }

    let search_query = {};
    if (req.query.is_active == 'true') {
        search_query["is_active"] = true;
    }
    if (req.query.keyword != null) {
        search_query["item_name"] = new RegExp('^.*' + req.query.keyword + '.*$', "i")
    }
    
    Mobile.count(search_query)
        .then((count) => {
            req.query.total_count = count;
            return Promise.all([
                Mobile.find(search_query).sort(sort_by_field)  //.limit(limit).skip(skip)
            ]);
            // return res.status(200).message('Item list returned successfully').returnSuccess(result);
        }).then((result) => {
            // console.log('=====', result)
            var items = result[0];
            // var retailer_count = result[1];
            if (!items) {
                return Promise.reject('no-records-found');
            }
            return res.status(200).message('item-list-success').returnListSuccess(items, req.query);

        }).catch((e) => {
            var result = [];
            console.log('**************', e)
            res.status(200).message(e).returnFailure(result);
        });
    

}

var addItemList = (req, res) => {

    // let item_list = req.body.item_list;
    // console.log('=================',item_list);
    Mobile.create(req.body, (err, data) => {
        if (err) {
            console.log(err)
            return Promise.reject('failed-to-add-items');
        }
        return res.status(200).message('items-added-successfully').returnSuccess(data);
    });
}

let updateMobiles = (req, res) => {
    // req.body.item_of = changeCase.titleCase(req.body.item_of);
    // req.body.item_name = req.body.item_name.toUpperCase();
    // req.body.item_type = changeCase.titleCase(req.body.item_type);
    Mobile.findOne({
            '_id': req.params.id
        })
        .then((item) => {
            if (!item) {
                return Promise.reject('Item-not-found');
            }
            // req.body.platform = req.user.platform;
            return Mobile.findByIdAndUpdate({
                _id: req.params.id
            }, req.body, {
                new: true
            });
        })
        .then((result) => {
            if (!result) {
                return Promise.reject('failed-to-update-Item-info');
            }
            return res.status(200).message('Item-information-updated').returnSuccess(result);
        }).catch((err) => {
            // console.log('==========================',err)
            res.status(400).message(err).returnFailure(null);
        });
}

var cancelMobile = (req, res) => {
    Mobile.findOne({
        _id: req.params.id
    }, (err, result) => {
        if (!result) {
            return res.status(400).message('item-not-found').returnFailure(null);
        }
        Mobile.findByIdAndUpdate(req.params.id, {
            $set: {
                'is_active': false
            }
        }, {
            new: true
        }, (err, updated_item) => {
            if (updated_item) {
                return res.status(200).message('updated-successfully').returnSuccess(updated_item);

            }
            return res.status(400).message('item-update-failed').returnFailure(null);
        })
    });
}


module.exports = {
    getItemList,
    addItemList,
    cancelMobile,
    updateMobiles
};