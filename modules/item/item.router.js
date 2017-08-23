const express = require('express');
const controller = require('./item.controller');
const router = express.Router();

const routes = (authenticate) => {
	router.route("/")
		.get(authenticate.authenticate, controller.getItem)
		.post(authenticate.authenticate, controller.addItem);

	router.route("/:id")
		.put(authenticate.authenticate, controller.updateItem)
		.get(authenticate.authenticate, controller.getItemDetails);

	router.route("/:id/activateInactivate")
		.put(authenticate.authenticate, controller.activateInactivate)

	return router;
}

module.exports = { routes, path: 'items' };