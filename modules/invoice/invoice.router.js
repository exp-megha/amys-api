const express = require('express');
const controller = require('./invoice.controller');
const router = express.Router();

const routes = (authenticate) => {
	router.route("/")
		.get(authenticate.nonAuthenticate, controller.getInvoices)
		.post(authenticate.nonAuthenticate, controller.addInvoice);

	router.route("/:id")
		.put(authenticate.nonAuthenticate, controller.updateInvoiceDetails)
		.get(authenticate.nonAuthenticate, controller.getInvoiceDetails);

	return router;
}

module.exports = { routes, path: 'invoices' };