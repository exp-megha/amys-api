const _ = require('lodash');
const bcrypt = require('bcryptjs');
var { Serviceprovider } = require('./../../models/serviceprovider');
var validations = require('./serviceproviders.validation');
var RandomNumber = require('random-number');
var EmailService = require('../../utils/email/emailService');
var constants = require('./../../constants');
var ObjectId = require('mongodb').ObjectId;
var changeCase = require('change-case');
var searchAndFilters = require('./../../utils/searchAndFilters');
/**
 * function to invoke the sign up functionality
 * @author Prem Raj R
 * @return json
 * @createdOn 15-May-2017
 * @updatedOn 09-June-2017
 */
let signUp = (req, res) => {
    validations.validateSignUpDetails(req.body, res, (err) => {
        req.body.first_name = changeCase.titleCase(req.body.first_name);
        req.body.last_name = changeCase.titleCase(req.body.last_name);
        let findExistanceByVariables = { email: req.body.email.toLowerCase() };
        Serviceprovider.findOne(findExistanceByVariables)
            .then((provider) => {
                return saveProvider(provider, req);
            })
            .then((provider_data) => {
                return signUpSuccess(provider_data, req, res);
            }).catch((e) => res.status(400).message(e).returnFailure(null));
    });
}

/**
 * function to save service provider
 * @author Megha
 * @return json
 * @createdOn 09-June-2017
 */
let saveProvider = (provider_data, req) => {
    if (provider_data) {
        return Promise.reject('email-already-in-use');
    }
    if (req.body.email) {
        req.body.email = req.body.email.toLowerCase();
    }
    let provider = new Serviceprovider(req.body);
    return provider.save();
}

/**
 * function to process Sign Up
 * @author Sachin Kumar
 * @return json
 * @createdOn 09-June-2017
 */
let signUpSuccess = (provider_data, req, res) => {
    let i18n = req.app.get('i18n');
    if (!provider_data) {
        return Promise.reject('sign-up-failed');
    }
    if (provider_data.email) {
        sendSignUpMail(req.body, i18n, provider_data._id);
        provider_data.generateAuthToken().then((token) => {
            if (token) {
                return res.status(200).message('sign-up-success').returnSuccess(provider_data);
            } else {
                return Promise.reject('sign-up-failed');
            }
        });
    }
}

/**
 * function to send signUp email for service provider
 * @author Sachin Kumar
 * @return json
 * @createdOn 09-June-2017
 */
let sendSignUpMail = (request, i18n, provider_id) => {
    let verification_url = constants.SERVICE_PROVIDER_VERIFICATION_URL + '/' + provider_id + '?platform=' + request.platform;
    let signUpMailOptions = {
        req: request,
        email: request.email.toLowerCase(),
        welcome_name: i18n.t('sign-up-welcome-text'),
        signup_content_top: i18n.t('sign-up-content-top'),
        signup_content_bottom1: i18n.t('service-provider-sign-up-content-top2'),
        signup_content_bottom2: i18n.t('service-provider-sign-up-content-top3'),
        signup_content_bottom3: i18n.t('service-provider-sign-up-content-top4'),
        signup_verification_content: i18n.t('service-provider-sign-up-verification-content'),
        provider_signup_verification_url: verification_url,
        logo_url: constants.LOGO_URL,
        subject: i18n.t('sign-up-welcome-text'),
        footer1: i18n.t('footer-1'),
        footer3: "",
        text: 'Sign Up'
    };
    EmailService.SendAccountCreationMailToProvider(signUpMailOptions, function (err, response) {
    });
}

/**
 * function to invoke the login functionality of web portal
 * @author Rakhi M R
 * @return json
 * @createdOn 15-May-2017
 */
var login = (req, res) => {
    validations.validatePortalLoginDetails(req.body, res, (err) => {
        var findExistanceByVariables = {};
        findExistanceByVariables = { email: req.body.email.toLowerCase(), password: req.body.password };
        Serviceprovider.findByCredentials(findExistanceByVariables).then((provider) => {
            if (!provider) {
                return Promise.reject('incorrect-login-credentials');
            }
            if (provider.is_active == false) {
                return Promise.reject('verify-your-account');
            }
            provider.generateAuthToken().then((token) => {
                if (token) {
                    return res.status(200).message('login-successful').returnSuccess(provider);
                } else {
                    return Promise.reject('login-failed');
                }
            })
        }).catch((e) => res.status(401).message(e).returnFailure(null));
    });
}

/**
 * function to invoke the forgot password functionality of portal
 * @author Rakhi M R
 * @return json
 * @createdOn 09-May-2017
 * @updatedOn 11-June-2017 Sachin Kumar
 */
