define({ "api": [
  {
    "type": "post",
    "url": "/invoices",
    "title": "Add Invoice",
    "name": "Invoice___addInvoice",
    "group": "Invoice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "retailer_id",
            "description": "<p>_id of the selected retailer</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invoice_date",
            "description": "<p>moment timestamp of selected date[start of the day - without time].</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "total_before_tax",
            "description": "<p>total amount before applying the gst tax amount.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cgst_amount",
            "description": "<p>cgst amount of the total tax according to the cgst percentage.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sgst_amount",
            "description": "<p>sgst amount of the total tax according to the sgst percentage.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_gst",
            "description": "<p>Sum of cgst and sgst amounts.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_discount",
            "description": "<p>Sum of discount amounts.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invoice_total",
            "description": "<p>Sum of the total_before_tax and total_gst.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "item_list",
            "description": "<p>list of items added to the invoice with details of each discount, item, quantity and total_unit_price_to_retailer the</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n  \"retailer_id\": \"598564e182fb2712703a07a5\",\n  \"invoice_date\": 1502696505000,\n  \"total_before_tax\": 1050.50,\n  \"cgst_amount\": 110.25,\n  \"sgst_amount\": 110.25,\n  \"total_gst\": 550.50,\n  \"total_discount\": 185.00,\n  \"invoice_total\": 1271,\n  \"item_list\": [\n        {\n            \"discount\": 185,\n        \t\"item_id\": \"5985eb29acc2a51eac48750b\",\n\t\t    \"hsn_sac_code\" : \"2343dsgfsdg\",\n\t\t    \"percentage_deduction\" : 3.5,\n\t\t    \"unit_price_to_retailer\" : 48,\n\t\t    \"total_unit_price_to_retailer\": 960,\n\t\t    \"quantity\": 40,\n\t\t    \"item_amount\" : 50,\n\t\t    \"item_name\" : \"RSC 50\",\n\t\t    \"item_type\" : \"Coupon\",\n\t\t    \"item_of\" : \"Idea\"\n        },\n        {\n            \"discount\": 0,\t\t    \n\t\t    \"hsn_sac_code\" : \"2343dsgfsdg\",\n\t\t    \"percentage_deduction\" : 3.5,\n\t\t    \"unit_price_to_retailer\" : 99,\n\t\t    \"total_unit_price_to_retailer\": 9900,\n\t\t    \"quantity\": 10,\n\t\t    \"item_amount\" : 100,\n\t\t    \"item_name\" : \"RSC 100\",\n\t\t    \"item_type\" : \"Coupon\",\n\t\t    \"item_of\" : \"Idea\"\n\t\t}\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"Invoice-information-added\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"599172c9196c600f74118eb7\",\n        \"updatedAt\": \"2017-08-14T10:10:00.884Z\",\n        \"createdAt\": \"2017-08-14T09:52:09.401Z\",\n        \"item_list\": [\n            {\n                \"_id\": \"599176f8934f4012d0ed11c4\",\n                \"hsn_sac_code\": \"2343dsgfsdg\",\n                \"percentage_deduction\": 3.5,\n                \"total_unit_price_to_retailer\": 960,\n                \"unit_price_to_retailer\": 48,\n                \"quantity\": 40,\n                \"item_amount\": 50,\n                \"item_type\": \"Coupon\",\n                \"item_of\": \"Idea\",\n                \"item_id\": \"5985eb29acc2a51eac48750b\"\n            },\n            {\n                \"_id\": \"5985f16e1bd5da1e98f538e9\",\n                \"hsn_sac_code\": \"2343dsgfsdg\",\n                \"percentage_deduction\": 3.5,\n                \"total_unit_price_to_retailer\": 9900,\n                \"unit_price_to_retailer\": 99,\n                \"quantity\": 10,\n                \"item_amount\": 100,\n                \"item_type\": \"Coupon\",\n                \"item_of\": \"Idea\",\n                \"item_id\": null\n            }\n        ],\n        \"invoice_total\": 1271,\n        \"total_gst\": 550.5,\n        \"sgst_amount\": 110.25,\n        \"cgst_amount\": 110.25,\n        \"total_before_tax\": 1050.5,\n        \"invoice_date\": 1502696505000,\n        \"invoice_number\": \"INV3\",\n        \"year\": 2017,\n        \"month\": 8,\n        \"retailer_state_code\": 21,\n        \"retailer_gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n        \"retailer_pan_number\": \"BNUPS6438L\",\n        \"retailer_address\": \"Varkkala Vadasserikonam\",\n        \"retailer_name\": \"Yanuma Agencies\",\n        \"retailer_id\": \"598564e182fb2712703a07a5\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>1 for success.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>sucess code .</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>token returned from the API.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"'item validation failed\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/invoice/invoice.documentation.js",
    "groupTitle": "Invoice"
  },
  {
    "type": "delete",
    "url": "/invoices/:id",
    "title": "Cancel Invoice",
    "name": "Invoice___cancelInvoice",
    "group": "Invoice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the Invoice</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>1 for success.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>sucess code .</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>token returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"Invoice-cancellation-success\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"599172c9196c600f74118eb7\",\n        \"updatedAt\": \"2017-08-14T10:10:00.884Z\",\n        \"createdAt\": \"2017-08-14T09:52:09.401Z\",\n        \"item_list\": [\n            {\n                \"_id\": \"599176f8934f4012d0ed11c4\",\n                \"hsn_sac_code\": \"2343dsgfsdg\",\n                \"percentage_deduction\": 3.5,\n                \"total_unit_price_to_retailer\": 960,\n                \"unit_price_to_retailer\": 48,\n                \"quantity\": 40,\n                \"item_amount\": 50,\n                \"item_type\": \"Coupon\",\n                \"item_of\": \"Idea\",\n                \"item_id\": \"5985eb29acc2a51eac48750b\"\n            },\n            {\n                \"_id\": \"5985f16e1bd5da1e98f538e9\",\n                \"hsn_sac_code\": \"2343dsgfsdg\",\n                \"percentage_deduction\": 3.5,\n                \"total_unit_price_to_retailer\": 9900,\n                \"unit_price_to_retailer\": 99,\n                \"quantity\": 10,\n                \"item_amount\": 100,\n                \"item_type\": \"Coupon\",\n                \"item_of\": \"Idea\",\n                \"item_id\": null\n            }\n        ],\n        \"is_active\": false,\n        \"invoice_total\": 1271,\n        \"total_gst\": 550.5,\n        \"sgst_amount\": 110.25,\n        \"cgst_amount\": 110.25,\n        \"total_before_tax\": 1050.5,\n        \"invoice_date\": 1502696505000,\n        \"invoice_number\": \"INV3\",\n        \"year\": 2017,\n        \"month\": 8,\n        \"retailer_state_code\": 21,\n        \"retailer_gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n        \"retailer_pan_number\": \"BNUPS6438L\",\n        \"retailer_address\": \"Varkkala Vadasserikonam\",\n        \"retailer_name\": \"Yanuma Agencies\",\n        \"retailer_id\": \"598564e182fb2712703a07a5\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"'item validation failed\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/invoice/invoice.documentation.js",
    "groupTitle": "Invoice"
  },
  {
    "type": "get",
    "url": "/invoices",
    "title": "Get Invoices",
    "name": "Invoice___getInvoices",
    "group": "Invoice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "retailer_id",
            "description": "<p>_if of retailer selected from the Retailer drop-down [search query string].</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "month",
            "description": "<p>selected month number, values would be from 1 to 12 [search query string].</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "year",
            "description": "<p>selected year [search query string].</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invoice_number",
            "description": "<p>this would be a '%Like%' search [search query string].</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "retailer_name",
            "description": "<p>this would be a '%Like%' search [search query string].</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invoice_date",
            "description": "<p>moment timestamp of selected date - start of the day without time [search query string].</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>true / false - determines whether the invoice is cancelled or not [search query string]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Response Format",
          "content": "{\n    \"status\": 1,\n    \"message\": \"invoice-list-success\",\n    \"code\": 200,\n    \"totalRecords\": 2,\n    \"limitPerPage\": 100000,\n    \"page\": 1,\n    \"searchparams\": {\n        \"total_count\": 2\n    },\n    \"data\": [\n        {\n            \"_id\": \"599172c9196c600f74118eb7\",\n            \"updatedAt\": \"2017-08-14T10:10:00.884Z\",\n            \"createdAt\": \"2017-08-14T09:52:09.401Z\",\n            \"item_list\": [\n                {\n                    \"_id\": \"599176f8934f4012d0ed11c4\",\n                    \"hsn_sac_code\": \"2343dsgfsdg\",\n                    \"percentage_deduction\": 3.5,\n                    \"total_unit_price_to_retailer\": 960,\n                    \"unit_price_to_retailer\": 48,\n                    \"quantity\": 40,\n                    \"item_amount\": 50,\n                    \"item_type\": \"Coupon\",\n                    \"item_of\": \"Idea\",\n                    \"item_id\": \"5985eb29acc2a51eac48750b\"\n                },\n                {\n                    \"_id\": \"5985f16e1bd5da1e98f538e9\",\n                    \"hsn_sac_code\": \"2343dsgfsdg\",\n                    \"percentage_deduction\": 3.5,\n                    \"total_unit_price_to_retailer\": 9900,\n                    \"unit_price_to_retailer\": 99,\n                    \"quantity\": 10,\n                    \"item_amount\": 100,\n                    \"item_type\": \"Coupon\",\n                    \"item_of\": \"Idea\",\n                    \"item_id\": null\n                }\n            ],\n            \"invoice_total\": 1271,\n            \"total_gst\": 550.5,\n            \"sgst_amount\": 110.25,\n            \"cgst_amount\": 110.25,\n            \"total_before_tax\": 1050.5,\n            \"invoice_date\": 1502696505000,\n            \"invoice_number\": \"INV3\",\n            \"year\": 2017,\n            \"month\": 8,\n            \"retailer_state_code\": 21,\n            \"retailer_gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n            \"retailer_pan_number\": \"BNUPS6438L\",\n            \"retailer_address\": \"Varkkala Vadasserikonam\",\n            \"retailer_name\": \"Yanuma Agencies\",\n            \"retailer_id\": \"598564e182fb2712703a07a5\"\n        },\n        {\n            \"_id\": \"599167fdb32bf01420316336\",\n            \"updatedAt\": \"2017-08-14T09:06:05.727Z\",\n            \"createdAt\": \"2017-08-14T09:06:05.727Z\",\n            \"item_list\": [\n                {\n                    \"_id\": \"599167fdb32bf01420316337\",\n                    \"hsn_sac_code\": \"2343dsgfsdg\",\n                    \"percentage_deduction\": 3.5,\n                    \"total_unit_price_to_retailer\": 960,\n                    \"unit_price_to_retailer\": 48,\n                    \"quantity\": 20,\n                    \"item_amount\": 50,\n                    \"item_type\": \"Coupon\",\n                    \"item_of\": \"Idea\",\n                    \"item_id\": \"5985eb29acc2a51eac48750b\"\n                },\n                {\n                    \"_id\": \"5985f16e1bd5da1e98f538e9\",\n                    \"hsn_sac_code\": \"2343dsgfsdg\",\n                    \"percentage_deduction\": 3.5,\n                    \"total_unit_price_to_retailer\": 9900,\n                    \"unit_price_to_retailer\": 99,\n                    \"quantity\": 100,\n                    \"item_amount\": 100,\n                    \"item_type\": \"Coupon\",\n                    \"item_of\": \"Idea\",\n                    \"item_id\": null\n                }\n            ],\n            \"invoice_total\": 1271,\n            \"total_gst\": 220.5,\n            \"sgst_amount\": 110.25,\n            \"cgst_amount\": 110.25,\n            \"total_before_tax\": 1050.5,\n            \"invoice_date\": 1502696505000,\n            \"invoice_number\": \"INV2\",\n            \"year\": 2017,\n            \"month\": 8,\n            \"retailer_state_code\": 21,\n            \"retailer_gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n            \"retailer_pan_number\": \"BNUPS6438L\",\n            \"retailer_address\": \"Varkkala Vadasserikonam\",\n            \"retailer_name\": null,\n            \"retailer_id\": \"598566b850633c19f4920a8f\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n    \"status\": 1,\n    \"message\": \"Invoice-list-success\",\n    \"code\": 200,\n    \"totalRecords\": 0,\n    \"limitPerPage\": 100000,\n    \"page\": 1,\n    \"searchparams\": {\n        \"name\": \"agencfdg\",\n        \"total_count\": 0\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/invoice/invoice.documentation.js",
    "groupTitle": "Invoice"
  },
  {
    "type": "put",
    "url": "/invoices/:id",
    "title": "Update Invoice",
    "name": "Invoice___updateInvoiceDetails",
    "group": "Invoice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the Invoice</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "retailer_id",
            "description": "<p>_id of the selected retailer</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invoice_date",
            "description": "<p>moment timestamp of selected date[start of the day - without time].</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "total_before_tax",
            "description": "<p>total amount before applying the gst tax amount.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cgst_amount",
            "description": "<p>cgst amount of the total tax according to the cgst percentage.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sgst_amount",
            "description": "<p>sgst amount of the total tax according to the sgst percentage.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_discount",
            "description": "<p>Sum of discount amounts.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_gst",
            "description": "<p>Sum of cgst and sgst amounts.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invoice_total",
            "description": "<p>Sum of the total_before_tax and total_gst.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "item_list",
            "description": "<p>list of items added to the invoice with details of each item, quantity and total_unit_price_to_retailer the</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n  \"retailer_id\": \"598564e182fb2712703a07a5\",\n  \"invoice_date\": 1502696505000,\n  \"total_before_tax\": 1050.50,\n  \"cgst_amount\": 110.25,\n  \"sgst_amount\": 110.25,\n  \"total_gst\": 550.50,\n  \"total_discount\": 150.00,\n  \"invoice_total\": 1271,\n  \"item_list\": [\n        {\n            \"discount\": 100,\n        \t\"item_id\": \"5985eb29acc2a51eac48750b\",\n\t\t    \"hsn_sac_code\" : \"2343dsgfsdg\",\n\t\t    \"percentage_deduction\" : 3.5,\n\t\t    \"unit_price_to_retailer\" : 48,\n\t\t    \"total_unit_price_to_retailer\": 960,\n\t\t    \"quantity\": 40,\n\t\t    \"item_amount\" : 50,\n\t\t    \"item_name\" : \"RSC 50\",\n\t\t    \"item_type\" : \"Coupon\",\n\t\t    \"item_of\" : \"Idea\"\n        },\n        {\n            \"discount\": 50,\n\t\t    \"_id\" : \"5985f16e1bd5da1e98f538e9\",\n\t\t    \"hsn_sac_code\" : \"2343dsgfsdg\",\n\t\t    \"percentage_deduction\" : 3.5,\n\t\t    \"unit_price_to_retailer\" : 99,\n\t\t    \"total_unit_price_to_retailer\": 9900,\n\t\t    \"quantity\": 10,\n\t\t    \"item_amount\" : 100,\n\t\t    \"item_name\" : \"RSC 100\",\n\t\t    \"item_type\" : \"Coupon\",\n\t\t    \"item_of\" : \"Idea\"\n\t\t}\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"Invoice-information-updated\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"599172c9196c600f74118eb7\",\n        \"updatedAt\": \"2017-08-14T10:10:00.884Z\",\n        \"createdAt\": \"2017-08-14T09:52:09.401Z\",\n        \"item_list\": [\n            {\n                \"_id\": \"599176f8934f4012d0ed11c4\",\n                \"hsn_sac_code\": \"2343dsgfsdg\",\n                \"percentage_deduction\": 3.5,\n                \"total_unit_price_to_retailer\": 960,\n                \"unit_price_to_retailer\": 48,\n                \"quantity\": 40,\n                \"item_amount\": 50,\n                \"item_type\": \"Coupon\",\n                \"item_of\": \"Idea\",\n                \"item_id\": \"5985eb29acc2a51eac48750b\"\n            },\n            {\n                \"_id\": \"5985f16e1bd5da1e98f538e9\",\n                \"hsn_sac_code\": \"2343dsgfsdg\",\n                \"percentage_deduction\": 3.5,\n                \"total_unit_price_to_retailer\": 9900,\n                \"unit_price_to_retailer\": 99,\n                \"quantity\": 10,\n                \"item_amount\": 100,\n                \"item_type\": \"Coupon\",\n                \"item_of\": \"Idea\",\n                \"item_id\": null\n            }\n        ],\n        \"invoice_total\": 1271,\n        \"total_gst\": 550.5,\n        \"sgst_amount\": 110.25,\n        \"cgst_amount\": 110.25,\n        \"total_before_tax\": 1050.5,\n        \"invoice_date\": 1502696505000,\n        \"invoice_number\": \"INV3\",\n        \"year\": 2017,\n        \"month\": 8,\n        \"retailer_state_code\": 21,\n        \"retailer_gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n        \"retailer_pan_number\": \"BNUPS6438L\",\n        \"retailer_address\": \"Varkkala Vadasserikonam\",\n        \"retailer_name\": \"Yanuma Agencies\",\n        \"retailer_id\": \"598564e182fb2712703a07a5\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>1 for success.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>sucess code .</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>token returned from the API.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"'item validation failed\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/invoice/invoice.documentation.js",
    "groupTitle": "Invoice"
  },
  {
    "type": "put",
    "url": "/items/:id/activateInactivate",
    "title": "Activate/Inactivate Item",
    "name": "Item___activateInactivate",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the item</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>true / false</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n  \"is_active\": true  \n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"activated-successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"598566b850633c19f4920a8f\",\n        \"item_of\": \"Idea\",\n        \"item_type\": \"Coupon\",\n        \"item_name\": \"RSC 100\",\n        \"item_amount\": 100,\n        \"unit_price_to_retailer\": 99,\n        \"percentage_deduction\": 3.5,\n        \"hsn_sac_code\": \"2343dsgfsdg\",\n        \"is_active\": true\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>1 for success.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>sucess code .</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>token returned from the API.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"'item update failed\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/item/item.documentation.js",
    "groupTitle": "Item"
  },
  {
    "type": "post",
    "url": "/items",
    "title": "Add Item",
    "name": "Item___addItem",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "item_of",
            "description": "<p>values would be Idea, SunDirect.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "item_type",
            "description": "<p>values would be Coupon, Flexy etc.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "item_name",
            "description": "<p>name of the item.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_amount",
            "description": "<p>amount of item.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "unit_price_to_retailer",
            "description": "<p>selling price to retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "percentage_deduction",
            "description": "<p>percentage of amount deductin to retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hsn_sac_code",
            "description": "<p>hsn code of the item</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>true / false [default value would be 'true'].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "  {\n  \"item_of\": \"Idea\",\n  \"item_type\": \"Coupon\",\n  \"item_name\": \"RSC 100\",\n  \"item_amount\": 100,\n  \"unit_price_to_retailer\": 99,\n  \"percentage_deduction\": 3.5,\n  \"hsn_sac_code\": \"2343dsgfsdg\",\n  \"is_active\": true\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"Item-added-successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"5985f16e1bd5da1e98f538e9\",\n        \"item_of\": \"Idea\",\n        \"item_type\": \"Coupon\",\n        \"item_name\": \"RSC 100\",\n        \"item_amount\": 100,\n        \"unit_price_to_retailer\": 99,\n        \"percentage_deduction\": 3.5,\n        \"hsn_sac_code\": \"2343dsgfsdg\",\n  \"is_active\": true\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>1 for success.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>sucess code .</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>data returned from the API.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'if exists'",
          "content": "\n{\n    \"status\": 0,\n    \"message\": \"Item-exists\",\n    \"code\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/item/item.documentation.js",
    "groupTitle": "Item"
  },
  {
    "type": "get",
    "url": "/items",
    "title": "Get Items",
    "name": "Item___getItem",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "item_name",
            "description": "<p>search query string.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "item_type",
            "description": "<p>search query string.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_amount",
            "description": "<p>search query string.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hsn_sac_code",
            "description": "<p>search query string.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>true / false [search query string]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Response Format",
          "content": "{\n    \"status\": 1,\n    \"message\": \"item-list-success\",\n    \"code\": 200,\n    \"totalRecords\": 2,\n    \"limitPerPage\": 100000,\n    \"page\": 1,\n    \"searchparams\": {\n        \"total_count\": 2\n    },\n    \"data\": [\n        {\n            \"_id\": \"5985eb29acc2a51eac48750b\",\n            \"item_of\": \"Idea\",\n            \"item_type\": \"Coupon\",\n            \"item_name\": \"RSC 50\",\n            \"item_amount\": 50,\n            \"unit_price_to_retailer\": 48,\n            \"percentage_deduction\": 3.5,\n            \"hsn_sac_code\": \"2343dsgfsdg\"\n        },\n        {\n            \"_id\": \"5985ec326689701e14a04419\",\n            \"item_of\": \"Idea\",\n            \"item_type\": \"Flexy\",\n            \"item_name\": \"2000\",\n            \"item_amount\": 2000,\n            \"unit_price_to_retailer\": 1900,\n            \"percentage_deduction\": 2,\n            \"hsn_sac_code\": \"23435\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n    \"status\": 1,\n    \"message\": \"Item-list-success\",\n    \"code\": 200,\n    \"totalRecords\": 0,\n    \"limitPerPage\": 100000,\n    \"page\": 1,\n    \"searchparams\": {\n        \"name\": \"agencfdg\",\n        \"total_count\": 0\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/item/item.documentation.js",
    "groupTitle": "Item"
  },
  {
    "type": "get",
    "url": "/items/:id",
    "title": "Get  Details",
    "name": "Item___getItemDetails",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the selected Item.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Response Format",
          "content": "{\n    \"status\": 1,\n    \"message\": \"Item-information-retrieved-successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"5985f16e1bd5da1e98f538e9\",\n        \"item_of\": \"Idea\",\n        \"item_type\": \"Coupon\",\n        \"item_name\": \"RSC 100\",\n        \"item_amount\": 100,\n        \"unit_price_to_retailer\": 99,\n        \"percentage_deduction\": 3.5,\n        \"hsn_sac_code\": \"2343dsgfsdg\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n    \"status\": 0,\n    \"message\": \"Bad Request\",\n    \"code\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/item/item.documentation.js",
    "groupTitle": "Item"
  },
  {
    "type": "get",
    "url": "/items?from=dropdown",
    "title": "Get Items list for using in Drop Down",
    "name": "Item___getItemForDropDown",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>true / false [search query string]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Response Format",
          "content": "{\n    \"status\": 1,\n    \"message\": \"item-list-success\",\n    \"code\": 200,\n    \"totalRecords\": 6,\n    \"limitPerPage\": 100000,\n    \"page\": 1,\n    \"searchparams\": {\n        \"from\": \"dropdown\",\n        \"total_count\": 6\n    },\n    \"data\": [\n        {\n            \"_id\": \"5985ec326689701e14a04419\",\n            \"item_type\": \"Flexy\",\n            \"item_name\": \"2000\",\n            \"id\": \"5985ec326689701e14a04419\",\n            \"text\": \"2000 - Flexy\"\n        },\n        {\n            \"_id\": \"5997df1f32c9c60011c87a01\",\n            \"item_type\": \"222\",\n            \"item_name\": \"2222\",\n            \"id\": \"5997df1f32c9c60011c87a01\",\n            \"text\": \"2222 - 222\"\n        },\n        {\n            \"_id\": \"5985eb29acc2a51eac48750b\",\n            \"item_type\": \"Coupon\",\n            \"item_name\": \"RSC 50\",\n            \"id\": \"5985eb29acc2a51eac48750b\",\n            \"text\": \"RSC 50 - Coupon\"\n        },\n        {\n            \"_id\": \"5985f16e1bd5da1e98f538e9\",\n            \"item_type\": \"Coupon\",\n            \"item_name\": \"RSC 100\",\n            \"id\": \"5985f16e1bd5da1e98f538e9\",\n            \"text\": \"RSC 100 - Coupon\"\n        },\n        {\n            \"_id\": \"5997e256b99a20001147a0d1\",\n            \"item_type\": \"Flexy\",\n            \"item_name\": \"TEST\",\n            \"id\": \"5997e256b99a20001147a0d1\",\n            \"text\": \"TEST - Flexy\"\n        },\n        {\n            \"_id\": \"599d963506d0a80011ecd860\",\n            \"item_type\": \"Flexy\",\n            \"item_name\": \"450\",\n            \"id\": \"599d963506d0a80011ecd860\",\n            \"text\": \"450 - Flexy\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n    \"status\": 1,\n    \"message\": \"Item-list-success\",\n    \"code\": 200,\n    \"totalRecords\": 0,\n    \"limitPerPage\": 100000,\n    \"page\": 1,\n    \"searchparams\": {\n        \"name\": \"agencfdg\",\n        \"total_count\": 0\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/item/item.documentation.js",
    "groupTitle": "Item"
  },
  {
    "type": "put",
    "url": "/items/:id",
    "title": "Update Item",
    "name": "Item___updateItem",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the item</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "item_of",
            "description": "<p>values would be Idea, SunDirect.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "item_type",
            "description": "<p>values would be Coupon, Flexy etc.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "item_name",
            "description": "<p>name of the item.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_amount",
            "description": "<p>amount of item.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "unit_price_to_retailer",
            "description": "<p>selling price to retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "percentage_deduction",
            "description": "<p>percentage of amount deductin to retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hsn_sac_code",
            "description": "<p>hsn code of the item</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>true / false [default value would be 'true'].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n  \"item_of\": \"Idea\",\n  \"item_type\": \"Coupon\",\n  \"item_name\": \"RSC 100\",\n  \"item_amount\": 100,\n  \"unit_price_to_retailer\": 99,\n  \"percentage_deduction\": 3.5,\n  \"hsn_sac_code\": \"2343dsgfsdg\",\n  \"is_active\": true  \n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"Item-information-updated\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"598566b850633c19f4920a8f\",\n        \"item_of\": \"Idea\",\n        \"item_type\": \"Coupon\",\n        \"item_name\": \"RSC 100\",\n        \"item_amount\": 100,\n        \"unit_price_to_retailer\": 99,\n        \"percentage_deduction\": 3.5,\n        \"hsn_sac_code\": \"2343dsgfsdg\",\n        \"is_active\": true\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>1 for success.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>sucess code .</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>token returned from the API.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"'item validation failed\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/item/item.documentation.js",
    "groupTitle": "Item"
  },
  {
    "type": "put",
    "url": "/retailers/:id/activateInactivate",
    "title": "Activate/Inactivate Retailer",
    "name": "Retailer___activateInactivate",
    "group": "Retailer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the retailer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>true / false .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n\"is_active\": true\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"activated-successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"598566b850633c19f4920a8f\",\n        \"name\": \"Amys Agencies Updated\",\n        \"is_active\": true,\n        \"address\": \"Varkkala Vadasserikonam\",\n        \"city\": \"Trivandrum\",\n        \"state_code\": 21,\n        \"state\": \"Kerala\",\n        \"zip\": 695143,\n        \"phone_number\": 9846202554,\n        \"pan_number\": \"BNUPS6438L\",\n        \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n        \"place_of_supply\": \"KERALA\"        \n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>1 for success.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>sucess code .</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>token returned from the API.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"'retailer-update-failed\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/retailer/retailer.documentation.js",
    "groupTitle": "Retailer"
  },
  {
    "type": "post",
    "url": "/retailers",
    "title": "Add Retailer",
    "name": "Retailer___addRetailer",
    "group": "Retailer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>address of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>city of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>state of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state_code",
            "description": "<p>state_code of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "zip",
            "description": "<p>zip of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gst_registration_number",
            "description": "<p>gst number of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "place_of_supply",
            "description": "<p>Place of supply of retailer[default value would be 'Kerala'].</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pan_number",
            "description": "<p>pan number of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of retailer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>true / false [default value would be 'true'].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "  {\n  \"name\": \"Yanuma Communications Varkkala\",\n  \"email\": \"yamunacommunications@gmail.com\",\n  \"address\": \"Varkkala, Vadasserikonam\",\n  \"city\": \"Trivandrum\",\n  \"state\": \"Kerala\",\n  \"state_code\": 21,\n  \"zip\": 695143,\n  \"phone_number\": 9846202554,\n  \"pan_number\": \"BNUPS6438L\",\n  \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n  \"place_of_supply\": \"KERALA\",\n  \"is_active\": true\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"retailer-added-successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"59856a70123c7d1234363fb8\",\n        \"name\": \"Yanuma Communications Varkkala\",\n        \"is_active\": true,\n        \"address\": \"Varkkala Vadasserikonam\",\n        \"city\": \"Trivandrum\",\n        \"state_code\": 21,\n        \"state\": \"Kerala\",\n        \"zip\": 695143,\n        \"phone_number\": 9846202554,\n        \"pan_number\": \"BNUPS6438L\",\n        \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n        \"place_of_supply\": \"KERALA\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>1 for success.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>sucess code .</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>data returned from the API.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'if exists'",
          "content": "\n{\n    \"status\": 0,\n    \"message\": \"retailer-exists\",\n    \"code\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/retailer/retailer.documentation.js",
    "groupTitle": "Retailer"
  },
  {
    "type": "get",
    "url": "/retailers?name=:name&gst_registration_number=:gst_registration_number&pan_number=:pan_number&phone_number=:phone_number",
    "title": "Get Retailers",
    "name": "Retailer___getRetailer",
    "group": "Retailer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of retailer[search query string].</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gst_registration_number",
            "description": "<p>gst number of retailer[search query string].</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pan_number",
            "description": "<p>pan number of retailer[search query string].</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of retailer[search query string]</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>true / false [search query string]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Response Format",
          "content": "{\n    \"status\": 1,\n    \"message\": \"retailer-list-success\",\n    \"code\": 200,\n    \"totalRecords\": 2,\n    \"limitPerPage\": 100000,\n    \"page\": 1,\n    \"searchparams\": {\n        \"name\": \"agenc\",\n        \"total_count\": 2\n    },\n    \"data\": [\n        {\n            \"_id\": \"598566b850633c19f4920a8f\",\n            \"name\": \"Amys Agencies Updated\",\n            \"is_active\": true,\n            \"address\": \"Varkkala Vadasserikonam\",\n            \"city\": \"Trivandrum\",\n            \"state_code\": 21,\n            \"state\": \"Kerala\",\n            \"zip\": 695143,\n            \"phone_number\": 9846202554,\n            \"pan_number\": \"BNUPS6438L\",\n            \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\"\n        },\n        {\n            \"_id\": \"598564e182fb2712703a07a5\",\n            \"name\": \"Yanuma Agencies\",\n            \"is_active\": true,\n            \"address\": \"Varkkala Vadasserikonam\",\n            \"city\": \"Trivandrum\",\n            \"state_code\": 21,\n            \"state\": \"Kerala\",\n            \"zip\": 695143,\n            \"phone_number\": 9846202554,\n            \"pan_number\": \"BNUPS6438L\",\n            \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n    \"status\": 1,\n    \"message\": \"retailer-list-success\",\n    \"code\": 200,\n    \"totalRecords\": 0,\n    \"limitPerPage\": 100000,\n    \"page\": 1,\n    \"searchparams\": {\n        \"name\": \"agencfdg\",\n        \"total_count\": 0\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/retailer/retailer.documentation.js",
    "groupTitle": "Retailer"
  },
  {
    "type": "get",
    "url": "/retailers/:id",
    "title": "Get Retailers",
    "name": "Retailer___getRetailerDetails",
    "group": "Retailer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the selected retailer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Response Format",
          "content": "{\n    \"status\": 1,\n    \"message\": \"Retailer-information-retrieved-successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"598564e182fb2712703a07a5\",\n        \"name\": \"Yanuma Agencies\",\n        \"is_active\": true,\n        \"address\": \"Varkkala Vadasserikonam\",\n        \"city\": \"Trivandrum\",\n        \"state_code\": 21,\n        \"state\": \"Kerala\",\n        \"zip\": 695143,\n        \"phone_number\": 9846202554,\n        \"pan_number\": \"BNUPS6438L\",\n        \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n        \"place_of_supply\": \"KERALA\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n    \"status\": 0,\n    \"message\": \"Bad Request\",\n    \"code\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/retailer/retailer.documentation.js",
    "groupTitle": "Retailer"
  },
  {
    "type": "get",
    "url": "/retailers?from=dropdown",
    "title": "Get Retailers List for using in Drop down",
    "name": "Retailer___getRetailerForDropDown",
    "group": "Retailer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>true / false [search query string]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Response Format",
          "content": "{\n    \"status\": 1,\n    \"message\": \"retailer-list-success\",\n    \"code\": 200,\n    \"totalRecords\": 7,\n    \"limitPerPage\": 100000,\n    \"page\": 1,\n    \"searchparams\": {\n        \"from\": \"dropdown\",\n        \"total_count\": 7\n    },\n    \"data\": [\n        {\n            \"_id\": \"599d94e206d0a80011ecd85d\",\n            \"name\": \"Amys\",\n            \"text\": \"Amys\",\n            \"id\": \"599d94e206d0a80011ecd85d\"\n        },\n        {\n            \"_id\": \"598566b850633c19f4920a8f\",\n            \"name\": \"Amys Agencies Updated\",\n            \"text\": \"Amys Agencies Updated\",\n            \"id\": \"598566b850633c19f4920a8f\"\n        },\n        {\n            \"_id\": \"5997c6e332c9c60011c87a00\",\n            \"name\": \"Idea\",\n            \"text\": \"Idea\",\n            \"id\": \"5997c6e332c9c60011c87a00\"\n        },\n        {\n            \"_id\": \"59947fcf6072cd00114994ea\",\n            \"name\": \"R\",\n            \"text\": \"R\",\n            \"id\": \"59947fcf6072cd00114994ea\"\n        },\n        {\n            \"_id\": \"5997e231b99a20001147a0d0\",\n            \"name\": \"Yamuna\",\n            \"text\": \"Yamuna\",\n            \"id\": \"5997e231b99a20001147a0d0\"\n        },gi\n        {\n            \"_id\": \"5985646df1cffd19d446e11c\",\n            \"name\": \"Yanuma Communications\",\n            \"text\": \"Yanuma Communications\",\n            \"id\": \"5985646df1cffd19d446e11c\"\n        },\n        {\n            \"_id\": \"59856a70123c7d1234363fb8\",\n            \"name\": \"Yanuma Communications Varkkala\",\n            \"text\": \"Yanuma Communications Varkkala\",\n            \"id\": \"59856a70123c7d1234363fb8\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n    \"status\": 1,\n    \"message\": \"retailer-list-success\",\n    \"code\": 200,\n    \"totalRecords\": 0,\n    \"limitPerPage\": 100000,\n    \"page\": 1,\n    \"searchparams\": {\n        \"name\": \"agencfdg\",\n        \"total_count\": 0\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/retailer/retailer.documentation.js",
    "groupTitle": "Retailer"
  },
  {
    "type": "put",
    "url": "/retailers/:id",
    "title": "Update Retailer",
    "name": "Retailer___updateRetailer",
    "group": "Retailer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the retailer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>address of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>city of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>state of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state_code",
            "description": "<p>state_code of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "zip",
            "description": "<p>zip of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "place_of_supply",
            "description": "<p>Place of supply of retailer[default value would be 'Kerala'].</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gst_registration_number",
            "description": "<p>gst number of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pan_number",
            "description": "<p>pan number of retailer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone_number of retailer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>true / false [default value would be 'true'].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n  \"name\": \"Yanuma Communications Varkkala\",\n  \"email\": \"yamunacommunications@gmail.com\",\n  \"address\": \"Varkkala, Vadasserikonam\",\n  \"city\": \"Trivandrum\",\n  \"state\": \"Kerala\",\n  \"state_code\": 21,\n  \"zip\": 695143,\n  \"phone_number\": 9846202554,\n  \"pan_number\": \"BNUPS6438L\",\n  \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n\"is_active\": false,\n  \"place_of_supply\": \"KERALA\"  \n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"retailer-information-updated\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"598566b850633c19f4920a8f\",\n        \"name\": \"Amys Agencies Updated\",\n        \"is_active\": false,\n        \"address\": \"Varkkala Vadasserikonam\",\n        \"city\": \"Trivandrum\",\n        \"state_code\": 21,\n        \"state\": \"Kerala\",\n        \"zip\": 695143,\n        \"phone_number\": 9846202554,\n        \"pan_number\": \"BNUPS6438L\",\n        \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n        \"place_of_supply\": \"KERALA\"        \n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>1 for success.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>sucess code .</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>token returned from the API.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"'User validation failed\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/retailer/retailer.documentation.js",
    "groupTitle": "Retailer"
  },
  {
    "type": "get",
    "url": "/users/applicationSettings",
    "title": "User : Get applications settings",
    "name": "User___applicationSettings",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Example Response Format",
          "content": "{\n    \"status\": 1,\n    \"message\": \"Application-settings-retrieved-successfully\",\n    \"code\": 200,\n    \"data\": [\n        {\n            \"latest_idea_invoice_id\": \"INV9\"\n        },\n        {\n            \"latest_sundirect_invoice_id\": \"INV3\"\n        },\n        {\n            \"cgst_percentage\": \"9\"\n        },\n        {\n            \"sgst_percentage\": \"9\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "User"
  }
] });
