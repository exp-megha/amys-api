const express = require('express');
const controller = require('./item.controller');
const router = express.Router();

const routes = (authenticate) => {
	router.route("/")
		.get(authenticate.nonAuthenticate, controller.getItem)
		.post(authenticate.nonAuthenticate, controller.addItem);

	router.route("/:id")
		.put(authenticate.nonAuthenticate, controller.updateItem)
		.get(authenticate.nonAuthenticate, controller.getItemDetails);

	router.route("/:id/activateInactivate")
		.put(authenticate.nonAuthenticate, controller.activateInactivate)

	return router;
}

module.exports = { routes, path: 'items' };