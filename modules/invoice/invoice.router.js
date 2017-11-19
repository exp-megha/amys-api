const express = require('express');
const controller = require('./invoice.controller');
const router = express.Router();

const routes = (authenticate) => {
	router.route("/")
		.get(authenticate.nonAuthenticate, controller.getInvoices)
		.post(authenticate.authenticate, controller.addInvoice);

	router.route("/:id")
		.put(authenticate.authenticate, controller.updateInvoiceDetails)
		.get(authenticate.authenticate, controller.getInvoiceDetails)
		.delete(authenticate.authenticate, controller.cancelInvoice)

	return router;
}

module.exports = { routes, path: 'invoices' };