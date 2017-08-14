 /**
 * @api {get} /invoices Get Invoices
 * @apiName Invoice : getInvoices
 * @apiGroup Invoice
 *
 * @apiParam {string} retailer_id _if of retailer selected from the Retailer drop-down [search query string].
 * @apiParam {string} month selected month number, values would be from 1 to 12 [search query string].
 * @apiParam {string} year selected year [search query string].
 * @apiParam {Number} invoice_number this would be a '%Like%' search [search query string].
 * @apiParam {string} retailer_name this would be a '%Like%' search [search query string].
 * @apiParam {string} invoice_date moment timestamp of selected date - start of the day without time [search query string].
 * @apiParam {Boolean} is_active true / false - determines whether the invoice is cancelled or not [search query string]
 * @apiSuccessExample Example Response Format
{
    "status": 1,
    "message": "invoice-list-success",
    "code": 200,
    "totalRecords": 2,
    "limitPerPage": 100000,
    "page": 1,
    "searchparams": {
        "total_count": 2
    },
    "data": [
        {
            "_id": "599172c9196c600f74118eb7",
            "updatedAt": "2017-08-14T10:10:00.884Z",
            "createdAt": "2017-08-14T09:52:09.401Z",
            "item_list": [
                {
                    "_id": "599176f8934f4012d0ed11c4",
                    "hsn_sac_code": "2343dsgfsdg",
                    "percentage_deduction": 3.5,
                    "total_unit_price_to_retailer": 960,
                    "unit_price_to_retailer": 48,
                    "quantity": 40,
                    "item_amount": 50,
                    "item_type": "Coupon",
                    "item_of": "Idea",
                    "item_id": "5985eb29acc2a51eac48750b"
                },
                {
                    "_id": "5985f16e1bd5da1e98f538e9",
                    "hsn_sac_code": "2343dsgfsdg",
                    "percentage_deduction": 3.5,
                    "total_unit_price_to_retailer": 9900,
                    "unit_price_to_retailer": 99,
                    "quantity": 10,
                    "item_amount": 100,
                    "item_type": "Coupon",
                    "item_of": "Idea",
                    "item_id": null
                }
            ],
            "invoice_total": 1271,
            "total_gst": 550.5,
            "sgst_amount": 110.25,
            "cgst_amount": 110.25,
            "total_before_tax": 1050.5,
            "invoice_date": 1502696505000,
            "invoice_number": "INV3",
            "year": 2017,
            "month": 8,
            "retailer_state_code": 21,
            "retailer_gst_registration_number": "GST0BNUPS6438LIN1Z",
            "retailer_pan_number": "BNUPS6438L",
            "retailer_address": "Varkkala Vadasserikonam",
            "retailer_name": "Yanuma Agencies",
            "retailer_id": "598564e182fb2712703a07a5"
        },
        {
            "_id": "599167fdb32bf01420316336",
            "updatedAt": "2017-08-14T09:06:05.727Z",
            "createdAt": "2017-08-14T09:06:05.727Z",
            "item_list": [
                {
                    "_id": "599167fdb32bf01420316337",
                    "hsn_sac_code": "2343dsgfsdg",
                    "percentage_deduction": 3.5,
                    "total_unit_price_to_retailer": 960,
                    "unit_price_to_retailer": 48,
                    "quantity": 20,
                    "item_amount": 50,
                    "item_type": "Coupon",
                    "item_of": "Idea",
                    "item_id": "5985eb29acc2a51eac48750b"
                },
                {
                    "_id": "5985f16e1bd5da1e98f538e9",
                    "hsn_sac_code": "2343dsgfsdg",
                    "percentage_deduction": 3.5,
                    "total_unit_price_to_retailer": 9900,
                    "unit_price_to_retailer": 99,
                    "quantity": 100,
                    "item_amount": 100,
                    "item_type": "Coupon",
                    "item_of": "Idea",
                    "item_id": null
                }
            ],
            "invoice_total": 1271,
            "total_gst": 220.5,
            "sgst_amount": 110.25,
            "cgst_amount": 110.25,
            "total_before_tax": 1050.5,
            "invoice_date": 1502696505000,
            "invoice_number": "INV2",
            "year": 2017,
            "month": 8,
            "retailer_state_code": 21,
            "retailer_gst_registration_number": "GST0BNUPS6438LIN1Z",
            "retailer_pan_number": "BNUPS6438L",
            "retailer_address": "Varkkala Vadasserikonam",
            "retailer_name": null,
            "retailer_id": "598566b850633c19f4920a8f"
        }
    ]
}
*
*@apiErrorExample {json} Error-Response: 'validation error'
*
{
    "status": 1,
    "message": "Invoice-list-success",
    "code": 200,
    "totalRecords": 0,
    "limitPerPage": 100000,
    "page": 1,
    "searchparams": {
        "name": "agencfdg",
        "total_count": 0
    },
    "data": []
}
*
*/

  /**
  * @api {post} /invoices  Add Invoice
  * @apiName Invoice : addInvoice
  * @apiGroup Invoice
  *
   * @apiParam {string} retailer_id _id of the selected retailer
   * @apiParam {Number} invoice_date moment timestamp of selected date[start of the day - without time].
   * @apiParam {string} total_before_tax total amount before applying the gst tax amount.
   * @apiParam {Number} cgst_amount cgst amount of the total tax according to the cgst percentage.
   * @apiParam {Number} sgst_amount sgst amount of the total tax according to the sgst percentage.
   * @apiParam {Number} total_gst Sum of cgst and sgst amounts.
   * @apiParam {Number} invoice_total Sum of the total_before_tax and total_gst.
   * @apiParam {Array} item_list list of items added to the invoice with details of each item, quantity and total_unit_price_to_retailer the 
  * @apiSuccessExample Example Request Format
 {
  "retailer_id": "598564e182fb2712703a07a5",
  "invoice_date": 1502696505000,
  "total_before_tax": 1050.50,
  "cgst_amount": 110.25,
  "sgst_amount": 110.25,
  "total_gst": 550.50,
  "invoice_total": 1271,
  "item_list": [
        {
        	"item_id": "5985eb29acc2a51eac48750b",
		    "hsn_sac_code" : "2343dsgfsdg",
		    "percentage_deduction" : 3.5,
		    "unit_price_to_retailer" : 48,
		    "total_unit_price_to_retailer": 960,
		    "quantity": 40,
		    "item_amount" : 50,
		    "item_name" : "RSC 50",
		    "item_type" : "Coupon",
		    "item_of" : "Idea"
        },
        {
		    "_id" : "5985f16e1bd5da1e98f538e9",
		    "hsn_sac_code" : "2343dsgfsdg",
		    "percentage_deduction" : 3.5,
		    "unit_price_to_retailer" : 99,
		    "total_unit_price_to_retailer": 9900,
		    "quantity": 10,
		    "item_amount" : 100,
		    "item_name" : "RSC 100",
		    "item_type" : "Coupon",
		    "item_of" : "Idea"
		}
    ]
}
  *
  *
  * @apiSuccess {number} status 1 for success.
  * @apiSuccess {String} message success message.
  * @apiSuccess {number} code sucess code .
  * @apiSuccess {string} data token returned from the API.
  * @apiSuccessExample Example data on success
  *
  {
    "status": 1,
    "message": "Invoice-information-added",
    "code": 200,
    "data": {
        "_id": "599172c9196c600f74118eb7",
        "updatedAt": "2017-08-14T10:10:00.884Z",
        "createdAt": "2017-08-14T09:52:09.401Z",
        "item_list": [
            {
                "_id": "599176f8934f4012d0ed11c4",
                "hsn_sac_code": "2343dsgfsdg",
                "percentage_deduction": 3.5,
                "total_unit_price_to_retailer": 960,
                "unit_price_to_retailer": 48,
                "quantity": 40,
                "item_amount": 50,
                "item_type": "Coupon",
                "item_of": "Idea",
                "item_id": "5985eb29acc2a51eac48750b"
            },
            {
                "_id": "5985f16e1bd5da1e98f538e9",
                "hsn_sac_code": "2343dsgfsdg",
                "percentage_deduction": 3.5,
                "total_unit_price_to_retailer": 9900,
                "unit_price_to_retailer": 99,
                "quantity": 10,
                "item_amount": 100,
                "item_type": "Coupon",
                "item_of": "Idea",
                "item_id": null
            }
        ],
        "invoice_total": 1271,
        "total_gst": 550.5,
        "sgst_amount": 110.25,
        "cgst_amount": 110.25,
        "total_before_tax": 1050.5,
        "invoice_date": 1502696505000,
        "invoice_number": "INV3",
        "year": 2017,
        "month": 8,
        "retailer_state_code": 21,
        "retailer_gst_registration_number": "GST0BNUPS6438LIN1Z",
        "retailer_pan_number": "BNUPS6438L",
        "retailer_address": "Varkkala Vadasserikonam",
        "retailer_name": "Yanuma Agencies",
        "retailer_id": "598564e182fb2712703a07a5"
    }
}
 *
 * @apiErrorExample {json} Error-Response: 'validation error'
 *
 {
   "status": 0,
   "message": "'item validation failed",
   "code": 400,
   "data": null
 }
 */
  /**
  * @api {put} /invoices/:id Update Invoice
  * @apiName Invoice : updateInvoiceDetails
  * @apiGroup Invoice
  *
  * @apiParam {string} id _id of the Invoice
   * @apiParam {string} retailer_id _id of the selected retailer
   * @apiParam {Number} invoice_date moment timestamp of selected date[start of the day - without time].
   * @apiParam {string} total_before_tax total amount before applying the gst tax amount.
   * @apiParam {Number} cgst_amount cgst amount of the total tax according to the cgst percentage.
   * @apiParam {Number} sgst_amount sgst amount of the total tax according to the sgst percentage.
   * @apiParam {Number} total_gst Sum of cgst and sgst amounts.
   * @apiParam {Number} invoice_total Sum of the total_before_tax and total_gst.
   * @apiParam {Array} item_list list of items added to the invoice with details of each item, quantity and total_unit_price_to_retailer the 
  * @apiSuccessExample Example Request Format
 {
  "retailer_id": "598564e182fb2712703a07a5",
  "invoice_date": 1502696505000,
  "total_before_tax": 1050.50,
  "cgst_amount": 110.25,
  "sgst_amount": 110.25,
  "total_gst": 550.50,
  "invoice_total": 1271,
  "item_list": [
        {
        	"item_id": "5985eb29acc2a51eac48750b",
		    "hsn_sac_code" : "2343dsgfsdg",
		    "percentage_deduction" : 3.5,
		    "unit_price_to_retailer" : 48,
		    "total_unit_price_to_retailer": 960,
		    "quantity": 40,
		    "item_amount" : 50,
		    "item_name" : "RSC 50",
		    "item_type" : "Coupon",
		    "item_of" : "Idea"
        },
        {
		    "_id" : "5985f16e1bd5da1e98f538e9",
		    "hsn_sac_code" : "2343dsgfsdg",
		    "percentage_deduction" : 3.5,
		    "unit_price_to_retailer" : 99,
		    "total_unit_price_to_retailer": 9900,
		    "quantity": 10,
		    "item_amount" : 100,
		    "item_name" : "RSC 100",
		    "item_type" : "Coupon",
		    "item_of" : "Idea"
		}
    ]
}
  *
  *
  * @apiSuccess {number} status 1 for success.
  * @apiSuccess {String} message success message.
  * @apiSuccess {number} code sucess code .
  * @apiSuccess {string} data token returned from the API.
  * @apiSuccessExample Example data on success
  *
  {
    "status": 1,
    "message": "Invoice-information-updated",
    "code": 200,
    "data": {
        "_id": "599172c9196c600f74118eb7",
        "updatedAt": "2017-08-14T10:10:00.884Z",
        "createdAt": "2017-08-14T09:52:09.401Z",
        "item_list": [
            {
                "_id": "599176f8934f4012d0ed11c4",
                "hsn_sac_code": "2343dsgfsdg",
                "percentage_deduction": 3.5,
                "total_unit_price_to_retailer": 960,
                "unit_price_to_retailer": 48,
                "quantity": 40,
                "item_amount": 50,
                "item_type": "Coupon",
                "item_of": "Idea",
                "item_id": "5985eb29acc2a51eac48750b"
            },
            {
                "_id": "5985f16e1bd5da1e98f538e9",
                "hsn_sac_code": "2343dsgfsdg",
                "percentage_deduction": 3.5,
                "total_unit_price_to_retailer": 9900,
                "unit_price_to_retailer": 99,
                "quantity": 10,
                "item_amount": 100,
                "item_type": "Coupon",
                "item_of": "Idea",
                "item_id": null
            }
        ],
        "invoice_total": 1271,
        "total_gst": 550.5,
        "sgst_amount": 110.25,
        "cgst_amount": 110.25,
        "total_before_tax": 1050.5,
        "invoice_date": 1502696505000,
        "invoice_number": "INV3",
        "year": 2017,
        "month": 8,
        "retailer_state_code": 21,
        "retailer_gst_registration_number": "GST0BNUPS6438LIN1Z",
        "retailer_pan_number": "BNUPS6438L",
        "retailer_address": "Varkkala Vadasserikonam",
        "retailer_name": "Yanuma Agencies",
        "retailer_id": "598564e182fb2712703a07a5"
    }
}
 *
 * @apiErrorExample {json} Error-Response: 'validation error'
 *
 {
   "status": 0,
   "message": "'item validation failed",
   "code": 400,
   "data": null
 }
 */
