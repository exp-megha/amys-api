const _ = require('lodash');
var { Provider } = require('./../../models/provider');
var { User } = require('./../../models/user');
const geodist = require('geodist');
var { Serviceprovider } = require('./../../models/serviceprovider');
var { ApplicationSetting } = require('./../../models/applicationsetting');
var validations = require('./provider.validation');
var searchAndFilters = require('./../../utils/searchAndFilters');
var constants = require('./../../constants');
var Q = require('q');
var async = require('async');
var ObjectId = require('mongodb').ObjectId;
var timeslots = require('./../../utils/timeSlots');
var changeCase = require('change-case');
var secrets = require("secrets-js");

/**
 * function to invoke the get Provider details functionality
 * @author Megha
 * @return json
 * @createdOn 09-May-2017
 */
let getProviderDetails = (req, res) => {
    let query;
    if (req.platform == 'webportal') {
        query = { 'service_provider_id': ObjectId(req.params.id), '_id': req.params.providerId };
    } else {
        query = { '_id': req.params.providerId };
    }
    Provider.findOne(query).lean().then((provider) => {
        if (!provider) {
            return Promise.reject('provider-not-found');
        }
        let result = provider;
        if (req.query.selected_date && req.platform != "webportal") {
            var appointment_time = (req.query.appointment_time) ? req.query.appointment_time : null;
            timeslots.getUpdatedSchedule(provider._id, "D", req.query.selected_date, (schedule_updates) => {
                let time_slots = timeslots.getTimeslots(req.query.selected_date, provider, req.platform, "D", schedule_updates, 'providerDetails', appointment_time);
                result.timeslots = time_slots;
                delete result.schedule_configuration;
                return res.status(200).message('provider_retrieved').returnSuccess(result);
            })
        } else {
            return res.status(200).message('provider_retrieved').returnSuccess(result);
        }
    }).catch((e) => res.status(400).message(e).returnFailure(null));
}

/**
 * function to invoke the near by list functionality
 * @author Rakhi M R
 * @updatedby Megha S
 * @return json
 * @createdOn 16-May-2017
 */
var nearByProvidersList = (req, res) => {
    validations.validateProviderListDetails(req.query, res, (err) => {
        var limit = 100;    //req.query.limit || constants.PAGE_LIMIT;
        var aggregate = '';
        if (req.platform == "webportal") {
            limit = req.query.limit || constants.WEB_PAGE_LIMIT;
        }
        var page = (req.query.page) ? parseInt(req.query.page) : 0;
        var skip = page > 0 ? ((page - 1) * limit) : 0;
        var total_count = 0;
        ApplicationSetting.findOne({}).select('nearby_radius -_id')
            .then((app_setting) => {
                return searchAndFilters.generateGeoNearquery(req.query, app_setting);
            })
            .then((query) => {
                console.log("query: ", query);
                aggregate = query;
                return Provider.aggregate(aggregate);
            })
            .then((total_count_result) => {
                if (total_count_result.length <= 0) {
                    return Promise.reject('near-by-provider-list-failed');
                }
                req.query.total_count = total_count_result.length;
                if (skip != null && (req.platform != "ios" || req.platform != "android")) {
                    aggregate.push({ $skip: skip });
                    aggregate.push({ $limit: limit });
                }
                return Provider.aggregate(aggregate);
            })
            .then((result) => {
                console.log('result.length: ', result.length);
                if (!result) {
                    return Promise.reject('near-by-provider-list-failed');
                }
                // console.log(req.platform);
                if (req.platform == "mobile" || req.platform == "webportal") {
                    req.from = "website";
                } else {
                    req.from = 'nearBy';
                }

                // }  else if (req.platform == "mobile" && req.query.selected_date) {
                //     req.from = 'nearBy';
                return processResult(result, req, res);
            }).catch((e) => res.status(200).message(e).returnFailure([]));
    });
}

/**
 * function to process and return the provider list
 * @author binil Baby
 * @return json
 * @createdOn 16-May-2017
 */
