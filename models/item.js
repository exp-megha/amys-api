const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

var ItemSchema = mongoose.Schema({
    platform: { type: String, trim: true},
    item_of: { type: String, default: null },
    item_type: { type: String, default: null },
    item_name: { type: String, default: null },
    item_amount: { type: Number, default: null },
    unit_price_to_retailer: { type: Number, default: null },
    percentage_deduction: { type: Number, default: null },
    is_active: { type: Boolean, default: true },
    hsn_sac_code: { type: String, default: null }
},
    {
        timestamps: true,
        versionKey: false
    });

ItemSchema.methods.toJSON = function () {
    var reason = this;
    var reasonObject = reason.toObject();
    reasonObject.item_name_and_type = reasonObject.item_name + ' - ' + reasonObject.item_type;
    return _.pick(reasonObject,
        ['platform', '_id', 'item_of', 'item_type', 'item_name', 'item_name_and_type', 'item_amount', 'unit_price_to_retailer', 'percentage_deduction', 'hsn_sac_code', 'is_active']);
}

var Item = mongoose.model("Item", ItemSchema);
module.exports = { Item };
