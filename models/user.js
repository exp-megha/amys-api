const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
var constants = require('./../constants');

var UserSchema = mongoose.Schema({
    platform: { type: String, default: 'idea', trim: true, required: true },
    name: { type: String, default: null, trim: true },
    description: { type: String, default: null, trim: true },
    email: { type: String, trim: true },
    password: { type: String, required: true, minlength: 6 },
    user_token: { type: String, default: null, trim: true },
    address: { type: String, default: null, trim: true },
    city: { type: String, default: null, trim: true },
    state_code: { type: Number, default: null, trim: true },
    state: { type: String, default: null, trim: true },
    zip: { type: Number, default: null, trim: true },
    phone_number: { type: Number, default: null, trim: true },
    pan_number: { type: String, default: null, trim: true },
    gst_registration_number: { type: String, default: null, trim: true }
},
    {
        timestamps: true,
        versionKey: false
    });

UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject, ['email', 'name', 'description', 'user_token', 'platform', 'address', 'city', 
    'state_code', 'state', 'zip', 'phone_number', 'pan_number', 'gst_registration_number']);
}

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({
        _id: user._id.toHexString(),
        user_type: 'appUser',
        access
    }, process.env.JWT_SECRET).toString();

    user.user_token = token;
    return user.save().then(() => token);
};

UserSchema.methods.removeToken = function (token) {
    var user = this;

    return user.update({
        $pull: { tokens: { token } }
    });
};

UserSchema.statics.findByCredentials = function (login_details) {
    var User = this;
    /*Existence check for normal login*/
    return User.findOne({ email: login_details.email, password: login_details.password }).then((user) => {
        if (!user) {
            return Promise.reject('invalid-email');
        } else {
            console.log(user)
            return user;
            // return new Promise((resolve, reject) => {
            //     bcrypt.compare(login_details.password, user.password).then((result) => {
            //         if (result) resolve(user);
            //         else reject('invalid-password');
            //     });
            // });
        }
    });
}

UserSchema.statics.findByToken = function (token) {
    var User = this;

    try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
        return Promise.reject('token-not-found');
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.access': 'auth',
        'tokens.token': token
    });
}


UserSchema.pre('save', function (next) {
    var user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(constants.PASSWORD_HASH_ITERATION_COUNT, (err, salt) => {
            if (err) throw Error(err);
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) throw Error(err);
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

var User = mongoose.model("User", UserSchema);
module.exports = { User };
