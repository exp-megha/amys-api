const _ = require('lodash');
const bcrypt = require('bcryptjs');
var { User } = require('./../../models/user');
var { Provider } = require('./../../models/provider');
var validations = require('./users.validation');
var RandomNumber = require('random-number');
var EmailService = require('../../utils/email/emailService');
var ObjectId = require('mongodb').ObjectId;
var constants = require("../../constants.js");
const providerController = require('../provider/provider.controller');
var changeCase = require('change-case');
var { No2fymePreference } = require('./../../models/no2fymepreference');
var no2fymePreferences = require('./../../utils/no2fymePreferences');
const searchAndFilters = require('./../../utils/searchAndFilters');
var { Notification } = require('./../../models/notification');

/**
 * function to invoke the sign up functionality
 * @author Rakhi M R
 * @return json
 * @createdOn 08-May-2017
 * @updatedOn 09-June-2017 Sachin Kumar
 */
let signUp = (req, res) => {
    let user_details;
    validations.validateSignUpDetails(req.body, res, (err) => {
        req.body.from = "signup";
        req.body.first_name = changeCase.titleCase(req.body.first_name);
        req.body.last_name = changeCase.titleCase(req.body.last_name);
        let find_existance_query = findExistanceQuery(req.body);
        User.findOne(find_existance_query).then((user_data) => {
            if (user_data) {
                if (req.body.type_of_access == "normal") {
                    return Promise.reject('email-already-in-use');
                } else {
                    return Promise.reject('account-already-registered');
                }
            }
            return saveUser(req.body, user_data);
        }).then((saved_user) => {
            if (!saved_user) {
                return Promise.reject('sign-up-failed');
            }
            user_details = saved_user;
            if (saved_user.email) {
                sendSignUpMail(req);
            }
            return saved_user.generateAuthToken();
        }).then((token) => {
            if (token) {
                return res.status(200).message('sign-up-success').returnSuccess(user_details);
            } else {
                return Promise.reject('sign-up-failed');
            }
        }).catch((e) => res.status(400).message(e).returnFailure(null));
    });
}

/**
 * function to create the query for the existance checking of user
 */
var findExistanceQuery = (request) => {
    let findExistanceByVariables = {};
    if (request.type_of_access == "normal") {
        findExistanceByVariables = { email: request.email.toLowerCase(), type_of_access: request.type_of_access };
        if (request.from == "login" && request.password) {
            findExistanceByVariables["password"] = request.password;
        }
    } else {
        findExistanceByVariables = {
            facebook_google_id: request.facebook_google_id,
            first_name: request.first_name,
            last_name: request.last_name,
            type_of_access: request.type_of_access
        };
    }
    return findExistanceByVariables;
}

/**
 * function to create a new user
 */
var saveUser = (request, user_data) => {
    if (request.email) {
        request.email = request.email.toLowerCase();
    }
    let user = new User(request);
    return user.save();
}
/**
 * function to send Sign Up Mail
 */
let sendSignUpMail = (req) => {
    let i18n = req.app.get('i18n');
    let signUpMailOptions = {
        req: req.body,
        email: req.body.email.toLowerCase(),
        welcome_name: i18n.t('sign-up-welcome-text'),
        signup_content_top: i18n.t('sign-up-content-top'),
        signup_content_bottom1: i18n.t('sign-up-content-top2'),
        signup_content_bottom2: i18n.t('sign-up-content-top3'),
        signup_content_bottom3: i18n.t('sign-up-content-top4'),
        signup_content_bottom5: i18n.t('sign-up-content-top5'),
        provider_signup_url: constants.WEB_PORTAL_SIGNUP_URL,
        logo_url: constants.LOGO_URL,
        subject: i18n.t('sign-up-welcome-text'),
        footer1: i18n.t('footer-1'),
        footer3: "",
        text: 'Sign Up'
    };
    EmailService.SendAccountCreationMail(signUpMailOptions, function (err, response) {
    });
}

/**
 * function to invoke the login functionality
 * @author Rakhi M R
 * @return json
 * @createdOn 08-May-2017
 */