var processResult = (result, req, res) => {
    var provider_list = [];
    var provider_id = '';
    var appointment_time = (req.query.appointment_time) ? req.query.appointment_time : null;
    async.eachSeries(result, function (data, callback) {
        var selected_date = (req.query.selected_date) ? req.query.selected_date : null;
        Promise.all([]).then(() => { return timeslots.getScheduleForProvider(data._id, "D", selected_date); })
            .then((schedule_updates) => {
                if (req.query.selected_date) {
                    return timeslots.getTimeslots(req.query.selected_date, data, req.platform, "D", schedule_updates, 'providerList', appointment_time);
                } else {
                    return [];
                }
            })
            .then((time_slots_array) => {
                data.timeslots = time_slots_array;
                // delete data.schedule_configuration;
                var distance_in_km = data.distance;
                return parseFloat(distance_in_km) / 1.60934;
            })
            .then((distance_in_miles) => {
                data.distance = distance_in_miles;
                return Serviceprovider.findById(ObjectId(data.service_provider_id)).select('first_name last_name')
            })
            .then((service_provider_data) => {
                data.service_provider_name = service_provider_data.first_name + ' ' + service_provider_data.last_name;
                console.log('From: ', req.from);
                if (req.from == 'nearBy') {
                    if (data.timeslots.length > 0) {
                        provider_list.push(data);
                    }
                } else {
                    if (req.query.latitude && req.query.longitude) {
                        data.distance = geodist({ lat: req.query.latitude, lon: req.query.longitude }, {
                            lat: data.gps_location[1],
                            lon: data.gps_location[0]
                        }, { exact: true, unit: 'mi' });
                    }
                    if (appointment_time != null && data.timeslots.length > 0) {
                        provider_list.push(data);
                    } else if (appointment_time == null) {
                        provider_list.push(data);
                    }
                }
                callback();
            })
    }, function () {
        if (req.from == 'myProviders') {
            return res.status(200).message('get-my-providers-list-successful').returnListSuccess(provider_list, req.query);
        } else {
            return res.status(200).message('near-by-provider-list').returnListSuccess(provider_list, req.query);
        }
    });
}

/**
 * function to get time slots
 * @author binil Baby
 * @return json
 * @createdOn 16-May-2017
 */
var getTimeSlots = (req, res) => {
    var time_slots = [];
    let calendar_type = 'D';
    let query;
    if (req.platform == 'webportal') {
        query = { _id: req.params.providerId, service_provider_id: req.params.id };
    } else {
        query = { _id: req.params.providerId };
    }
    Provider.findOne(query).lean().then((provider) => {
        if (!provider) {
            return Promise.reject('provider-not-found');
        }
        if (req.platform == 'webportal') {
            calendar_type = provider.configuration.default_calender;
            if (req.query.calendar_view) calendar_type = req.query.calendar_view;
        }
        var appointment_time = (req.query.appointment_time) ? req.query.appointment_time : null;
        timeslots.getUpdatedSchedule(provider._id, calendar_type, req.query.selected_date, (schedule_updates) => {
            if (req.platform == 'webportal' && req.query.from == 'reschedule') {
                time_slots = timeslots.getTimeslots(req.query.selected_date, provider, req.platform, "D", schedule_updates, 'reschedule', appointment_time);
                var response_data = {
                    provider_timezone: provider.provider_timezone,
                    time_slots: time_slots
                };
                return res.status(200).message('time-slots-retrived-succesfully').returnSuccess(response_data);
            } else if (req.platform == 'webportal' && req.query.from == 'appointment') {
                time_slots = timeslots.getTimeslots(req.query.selected_date, provider, req.platform, "D", schedule_updates, 'appointment', appointment_time);
                processTimeslotList(time_slots, res, req);
            } else {
                time_slots = timeslots.getTimeslots(req.query.selected_date, provider, req.platform, calendar_type, schedule_updates, 'timeslotsList', appointment_time);
                processTimeslotList(time_slots, res, req);
            }
        })
    }).catch((e) => res.status(400).message(e).returnFailure(null));
}

