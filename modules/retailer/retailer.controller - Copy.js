const _ = require('lodash');
var { Retailer } = require('./../../models/retailer');
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
/**
 * function to invoke the get Provider details functionality
 * @author Megha
 * @return json
 * @createdOn 09-May-2017
 */
let getProviderDetails = (req, res) => {
    let query;
    if (req.query.platform == 'webportal') {
        query = { 'service_provider_id': ObjectId(req.params.id), '_id': req.params.providerId };
    } else {
        query = { '_id': req.params.providerId };
    }
    Provider.findOne(query).lean().then((provider) => {
        if (!provider) {
            return Promise.reject('provider-not-found');
        }
        let result = provider;
        if (req.query.selected_date && req.query.platform != "webportal") {
            timeslots.getUpdatedSchedule(provider._id, "D", req.query.selected_date, (schedule_updates) => {
                let time_slots = timeslots.getTimeslots(req.query.selected_date, provider, req.query.platform, "D", schedule_updates, 'providerDetails');
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
        if (req.query.platform == "webportal") {
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
                if (skip != null) {
                    aggregate.push({ $skip: skip });
                    aggregate.push({ $limit: limit });
                }
                return Provider.aggregate(aggregate);
            })
            .then((result) => {
                if (!result) {
                    return Promise.reject('near-by-provider-list-failed');
                }
                req.from = 'nearBy';
                if (req.query.platform == "mobile") req.from = "website";
                return processResult(result, req, res);
            }).catch((e) => res.status(200).message(e).returnFailure(null));
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
    async.eachSeries(result, function (data, callback) {
        var selected_date = (req.query.selected_date) ? req.query.selected_date : null;
        Promise.all([]).then(() => { return timeslots.getScheduleForProvider(data._id, "D", selected_date); })
            .then((schedule_updates) => {
                if (req.query.selected_date) {
                    return timeslots.getTimeslots(req.query.selected_date, data, req.query.platform, "D", schedule_updates, 'providerList');
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
                if (req.from === 'nearBy') {
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
                    provider_list.push(data);
                }
                callback();
            })
    }, function () {
        if (req.from = 'myProviders') {
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
        timeslots.getUpdatedSchedule(provider._id, calendar_type, req.query.selected_date, (schedule_updates) => {
            if (req.platform == 'webportal' && req.query.from == 'reschedule') {
                time_slots = timeslots.getTimeslots(req.query.selected_date, provider, req.query.platform, "D", schedule_updates, 'reschedule');
                var response_data = {
                    provider_timezone: provider.provider_timezone,
                    time_slots: time_slots
                };
                return res.status(200).message('time-slots-retrived-succesfully').returnSuccess(response_data);
            } else if (req.platform == 'webportal' && req.query.from == 'appointment') {
                time_slots = timeslots.getTimeslots(req.query.selected_date, provider, req.query.platform, "D", schedule_updates, 'appointment');
                return res.status(200).message('time-slots-retrived-succesfully').returnSuccess(time_slots);
            } else {
                time_slots = timeslots.getTimeslots(req.query.selected_date, provider, req.query.platform, calendar_type, schedule_updates, 'timeslotsList');
                return res.status(200).message('time-slots-retrived-succesfully').returnSuccess(time_slots);
            }
        })
    }).catch((e) => res.status(400).message(e).returnFailure(null));
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
            "configuration.premium_appointment_fee": 1, is_paid: 1, is_deleted: 1, createdAt: 1
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
                        Serviceprovider.findOne({ _id: ObjectId(data.service_provider_id) })
                            .select('_id first_name last_name').then((service_provider) => {
                                data.service_provider_id = service_provider._id;
                                data["service_provider_name"] = service_provider.first_name + " " + service_provider.last_name;
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
 * function to get th eretailer list
 * @updatedBy Megha S
 * @return json
 * @createdOn 19-May-2017
 */

let getRetailer = (req, res) => {
    let limit = req.query.limit || constants.PAGE_LIMIT;
    let page = (req.query.page) ? parseInt(req.query.page) : 0;
    let skip = page > 0 ? ((page - 1) * limit) : 0;
    var sort_by_field = req.query.sort_by_field || "last_name";
    var sort_order = req.query.sort_order || "asc";
    if (sort_order == 'desc') {
        sort_by_field = '-' + sort_by_field;
    }
    Promise.all([]).then(() => {
        return searchAndFilters.retailerSearchQuery(req, req.query);
    })
        .then((query) => {
            console.log('query: ', query);
            getProviderList(query, skip, limit, req.query, res, sort_by_field);
        }).catch((e) => {
            res.status(200).message(e).returnFailure(null);
        });
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
var providerIdList = (req, res) => {
    if (req.query.platform == 'webportal') {
        var query = { 'service_provider_id': ObjectId(req.params.id), "is_deleted": false };
    } else {
        var query = { "is_active": true, "is_deleted": false };
    }
    let sort = {};
    sort["last_name"] = 1;
    Provider.aggregate([
        { $match: query },
        { $sort: sort },
        { $project: { provider_name: { $concat: ["$last_name", " ", "$first_name"] }, provider_timezone: 1 } }
    ], function (err, result) {
        if (err) {
            return res.status(200).message('no-records-found').returnFailure(null);
        }
        return res.status(200).message('near-by-provider-list').returnSuccess(result, req.query);
    });
}

module.exports = {
    addRetailer, updateRetailer, getRetailer,
    addProviderDetails, providersList, updateProviderInfo,
    deleteprovider, providerIdList, processResult, getProviderList
};