let forgotPassword = (req, res) => {
    validations.validatePortalForgotPasswordDetails(req.body, res);
    let reset_url = constants.SERVICE_PROVIDER_RESET_PWD_URL + '?platform=' + req.body.platform;
    Serviceprovider.findOne({ email: req.body.email.toLowerCase() }).then((provider) => {
        if (!provider) {
            return Promise.reject('invalid-user-account');
        } else {
            let reset_token = generateResetToken();
            /*Email functionality*/
            sendForgotPasswordMail(provider, req, reset_url, reset_token);
            provider['reset_token'] = reset_token;
            provider.save().then((provider_response) => {
                if (provider_response) {
                    return res.status(200).message('reset-token-sent').returnSuccess(provider_response);
                }
            });
        }
    }).catch((e) => res.status(400).message(e).returnFailure(null));
};

/**
 * function to send Forgot Pwd email for service provider
 * @author Sachin Kumar
 * @return json
 * @createdOn 09-June-2017
 */
var sendForgotPasswordMail = (provider, req, reset_url, reset_token) => {
    let i18n = req.app.get('i18n');
    let forgotPasswordMailContent = {
        req: req,
        email: provider.email.toLowerCase(),
        welcome_name: i18n.t('welcome-text') + " " + (provider.first_name) ? provider.first_name : '',
        forgot_content: i18n.t('forgot-pwd-text'),
        reset_token_content: i18n.t('forgot-pwd-content') + ': ' + reset_token,
        reset_password_content: i18n.t('reset-password-content'),
        reset_password_url: reset_url,
        logo_url: constants.LOGO_URL,
        subject: i18n.t('forgot-pwd-subject'),
        footer1: i18n.t('footer-1'),
        footer3: " ",
        text: 'Forgot Password'
    };
    EmailService.SendForgotPasswordMailToServiceProvider(forgotPasswordMailContent, function (err, response) {
    });
}

/**
 * Function to generate reset token
 * @author Rakhi
 * @return json
 * @createdOn 15-May-2017
 */
var generateResetToken = () => {
    var options = { min: 10000, max: 99999, integer: true };
    return RandomNumber(options);
}

/**
 * function to invoke the reset password functionality of portal
 * @author Rakhi M R
 * @return json
 * @createdOn 15-May-2017
 * @updatedOn 12-June-2017 Sachin Kumar
 */
let resetPassword = (req, res) => {
    validations.validatePortalResetPasswordDetails(req.body, res, (err) => {
        Serviceprovider.findOne({ email: req.body.email.toLowerCase() }).then((provider) => {
            if (!provider) {
                return Promise.reject('invalid-user-account');
            }
            if (provider.reset_token != req.body.reset_token) {
                return Promise.reject('invalid-reset-token');
            }
            let name = (provider.first_name) ? provider.first_name : '';
            /*Email functionality*/
            sendResetPasswordMail(req, name, provider.email);
            provider['password'] = req.body.new_password;
            provider['reset_token'] = null;
            provider.save();
            return res.status(200).message('reset-password-success').returnSuccess(provider);
        }).catch((e) => res.status(400).message(e).returnFailure(null));
    });
};

/**
 * function to send Forgot Pwd email for service provider
 * @author Sachin Kumar
 * @return json
 * @createdOn 09-June-2017
 */
