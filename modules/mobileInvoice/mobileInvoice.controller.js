const _ = require('lodash');
var {
    MobileInvoice
} = require('./../../models/mobileInvoice');
var {
    Item
} = require('./../../models/item');
var {
    Retailer
} = require('./../../models/retailer');
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

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

/**
 * function to generate unique id
 * @author Sachin Kumar
 * @return json
 * @createdOn 30-June-2017
 */
function getNewUniqueID(id, prefix) {
    var serial_number = id.replace(prefix, '');
    var final_serial_number = parseInt(serial_number, 10) + 1;
    var final_id = prefix + final_serial_number; // + checksum;
    return final_id;
}

/**
 * functuion to add Mobile Invoice
 * @author Megha
 * @return  json
 * @created on 18-Sep-2017
 */
var addMobileInvoice = (req, res) => {
    var checksum = generator.checkSum(1);
    var invoice_id = constants.INVOICE_ID_PREFIX + "1"; // + checksum;

    let invoice_total = req.body.invoice_total;
    let total_before_tax = (invoice_total / 112) * 100;
    let cgst_amount = total_before_tax * constants.GST_SPLIT_PERCENTAGE;
    let sgst_amount = total_before_tax * constants.GST_SPLIT_PERCENTAGE;
    let total_discount = req.body.total_discount;
    let total_gst = cgst_amount + sgst_amount;
    let invoice_object = {
        "customer_name": req.body.customer_name,
        "customer_address": req.body.customer_address,
        "invoice_total": invoice_total - total_discount,
        "total_before_tax": total_before_tax,
        "cgst_amount": req.body.cgst_amount,
        "sgst_amount": req.body.sgst_amount,
        "total_discount": total_discount,
        "total_gst": total_gst,
        "invoice_date": req.body.invoice_date,
        "item_list": req.body.item_list
    };
    ApplicationSetting.findOne({
            settings_name: "latest_amys_invoice_id"
        })
        .then((invoice_data) => {
            if (!invoice_data) {
                return Promise.reject('error-occured-try-again');
            }
            if (invoice_data.settings_value != undefined) {
                invoice_id = getNewUniqueID(invoice_data.settings_value, constants.INVOICE_ID_PREFIX);
            }
            invoice_data['settings_value'] = invoice_id;
            return invoice_data.save();
        })
        .then((invoice_info) => {
            if (!invoice_id) {
                return Promise.reject('error-occured-try-again');
            }
            invoice_object.invoice_number = invoice_id;
            invoice_object.month = Number(moment(parseInt(req.body.invoice_date)).format('M'));
            invoice_object.year = Number(moment(parseInt(req.body.invoice_date)).format('YYYY'));
            MobileInvoice.create(invoice_object, (err, data) => {
                if (err) {
                    return Promise.reject('failed-to-add-invoice');
                }
                return res.status(200).message('invoice-added-successfully').returnSuccess(data);
            })
        }).catch((e) => res.status(400).message(e).returnFailure(null));
}

/**
 * function to updateMobileInvoiceDetails
 * @author Megha
 * @return json
 * @createdOn 19-May-2017
 * @updatedOn 29-June-2017 Sachin Kumar
 */
