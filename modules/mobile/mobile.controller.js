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
    Mobile.find({
            "is_active": true
        })
        .then((result) => {
            // console.log(result)
            return res.status(200).message('Item list returned successfully').returnSuccess(result);
        }).catch((err) => {
            res.status(400).message(err).returnFailure(null);
        });
}

var addItemList = (req, res) => {

    let item_list = req.body.item_list;
    // console.log('=================',item_list);
    Mobile.create(item_list, (err, data) => {
        if (err) {
            console.log(err)
            return Promise.reject('failed-to-add-items');
        }
        return res.status(200).message('items-added-successfully').returnSuccess(data);
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
    cancelMobile
};