var sendResetPasswordMail = (req, name, email) => {
    let i18n = req.app.get('i18n');
    let resetPasswordMailOptions = {
        req: req,
        email: email.toLowerCase(),
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
 * function to invoke the sign up verification functionality of portal
 * @author Rakhi M R
 * @return json
 * @createdOn 17-May-2017
 */
var signUpVerification = (req, res) => {
    Serviceprovider.findOne({ _id: ObjectId(req.params.id) }).then((service_provider) => {
        if (!service_provider) {
            return Promise.reject('provider-not-found');
        } else {
            service_provider['is_active'] = true;
            service_provider.save().then((service_provider_response) => {
                if (!service_provider_response) {
                    return Promise.reject('account-verification-failed');
                }
                return res.status(200).message('account-verification-completed').returnSuccess(service_provider);
            });
        }
    }).catch((e) => res.status(401).message(e).returnFailure(null));
};

/**
 * function to update Profile information
 * @author binil baby
 * @return json
 * @createdOn 18-May-2017
 * @updatedOn 09-June-2017 Sachin Kumar
 */
let updateProfileInfo = (req, res) => {
    validations.validateupdateProfileInfo(req.body, res, (err, profile_info) => {
        req.body.first_name = changeCase.titleCase(req.body.first_name);
        req.body.last_name = changeCase.titleCase(req.body.last_name);
        req.body.company = changeCase.titleCase(req.body.company);
        Serviceprovider.find({ email: req.body.email.toLowerCase(), _id: { $nin: [ObjectId(req.params.id)] } })
            .then((provider_found) => {
                if (provider_found.length) {
                    return Promise.reject('email-already-in-use');
                }
                if (provider_found.is_profile_completed == true) {
                    profile_info.is_profile_completed = true;
                }
                return Serviceprovider.findByIdAndUpdate({ _id: req.params.id }, profile_info, { new: true });
            })
            .then((result) => {
                if (!result) {
                    return Promise.reject('profile-update-failed');
                }
                return Serviceprovider.findOne({ _id: req.params.id });
            })
            .then((data) => {
                if (req.body.step == 2) {
                    return res.status(200).message('billing-info-updated').returnSuccess(data);
                }
                return res.status(200).message('profile-update-successfull').returnSuccess(data);
            }).catch((e) => res.status(400).message(e).returnFailure(null));
    });
};

/**
 * function to invoke the get Service Provider details functionality
 * @author Megha
 * @return json
 * @createdOn 19-May-2017
 */
var getDetails = (req, res) => {
    Serviceprovider.findOne({ _id: ObjectId(req.params.id) }).then((provider) => {
        if (!provider) {
            return res.status(400).message('provider-not-found').returnFailure(null);
        }
        return res.status(200).message('provider_retrieved').returnSuccess(provider);
    }).catch((e) => res.status(400).message(e).returnFailure(null));
}

/**
 * function to change the password for Service Provider
 * @author Sachin Kumar
 * @return json
 * @createdOn 23-May-2017
 */
var changePassword = (req, res) => {
    validations.validateChangePassword(req.body, res, (err) => {
        Serviceprovider.findOne({ _id: ObjectId(req.params.id) }).then((provider) => {
            bcrypt.compare(req.body.password, provider.password).then((result) => {
                if (!result) {
                    return Promise.reject('current-password-mismatch');
                }
                if (req.body.new_password != req.body.confirm_password) {
                    return Promise.reject('confirm-password-mismatch');
                }
                provider['password'] = req.body.new_password;
                provider.save().then((provider_response) => {
                    if (provider_response) {
                        return res.status(200).message('password-change-successful').returnSuccess(null);
                    }
                    return Promise.reject('password-change-failure');
                });
            });
        }).catch((e) => res.status(400).message(e).returnFailure(null));
    });
};

/**
 * function to save card details
 * @author binil baby
 * @return json
 * @createdOn 31-May-2017
 * @updatedOn 12-June-2017 Sachin Kumar
 */
let savecardDetails = (req, res) => {
    validations.vaidatesavecardDetails(req.body, res, (err, card_details) => {
        Serviceprovider.findByIdAndUpdate({ _id: ObjectId(req.params.id) }, { 'card_details': card_details }, { new: true }, (err, result) => {
            if (!result) {
                return res.status(400).message('card-details-save-failed').returnFailure(null);
            }
            return res.status(200).message('card-details-saved').returnSuccess(null);
        });
    });
}

/**
 * function to list service providers
 * @author Sachin Kumar
 * @return json
 * @createdOn 26-June-2017
 */
let serviceProviderList = (req, res) => {
    validations.vaidateServiceProviderList(req.query, res, (err) => {
        if (req.query.type == "dropdown") {
            Serviceprovider.find({ user_role: { $ne: "superAdmin" } }).sort({ last_name: 1 }).select({ 'id': 1, 'first_name': 1, 'last_name': 1 }).then((list) => {
                if (!list) {
                    return Promise.reject('no-records-found');
                }
                return res.status(200).message('get-service-provider-list-success').returnSuccess(list);
            }).catch((err) => {
                res.status(200).message(err).returnFailure(null);
            });
        } else {
            let limit = constants.WEB_PAGE_LIMIT;
            let skip = 0;
            if (req.query.page) {
                let page = parseInt(req.query.page);
                skip = page > 0 ? ((page - 1) * limit) : 0;
            }
            var sort_by_field = req.query.sort_by_field || "last_name";
            var sort_order = req.query.sort_order || "asc";
            if (sort_order == 'desc') {
                sort_by_field = '-' + sort_by_field;
            }
            console.log(sort_by_field);
            let search_query = {};
            Promise.all([]).then(() => {
                return searchAndFilters.serviceProviderSearchQuery(req.query);
            })
                .then((generated_query) => {
                    // console.log(generated_query);
                    search_query = generated_query;
                    return Serviceprovider.count(search_query);
                })
                .then((total_count) => {
                    if (!total_count) {
                        return Promise.reject('no-records-found');
                    }
                    req.query.total_count = total_count;
                    return Serviceprovider.find(search_query).sort(sort_by_field).limit(limit).skip(skip);
                }).then((list) => {
                    if (!list) {
                        return Promise.reject('no-records-found');
                    }
                    return res.status(200).message('get-service-provider-list-success').returnListSuccess(list, req.query);
                }).catch((err) => {
                    res.status(200).message(err).returnFailure(null);
                });
        }
    });
}

module.exports = {
    login, forgotPassword, resetPassword, signUp, updateProfileInfo, getDetails,
    signUpVerification, changePassword, savecardDetails, serviceProviderList
};
