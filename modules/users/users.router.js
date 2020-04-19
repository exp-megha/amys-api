const express = require('express');
const controller = require('./users.controller');
const router = express.Router();

const routes = (authenticate) => {

	router.route("/login")
		.post(authenticate.nonAuthenticate, controller.login);

	router.route("/applicationSettings")
		.get(authenticate.nonAuthenticate, controller.applicationSettings);

	router.route("/gstMobile")
		.get(authenticate.nonAuthenticate, controller.getGstMobile);

	return router;
}

module.exports = { routes, path: 'users' };