let login = (req, res) => {
    validations.validateLoginDetails(req.body, res, (err) => {
        req.body.from = "login";
        req.body.first_name = changeCase.titleCase(req.body.first_name);
        req.body.last_name = changeCase.titleCase(req.body.last_name);
        let find_existance_query = findExistanceQuery(req.body);
        User.findByCredentials(find_existance_query)
            .then((user) => {
                if (!user) {
                    if (req.body.type_of_access == "normal") {
                        return Promise.reject('incorrect-login-credentials');
                    } else {
                        // If fb or google login, add the user and login
                        setSignUpDetails(req.body);
                        processSignUp();
                    }
                } else {
                    user.generateAuthToken().then((token) => {
                        if (token) {
                            return res.status(200).message('login-successful').returnSuccess(user);
                        } else {
                            return Promise.reject('login-failed');
                        }
                    })
                }
            }).catch((e) => res.status(401).message(e).returnFailure(null));
    });
}

/**
* function to invoke the forgot password functionality
* @author Rakhi M R
* @return json
* @createdOn 09-May-2017
*/
let forgotPassword = (req, res) => {
    validations.validateForgotPasswordDetails(req.body, res, (err) => {
        User.findOne({ email: req.body.email.toLowerCase(), type_of_access: "normal" })
            .then((user) => {
                if (!user) {
                    return Promise.reject('invalid-user-account');
                } else {
                    let reset_token = generateResetToken(); /* Generate Reset Token */
                    /*Email functionality pending*/
                    let reset_url = constants.WEBSITE_RESET_PWD_URL + '?platform=' + req.body.platform + '&token=' +
                        reset_token + '&email=' + user.email.toLowerCase();
                    sendForgotPasswordMail(req, user, reset_url, reset_token);
                    if (req.body.phone_number) {//SMS
                    }
                    user['reset_token'] = reset_token;
                    user.save()
                        .then((user_response) => {
                            if (user_response) {
                                return res.status(200).message('reset-token-sent').returnSuccess(null);
                            }
                        });
                }
            }).catch((e) => res.status(400).message(e).returnFailure(null));
    });
}

/**
 * function to send Forgot Pwd Mail
 */
var sendForgotPasswordMail = (req, user, reset_url, reset_token) => {
    let i18n = req.app.get('i18n');
    let name = (user.first_name) ? user.first_name : '';
    let forgotPasswordMailContent = {
        req: req,
        email: user.email.toLowerCase(),
        welcome_name: i18n.t('welcome-text') + " " + name,
        forgot_content: i18n.t('forgot-pwd-text'),
        reset_token_content: i18n.t('forgot-pwd-content') + ': ' + reset_token,
        logo_url: constants.LOGO_URL,
        reset_password_content: i18n.t('reset-password-content'),
        reset_password_url: reset_url,
        subject: i18n.t('forgot-pwd-subject'),
        footer1: i18n.t('footer-1'),
        footer3: " ",
        text: 'Forgot Password'
    };
    EmailService.SendForgotPasswordMailToUser(forgotPasswordMailContent, function (err, response) {
    });
}

/**
* Function to generate reset token
* @author Rakhi
* @return json
* @createdOn 09-May-2017
*/
let generateResetToken = () => {
    let options = { min: 10000, max: 99999, integer: true };
    return RandomNumber(options);
}

/**
 * function to invoke the reset password functionality
 * @author Rakhi M R
 * @return json
 * @createdOn 09-May-2017
 * @updatedOn 12-June-2017
 */
let resetPassword = (req, res) => {
    validations.validateResetPasswordDetails(req.body, res, (err) => {
        let i18n = req.app.get('i18n');
        User.findOne({ email: req.body.email.toLowerCase(), type_of_access: "normal" })
            .then((user) => {
                if (!user) {
                    return Promise.reject('invalid-user-account');
                } else {
                    if (user.reset_token != req.body.reset_token) {
                        return Promise.reject('invalid-reset-token');
                    }
                    SendResetPasswordMail(req, user);
                    user['password'] = req.body.new_password;
                    user['reset_token'] = null;
                    return user.save();
                }
            }).then((saveResponse) => {
                if (!saveResponse) {
                    return Promise.reject('reset-password-failed');
                }
                return res.status(200).message('reset-password-success').returnSuccess(null);
            }).catch((e) => res.status(400).message(e).returnFailure(null));
    });
}