let processTimeslotList = (time_slots, res, req) => {
    let response_data = [];
    return res.status(200).message('time-slots-retrived-succesfully').returnSuccess(time_slots);
    // if (req.query.appointment_time) {
    //     if (Number(req.query.appointment_time) == 15) {
    //         return res.status(200).message('time-slots-retrived-succesfully').returnSuccess(time_slots);
    //     } else {
    //         let duration = (Number(req.query.appointment_time) * 60 * 1000) - (15 * 60 * 1000);
    //         async.eachSeries(time_slots, function (data, callback) {
    //             if (req.platform == 'webportal') {
    //                 // return res.status(200).message('time-slots-retrived-succesfully').returnSuccess(time_slots);
    //                 if (data.slot_type != undefined) {
    //                     let end_time = Number(data.start) + duration;
    //                     var result = time_slots.filter(function (obj) {
    //                         if (obj.slot_type != undefined) return obj.start.valueOf() == end_time;
    //                         else return null;
    //                     });
    //                     if (result.length > 0) {
    //                         response_data.push(data);
    //                         callback();
    //                     } else callback();
    //                 } else {
    //                     response_data.push(data);
    //                     callback();
    //                 }
    //             } else {
    //                 let end_time = Number(data.time) + duration;
    //                 var result = time_slots.filter(function (obj) {
    //                     return obj.time == end_time;
    //                 });
    //                 if (result.length > 0) {
    //                     response_data.push(data);
    //                     callback();
    //                 } else callback();
    //             }
    //         }, function () {
    //             return res.status(200).message('time-slots-retrived-succesfully').returnSuccess(response_data);
    //         });
    //     }
    // } else {
    //     return res.status(200).message('time-slots-retrived-succesfully').returnSuccess(time_slots);
    // }
}

/**
* functuion to add providerDetails
* @author binil baby
* @return  json
* @creted on 18-May-2017
* @modified on 19-May-2017
*/
var addProviderDetails = (req, res) => {
    validations.validateAddProviderDetails(req.body, res, (err) => { // validation of providerDetails
        req.body.first_name = changeCase.titleCase(req.body.first_name);
        req.body.last_name = changeCase.titleCase(req.body.last_name);
        req.body.company = changeCase.titleCase(req.body.company);
        req.body.gps_location = [req.body.long, req.body.lat];
        Serviceprovider.findOne({ _id: req.params.id })
            .then((result) => {
                if (!result) {
                    return Promise.reject('service-provider-not-found');
                }
                if (!result.is_profile_completed) {
                    return Promise.reject('profile-not-completed');
                }
                return Provider.findOne({ 'first_name': req.body.first_name, 'email': req.body.emal, 'last_name': req.body.last_name });
            })
            .then((provider) => {
                if (provider) {
                    return Promise.reject('provider-already-exists');
                }
                Provider.create(req.body, (err, data) => {
                    if (!err) {
                        delete (data.configuration);
                        delete (data.schedule_configuration);
                        return res.status(200).message('proiver-added-successfully').returnSuccess(data);
                    }
                    return res.status(400).message('failed-to-add-provider').returnFailure(null);
                })
            }).catch((e) => res.status(400).message(e).returnFailure(null));
    });
}

/**
 * function to UpdateProviderinfo
 * @author binil baby
 * @return json
 * @createdOn 19-May-2017
 * @updatedOn 29-June-2017 Sachin Kumar
 */
let updateProviderInfo = (req, res) => {
    validations.validateUpdateProviderInfo(req.body, res, (err, profile_info) => {
        profile_info.first_name = changeCase.titleCase(req.body.first_name);
        profile_info.last_name = changeCase.titleCase(req.body.last_name);
        profile_info.company = changeCase.titleCase(req.body.company);
        profile_info.gps_location = [req.body.long, req.body.lat];
        if (req.user.user_role == 'superAdmin') {
            profile_info.is_active = true;
        }
        Provider.findOne({ service_provider_id: req.params.id, _id: req.params.providerId })
            .then((provider) => {
                if (!provider) {
                    return Promise.reject('provider-not-found');
                }
                return Provider.findByIdAndUpdate({ _id: req.params.providerId }, profile_info, { new: true });
            })
            .then((result) => {
                if (!result) {
                    return Promise.reject('failed-to-update-provider-info');
                }
                if (req.body.step == 2) {
                    return res.status(200).message('provider-configuration-updated').returnSuccess(result);
                }
                return res.status(200).message('provider-information-updated').returnSuccess(result);
            }).catch((err) => {
                res.status(400).message(err).returnFailure(null);
            });
    });
}

/**
 * function to execute get provider list query
 * @author Sachin Kumar
 * @return json
 * @createdOn 12-June-2017
 */
