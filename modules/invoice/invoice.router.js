const express = require('express');
const controller = require('./invoice.controller');
const router = express.Router();

const routes = (authenticate) => {
	router.route("/")
		.get(authenticate.nonAuthenticate, controller.getItem)
		.post(authenticate.nonAuthenticate, controller.addItem);

	router.route("/:id")
		.put(authenticate.nonAuthenticate, controller.getInvoiceDetails);

	return router;
}

module.exports = { routes, path: 'invoices' };