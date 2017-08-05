const express = require('express');
const controller = require('./item.controller');
const router = express.Router();

const routes = (authenticate) => {
	router.route("/")
		.get(authenticate.nonAuthenticate, controller.getItem)
		.post(authenticate.nonAuthenticate, controller.addItem);

	router.route("/:id")
		.put(authenticate.nonAuthenticate, controller.updateItem);

	return router;
}

module.exports = { routes, path: 'items' };