const _= require('lodash');
const validator = require('validator');
const validate = require('../../utils/isEmptyValidations');

/**
 * Validation for Add Family members
 * @author binil baby
 * @return json
 * @createdOn 15-May-2017
 * @updatedOn 15-June-2017
 */
 let validateaddFamilyMembers = (request, response, callback) => {
     let validation_list = [
        [request.relation,'relation-required'],
        [request.first_name,'first-name-required'],
        [request.last_name,'last-name-required'],
        [request.gender,'gender-required'],
        [request.dob,'date-of-birth-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(400).message(validation_result).returnFailure(null); 
    }
    return callback(null);
};

/**
 * Validation for Edit Family Member
 * @author Sachin Kumar
 * @return json
 * @createdOn 15-June-2017
 */
let validateEditFamilyMember = (request, response, callback) => {
    let validation_list = [
        [request.relation,'relation-required'],
        [request.first_name,'first-name-required'],
        [request.last_name,'last-name-required'],
        [request.gender,'gender-required'],
        [request.dob,'date-of-birth-required']
    ];
    let validation_result = validate.isEmpty(validation_list);
    if (validation_result) {
        return response.status(400).message(validation_result).returnFailure(null); 
    }
    return callback(null);
};

module.exports = { validateaddFamilyMembers, validateEditFamilyMember };
