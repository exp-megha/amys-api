const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

var MobileSchema = mongoose.Schema({
    // platform: { type: String, trim: true },
    is_active: { type: Boolean, default: true },
    // item_brand: { type: String, default: null, trim: true },
    item_name: { type: String, default: null, trim: true },
    item_amount: { type: Number, default: 0, trim: true }
},
    {
        timestamps: true,
        versionKey: false
    });

var Mobile = mongoose.model("Mobile", MobileSchema);
module.exports = { Mobile };
