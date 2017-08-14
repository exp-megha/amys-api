const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

var RetailerSchema = mongoose.Schema({
    name: { type: String, default: null, trim: true },
    email: { type: String, default: null, trim: true },
    is_active: { type: Boolean, default: true, trim: true },
    address: { type: String, default: null, trim: true },
    city: { type: String, default: null, trim: true },
    state_code: { type: Number, default: null, trim: true },
    state: { type: String, default: null, trim: true },
    zip: { type: Number, default: null, trim: true },
    phone_number: { type: Number, default: null, trim: true },
    pan_number: { type: String, default: null, trim: true },
    gst_registration_number: { type: String, default: null, trim: true },
    place_of_supply: { type: String, default: 'KERALA', trim: true },
    is_active: { type: Boolean, default: true },
},
    {
        timestamps: true,
        versionKey: false
    });

RetailerSchema.methods.toJSON = function () {
    var Retailer = this;

    var RetailerObject = Retailer.toObject();
    return _.pick(RetailerObject, ['_id', 'name', 'is_active', 'address', 'city', 'state_code', 'state', 'zip',
        'phone_number', 'pan_number', 'gst_registration_number', 'place_of_supply', 'is_active'
    ]);
}

var Retailer = mongoose.model("Retailer", RetailerSchema);
module.exports = { Retailer };
