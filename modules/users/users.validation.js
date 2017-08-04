const _ = require('lodash');
const validator = require('validator');
const validate = require('../../utils/isEmptyValidations');

let validation_result;

/**
 * Validation for Sign Up
 * @author Rakhi
 * @return json
 * @createdOn 08-May-2017
 * @updatedOn 07-June-2017 Sachin Kumar
 */
let validateSignUpDetails = (request, response, callback) => {
    if (!request.type_of_access) {
        return response.status(400).message('type-of-access-required').returnFailure(null);
    }
    if (request.type_of_access == "normal") {
        let validation_list = [
            [request.email, 'email-required'],
            [request.password, 'password-required'],
            [request.confirm_password, 'confirm-password-required'],
            [request.first_name, 'first-name-required'],
            [request.last_name, 'last-name-required'],
            [request.phone_number, 'phone-number-required']
        ];
        let validation_result = validate.isEmpty(validation_list);
        if (validation_result) {
            return response.status(400).message(validation_result).returnFailure(null);
        }
        if (!validator.isEmail(request.email)) {
            return response.status(400).message('invalid-email').returnFailure(null);
        }
        if (request.password != request.confirm_password) {
            return response.status(400).message('password-mismatch').returnFailure(null);
        }
    } else {
        let validation_list = [
            [request.facebook_google_id, 'facebook/google-id-required'],
            [request.first_name, 'first-name-required'],
            [request.last_name, 'last-name-required']
        ];
        let validation_result = validate.isEmpty(validation_list);
        if (validation_result) {
            return response.status(400).message(validation_result).returnFailure(null);
        }
    }
    return callback(null);
};

/**
 * Validation for Login
 * @author Rakhi
 * @return json
 * @createdOn 09-May-2017
 * @updatedOn 07-June-2017 Sachin Kumar
 */
let validateLoginDetails = (request, response, callback) => {
    if (!request.type_of_access) {
        return response.status(400).message('type-of-access-required').returnFailure(null);
    }
    if (request.type_of_access == "normal") {
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
    } else {
        let validation_list = [
            [request.facebook_google_id, 'facebook/google-id-required'],
            [request.first_name, 'first-name-required'],
            [request.last_name, 'last-name-required']
        ];
        let validation_result = validate.isEmpty(validation_list);
        if (validation_result) {
            return response.status(400).message(validation_result).returnFailure(null);
        }
    }
    return callback(null);
};

/**
 * Validation for Forgot Password
 * @author Rakhi
 * @return json
 * @createdOn 09-May-2017
 * @updatedOn 07-June-2017 Sachin Kumar
 */
let validateForgotPasswordDetails = (request, response, callback) => {
    if (!request.email) {
        return response.status(400).message('email-required').returnFailure(null);
    }
    if (!validator.isEmail(request.email)) {
        return response.status(400).message('invalid-email').returnFailure(null);
    }
    return callback(null);
};

/**
 * Validation for Sign Up
 * @author Rakhi
 * @return json
 * @createdOn 08-May-2017
 * @updatedOn 12-June-2017 Sachin Kumar
 */
let validateResetPasswordDetails = (request, response, callback) => {
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
 * Validation for Change Password
 * @author Sachin Kumar
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
 * Validation for add to my provider list
 * @author Sachin Kumar
 * @createdOn 14-June-2017
 */
let validateAddMyProvider = (request, response, callback) => {
    if (!request.provider_id) {
        return response.status(400).message('provider-id-required').returnFailure(null);
    }
    return callback(null);
};

/**
 * Validation for user list
 * @author Sachin Kumar
 * @createdOn 27-June-2017
 */
let vaidateUserList = (request, response, callback) => {
    if (!request.type) {
        return response.status(400).message('type-required').returnFailure(null);
    }
    return callback(null);
}

/**
 * Validation for Update Profile
 * @author Megha
 * @return json
 * @createdOn 27-June-2017
 */
let validateUserProfileInfo = (request, response, callback) => {
    let validation_list = [
        [request.email, 'email-required'],
        [request.first_name, 'first-name-required'],
        [request.last_name, 'last-name-required'],
        [request.phone_number, 'phone-number-required']
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
 * Validation for No2fyme option info
 * @author Megha
 * @return json
 * @createdOn 20-July-2017
 */
let validateNo2fymeInfo = (request, response, callback) => {
    let validation_list = [
        [request.user_id, 'invalid-user'],
        [request.from_date, 'from-date-required'],
        [request.to_date, 'to-date-required'],
        [request.family_member_id, 'family-mebmer-id-required'],
        [request.provider_id, 'provider-id-required'],
        [request.service_provider_id, 'service-provider-id-required'],
        [request.appointment_reason_id, 'appointment-reason-id-required'],
        [request.appointment_reason, 'appointment-reason-required'],
        [request.appointment_duration, 'appointment-duration-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(400).message(validation_result).returnFailure(null);
    }

    return callback(null);
};

module.exports = {
    validateSignUpDetails, validateLoginDetails, validateForgotPasswordDetails, validateUserProfileInfo,
    validateResetPasswordDetails, validateChangePassword, validateAddMyProvider, vaidateUserList, validateNo2fymeInfo
};
