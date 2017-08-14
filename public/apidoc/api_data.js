define({ "api": [
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
            "description": "<p>values would be Idea, Sun Direct.</p>"
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "  {\n  \"item_of\": \"Idea\",\n  \"item_type\": \"Coupon\",\n  \"item_name\": \"RSC 100\",\n  \"item_amount\": 100,\n  \"unit_price_to_retailer\": 99,\n  \"percentage_deduction\": 3.5,\n  \"hsn_sac_code\": \"2343dsgfsdg\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"Item-added-successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"5985f16e1bd5da1e98f538e9\",\n        \"item_of\": \"Idea\",\n        \"item_type\": \"Coupon\",\n        \"item_name\": \"RSC 100\",\n        \"item_amount\": 100,\n        \"unit_price_to_retailer\": 99,\n        \"percentage_deduction\": 3.5,\n        \"hsn_sac_code\": \"2343dsgfsdg\"\n    }\n}",
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
    "filename": "modules/invoice/invoice.documentation.js",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "  {\n  \"item_of\": \"Idea\",\n  \"item_type\": \"Coupon\",\n  \"item_name\": \"RSC 100\",\n  \"item_amount\": 100,\n  \"unit_price_to_retailer\": 99,\n  \"percentage_deduction\": 3.5,\n  \"hsn_sac_code\": \"2343dsgfsdg\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"Item-added-successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"5985f16e1bd5da1e98f538e9\",\n        \"item_of\": \"Idea\",\n        \"item_type\": \"Coupon\",\n        \"item_name\": \"RSC 100\",\n        \"item_amount\": 100,\n        \"unit_price_to_retailer\": 99,\n        \"percentage_deduction\": 3.5,\n        \"hsn_sac_code\": \"2343dsgfsdg\"\n    }\n}",
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
            "field": "item_of",
            "description": "<p>values would be &quot;Idea&quot;, &quot;SunDirect [search query string].</p>"
          },
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
    "filename": "modules/invoice/invoice.documentation.js",
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
            "field": "item_of",
            "description": "<p>values would be &quot;Idea&quot;, &quot;SunDirect [search query string].</p>"
          },
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
            "description": "<p>values would be Idea, Sun Direct.</p>"
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n  \"item_of\": \"Idea\",\n  \"item_type\": \"Coupon\",\n  \"item_name\": \"RSC 100\",\n  \"item_amount\": 100,\n  \"unit_price_to_retailer\": 99,\n  \"percentage_deduction\": 3.5,\n  \"hsn_sac_code\": \"2343dsgfsdg\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"Item-information-updated\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"598566b850633c19f4920a8f\",\n        \"item_of\": \"Idea\",\n        \"item_type\": \"Coupon\",\n        \"item_name\": \"RSC 100\",\n        \"item_amount\": 100,\n        \"unit_price_to_retailer\": 99,\n        \"percentage_deduction\": 3.5,\n        \"hsn_sac_code\": \"2343dsgfsdg\"\n    }\n}",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n  \"item_of\": \"Idea\",\n  \"item_type\": \"Coupon\",\n  \"item_name\": \"RSC 100\",\n  \"item_amount\": 100,\n  \"unit_price_to_retailer\": 99,\n  \"percentage_deduction\": 3.5,\n  \"hsn_sac_code\": \"2343dsgfsdg\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"Item-information-updated\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"598566b850633c19f4920a8f\",\n        \"item_of\": \"Idea\",\n        \"item_type\": \"Coupon\",\n        \"item_name\": \"RSC 100\",\n        \"item_amount\": 100,\n        \"unit_price_to_retailer\": 99,\n        \"percentage_deduction\": 3.5,\n        \"hsn_sac_code\": \"2343dsgfsdg\"\n    }\n}",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "  {\n  \"name\": \"Yanuma Communications Varkkala\",\n  \"email\": \"yamunacommunications@gmail.com\",\n  \"address\": \"Varkkala, Vadasserikonam\",\n  \"city\": \"Trivandrum\",\n  \"state\": \"Kerala\",\n  \"state_code\": 21,\n  \"zip\": 695143,\n  \"phone_number\": 9846202554,\n  \"pan_number\": \"BNUPS6438L\",\n  \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n  \"place_of_supply\": \"KERALA\"\n}",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n  \"name\": \"Yanuma Communications Varkkala\",\n  \"email\": \"yamunacommunications@gmail.com\",\n  \"address\": \"Varkkala, Vadasserikonam\",\n  \"city\": \"Trivandrum\",\n  \"state\": \"Kerala\",\n  \"state_code\": 21,\n  \"zip\": 695143,\n  \"phone_number\": 9846202554,\n  \"pan_number\": \"BNUPS6438L\",\n  \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n  \"place_of_supply\": \"KERALA\"  \n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"retailer-information-updated\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"598566b850633c19f4920a8f\",\n        \"name\": \"Amys Agencies Updated\",\n        \"is_active\": true,\n        \"address\": \"Varkkala Vadasserikonam\",\n        \"city\": \"Trivandrum\",\n        \"state_code\": 21,\n        \"state\": \"Kerala\",\n        \"zip\": 695143,\n        \"phone_number\": 9846202554,\n        \"pan_number\": \"BNUPS6438L\",\n        \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\",\n        \"place_of_supply\": \"KERALA\"        \n    }\n}",
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
  }
] });
