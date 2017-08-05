define({ "api": [
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
          "content": "  {\n  \"name\": \"Yanuma Communications Varkkala\",\n  \"email\": \"yamunacommunications@gmail.com\",\n  \"address\": \"Varkkala, Vadasserikonam\",\n  \"city\": \"Trivandrum\",\n  \"state\": \"Kerala\",\n  \"state_code\": 21,\n  \"zip\": 695143,\n  \"phone_number\": 9846202554,\n  \"pan_number\": \"BNUPS6438L\",\n  \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"retailer-added-successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"59856a70123c7d1234363fb8\",\n        \"name\": \"Yanuma Communications Varkkala\",\n        \"is_active\": true,\n        \"address\": \"Varkkala Vadasserikonam\",\n        \"city\": \"Trivandrum\",\n        \"state_code\": 21,\n        \"state\": \"Kerala\",\n        \"zip\": 695143,\n        \"phone_number\": 9846202554,\n        \"pan_number\": \"BNUPS6438L\",\n        \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\"\n    }\n}",
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
            "description": "<p>name of retailer.</p>"
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
          "content": " {\n  \"name\": \"Yanuma Communications Varkkala\",\n  \"email\": \"yamunacommunications@gmail.com\",\n  \"address\": \"Varkkala, Vadasserikonam\",\n  \"city\": \"Trivandrum\",\n  \"state\": \"Kerala\",\n  \"state_code\": 21,\n  \"zip\": 695143,\n  \"phone_number\": 9846202554,\n  \"pan_number\": \"BNUPS6438L\",\n  \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"retailer-information-updated\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"598566b850633c19f4920a8f\",\n        \"name\": \"Amys Agencies Updated\",\n        \"is_active\": true,\n        \"address\": \"Varkkala Vadasserikonam\",\n        \"city\": \"Trivandrum\",\n        \"state_code\": 21,\n        \"state\": \"Kerala\",\n        \"zip\": 695143,\n        \"phone_number\": 9846202554,\n        \"pan_number\": \"BNUPS6438L\",\n        \"gst_registration_number\": \"GST0BNUPS6438LIN1Z\"\n    }\n}",
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
