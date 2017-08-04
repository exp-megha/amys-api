const _ = require('lodash');
const validator = require('validator');
const validate = require('../../utils/isEmptyValidations');
var changeCase = require('change-case');

/**
 * Validation for Portal Login
 * @return json
 * @updatedOn 07-June-2017 Sachin Kumar
 */
let validateSignUpDetails = (request, response, callback) => {
    let validation_list = [
        [request.first_name, 'first-name-required'],
        [request.last_name, 'last-name-required'],
        [request.phone_number, 'phone-number-required'],
        [request.email, 'email-required'],
        [request.password, 'password-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(400).message(validation_result).returnFailure(null);
    }
    return callback(null);
};

/**
 * Validation for Portal Login
 * @author Rakhi
 * @return json
 * @createdOn 15-May-2017
 * @updatedOn 07-June-2017 Sachin Kumar
 */
let validatePortalLoginDetails = (request, response, callback) => {
    let validation_list = [
        [request.email, 'email-required'],
        [request.password, 'password-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(400).message(validation_result).returnFailure(null);
    }
    if (!validator.isEmail(request.email)) {
        return response.status(400).message('invalid-email').returnFailure(null);
    }
    return callback(null);
};

/**
 * Validation for Forgot Password of web portal
 * @author Rakhi
 * @return json
 * @createdOn 15-May-2017
 * @updatedOn 07-June-2017 Sachin Kumar
 */
let validatePortalForgotPasswordDetails = (request, response) => {
    if (!request.email) {
        return response.status(400).message('email-required').returnFailure(null);
    }
    if (!validator.isEmail(request.email)) {
        return response.status(400).message('invalid-email').returnFailure(null);
    }
};

/**
 * Validation for Reset Password
 * @author Rakhi
 * @return json
 * @createdOn 18-May-2017
 * @updatedOn 07-June-2017 Sachin Kumar
 */
let validatePortalResetPasswordDetails = (request, response, callback) => {
    let validation_list = [
        [request.email, 'email-required'],
        [request.new_password, 'password-required'],
        [request.confirm_password, 'confirm-password-required'],
        [request.reset_token, 'reset-token-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(400).message(validation_result).returnFailure(null);
    }
    if (!validator.isEmail(request.email)) {
        return response.status(400).message('invalid-email').returnFailure(null);
    }
    if (request.new_password != request.confirm_password) {
        return response.status(400).message('password-mismatch').returnFailure(null);
    }
    return callback(null);
};

/**
 * Validation for update Profile information
 * @author binil Baby
 * @return json
 * @createdOn 18-May-2017
 * @updatedOn 07-June-2017 Sachin Kumar
 */
let validateupdateProfileInfo = (request, response, callback) => {
    let validation_list = [
        [request.address, 'address-required'],
        [request.city, 'city-required'],
        [request.state, 'state-required'],
        [request.company, 'company-required'],
        [request.phone_number, 'phone-number-required'],
        [request.email, 'email-required'],
        [request.first_name, 'first-name-required'],
        [request.last_name, 'last-name-required'],
        [request.phone_number_type, 'phone-number-type-required'],
        [request.billing_info, 'billing-info-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(400).message(validation_result).returnFailure(null);
    }
    let profile_info = {};
    let billing_info = {};
    request.billing_info.first_name = changeCase.titleCase(request.billing_info.first_name);
    request.billing_info.last_name = changeCase.titleCase(request.billing_info.last_name);
    billing_info.first_name = (request.billing_info.first_name) ? request.billing_info.first_name : null;
    billing_info.last_name = (request.billing_info.last_name) ? request.billing_info.last_name : null;
    billing_info.email = (request.billing_info.email) ? request.billing_info.email : null;
    billing_info.phone_number = (request.billing_info.phone_number) ? request.billing_info.phone_number : null;
    billing_info.phone_number_type = (request.billing_info.phone_number_type) ? request.billing_info.phone_number_type : null;
    billing_info.address = (request.billing_info.address) ? request.billing_info.address : null;
    billing_info.city = (request.billing_info.city) ? request.billing_info.city : null;
    billing_info.postalcode = (request.billing_info.postal_code) ? request.billing_info.postal_code : null;
    billing_info.title = (request.billing_info.title) ? request.billing_info.title : null;
    billing_info.company = (request.billing_info.company) ? request.billing_info.company : null;
    billing_info.state = (request.billing_info.state) ? request.billing_info.state : null;
    billing_info.country = (request.billing_info.country) ? request.billing_info.country : null;
    billing_info.suite = (request.billing_info.suite) ? request.billing_info.suite : null;
    billing_info.office_fax = (request.billing_info.office_fax) ? request.billing_info.office_fax : null;
    request.first_name = changeCase.titleCase(request.first_name);
    request.last_name = changeCase.titleCase(request.last_name);
    profile_info = {
        'title': request.title,
        'email': request.email,
        'first_name': request.first_name,
        'last_name': request.last_name,
        'phone_number': request.phone_number,
        'phone_number_type': request.phone_number_type,
        'image_url': (request.image_url) ? request.image_url : null,
        'address': request.address,
        'city': request.city,
        'country': request.country,
        'postal_code': (request.postal_code) ? request.postal_code : null,
        'title': request.title,
        'company': request.company,
        'state': request.state,
        'suite': request.suite,
        'office_fax': (request.office_fax) ? request.office_fax : null,
        'same_as_above': request.same_as_above,
        'is_profile_completed': request.is_profile_completed,
        'billing_info': billing_info
    };
    return callback(null, profile_info);
};

/**
 * Validation for Change Password
 * @author Sachin Kumar
 * @return json
 * @createdOn 23-May-2017
 * @updatedOn 07-June-2017
 */
let validateChangePassword = (request, response, callback) => {
    let validation_list = [
        [request.password, 'current-password-required'],
        [request.new_password, 'new-password-required'],
        [request.confirm_password, 'confirm-password-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(400).message(validation_result).returnFailure(null);
    }
    return callback(null);
};

/**
 * Validation for Save card details
 * @author binil baby
 * @return json
 * @createdOn 31-May-2017
 * @updatedOn 12-June-2017 Sachin Kumar
 */
let vaidatesavecardDetails = (request, response, callback) => {
    let validation_list = [
        [request.card_type, 'select-card-type'],
        [request.card_number, 'input-card-number'],
        [request.name_on_card, 'name-is-required'],
        [request.expiry_month, 'expiry-month-required'],
        [request.expiry_year, 'expiry-year-required'],
        [request.cvv_number, 'cvv-number-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(400).message(validation_result).returnFailure(null);
    }
    let card_details = {};
    card_details.card_type = request.card_type;
    card_details.card_number = request.card_number;
    card_details.name_on_card = request.name_on_card;
    card_details.expiry_month = request.expiry_month;
    card_details.expiry_year = request.expiry_year;
    card_details.cvv_number = request.cvv_number;
    return callback(null, card_details);
}

/**
 * Validation for service provider list
 * @author Sachin Kumar
 * @createdOn 27-June-2017
 */
let vaidateServiceProviderList = (request, response, callback) => {
    if (!request.type) {
        return response.status(400).message('type-required').returnFailure(null);
    }
    return callback(null);
}

module.exports = {
    validatePortalLoginDetails,
    validatePortalForgotPasswordDetails,
    validatePortalResetPasswordDetails,
    validateSignUpDetails,
    validateupdateProfileInfo,
    validateChangePassword,
    vaidatesavecardDetails,
    vaidateServiceProviderList
};