var SendResetPasswordMail = (req, user) => {
    let i18n = req.app.get('i18n');
    let name = (user.first_name) ? user.first_name : '';
    let resetPasswordMailOptions = {
        req: req,
        email: user.email.toLowerCase(),
        welcome_name: i18n.t('welcome-text') + " " + name,
        logo_url: constants.LOGO_URL,
        subject: i18n.t('reset-pwd-subject'),
        reset_content: i18n.t('reset-pwd-content'),
        footer1: i18n.t('footer-1'),
        footer3: " ",
        text: 'Reset Password'
    };
    EmailService.SendResetPasswordMail(resetPasswordMailOptions, function (err, response) {
    });
}

/**
 * function to change the password for User
 * @author Sachin Kumar
 * @return json
 * @createdOn 23-May-2017
 */
let changePassword = (req, res) => {
    validations.validateChangePassword(req.body, res, (err) => {
        User.findOne({ _id: req.user._id })
            .then((user) => {
                bcrypt.compare(req.body.password, user.password).then((result) => {
                    if (!result) {
                        return Promise.reject('current-password-mismatch');
                    }
                    else if (req.body.new_password != req.body.confirm_password) {
                        return Promise.reject('confirm-password-mismatch');
                    }
                    user['password'] = req.body.new_password;
                    user.save().then((user_response) => {
                        if (user_response) {
                            return res.status(200).message('password-change-successful').returnSuccess(null);
                        }
                        return Promise.reject('password-change-failure');
                    });
                }).catch((e) => res.status(400).message(e).returnFailure(null));
            }).catch((e) => res.status(400).message(e).returnFailure(null));
    });
}

/**
 * function to add a provider to my providers list
 * @author Sachin Kumar
 * @return json
 * @createdOn 14-June-2017
 */
let addMyProvider = (req, res) => {
    validations.validateAddMyProvider(req.body, res, (err) => {
        User.findOne({ _id: req.params.id, 'my_providers': { $in: req.body.provider_id } })
            .then((provider) => {
                if (provider) {
                    return Promise.reject('provider-already-exists');
                }
                return User.findOne({ _id: req.params.id })
            })
            .then((user) => {
                // user.my_providers.push(req.body.provider_id);
                var existing_my_providers = user.my_providers;
                user.my_providers = existing_my_providers.concat(req.body.provider_id);
                return user.save();
            })
            .then((result) => {
                if (!result) {
                    return Promise.reject('provider-not-added-to-my-providers');
                }
                return res.status(200).message('provider-added-to-my-providers').returnSuccess(null);
            })
            .catch((e) => {
                return res.status(400).message(e).returnFailure(null);
            });
    });
}

/**
 * function to remove a provider from my providers list
 * @author Sachin Kumar
 * @return json
 * @createdOn 14-June-2017
 */
let removeMyProvider = (req, res) => {
    User.findOne({ _id: req.params.id, 'my_providers': { $in: [req.params.providerId] } })
        .then((provider) => {
            if (!provider) {
                return Promise.reject('provider-not-deleted-from-my-providers');
            }
            return User.findByIdAndUpdate(req.params.id, { $pull: { 'my_providers': req.params.providerId } });
        })
        .then((result) => {
            return res.status(200).message('provider-deleted-from-my-providers').returnSuccess(null);
        })
        .catch((e) => {
            return res.status(400).message(e).returnFailure(null);
        });
}

/**
 * function to list my providers
 * @author Sachin Kumar
 * @return json
 * @createdOn 16-June-2017
 */
