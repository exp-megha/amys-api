const _ = require('lodash');
const { User } = require('./../../models/user');
const validations = require('./family.validation');
const ObjectId = require('mongodb').ObjectId;
var changeCase = require('change-case');
let reqBody = {},
	responseBody = {};

/**
 * function  to add family members
 * @author Binil Baby
 * @return json
 * @createdOn 11-May-2017
 */
let addFamilyMembers = (req, res) => {
	validations.validateaddFamilyMembers(req.body, res, (err) => {
		req.body.first_name = changeCase.titleCase(req.body.first_name);
		req.body.last_name = changeCase.titleCase(req.body.last_name);
		User.findOne({ _id: req.params.id }).then((result) => {
			if (!result) {
				return Promise.reject('family-member-not-added');
			}
			result.family_members.push(req.body);
			return result.save();
		}).then((save_response) => {
			if (!save_response) {
				return Promise.reject('family-member-not-added');
			}
			return res.status(200).message('family-member-added').returnSuccess(save_response);
		}).catch((err) => {
			res.status(400).message(err).returnFailure(null)
		});
	});
}

/**
*function to list the family members
*@author Binil Baby
*@return json
*@createdOn 15-May-2017
*/
let familyMembersList = (req, res) => {
	User.aggregate([
		{ $unwind: "$family_members" },
		{ $match: { _id: ObjectId(req.params.id) } },
		{
			$project: {
				family_name: { $concat: ["$family_members.last_name", " ", "$family_members.first_name"] }, _id: "$family_members._id",
				dob: "$family_members.dob", gender: "$family_members.gender", relation: "$family_members.relation", last_name: "$family_members.last_name",
				first_name: "$family_members.first_name"
			}
		},
		{ $sort: { "last_name": 1 } }
	], function (err, result) {
		req.query.total_count = result.length;
		if (err) {
			return res.status(200).message('no-records-found').returnFailure(null);
		}
		return res.status(200).message('family-member-list').returnListSuccess(result, req.query);
	});
};

/**
*function to delete Familymebmers
*@author Binil Baby
*@return json
*@createdOn 16-May-2017
*/
let removeFamilyMember = (req, res) => {
	User.update({ '_id': req.params.id }, { $pull: { 'family_members': { '_id': req.params.memberId } } }, { new: true }, (err, userInfo) => {
		if (err) {
			return res.status(400).message('no-records-found').returnFailure(null);
		}
		return res.status(200).message('family-member-removed').returnSuccess(null);
	});
};

/**
*function to edit the family member details
*@author Sachin Kumar
*@return json
*@createdOn 15-June-2017
*/
let editFamilyMember = (req, res) => {
	validations.validateEditFamilyMember(req.body, res, (err) => {
		User.findOne({ '_id': req.params.id, 'family_members._id': req.params.memberId }, { 'family_members.$': 1 })
			.then((data) => {
				if (!data) {
					return Promise.reject('no-member');
				}
				return User.update({ 'family_members._id': ObjectId(req.params.memberId) },
					{
						'$set': {
							'family_members.$.relation': req.body.relation,
							'family_members.$.first_name': changeCase.titleCase(req.body.first_name),
							'family_members.$.last_name': changeCase.titleCase(req.body.last_name),
							'family_members.$.gender': req.body.gender,
							'family_members.$.dob': req.body.dob,
						}
					}).exec();
			})
			.then((update_status) => {
				if (!update_status) {
					return Promise.reject('family-member-not-updated');
				}
				return res.status(200).message('family-member-updated').returnSuccess(null);
			}).catch((e) => res.status(400).message(e).returnFailure(null));
	});
};

module.exports = { addFamilyMembers, familyMembersList, removeFamilyMember, editFamilyMember };