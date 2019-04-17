const express = require('express');
const controller = require('./mobile.controller');
const router = express.Router();

const routes = (authenticate) => {

	router.route("/")
		.get( controller.getItemList)
		.post(authenticate.authenticate, controller.addItemList)

	router.route("/:id")
		// .put(authenticate.authenticate, controller.updateMobiles)
		// .get(controller.getMobileDetails)
		.delete(authenticate.authenticate, controller.cancelMobile)

	return router;
}

module.exports = {
	routes,
	path: 'mobiles'
};