let getMyProviders = (req, res) => {
    let query = {};
    var sort_by_field = req.query.sort_by_field || "last_name";
    var sort_order = req.query.sort_order || "asc";
    if (sort_order == 'desc') {
        sort_by_field = '-' + sort_by_field;
    }
    User.findOne({ _id: req.params.id }, { my_providers: 1 })
        .then((providers) => {
            if (!providers) {
                return Promise.reject('no-records-found');
            }
            let providerIds = providers.my_providers.map(function (x) { return new ObjectId(x); });
            let limit = req.query.limit || constants.PAGE_LIMIT;
            var page = (req.query.page) ? parseInt(req.query.page) : 0;
            var skip = page > 0 ? ((page - 1) * limit) : 0;
            query = { "_id": { $in: providerIds } };
            return Provider.count(query);
        })
        .then((count) => {
            if (!count) {
                return Promise.reject('no-records-found');
            }
            req.query.total_count = count;
            let select_fields = {
                _id: 1, first_name: 1, last_name: 1, specialisation: 1, phone_number: 1, gps_location: 1,
                image_url: 1, company: 1, address: 1, city: 1, postal_code: 1, service_provider_id: 1, email: 1, state: 1,
                country: 1, phone_number: 1, phone_number_type: 1, "configuration.get_amount_during_booking": 1,
                "configuration.premium_appointment_fee": 1, is_paid: 1, is_deleted: 1, schedule_configuration: 1
            };
            return Provider.find(query).select(select_fields).sort(sort_by_field).lean(); //.limit(limit).skip(skip)
        })
        .then((docs) => {
            if (!docs) {
                return res.status(200).message('no-records-found').returnFailure(null);
            }
            req.from = 'myProviders';
            return providerController.processResult(docs, req, res);
        })
        .catch((e) => {
            return res.status(200).message(e).returnFailure(null);
        });
}

/**
 * function to list service providers
 * @author Sachin Kumar
 * @return json
 * @createdOn 27-June-2017
 */
let userList = (req, res) => {
    validations.vaidateUserList(req.query, res, (err) => {
        if (req.query.type == "dropdown") {
            User.aggregate([
                { $match: { 'is_active': true, 'is_deleted': false } },
                {
                    $project: {
                        first_name: 1, last_name: 1, "user_name": { $concat: ["$last_name", " ", "$first_name"] }, _id: 1
                    }
                }
            ]).then((list) => {
                if (!list) {
                    return Promise.reject('no-records-found');
                }
                return res.status(200).message('get-user-list-success').returnSuccess(list);
            }).catch((err) => {
                res.status(200).message(err).returnFailure(null);
            });
        } else {
            let user_query = {};
            let limit = constants.WEB_PAGE_LIMIT;
            let skip = 0;
            if (req.query.page) {
                let page = parseInt(req.query.page);
                skip = page > 0 ? ((page - 1) * limit) : 0;
            }
            let sort = {};
            var sort_by_field = req.query.sort_by_field || "last_name";
            var sort_by_field_order = 1;
            var sort_order = req.query.sort_order || "asc";
            if (sort_order == 'desc') {
                sort_by_field_order = -1;
            }
            sort[sort_by_field] = sort_by_field_order;
            // console.log("sort ", sort);
            Promise.all([]).then(() => {
                return searchAndFilters.generateUserQuery(req.query)
            })
                .then((query) => {
                    user_query = query;
                    // console.log(user_query);
                    return User.count(user_query);
                }).then((total_count) => {
                    if (!total_count) {
                        return Promise.reject('no-records-found');
                    }
                    req.query.total_count = total_count;
                    return User.aggregate([
                        { $match: user_query },
                        {
                            $project: {
                                first_name: 1, last_name: 1,
                                "user_name": { $concat: ["$last_name", " ", "$first_name"] }, _id: 1, phone_number: 1, image_url: 1, address: 1,
                                city: 1, state_id: 1, state: 1, email: 1, state: 1, zip: 1, ssn: 1, gender: 1, dob: 1, is_notification_enabled: 1,
                                is_sms_enabled: 1, is_active: 1, version: 1, user_timezone: 1, is_deleted: 1, createdAt: 1, last_name: 1, first_name: 1,
                                appointment_history: 1, family_members: 1
                            }
                        },
                        { $sort: sort },
                        { $skip: skip },
                        { $limit: limit }
                    ]);
                }).then((list) => {
                    if (!list) {
                        return Promise.reject('no-records-found');
                    }
                    if (list == null) list = [];
                    return res.status(200).message('get-user-list-success').returnListSuccess(list, req.query);
                }).catch((err) => {
                    res.status(200).message(err).returnFailure(null);
                });
        }
    });
}

/**
 * function to update user profile
 * @author Megha
 * @return json
 * @createdOn 27-June-2017
 */
