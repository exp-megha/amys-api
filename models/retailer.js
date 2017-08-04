const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

var RetailerSchema = mongoose.Schema({
    name: { type: String, default: null, trim: true, required: true },
    is_active: { type: Boolean, default: true, trim: true },
    address: { type: String, default: null, trim: true },
    city: { type: String, default: null, trim: true },
    state_code: { type: String, default: null, trim: true },
    state: { type: String, default: null, trim: true },
    zip: { type: String, default: null, trim: true },
    phone_number: { type: String, default: null, trim: true },
    pan_number: { type: String, default: null, trim: true },
    gst_registration_number: { type: String, default: null, trim: true },
},
    {
        timestamps: true,
        versionKey: false
    });

RetailerSchema.methods.toJSON = function () {
    var provider = this;

    var RetailerObject = Retailer.toObject();
    return _.pick(RetailerObject, ['_id', 'name', 'is_active', 'address', 'city', 'state_code', 'state', 'zip',
    'phone_number', 'pan_number', 'gst_registration_number'
]);
}

var Retailer = mongoose.model("Retailer", RetailerSchema);
module.exports = { Retailer };