var getProviderList = (query, skip, limit, reqQuery, res, sort_by_field) => {
    console.log("sort_by_field: ", sort_by_field);

    Provider.count(query, function (err, count) {
        reqQuery.total_count = count;
        let select_fields = {
            _id: 1, first_name: 1, last_name: 1, specialisation: 1, phone_number: 1, gps_location: 1,
            image_url: 1, company: 1, address: 1, city: 1, postal_code: 1, service_provider_id: 1, email: 1, state: 1, country: 1,
            phone_number: 1, phone_number_type: 1, "configuration.get_amount_during_booking": 1, service_provider_id: 1,
            "configuration.premium_appointment_fee": 1, is_paid: 1, is_deleted: 1, createdAt: 1, blocked_users: 1, payment_done: 1, payment_date: 1,
            transaction_id: 1, card_number: 1
        };
        if (reqQuery.platform == 'webportal') {
            // select_fields = {};
        }
        var provider_list = [];
        Provider.find(query).sort(sort_by_field).select(select_fields).lean().limit(limit).skip(skip).then((docs) => {
            if (docs) {
                if (reqQuery.platform == 'webportal') {
                    var deferred = Q.defer();
                    async.eachSeries(docs, function (data, callback) {
                        data.provider_name = data.first_name + ' ' + data.last_name;
                        Serviceprovider.findOne({ _id: ObjectId(data.service_provider_id) })
                            .select('_id first_name last_name').then((service_provider) => {
                                data.service_provider_id = service_provider._id;
                                data.amount_paid = constants.PROVIDER_ADDITION_AMOUNT;
                                data["service_provider_name"] = service_provider.first_name + " " + service_provider.last_name;
                                if (data.card_number != null) data.card_number = secrets.decode(constants.card_encrypt_secret_key, data.card_number);
                                provider_list.push(data);
                                callback();
                            })
                    }, function () {
                        return res.status(200).message('get-provider-list-success').returnListSuccess(provider_list, reqQuery);
                    });
                } else {
                    return res.status(200).message('get-provider-list-success').returnListSuccess(docs, reqQuery);
                }
            } else {
                return Promise.reject('no-records-found');
            }
        }).catch((e) => { res.status(200).message(e).returnFailure(null) });
    });
}

/**
 * function to invoke the provider list functionality
 * @author Rakhi M R
 * @updatedBy Megha S
 * @return json
 * @createdOn 19-May-2017
 */

let providersList = (req, res) => {
    let limit = req.query.limit || (req.platform == 'webportal') ? constants.WEB_PAGE_LIMIT : constants.PAGE_LIMIT;
    let page = (req.query.page) ? parseInt(req.query.page) : 0;
    let skip = page > 0 ? ((page - 1) * limit) : 0;
    var sort_by_field = req.query.sort_by_field || "first_name";
    var sort_order = req.query.sort_order || "asc";
    if (sort_order == 'desc') {
        sort_by_field = '-' + sort_by_field;
    }
    if (req.platform == 'webportal') {
        // let query = { 'service_provider_id': req.params.id, "is_deleted": false };
        Promise.all([]).then(() => {
            return searchAndFilters.providerSearchQuery(req, req.query);
        })
            .then((query) => {
                console.log('query: ', query);
                getProviderList(query, skip, limit, req.query, res, sort_by_field);
            }).catch((e) => {
                res.status(200).message(e).returnFailure(null);
            });
    } else {
        User.findOne({ _id: req.user._id }, { my_providers: 1 })
            .then((result) => {
                if (!result) {
                    Promise.reject('get-provider-list-failed');
                }
                let my_provider_ids = result.my_providers.map(function (x) { return new ObjectId(x); });
                return searchAndFilters.providerSearchQuery(req, req.query, my_provider_ids);
            })
            .then((query) => {
                getProviderList(query, skip, limit, req.query, res, sort_by_field);
            }).catch((e) => {
                res.status(200).message(e).returnFailure(null);
            });
    }
};

/**
 * function to delete Provider
 * @author binil baby
 * @return json
 * @createdOn 31-May-2017
 */
var deleteprovider = (req, res) => {
    var promise = Provider.findOne({ _id: req.params.id }).exec();
    promise.then(function (data) {
        if (!data) {
            return res.status(400).message('no-records-found').returnFailure(null);
        }
        result.is_deleted = true;
        result.is_active = false;
        result.save();
        return res.status(200).message('provider-deleted-successfully').returnSuccess(null)
    })
}

/**
 * function to get the provider list for dropdown
 * @author Megha S
 * @return json
 * @createdOn 07-June-2017
 */
