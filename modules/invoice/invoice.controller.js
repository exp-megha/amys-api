const _ = require('lodash');
var { Invoice } = require('./../../models/invoice');
// var { InvoiceNew } = require('./../../models/invoiceNew');
var { Item } = require('./../../models/item');
var { Retailer } = require('./../../models/retailer');
var { ApplicationSetting } = require('./../../models/applicationsetting');
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
// function getNewUniqueID(id, prefix) {
//     var serial_number = id.replace(prefix, '');
//     var final_serial_number = parseInt(serial_number, 10) + 1;
//     var final_id = prefix + final_serial_number; // + checksum;
//     return final_id;
// }
function getNewUniqueID(id, prefix) {
    var final_serial_number = parseInt(id) + 1;
    return final_serial_number;
}

/**
* functuion to add Retailer
* @author Megha
* @return  json
* @creted on 18-May-2017
* @modified on 19-May-2017
*/
var addInvoice = (req, res) => {
    if (!req.body.retailer_id) {
        res.status(400).message('retailer-id-required').returnFailure(null);
    }
    if (!req.body.invoice_date) {
        res.status(400).message('invoice_date-required').returnFailure(null);
    }
    if (!req.body.invoice_total) {
        res.status(400).message('invoice_total-required').returnFailure(null);
    }
    if (!req.body.item_list) {
        res.status(400).message('item_list-required').returnFailure(null);
    }
    var checksum = generator.checkSum(1);
    var invoice_id = constants.INVOICE_ID_PREFIX + "1"; // + checksum;
    let invoice_id_prefix = constants.INVOICE_ID_PREFIX_AMYS; //     INV-A-
    if (req.user.platform == 'Idea') {
        invoice_id_prefix = constants.INVOICE_ID_PREFIX_IDEA; //    INV-I-
    } else if (req.user.platform == 'SunDirect') {
        invoice_id_prefix = constants.INVOICE_ID_PREFIX_SUNDIRECT; //   INV-S-
    } else {
        invoice_id_prefix = constants.INVOICE_ID_PREFIX_AMYS; //     INV-A-
    }
    let serial_num = 0;
    Retailer.findOne({ _id: req.body.retailer_id })
        .then((retaler_data) => {
            if (!retaler_data) {
                return Promise.reject('Retailer-not-found');
            }
            req.body.platform = req.user.platform;
            req.body.retailer_name = retaler_data.name;
            req.body.retailer_address = retaler_data.address;
            req.body.retailer_pan_number = retaler_data.pan_number;
            req.body.retailer_gst_registration_number = retaler_data.gst_registration_number;
            req.body.retailer_state_code = retaler_data.state_code;
            req.body.retailer_phone_number = retaler_data.phone_number;
            req.body.retailer_place_of_supply = retaler_data.place_of_supply;
            if (req.user.platform == 'Idea') {
                return ApplicationSetting.findOne({ settings_name: "latest_idea_invoice_id" });
            } else if (req.user.platform == 'SunDirect') {
                return ApplicationSetting.findOne({ settings_name: "latest_sundirect_invoice_id" });
            } else {
                return ApplicationSetting.findOne({ settings_name: "latest_amys_invoice_id" });
            }
        })
        .then((invoice_data) => {
            if (!invoice_data) {
                return Promise.reject('error-occured-try-again');
            }

            if (invoice_data.settings_value != undefined) {
                serial_num = getNewUniqueID(invoice_data.settings_value, invoice_id_prefix);
                invoice_id = invoice_id_prefix + serial_num;
            }
            // invoice_data['settings_value'] = invoice_id;
            invoice_data['settings_value'] = serial_num;
            return invoice_data.save();
        })
        .then((invoice_info) => {
            if (!invoice_id) {
                return Promise.reject('error-occured-try-again');
            }
            req.body.invoice_number = invoice_id;
            req.body.month = Number(moment(parseInt(req.body.invoice_date)).format('M'));
            req.body.year = Number(moment(parseInt(req.body.invoice_date)).format('YYYY'));
            Invoice.create(req.body, (err, data) => {
                if (err) {
                    return Promise.reject('failed-to-add-invoice');
                }
                return res.status(200).message('invoice-added-successfully').returnSuccess(data);
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
let updateInvoiceDetails = (req, res) => {
    if (!req.body.retailer_id) {
        res.status(400).message('retailer-id-required').returnFailure(null);
    }
    if (!req.body.invoice_date) {
        res.status(400).message('invoice_date-required').returnFailure(null);
    }
    if (!req.body.invoice_total) {
        res.status(400).message('invoice_total-required').returnFailure(null);
    }
    if (!req.body.item_list) {
        res.status(400).message('item_list-required').returnFailure(null);
    }
    Invoice.findOne({ '_id': req.params.id })
        .then((invoice) => {
            if (!invoice) {
                return Promise.reject('Invoice-not-found');
            }
            return Retailer.findOne({ _id: req.body.retailer_id });
        })
        .then((retaler_data) => {
            if (!retaler_data) {
                return Promise.reject('Retailer-not-found');
            }
            req.body.retailer_name = retaler_data.name;
            req.body.retailer_address = retaler_data.address;
            req.body.retailer_pan_number = retaler_data.pan_number;
            req.body.retailer_gst_registration_number = retaler_data.gst_registration_number;
            req.body.retailer_state_code = retaler_data.state_code;
            req.body.month = Number(moment(parseInt(req.body.invoice_date)).format('M'));
            req.body.year = Number(moment(parseInt(req.body.invoice_date)).format('YYYY'));
            req.body.platform = req.user.platform;
            return Invoice.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
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

let getInvoices = (req, res) => {
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
        return searchAndFilters.invoiceSearchQuery(req.query, platform);
    })
        .then((search_query) => {
            query = search_query;
            return Invoice.count(query);
        })
        .then((count) => {
            req.query.total_count = count;
            if (excel_export == true) {
                return Promise.all([
                    Invoice.find(query).sort("createdAt")
                    // Invoice.find(query).distinct('retailer_id').count()
                ]);
            } else {
                return Promise.all([
                    Invoice.find(query).sort(sort_by_field).limit(limit).skip(skip)
                    // Invoice.find(query).distinct('retailer_id').count()
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

let getInvoiceDetails = (req, res) => {
    console.log('-----------------------------');
    if (!req.params.id) {
        res.status(400).message('item_id-required').returnFailure(null);
    }
    var invoice_data = {};
    Invoice.findOne({ '_id': req.params.id }).lean()
        .then((invoice) => {
            if (!invoice) {
                return Promise.reject('invoice-not-found');
            }
            invoice.dealer_name = req.user.name;
            invoice.dealer_address = req.user.address;
            invoice.dealer_city = req.user.city;
            invoice.dealer_state_code = req.user.state_code;
            invoice.dealer_state = req.user.state;
            invoice.dealer_zip = req.user.zip;
            invoice.dealer_phone_number = req.user.phone_number;
            invoice.dealer_pan_number = req.user.pan_number;
            invoice.dealer_gst_registration_number = req.user.gst_registration_number;
            return invoice;
        })
        .then((final_output) => {
            return res.status(200).message('invoice-information-retrieved-successfully').returnSuccess(final_output);
        }).catch((err) => {
            res.status(400).message(err).returnFailure(null);
        });
}

let cancelInvoice = (req, res) => {
    Invoice.findOne({ '_id': req.params.id })
        .then((invoice) => {
            if (!invoice) {
                return Promise.reject('Item-not-found');
            }
            // return Invoice.findByIdAndUpdate({ _id: req.params.id }, { 'is_active': false }, { new: true });
            return Invoice.find({ _id: req.params.id }).remove();
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
                right: { style: 'thick', color: '000000' }
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
                top: { style: 'thin', color: '000000' },
                bottom: { style: 'thin', color: '000000' },
                right: { style: 'thin', color: '000000' }
            }
        }
    };

    //Array of objects representing heading rows (very top) 
    const heading = [
        [{ value: title, style: styles.headerDark }, { value: 'b1', style: styles.headerDark }, { value: 'c1', style: styles.headerDark }],
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
        retailer: {
            displayName: 'Retailer',
            headerStyle: styles.cellPink,
            width: 250 // <- width in pixels 
        },
        gst_no: {
            displayName: 'Retailer GST No:',
            headerStyle: styles.cellPink,
            width: 120 // <- width in pixels  
        },
        pan_no: {
            displayName: 'Retailer PAN Card',
            headerStyle: styles.cellPink,
            width: 120 // <- width in pixels  
        },
        hsn_code: {
            displayName: 'HSN Code',
            headerStyle: styles.cellPink,
            width: 80
        },
        total_quantity: {
            displayName: 'Total Quantity',
            headerStyle: styles.cellPink,
            width: 80
        },
        total_before_tax: {
            displayName: 'Total Before Tax',
            headerStyle: styles.cellPink,
            width: 80 // <- width in pixels  
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
        let cess_amount = parseFloat(items[i].total_before_tax) * (1 / 100);
        var total_quantity = 0;
        if(items[i].item_list[0]) { 
            total_quantity = total_quantity + parseFloat(items[i].item_list[0].quantity); 
        };
        if(items[i].item_list[1]) { 
            total_quantity = total_quantity + parseFloat(items[i].item_list[1].quantity); 
        };
        if(items[i].item_list[2]) { 
            total_quantity = total_quantity + parseFloat(items[i].item_list[2].quantity); 
        };
        if(items[i].item_list[3]) { 
            total_quantity = total_quantity + parseFloat(items[i].item_list[3].quantity); 
        };
        if(items[i].item_list[4]) { 
            total_quantity = total_quantity + parseFloat(items[i].item_list[4].quantity); 
        };
        if(items[i].item_list[5]) { 
            total_quantity = total_quantity + parseFloat(items[i].item_list[5].quantity); 
        };
        if(items[i].item_list[6]) { 
            total_quantity = total_quantity + parseFloat(items[i].item_list[6].quantity); 
        };
        if(items[i].item_list[7]) { 
            total_quantity = total_quantity + parseFloat(items[i].item_list[7].quantity); 
        };
        if(items[i].item_list[8]) { 
            total_quantity = total_quantity + parseFloat(items[i].item_list[8].quantity); 
        };
        if(items[i].item_list[9]) { 
            total_quantity = total_quantity + parseFloat(items[i].item_list[9].quantity); 
        };
        if(items[i].item_list[10]) { 
            total_quantity = total_quantity + parseFloat(items[i].item_list[10].quantity); 
        };
        // let total = (items[i].invoice_total + cess_amount) - items[i].total_discount;
        let total = (items[i].invoice_total) - items[i].total_discount;
        a = {
            inv_number: items[i].invoice_number,
            inv_date: moment(parseInt(items[i].invoice_date)).format("DD MMM, YYYY"),
            retailer: items[i].retailer_name,
            gst_no: items[i].retailer_gst_registration_number,
            pan_no: items[i].retailer_pan_number,
            total_before_tax: parseFloat(items[i].total_before_tax),
            // cess_amount: parseFloat(cess_amount).toFixed(2),
            gst_total: parseFloat(items[i].total_gst),
            discount: parseFloat(items[i].total_discount),
            inv_total: parseFloat(total).toFixed(2),
            hsn_code: items[i].item_list[0].hsn_sac_code,
            total_quantity: total_quantity
        }
        total_amount = total_amount + parseFloat(total);
        dataset.push(a);
    }
    // console.log('**********************', dataset)
        // inv_number: '', inv_date: '', retailer: '', gst_no: '', pan_no: '', total_before_tax: '', gst_total: '', cess_amount: '', discount: '',
        dataset.push({}, {
        inv_number: '', inv_date: '', retailer: '', gst_no: '', pan_no: '', hsn_code: '', total_quantity: '', total_before_tax: '', gst_total: '', discount: '',
        inv_total: total_amount, style: styles.headerDark
    });
    const merges = [
        { start: { row: 1, column: 1 }, end: { row: 1, column: 11 } },
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
    addInvoice, getInvoices, updateInvoiceDetails, getInvoiceDetails, cancelInvoice
};