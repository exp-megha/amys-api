const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

var InvoiceSchema = mongoose.Schema({
    platform: { type: String, trim: true },
    retailer_id: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'retailer' },
    retailer_name: { type: String, default: null, trim: true },
    retailer_address: { type: String, default: null, trim: true },
    retailer_pan_number: { type: String, default: null, trim: true },
    retailer_gst_registration_number: { type: String, default: null, trim: true },
    retailer_state_code: { type: Number, default: 32, trim: true },
    retailer_place_of_supply: { type: String, default: 'KERALA', trim: true },
    retailer_phone_number: { type: Number, default: null, trim: true },
    month: { type: Number, default: null, trim: true, required: true },
    year: { type: Number, default: true, trim: true },
    invoice_number: { type: String, default: null, trim: true },
    invoice_date: { type: Number, default: null, trim: true },
    total_before_tax: { type: Number, default: 0, trim: true },
    cgst_amount: { type: Number, default: 0, trim: true },
    sgst_amount: { type: Number, default: 0, trim: true },
    total_discount: { type: Number, default: 0, trim: true },
    total_gst: { type: Number, default: 0, trim: true },
    invoice_total: { type: Number, default: 0, trim: true },
    is_active: { type: Boolean, default: true },
    item_list: [
        {
            item_id: { type: String, default: null, trim: true },
            item_of: { type: String, default: null },
            item_name: { type: String, default: null },
            item_type: { type: String, default: null },
            item_amount: { type: Number, default: null },
            quantity: { type: Number, default: null },
            unit_price_to_retailer: { type: Number, default: null },
            total_unit_price_to_retailer: { type: Number, default: null },
            percentage_deduction: { type: Number, default: null },
            hsn_sac_code: { type: String, default: null },
            discount: { type: Number, default: 0 }
        }
    ],
},
    {
        timestamps: true,
        versionKey: false
    });

// InvoiceSchema.methods.toJSON = function () {
//     var provider = this;

//     var InvoiceObject = Invoice.toObject();
//     return _.pick(InvoiceObject, ['_id', 'name', 'is_active', 'address', 'city', 'state_code', 'state', 'zip',
//         'phone_number', 'pan_number', 'gst_registration_number'
//     ]);
// }

var Invoice = mongoose.model("Invoice", InvoiceSchema);
module.exports = { Invoice };
