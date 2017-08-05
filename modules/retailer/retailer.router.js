const express = require('express');
const controller = require('./retailer.controller');
const router = express.Router();

const routes = (authenticate) => {
	router.route("/")
		.get(authenticate.nonAuthenticate, controller.getRetailer)
		.post(authenticate.nonAuthenticate, controller.addRetailer);

	router.route("/:id")
		.put(authenticate.nonAuthenticate, controller.updateRetailer);

	return router;
}

module.exports = { routes, path: 'retailers' };