var updateProfile = (req, res) => {
    validations.validateUserProfileInfo(req.body, res, (err, profile_info) => { // validation of providerDetails
        User.findOne({ _id: req.params.id }, (err, result) => {
            if (!result) {
                return res.status(400).message('user-not-found').returnFailure(null);
            }
            User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updated_user) => {
                if (updated_user) {
                    return res.status(200).message('profile-update-successfull').returnSuccess(updated_user);
                }
                return res.status(400).message('profile-update-failed').returnFailure(null);
            })
        });
    });
}

/**
 * function to add No2fyme Option
 * @author Megha
 * @return json
 * @createdOn 20-Jul-2017
 */
var no2fyme = (req, res) => {
    req.body.user_id = req.params.id;
    validations.validateNo2fymeInfo(req.body, res, (err) => {
        User.findOne({ _id: ObjectId(req.params.id) })
            .then((user_data) => {
                if (!user_data) {
                    return Promise.reject('user-not-found');
                }
                if (req.body.user_timezone) {
                    user_data.user_timezone = req.body.user_timezone;
                    user_data.save();
                }
                req.body.user_id = req.params.id;
                return checkExistanceOfNo2fymeData(req.body, null);
            }).then((existing_data) => {
                if (existing_data) {
                    return Promise.reject('no2fyme-existing');
                }
                return no2fymePreferences.generateNo2fymePreferenceData(req.body);
            }).then((preference_data) => {
                req.body.preference_data = preference_data;
                let no2fyme = new No2fymePreference(req.body);
                return no2fyme.save();
            }).then((no2fyme_data) => {
                if (!no2fyme_data) {
                    return Promise.reject('error-occured-try-again');
                }
                return No2fymePreference.find({ user_id: req.params.id })
            }).then((no2fyme_options_list) => {
                if (!no2fyme_options_list) {
                    return Promise.reject('no-records-found');
                }
                return res.status(200).message('no2fyme-saved').returnSuccess(no2fyme_options_list);
            }).catch((err) => {
                return res.status(400).message(err).returnFailure(null);
            });

    });
}

var checkExistanceOfNo2fymeData = (request, no2fyme_id) => {
    let query = {
        user_id: request.user_id, from_date: request.from_date, to_date: request.to_date, family_member_id: request.family_member_id,
        provider_id: request.provider_id, service_provider_id: request.service_provider_id, appointment_reason_id: request.appointment_reason_id
    };
    if (no2fyme_id != null) {
        query['_id'] = { $nin: [ObjectId(no2fyme_id)] };
    }
    return No2fymePreference.findOne(query);
}

/**
 * function to Update No2fyme Option
 * @author Megha
 * @return json
 * @createdOn 20-Jul-2017
 */
var updateNo2fyme = (req, res) => {
    req.body.user_id = req.params.id;
    validations.validateNo2fymeInfo(req.body, res, (err) => {
        User.findOne({ _id: req.params.id })
            .then((user_data) => {
                if (!user_data) {
                    return Promise.reject('user-not-found');
                }
                if (req.body.user_timezone) {
                    user_data.user_timezone = req.body.user_timezone;
                    user_data.save();
                }
                return No2fymePreference.findOne({ _id: req.params.no2fyId });
            }).then((no2fyme_found) => {
                if (!no2fyme_found) {
                    return Promise.reject('no2fyme-not-existing');
                }
                req.body.user_id = req.params.id;
                return checkExistanceOfNo2fymeData(req.body, req.params.no2fyId);
            }).then((existing_data) => {
                if (existing_data) {
                    return Promise.reject('no2fyme-existing');
                }
                // delete req.body[_id];
                return no2fymePreferences.generateNo2fymePreferenceData(req.body);
            }).then((preference_data) => {
                req.body.preference_data = preference_data;
                return No2fymePreference.findByIdAndUpdate({ _id: ObjectId(req.params.no2fyId) }, req.body, { new: true });
            }).then((updated_no2fyme_data) => {
                if (!updated_no2fyme_data) {
                    return Promise.reject('error-occured-try-again');
                }
                return No2fymePreference.find({ user_id: req.params.id })
            }).then((no2fyme_options_list) => {
                if (!no2fyme_options_list) {
                    return Promise.reject('no-records-found');
                }
                return res.status(200).message('no2fyme-updated').returnSuccess(no2fyme_options_list);
            }).catch((err) => {
                return res.status(400).message(err).returnFailure(null);
            });
    });
}

