const express = require('express');
const controller = require('./provider.controller');
const router = express.Router();

const routes = (authenticate) => {

	router.route("/nearBy")
		.get(authenticate.nonAuthenticate, controller.nearByProvidersList);

	router.route("/:providerId/timeslots")
		.get(authenticate.nonAuthenticate, controller.getTimeSlots);

	router.route("/:providerId")
		.get(authenticate.nonAuthenticate, controller.getProviderDetails);
	
	router.route("/")
		.get(authenticate.authenticate, controller.providersList);
		
    return router;
}

module.exports = { routes, path: 'providers' };