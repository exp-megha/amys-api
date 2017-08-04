const _ = require('lodash');
const validator = require('validator');
const validate = require('../../utils/isEmptyValidations');
var changeCase = require('change-case');
/**
 * Validation for Near By Provider List
 * @author Rakhi
 * @return json
 * @createdOn 10-May-2017
 * @updatedOn 07-June-2017 Sachin Kumar
 */
let validateProviderListDetails = (request, response, callback) => {
    let validation_list = [
        [request.longitude,'longitude-required'],
        [request.latitude,'latitude-required'],
        [request.selected_date,'date-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(400).message(validation_result).returnFailure(null); 
    }
    return callback(null);
};

var validateSignUpDetails = (request, response,callback) => {
    if (!request.title) {
        return response.status(400).message('title-required').returnFailure(null);
    } else if (!request.first_name) {
        return response.status(400).message('first-name-required').returnFailure(null);
    } else if (!request.last_name) {
        return response.status(400).message('last-name-required').returnFailure(null);
    } else if (!request.phone_number) {
        return response.status(400).message('phone-number-required').returnFailure(null);
    } else if (!request.email) {
        return response.status(400).message('email-required').returnFailure(null);
    }  else if (!request.password) {
        return response.status(400).message('password-required').returnFailure(null);
    }else if (!request.phone_number_type) {
        return response.status(400).message('phone-number-type-required').returnFailure(null);
    }
    else return callback(null);

};

/**
 * Validation for Portal Login
 * @author Rakhi
 * @return json
 * @createdOn 15-May-2017
 * @updatedOn 15-May-2017
 */
var validatePortalLoginDetails = (request, response) => {
  if (!request.email) {
      return response.status(400).message('email-required').returnFailure(null);
  }else {
    if(!validator.isEmail(request.email)){
      return response.status(400).message('invalid-email').returnFailure(null);
    }
  }
  if (!request.password) {
      return response.status(400).message('password-required').returnFailure(null);
  }
};

/**
 * Validation for Forgot Password of web portal
 * @author Rakhi
 * @return json
 * @createdOn 15-May-2017
 * @updatedOn 15-May-2017
 */
var validatePortalForgotPasswordDetails = (request, response) => {
  if (!request.email) {
      return response.status(400).message('email-required').returnFailure(null);
  }else {
    if(!validator.isEmail(request.email)){
      return response.status(400).message('invalid-email').returnFailure(null);
    }
  }
};

/**
 * Validation for Reset Password
 * @author Rakhi
 * @return json
 * @createdOn 15-May-2017
 * @updatedOn 15-May-2017
 */
var validatePortalResetPasswordDetails = (request, response) => {
    if (!request.email) {
        return response.status(400).message('email-required').returnFailure(null);
    }else {
      if(!validator.isEmail(request.email)){
        return response.status(400).message('invalid-email').returnFailure(null);
      }
    }
    if (!request.new_password) {
        return response.status(400).message('password-required').returnFailure(null);
    }
    if (!request.confirm_password) {
        return response.status(400).message('confirm-password-required').returnFailure(null);
    }
    if (request.new_password != request.confirm_password) {
        return response.status(400).message('password-mismatch').returnFailure(null);
    }
};

/**
 * Validation for Add Provider Details
 * @author binil Baby
 * @return json
 * @createdOn 19-May-2017
 * @updatedOn 07-June-2017 Sachin Kumar
 */
 let validateAddProviderDetails = (request, response,callback) => {
    let validation_list = [
        [request.specialisation_id,'specialisation-id-required'],
        [request.first_name,'first-name-required'],
        [request.last_name,'last-name-required'],
        [request.phone_number,'phone-number-required'],
        [request.address,'address-required'],
        [request.city,'city-required'],
        [request.state,'state-required'],
        [request.company,'company-required'],
        [request.specialisation,'specialisation-required'],
        [request.email,'email-required'],
        [request.service_provider_id,'service-provider-id-required'],
        [request.phone_number_type,'phone-number-type-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(400).message(validation_result).returnFailure(null); 
    }
    if (request.phone_number.length > 15 || request.phone_number.length < 10) {
        return response.status(400).message('invalid-phone-number').returnFailure(null);
    }
    return callback(null);
 };

 /**
  * Validation for update Provider information
  * @author binil Baby
  * @return json
  * @createdOn 19-May-2017
  * @updatedOn 29-June-2017 Sachin Kumar
  */
 let validateUpdateProviderInfo = (request, response, callback) => {
    let validation_list = [
        [request.first_name,'first-name-required'],
        [request.last_name,'last-name-required'],
        [request.phone_number,'phone-number-required'],
        [request.address,'address-required'],
        [request.city,'city-required'],
        [request.state,'state-required'],
        [request.company,'company-required'],
        [request.email,'email-required'],
        [request.phone_number_type,'phone-number-type-required'],
        [request.configuration,'configuration-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(200).message(validation_result).returnFailure(null); 
    }
    let profile_info = {};
    let configuration = {};
    console.log("request.configuration.get_amount_during_booking: ", request.configuration.get_amount_during_booking);
    configuration = {
        'premium_appointment_fee': ( request.configuration.premium_appointment_fee) ? request.configuration.premium_appointment_fee : null,
        'get_amount_during_booking': (request.configuration.get_amount_during_booking == false) ? false : true,
        'maximum_appointment_number': (request.configuration.maximum_appointment_number) ? request.configuration.maximum_appointment_number : null,
        'maximum_appointment_span': (request.configuration.maximum_appointment_span) ? request.configuration.maximum_appointment_span : null,
        'default_calender': (request.configuration.default_calender) ? request.configuration.default_calender : null,
        'send_notification_on_booking_email': (request.configuration.send_notification_on_booking_email == false) ? false : true,
        'send_notification_on_booking_text': (request.configuration.send_notification_on_booking_text == false) ? false : true,
        'send_notification_on_cancelling_email': (request.configuration.send_notification_on_cancelling_email == false) ? false : true,
        'send_notification_on_cancelling_text': (request.configuration.send_notification_on_cancelling_text == false) ? false : true,
        'reminder_preference_email': (request.configuration.reminder_preference_email == false) ? false : false,
        'reminder_preference_text': (request.configuration.reminder_preference_text == false) ? false : false,
        'calender_start_time': (request.configuration.calender_start_time) ? request.configuration.calender_start_time : null,
        'calender_end_time': (request.configuration.calender_end_time) ? request.configuration.calender_end_time :null,
        'default_booking_slot_size': (request.configuration.default_booking_slot_size) ? request.configuration.default_booking_slot_size : null
    };
    var image_url_array = [];
    request.first_name = changeCase.titleCase(request.first_name)
    request.last_name = changeCase.titleCase(request.last_name)
    profile_info = {
        'email': request.email,
        'first_name': request.first_name,
        'last_name': request.last_name,
        'phone_number': request.phone_number,
        'phone_number_type': request.phone_number_type,
        'image_url': request.image_url,
        'image_url_array': (request.image_url_array) ? request.image_url_array : image_url_array,
        'address': request.address,
        'city': request.city,
        'state':( request.state) ?  request.state : null,
        'country':( request.country) ?  request.country : null,
        'postal_code': (request.postal_code) ? request.postal_code :null,
        'title': request.title,
        'company': request.company,
        'specialisation_id': request.specialisation_id,
        'specialisation': request.specialisation,
        'configuration': configuration
    };
    return callback(null, profile_info);
};

module.exports = {
    validateProviderListDetails, validatePortalLoginDetails,
    validatePortalForgotPasswordDetails, validatePortalResetPasswordDetails,
    validateSignUpDetails, validateAddProviderDetails, validateUpdateProviderInfo
};
