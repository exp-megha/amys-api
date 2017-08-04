const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

var InvoiceSchema = mongoose.Schema({
    retailer_id: { type: mongoose.Schema.Types.ObjectId, default: null },
    month: { type: Number, default: null, trim: true, required: true },
    year: { type: Number, default: true, trim: true },
    invoice_number: { type: String, default: null, trim: true },
    invoice_date: { type: Number, default: null, trim: true },
    total_before_tax: { type: Number, default: null, trim: true },
    cgst_amount: { type: Number, default: null, trim: true },
    sgst_amount: { type: Number, default: null, trim: true },
    total_gst: { type: Number, default: null, trim: true },
    invoice_total: { type: Number, default: null, trim: true },
    appointment_history: [
        {
            booking_id: { type: String, default: null, trim: true },
            time_slot: { type: Number, default: null, trim: true },
            appointment_end_time: { type: Number, default: null, trim: true },
            total_amount: { type: Number, default: 0, trim: true },
            premium_appointment_fee: { type: Number, default: 0, trim: true },
            service_charge_amount: { type: Number, default: 0, trim: true },
            get_amount_during_booking: { type: Boolean, default: true },
            is_paid: { type: Boolean, default: false },
            booked_on: { type: Number, default: null },
            cancelled_on: { type: Number, default: null },
            appointment_status: { type: String, default: 'P' },
            appointment_reason: { type: String, default: null, trim: true },
            provider_id: { type: mongoose.Schema.Types.ObjectId, default: null },
            provider_name: { type: String, default: null, trim: true },
            appointment_reason_id: { type: mongoose.Schema.Types.ObjectId, default: null },
            family_member_id: { type: mongoose.Schema.Types.ObjectId, default: null },
            family_member_name: { type: String, default: null, trim: true },
            appointment_duration: { type: Number, default: null },
            appointment_type: { type: String, default: null },
            service_provider_id: { type: mongoose.Schema.Types.ObjectId, default: null },
            is_refunded: { type: Boolean, default: false }
        }
    ],
},
    {
        timestamps: true,
        versionKey: false
    });

InvoiceSchema.methods.toJSON = function () {
    var provider = this;

    var InvoiceObject = Invoice.toObject();
    return _.pick(InvoiceObject, ['_id', 'name', 'is_active', 'address', 'city', 'state_code', 'state', 'zip',
        'phone_number', 'pan_number', 'gst_registration_number'
    ]);
}

var Invoice = mongoose.model("Invoice", InvoiceSchema);
module.exports = { Invoice };
