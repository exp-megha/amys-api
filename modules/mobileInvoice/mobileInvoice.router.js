const express = require('express');
const controller = require('./mobileInvoice.controller');
const router = express.Router();

const routes = (authenticate) => {

	router.route("/export")
		.get(authenticate.nonAuthenticate, controller.getMobileInvoices)

	router.route("/itemTypes")
		.get(controller.getItemTypes)

	router.route("/itemList")
		.get(controller.getItemList)
		.post(controller.addItemList)

	router.route("/")
		.get( controller.getMobileInvoices)
		.post(controller.addMobileInvoice);

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