let providerIdList = (req, res) => {
    if (req.platform == 'webportal') {
        var query = { 'service_provider_id': ObjectId(req.params.id), "is_deleted": false };
    } else {
        var query = { "is_active": true, "is_deleted": false };
    }
    let sort = {};
    sort["first_name"] = 1;
    Provider.aggregate([
        { $match: query },
        { $sort: sort },
        { $project: { provider_name: { $concat: ["$first_name", " ", "$last_name"] }, provider_timezone: 1 } }
    ], function (err, result) {
        if (err) {
            return res.status(200).message('no-records-found').returnFailure(null);
        }
        return res.status(200).message('near-by-provider-list').returnSuccess(result, req.query);
    });
}

let blockUser = (req, res) => {
    Provider.findOne({ _id: req.params.providerId, 'blocked_users': { $in: req.body.user_id } })
        .then((provider) => {
            if (provider) {
                return Promise.reject('user-already-exists');
            }
            return Provider.findOne({ _id: req.params.providerId });
        })
        .then((provider_data) => {
            var existing_blocked_users = provider_data.blocked_users;
            provider_data.blocked_users = existing_blocked_users.concat(req.body.user_id);
            return provider_data.save();
        })
        .then((result) => {
            if (!result) {
                return Promise.reject('user-not-added-to-block-list');
            }
            return res.status(200).message('user-added-to-my-providers').returnSuccess(null);
        })
        .catch((e) => {
            return res.status(400).message(e).returnFailure(null);
        });
}

let unblockUser = (req, res) => {
    Provider.findOne({ _id: req.params.providerId, 'blocked_users': { $in: [req.body.user_id] } })
        .then((provider) => {
            if (!provider) {
                return Promise.reject('selected-user-not-found');
            }
            console.log("provider: ", provider);
            return Provider.findByIdAndUpdate(req.params.providerId, { $pull: { 'blocked_users': req.body.user_id } });
        })
        .then((result) => {
            console.log("result: ", result);
            return res.status(200).message('user-unblocked').returnSuccess(null);
        })
        .catch((e) => {
            return res.status(400).message(e).returnFailure(null);
        });
}

let getGallery = (req, res) => {
    Provider.aggregate([
        { $unwind: "$image_url_array" },
        { $match: { image_url_array: { $ne: null } } },
        { $project: { "image_url_array": 1 } },
        { $count: "images_count" }
    ]).then((result) => {
        // console.log('====', result);
        if (!result || result.length <= 0) {
            return Promise.reject('no-records-found');
        }
        // Get a random entry
        let count = result[0].images_count;
        var random = Math.floor(Math.random() * (count - 5))
        // console.log(">>>>", count, random)
        return Provider.aggregate([
            { $unwind: "$image_url_array" },
            { $match: { image_url_array: { $ne: null } } },
            { $project: { "image_url_array": 1 } },
            { $skip: random },
            { $limit: 6 }
        ]);
    }).then((gallery) => {
        if (!gallery) {
            return res.status(200).message('no-records-found').returnSuccess([]);
        }
        image_array = [];
        async.eachSeries(gallery, function (data, callback) {
            image_array.push(data.image_url_array);
            callback();
        }, function () {
            return res.status(200).message('gallery-success').returnSuccess(image_array);
        });
    }).catch((err) => {
        return res.status(200).message(err).returnSuccess([]);
    });
}

let activateInactivate = (req, res) => {
    Provider.findOne({ _id: req.params.id }, (err, result) => {
        if (!result) {
            return res.status(400).message('provider-not-found').returnFailure(null);
        }
        Provider.findByIdAndUpdate(req.params.id, { $set: { 'is_active': req.body.is_active } }, { new: true }, (err, updated_user) => {
            if (updated_user) {
                if (req.body.is_active == true) {
                    return res.status(200).message('provider-activate-success').returnSuccess(updated_user);
                } else {
                    return res.status(200).message('provider-inactivate-success').returnSuccess(updated_user);
                }
            }
            return res.status(400).message('update-failed').returnFailure(null);
        })
    });
}

module.exports = {
    getProviderDetails, nearByProvidersList, getTimeSlots, addProviderDetails, providersList, updateProviderInfo,
    deleteprovider, providerIdList, processResult, getProviderList, blockUser, unblockUser, getGallery, activateInactivate
};
