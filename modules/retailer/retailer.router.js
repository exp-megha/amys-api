const express = require('express');
const controller = require('./retailer.controller');
const router = express.Router();

const routes = (authenticate) => {
	router.route("/")
		.get(authenticate.authenticate, controller.getRetailer)
		.post(authenticate.authenticate, controller.addRetailer);

	router.route("/:id")
		.put(authenticate.authenticate, controller.updateRetailer)
		.get(authenticate.authenticate, controller.getRetailerDetails);

	router.route("/:id/activateInactivate")
		.put(authenticate.authenticate, controller.activateInactivate)

	return router;
}

module.exports = { routes, path: 'retailers' };