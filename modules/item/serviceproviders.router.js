const express = require('express');
const controller = require('./serviceproviders.controller');
const providerController = require('../provider/provider.controller');
const appointmentController = require('../appointment/appointment.controller');
const scheduleController = require('../schedule/schedule.controller');

const router = express.Router();

const routes = (authenticate) => {
 
	router.route("/login")
		.post(authenticate.nonAuthenticate, controller.login);

	router.route("/forgotPassword")
		.post(authenticate.nonAuthenticate, controller.forgotPassword);

	router.route("/resetPassword")
		.put(authenticate.nonAuthenticate, controller.resetPassword);

	router.route("/:id/changePassword")
		.put(authenticate.authenticate, controller.changePassword);

	router.route("/:id")
		.put(authenticate.authenticate, controller.updateProfileInfo)
		.get(authenticate.authenticate, controller.getDetails);

	router.route("/:id/signUpVerification")
		.get(authenticate.nonAuthenticate, controller.signUpVerification);

	router.route("/:id/cards")
		.put(authenticate.authenticate, controller.savecardDetails);

	router.route("/")
		.post(authenticate.nonAuthenticate, controller.signUp)
		.get(authenticate.authenticate, controller.serviceProviderList);

// Providers management routes
	router.route("/:id/providers")
		.get(authenticate.authenticate, providerController.providersList)
		.post(authenticate.authenticate, providerController.addProviderDetails);

	router.route("/:id/providers/:providerId")
		.get(authenticate.nonAuthenticate, providerController.getProviderDetails)
		.put(authenticate.authenticate, providerController.updateProviderInfo);

	router.route("/:id/providers/:providerId/timeslots")
		.get(authenticate.authenticate, providerController.getTimeSlots);
		
	router.route("/:id/providerIds")
		.get(authenticate.authenticate, providerController.providerIdList);

// Appointments management routes
	router.route("/:id/appointments/:appointmentId")
        .get(authenticate.authenticate, appointmentController.getAppointmentDetails);

	router.route("/:id/appointments")
		.get(authenticate.authenticate, appointmentController.getAppointmentHistory);

// Schedule management routes
    router.route("/:id/providers/:providerId/schedules")
        .post(authenticate.authenticate,scheduleController.configuration);
	
	router.route("/:id/providers/:providerId/scheduleChanges")
		.put(authenticate.authenticate, scheduleController.updateSchedule);

	router.route("/:id/providers/:providerId/calendar")
		.get(authenticate.authenticate, scheduleController.getCalendarInput);

    return router;
}

module.exports = { routes, path: 'serviceProviders' };
