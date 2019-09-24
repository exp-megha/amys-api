const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

var MobileInvoiceSchema = mongoose.Schema({
    platform: { type: String, trim: true },
    month: { type: Number, default: null, trim: true, required: true },
    year: { type: Number, default: true, trim: true },
    invoice_type: { type: String, default: 'b2c', trim: true },
    invoice_number: { type: String, default: null, trim: true },
    invoice_date: { type: Number, default: null, trim: true },
    is_active: { type: Boolean, default: true },
    customer_name: { type: String, default: null, trim: true },
    customer_address: { type: String, default: null, trim: true },
    total_before_tax: { type: Number, default: 0, trim: true },
    cgst_amount: { type: Number, default: 0, trim: true },
    sgst_amount: { type: Number, default: 0, trim: true },
    total_discount: { type: Number, default: 0, trim: true },
    total_gst: { type: Number, default: 0, trim: true },
    invoice_total: { type: Number, default: 0, trim: true },
    cess_amount: { type: Number, default: 0 },
    cess_percentage: { type: Number, default: 0 },
    item_list: [
        {
            item_id: { type: String, default: null, trim: true },
            item_name: { type: String, default: null },
            mobile_id: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'mobile' },
            item_type: { type: String, default: null },
            imei_number: { type: String, default: null },
            item_amount: { type: Number, default: null },
            total_before_tax: { type: Number, default: 0, trim: true },
            cgst_amount: { type: Number, default: 0, trim: true },  
            sgst_amount: { type: Number, default: 0, trim: true },
            quantity: { type: Number, default: 0 }
        }
    ]
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

var MobileInvoice = mongoose.model("MobileInvoice", MobileInvoiceSchema);
module.exports = { MobileInvoice };
