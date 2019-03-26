const express = require('express');
const controller = require('./mobileInvoice.controller');
const router = express.Router();

const routes = (authenticate) => {
	router.route("/export")
		.get(authenticate.nonAuthenticate, controller.getMobileInvoices)

	router.route("/")
		.get(authenticate.nonAuthenticate, controller.getMobileInvoices)
		.post(authenticate.nonAuthenticate, controller.addMobileInvoice);

	router.route("/:id")
		.put(authenticate.authenticate, controller.updateMobileInvoiceDetails)
		.get(authenticate.authenticate, controller.getMobileInvoiceDetails)
		.delete(authenticate.authenticate, controller.cancelMobileInvoice)

	return router;
}

module.exports = { routes, path: 'mobileInvoices' };