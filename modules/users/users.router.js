const express = require('express');
const controller = require('./users.controller');
const router = express.Router();

const routes = (authenticate) => {

	router.route("/applicationSettings")
		.get(authenticate.nonAuthenticate, controller.applicationSettings);

	return router;
}

module.exports = { routes, path: 'users' };
