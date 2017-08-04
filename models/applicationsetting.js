const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

var ApplicationSettingSchema = mongoose.Schema({
    settings_name: { type: String, default: null },
    settings_value: { type: String, default: null }
},
    {
        timestamps: true,
        versionKey: false
    });

ApplicationSettingSchema.methods.toJSON = function () {
    var reason = this;
    var reasonObject = reason.toObject();
    return _.pick(reasonObject, ['settings_name', 'settings_value']);
}

var ApplicationSetting = mongoose.model("ApplicationSetting", ApplicationSettingSchema);
module.exports = { ApplicationSetting };
