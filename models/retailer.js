const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

var RetailerSchema = mongoose.Schema({
    platform: { type: String, trim: true},
    name: { type: String, default: null, trim: true },
    email: { type: String, default: null, trim: true },
    is_active: { type: Boolean, default: true, trim: true },
    address: { type: String, default: null, trim: true },
    city: { type: String, default: null, trim: true },
    state_code: { type: Number, default: 32, trim: true },
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
    RetailerObject.text = RetailerObject.name;
    RetailerObject.id = RetailerObject._id;
    return _.pick(RetailerObject, ['_id', 'name', 'is_active', 'address', 'city', 'state_code', 'state', 'zip',
        'phone_number', 'pan_number', 'gst_registration_number', 'place_of_supply', 'is_active', 'text', 'id'
    ]);
}

var Retailer = mongoose.model("Retailer", RetailerSchema);
module.exports = { Retailer };