/**
  * @api {delete} /invoices/:id Cancel Invoice
  * @apiName Invoice : cancelInvoice
  * @apiGroup Invoice
  *
  * @apiParam {string} id _id of the Invoice
  *
  * @apiSuccess {number} status 1 for success.
  * @apiSuccess {String} message success message.
  * @apiSuccess {number} code sucess code .
  * @apiSuccess {string} data token returned from the API.
  * @apiSuccessExample Example data on success
  *
  {
    "status": 1,
    "message": "Invoice-cancellation-success",
    "code": 200,
    "data": {
        "_id": "599172c9196c600f74118eb7",
        "updatedAt": "2017-08-14T10:10:00.884Z",
        "createdAt": "2017-08-14T09:52:09.401Z",
        "item_list": [
            {
                "_id": "599176f8934f4012d0ed11c4",
                "hsn_sac_code": "2343dsgfsdg",
                "percentage_deduction": 3.5,
                "total_unit_price_to_retailer": 960,
                "unit_price_to_retailer": 48,
                "quantity": 40,
                "item_amount": 50,
                "item_type": "Coupon",
                "item_of": "Idea",
                "item_id": "5985eb29acc2a51eac48750b"
            },
            {
                "_id": "5985f16e1bd5da1e98f538e9",
                "hsn_sac_code": "2343dsgfsdg",
                "percentage_deduction": 3.5,
                "total_unit_price_to_retailer": 9900,
                "unit_price_to_retailer": 99,
                "quantity": 10,
                "item_amount": 100,
                "item_type": "Coupon",
                "item_of": "Idea",
                "item_id": null
            }
        ],
        "is_active": false,
        "invoice_total": 1271,
        "total_gst": 550.5,
        "sgst_amount": 110.25,
        "cgst_amount": 110.25,
        "total_before_tax": 1050.5,
        "invoice_date": 1502696505000,
        "invoice_number": "INV3",
        "year": 2017,
        "month": 8,
        "retailer_state_code": 21,
        "retailer_gst_registration_number": "GST0BNUPS6438LIN1Z",
        "retailer_pan_number": "BNUPS6438L",
        "retailer_address": "Varkkala Vadasserikonam",
        "retailer_name": "Yanuma Agencies",
        "retailer_id": "598564e182fb2712703a07a5"
    }
}
 *
 * @apiErrorExample {json} Error-Response: 'validation error'
 *
 {
   "status": 0,
   "message": "'item validation failed",
   "code": 400,
   "data": null
 }
 */
