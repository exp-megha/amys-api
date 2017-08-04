const express = require('express');
const controller = require('./users.controller');
const appointmentController = require('../appointment/appointment.controller');
const familyController = require('../family/family.controller');
const router = express.Router();

const routes = (authenticate) => {

	router.route("/")
		.post(authenticate.nonAuthenticate, controller.signUp)
		.get(authenticate.nonAuthenticate, controller.userList);

	router.route("/login")
		.post(authenticate.nonAuthenticate, controller.login);

	router.route("/forgotPassword")
		.post(authenticate.nonAuthenticate, controller.forgotPassword);

	router.route("/resetPassword")
		.put(authenticate.nonAuthenticate, controller.resetPassword);

	router.route("/:id/changePassword")
		.put(authenticate.authenticate, controller.changePassword);

	router.route("/:id/providers")
		.post(authenticate.authenticate, controller.addMyProvider)
		.get(authenticate.authenticate, controller.getMyProviders);

	router.route("/:id/providers/:providerId")
		.delete(authenticate.authenticate, controller.removeMyProvider);

	//Routes for appointment controller
	router.route("/:id/appointments")
		.post(authenticate.authenticate, appointmentController.saveAppointment)
		.get(authenticate.authenticate, appointmentController.getAppointmentHistory);

	router.route("/:id/appointments/:appointmentId")
		.put(authenticate.authenticate, appointmentController.savePaymentStatus)
		.get(authenticate.authenticate, appointmentController.getAppointmentDetails);

	//Routes for family controller
	router.route("/:id/family/")
		.post(authenticate.authenticate, familyController.addFamilyMembers)
		.get(authenticate.authenticate, familyController.familyMembersList);

	router.route("/:id/family/:memberId")
		.delete(authenticate.authenticate, familyController.removeFamilyMember)
		.put(authenticate.authenticate, familyController.editFamilyMember);

	router.route("/:id/no2fyme")
		.post(authenticate.authenticate, controller.no2fyme)
		.get(authenticate.authenticate, controller.getNo2fymePreferences)

	router.route("/:id/activateInactivate")
		.put(authenticate.authenticate, controller.activateInactivate)

	router.route("/:id/notifications")
		.get(authenticate.authenticate, controller.getNotifications)

	router.route("/:id/notifications/:notificationId")
		.get(authenticate.authenticate, controller.getNotificationDetail)

	router.route("/:id/no2fyme/:no2fyId")
		.get(authenticate.authenticate, controller.getNo2fyme)
		.put(authenticate.authenticate, controller.updateNo2fyme)
		.delete(authenticate.authenticate, controller.deleteNo2fyme);

	router.route("/:id")
		.put(authenticate.nonAuthenticate, controller.updateProfile)

	return router;
}

module.exports = { routes, path: 'users' };
