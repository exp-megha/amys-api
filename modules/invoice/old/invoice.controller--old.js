const _ = require('lodash');
var { Invoice } = require('./../../models/invoice');
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
                invoice_id = getNewUniqueID(invoice_data.settings_value, constants.INVOICE_ID_PREFIX);
            }
            invoice_data['settings_value'] = invoice_id;
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
    exportToExcel(res);
    // let limit = req.query.limit || constants.PAGE_LIMIT;
    // let page = (req.query.page) ? parseInt(req.query.page) : 1;
    // let skip = page > 0 ? ((page - 1) * limit) : 0;
    // var sort_by_field = req.query.sort_by_field || "createdAt";
    // var sort_order = req.query.sort_order || "desc";
    // if (sort_order == 'desc') {
    //     sort_by_field = '-' + sort_by_field;
    // }
    // let excel_export = (req.query.export_to_excel == 'true') ? true : false;
    // let query = {};
    // Promise.all([]).then(() => {
    //     return searchAndFilters.invoiceSearchQuery(req.query, req.user.platform);
    // })
    //     .then((search_query) => {
    //         query = search_query;
    //         return Invoice.count(query);
    //     })
    //     .then((count) => {
    //         req.query.total_count = count;
    //         if (excel_export == true) {
    //             return Invoice.find(query).sort(sort_by_field);
    //         } else {
    //             return Invoice.find(query).sort(sort_by_field).limit(limit).skip(skip);
    //         }
    //     })
    //     .then((items) => {
    //         if (!items) {
    //             return Promise.reject('no-records-found');
    //         }
    //         if (excel_export == true) {
    //             exportToExcel(res);
    //         } else {
    //             return res.status(200).message('invoice-list-success').returnListSuccess(items, req.query);
    //         }
    //     }).catch((e) => {
    //         res.status(200).message(e).returnFailure(null);
    //     });
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

let exportToExcel = (res) => {
    var cell_name = '';
    var i = 0;
    var filepath = constants.EXCEL_TEMPLATE_PATH_WEB;
    var filename = '';
    // create workbook by api.
    var workbook = new Excel.Workbook();

    // must create one more sheet.
    var sheet = workbook.addWorksheet("Invoice");
    // CampaignSubProfile.findOne({ _id: sub_profile_id }).select('sub_profile_name band_details').exec(function (err, band_info) {
    sheet.columns = [
        { header: 'Invoice No:', key: 'email', width: 40 },
        { header: 'Invoice Date', key: 'band', width: 40 },
        { header: 'GST No:', key: 'sub_profile_name', width: 30 },
        { header: 'Amount', key: 'notes', width: 45 },
        { header: 'Total', key: 'sub_profile_id', width: 40 }
    ];
    sheet.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('B1').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getCell('A1').font = { bold: true };
    sheet.getCell('B1').font = { bold: true };
    var sub_profile_id_col = sheet.getColumn(5);
    sheet.views = [
        { state: 'frozen', xSplit: 5, ySplit: 1, activeCell: 'A2', zoomScale: 92 }
    ];

    // band_info.band_details.forEach(function (band) {
    //     band_name = band_name + band.band_name + ",";
    // });
    // band_name = band_name.substring(0, band_name.length - 1);
    // band_name = band_name + "\"";
    // for (i = 2; i <= 1000; i++) {
    //     cell_name = 'B' + i;
    //     sheet.getCell(cell_name).dataValidation = {
    //         type: 'list',
    //         allowBlank: false,
    //         formulae: [band_name]
    //     };
    // }
    // you can create xlsx file now.
    filename = filepath + "/templatePath/PersonBulkUploadForm" + ".xlsx";
    console.log('############', filepath, '*********', filename);
    var newPath = path.join(__dirname, '../templatePath/') + "PersonBulkUploadForm" + ".xlsx";
    // workbook.xlsx.writeFile(__dirname + "PersonBulkUploadForm" + ".xlsx")
    workbook.xlsx.writeFile(path.join(__dirname, '../../templatePath/') + "PersonBulkUploadForm" + ".xlsx")
        .then(function (response) {

            console.log("xls file is written......", response);
            res.setHeader('Content-Type', 'application/vnd.openxmlformates');
            res.setHeader("Content-Disposition", "attachment;filename=" + newPath);
            // res.end(result, 'binary');
            // return res.status(200).message('Invoice--success').returnSuccess(newPath);
            // return cb(null, success('successs', 200, filename))
        });
    // });
}
module.exports = {
    addInvoice, getInvoices, updateInvoiceDetails, getInvoiceDetails, cancelInvoice
};
