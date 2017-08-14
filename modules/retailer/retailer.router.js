const express = require('express');
const controller = require('./retailer.controller');
const router = express.Router();

const routes = (authenticate) => {
	router.route("/")
		.get(authenticate.nonAuthenticate, controller.getRetailer)
		.post(authenticate.nonAuthenticate, controller.addRetailer);

	router.route("/:id")
		.put(authenticate.nonAuthenticate, controller.updateRetailer)
		.get(authenticate.nonAuthenticate, controller.getRetailerDetails);

	router.route("/:id/activateInactivate")
		.put(authenticate.nonAuthenticate, controller.activateInactivate)

	return router;
}

module.exports = { routes, path: 'retailers' };