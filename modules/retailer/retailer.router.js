const express = require('express');
const controller = require('./provider.controller');
const router = express.Router();

const routes = (authenticate) => {

	router.route("/")
		.post(authenticate.nonAuthenticate, controller.addRetailer)
		.put(authenticate.nonAuthenticate, controller.updateRetailer)
		.get(authenticate.nonAuthenticate, controller.getRetailer);
		
    return router;
}

module.exports = { routes, path: 'retailers' };