var getNo2fymePreferences = (req, res) => {
    No2fymePreference.find({ user_id: req.params.id })
        .then((no2fyme_options_list) => {
            if (!no2fyme_options_list) {
                return Promise.reject('no-records-found');
            }
            return res.status(200).message('no2fyme-list-success').returnSuccess(no2fyme_options_list);
        }).catch((err) => {
            return res.status(200).message(err).returnFailure(null);
        });
}

var deleteNo2fyme = (req, res) => {
    No2fymePreference.findOne({ _id: req.params.no2fyId }).remove()
        .then((data_response) => {
            if (!data_response) {
                return Promise.reject('no2fyme-not-existing');
            }
            return No2fymePreference.find({ user_id: req.params.id })
        }).then((no2fyme_options_list) => {
            if (!no2fyme_options_list) {
                return Promise.reject('no-records-found');
            }
            return res.status(200).message('no2fyme-remove-success').returnSuccess(no2fyme_options_list);
        }).catch((err) => {
            return res.status(400).message(err).returnFailure(null);
        });
}

var getNo2fyme = (req, res) => {
    No2fymePreference.findOne({ _id: req.params.no2fyId })
        .then((data_response) => {
            if (!data_response) {
                return Promise.reject('no2fyme-not-existing');
            }
            return res.status(200).message('no2fyme-success').returnSuccess(data_response);
        }).catch((err) => {
            return res.status(400).message(err).returnFailure(null);
        });
}

var activateInactivate = (req, res) => {
    User.findOne({ _id: req.params.id }, (err, result) => {
        if (!result) {
            return res.status(400).message('user-not-found').returnFailure(null);
        }
        User.findByIdAndUpdate(req.params.id, { $set: { 'is_active': req.body.is_active } }, { new: true }, (err, updated_user) => {
            if (updated_user) {
                // delete updated_user.appointment_history;
                // delete updated_user.family_members;
                // delete updated_user.my_providers;
                if (req.body.is_active == true) {
                    return res.status(200).message('activate-success').returnSuccess(updated_user);
                } else {
                    return res.status(200).message('inactivate-success').returnSuccess(updated_user);
                }
            }
            return res.status(400).message('profile-update-failed').returnFailure(null);
        })
    });
}

/**
 * function to get the Notifications List
 * @author Megha
 * @return json
 * @createdOn 04-Aug-2017
 */
let getNotifications = (req, res) => {
    Notification.find({ user_id: req.params.id })
        .then((notifications_list) => {
            if (!notifications_list) {
                return Promise.reject('no-records-found');
            }
            return res.status(200).message('notification-list-success').returnSuccess(notifications_list);
        }).catch((err) => {
            return res.status(200).message(err).returnFailure(null);
        });
}

/**
 * function to get the details of Notification
 * @author Megha
 * @return json
 * @createdOn 04-Aug-2017
 */
let getNotificationDetail = (req, res) => {
    var notification_data = {};
    Notification.findOne({ user_id: req.params.id, _id: req.params.notificationId }).lean()
        .then((notification_details) => {
            if (!notification_details) {
                return Promise.reject('no-records-found');
            }
            notification_data = notification_details;
            notification_data.notification_id = notification_details._id;
            if (notification_details.appointment_id) {
                return User.findOne({ '_id': req.params.id, 'appointment_history._id': ObjectId(notification_details.appointment_id) }, { 'appointment_history.$': 1 }).lean();
            } else {
                return No2fymePreference.findOne({ '_id': notification_details.no2fyme_preference_id }).lean();
            }
        })
        .then((details) => {
            if (!details) {
                return Promise.reject('no-records-found');
            }
            var booking_detail = {};
            if (notification_data.appointment_id) {
                booking_detail = details.appointment_history[0];
            }
            let output = {};
            output = Object.assign({}, booking_detail, notification_data);
            return res.status(200).message('notification-detail-success').returnSuccess(output);
        })
        .catch((err) => {
            return res.status(200).message(err).returnFailure(null);
        });
}

module.exports = {
    signUp, login, forgotPassword, resetPassword, changePassword, addMyProvider, removeMyProvider, getMyProviders,
    userList, updateProfile, no2fyme, updateNo2fyme, getNo2fymePreferences, deleteNo2fyme, getNo2fyme,
    activateInactivate, getNotifications, getNotificationDetail
};
