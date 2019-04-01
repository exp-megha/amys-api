const express = require('express');
const controller = require('./mobileInvoice.controller');
const router = express.Router();

const routes = (authenticate) => {

	router.route("/export")
		.get(authenticate.nonAuthenticate, controller.getMobileInvoices)

	router.route("/itemTypes")
		.get(controller.getItemTypes)

	router.route("/")
		.get(authenticate.authenticate, controller.getMobileInvoices)
		.post(authenticate.authenticate, controller.addMobileInvoice);

	router.route("/:id")
		.put(authenticate.authenticate, controller.updateMobileInvoiceDetails)
		.get(controller.getMobileInvoiceDetails)
		.delete(authenticate.authenticate, controller.cancelMobileInvoice)

	return router;
}

module.exports = {
	routes,
	path: 'mobileInvoices'
};