let updateMobileInvoiceDetails = (req, res) => {
    MobileInvoice.findOne({
            '_id': req.params.id
        })
        .then((invoice) => {
            if (!invoice) {
                return Promise.reject('Invoice-not-found');
            }
            req.body.month = Number(moment(parseInt(req.body.invoice_date)).format('M'));
            req.body.year = Number(moment(parseInt(req.body.invoice_date)).format('YYYY'));
            req.body.platform = req.user.platform;

            let invoice_total = req.body.invoice_total;
            let total_before_tax = (total_amount / 112) * 100;
            let cgst_amount = actual_price * constants.GST_SPLIT_PERCENTAGE;
            let sgst_amount = actual_price * constants.GST_SPLIT_PERCENTAGE;
            let total_discount = req.body.total_discount;
            let total_gst = cgst_amount + sgst_amount;
            let invoice_object = {
                "customer_name": req.body.customer_name,
                "customer_address": req.body.customer_address,
                "invoice_total": invoice_total - total_discount,
                "total_before_tax": total_before_tax,
                "cgst_amount": req.body.cgst_amount,
                "sgst_amount": req.body.sgst_amount,
                "total_discount": total_discount,
                "total_gst": total_gst,
                "invoice_date": req.body.invoice_date,
                "item_list": req.body.item_list
            };
            return MobileInvoice.findByIdAndUpdate({
                _id: req.params.id
            }, invoice_object, {
                new: true
            });
        })
        .then((result) => {
            if (!result) {
                return Promise.reject('failed-to-update-invoice-info');
            }
            return res.status(200).message('Invoice-information-updated').returnSuccess(result);
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
let getMobileInvoices = (req, res) => {
    // exportToExcel(res);
    var title = '';
    let limit = req.query.limit || constants.PAGE_LIMIT;
    let page = (req.query.page) ? parseInt(req.query.page) : 1;
    let skip = page > 0 ? ((page - 1) * limit) : 0;
    var sort_by_field = (req.query.sort_by_field) ? req.query.sort_by_field : "createdAt";
    var sort_order = (req.query.sort_order) ? req.query.sort_order : "desc";
    if (sort_order == 'desc') {
        sort_by_field = '-' + sort_by_field;
    }
    let excel_export = (req.query.export_to_excel == 'true') ? true : false;
    let query = {};
    var platform = (req.user) ? req.user.platform : req.query.platform;
    console.log('=====', platform, req.user, sort_by_field)
    var sheet_name = platform + ' Invoice-';
    Promise.all([]).then(() => {
            return searchAndFilters.mobileInvoiceSearchQuery(req.query, platform);
        })
        .then((search_query) => {
            query = search_query;
            return MobileInvoice.count(query);
        })
        .then((count) => {
            req.query.total_count = count;
            if (excel_export == true) {
                return Promise.all([
                    MobileInvoice.find(query).sort("createdAt")
                ]);
            } else {
                return Promise.all([
                    MobileInvoice.find(query).sort(sort_by_field).limit(limit).skip(skip)
                ]);
            }
        })
        .then((result) => {
            var items = result[0];
            // var retailer_count = result[1];
            if (!items) {
                return Promise.reject('no-records-found');
            }
            if (excel_export == true) {
                title = platform + ' Invoice for the month of ' + moment(req.query.month, 'MM').format('MMMM') + ' ' + req.query.year;
                sheet_name = sheet_name + moment(req.query.month, 'MM').format('MMMM') + '-' + req.query.year
                exportToExcel(res, items, title, sheet_name);
            } else {
                return res.status(200).message('invoice-list-success').returnListSuccess(items, req.query);
            }
        }).catch((e) => {
            var result = [];
            res.status(200).message(e).returnFailure(result);
        });
};

let getMobileInvoiceDetails = (req, res) => {
    console.log('-----------------------------');
    if (!req.params.id) {
        res.status(400).message('item_id-required').returnFailure(null);
    }
    var invoice_data = {};
    MobileInvoice.findOne({
            '_id': req.params.id
        }).lean()
        .then((invoice) => {
            if (!invoice) {
                return Promise.reject('invoice-not-found');
            }
            return res.status(200).message('invoice-information-retrieved-successfully').returnSuccess(invoice);
        }).catch((err) => {
            res.status(400).message(err).returnFailure(null);
        });
}

let cancelMobileInvoice = (req, res) => {
    MobileInvoice.findOne({
            '_id': req.params.id
        })
        .then((invoice) => {
            if (!invoice) {
                return Promise.reject('Item-not-found');
            }
            return MobileInvoice.find({
                _id: req.params.id
            }).remove();
        })
        .then((result) => {
            if (!result) {
                return Promise.reject('failed-to-cancel-Invoice');
            }
            return res.status(200).message('Invoice-cancellation-success').returnSuccess(result);
        }).catch((err) => {
            res.status(400).message(err).returnFailure(null);
        });
}

let exportToExcel = (res, items, title, sheet_name) => {
    const styles = {
        headerDark: {
            fill: {
                fgColor: {
                    rgb: 'F2FBA7'
                }
            },
            font: {
                color: {
                    rgb: '000000'
                },
                sz: 14,
                bold: true,
                underline: false
            },
            alignment: {
                horizontal: "center"
            },
            border: {
                right: {
                    style: 'thick',
                    color: '000000'
                }
            }
        },
        cellPink: {
            fill: {
                fgColor: {
                    rgb: 'ECF4FE'
                }
            },
            font: {
                color: {
                    rgb: '000000'
                },
                sz: 12,
                bold: true,
                underline: false
            },
            alignment: {
                horizontal: "center"
            },
            border: {
                top: {
                    style: 'thin',
                    color: '000000'
                },
                bottom: {
                    style: 'thin',
                    color: '000000'
                },
                right: {
                    style: 'thin',
                    color: '000000'
                }
            }
        }
    };

    //Array of objects representing heading rows (very top) 
    const heading = [
        [{
            value: title,
            style: styles.headerDark
        }, {
            value: 'b1',
            style: styles.headerDark
        }, {
            value: 'c1',
            style: styles.headerDark
        }],
        // ['a2', 'b2', 'c2'] // <-- It can be only values 
    ];
    const specification = {
        inv_number: { // <- the key should match the actual data key 
            displayName: 'Invoice Number', // <- Here you specify the column header 
            headerStyle: styles.cellPink, // <- Header style 
            width: 100 // <- width in pixels 
        },
        inv_date: {
            displayName: 'Invoice Date',
            headerStyle: styles.cellPink,
            width: 100 // <- width in chars (when the number is passed as string) 
        },
        customer_name: {
            displayName: 'Customer Name',
            headerStyle: styles.cellPink,
            width: 250 // <- width in pixels 
        },
        customer_address: {
            displayName: 'Customer Address:',
            headerStyle: styles.cellPink,
            width: 250 // <- width in pixels  
        },
        total_before_tax: {
            displayName: 'Total Before Tax',
            headerStyle: styles.cellPink,
            width: 120 // <- width in pixels  
        },
        gst_total: {
            displayName: 'Total GST',
            headerStyle: styles.cellPink,
            width: 80 // <- width in pixels  
        },
        discount: {
            displayName: 'Discount',
            headerStyle: styles.cellPink,
            width: 80 // <- width in pixels  
        },
        inv_total: {
            displayName: 'Invoice Total',
            headerStyle: styles.cellPink,
            width: 120 // <- width in pixels  Retailer PAN Card
        }
    }
    var total_amount = 0;
    var dataset = [];
    for (i = 0; i < items.length; i++) {
        a = {
            inv_number: items[i].invoice_number,
            inv_date: moment(parseInt(items[i].invoice_date)).format("DD MMM, YYYY"),
            customer_name: items[i].customer_name,
            customer_address: items[i].customer_address,
            total_before_tax: parseFloat(items[i].total_before_tax),
            gst_total: parseFloat(items[i].total_gst),
            discount: parseFloat(items[i].total_discount),
            inv_total: parseFloat(items[i].invoice_total)
        }
        total_amount = total_amount + parseFloat(items[i].invoice_total);
        dataset.push(a);
    }
    console.log('**********************', dataset)
    dataset.push({}, {
        inv_number: '',
        inv_date: '',
        customer_name: '',
        customer_address: '',
        total_before_tax: '',
        gst_total: '',
        discount: '',
        inv_total: total_amount,
        style: styles.headerDark
    });
    const merges = [{
            start: {
                row: 1,
                column: 1
            },
            end: {
                row: 1,
                column: 9
            }
        },
        // { start: { row: 2, column: 1 }, end: { row: 2, column: 5 } },
        // { start: { row: 2, column: 6 }, end: { row: 2, column: 10 } }
    ]
    const report = excelExport.buildExport(
        [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report 
            {
                name: sheet_name, // <- Specify sheet name (optional) 
                heading: heading, // <- Raw heading array (optional) 
                merges: merges, // <- Merge cell ranges 
                specification: specification, // <- Report specification 
                data: dataset // <-- Report data 
            }
        ]
    );

    res.attachment('report.xlsx'); // This is sails.js specific (in general you need to set headers) 
    res.send(report);

    // res.setHeader('Content-Type', 'application/vnd.openxmlformates');
    // res.setHeader("Content-Disposition", "attachment;filename=" + sheet_name + ".xlsx");
    // res.end(report, 'binary');
}

module.exports = {
    addMobileInvoice,
    getMobileInvoices,
    updateMobileInvoiceDetails,
    getMobileInvoiceDetails,
    cancelMobileInvoice
};