define({ "api": [
  {
    "type": "put",
    "url": "/common/imageUpload",
    "title": "Image : Image Upload",
    "name": "Image___Upload_Image",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Should pass through header[values should be ios, android, website or webportal].</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>the image should be included in the request in the form-data</p>"
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
            "description": "<p>data returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:Image Upload",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Image upload sucess\",\n  \"code\": 200,\n  \"data\": {\n    \"image_url\": \"https://s3.eu-central-1.amazonaws.com/palaverplace/571759468a2fa1db5950ebad/720905e69e8dbd85f7453ea0d445e149355.jpg\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: if file is not attached properly",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"file not found\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/common/common.documentation.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/common/services?platform=:platform",
    "title": "Services :  services List",
    "name": "Specilisation___servicesList",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n    {\n    \"status\": 1,\n    \"message\": \"Appointment reasons list retrieved successfully.\",\n    \"code\": 200,\n    \"totalRecords\": 3,\n    \"limitPerPage\": 20,\n    \"page\": 1,\n    \"searchparams\": {\n        \"total_count\": 3\n    },\n    \"data\": [\n        {\n            \"appointment_reason\": \"Hair Cut\",\n            \"appointment_time\": 30,\n            \"_id\": \"591594d0c959ecfb77e034e8\",\n            \"amount\": 1000\n        },\n        {\n            \"appointment_reason\": \"Pedicure\",\n            \"appointment_time\": 60,\n            \"_id\": \"591594f6c959ecfb77e034e9\",\n            \"amount\": 1050\n        },\n        {\n            \"appointment_reason\": \"Hair trimming\",\n            \"appointment_time\": 15,\n            \"_id\": \"5915950ec959ecfb77e034ea\",\n            \"amount\": 120\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n    {\n  \"status\": 0,\n  \"message\": \"Platform required.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/common/common.documentation.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/common/specialisations?platform=:platform",
    "title": "Specialisation :  specialisationList",
    "name": "Specilisation___specialisationList",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n  {\n  \"status\": 1,\n  \"message\": \"Specialisation list.\",\n  \"code\": 200,\n  \"totalRecords\": 50,\n  \"limitPerPage\": 20,\n  \"page\": 1,\n  \"searchparams\": {\n    \"total_count\": 50\n  },\n  \"data\": [\n    {\n      \"_id\": \"5911959ec959ecfb77e034d2\",\n      \"name\": \"Beauty Therapist\"\n    },\n    {\n      \"_id\": \"59119523c959ecfb77e034cf\",\n      \"name\": \"Neuro\"\n    },\n    {\n      \"_id\": \"59119548c959ecfb77e034d1\",\n      \"name\": \"Hair Stylist\"\n    },\n    {\n      \"_id\": \"59119537c959ecfb77e034d0\",\n      \"name\": \"Ortho\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n    {\n  \"status\": 0,\n  \"message\": \"Platform required.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/common/common.documentation.js",
    "groupTitle": "Common"
  },
  {
    "type": "put",
    "url": "/appointments?platform=:platform",
    "title": "Appointment :cancelAppointment",
    "name": "cancelAppointment__cancelAppointment",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "appointmentIds",
            "description": "<p>Array of appointment ids to be cancelled.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request format.",
          "content": " {\n\t\"appointmentIds\": [\n\t\t\"59524b242576ae50f245d10d\",\n\t\t\"59524b432576ae50f245d10f\"\n\t]\n }",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Appointment cancellation successful.\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"status\": 0,\n \"message\": \"Platform required.\",\n \"code\": 400,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/appointment/appointment.documentation.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/appointments/:id?platform=:platform",
    "title": "getAppointmentDetails : get Appointment Details",
    "name": "getAppointmentDetails___getAppointmentDetails",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Appointment Id of the appointment.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Appointment details retrieved successfully.\",\n  \"code\": 200,\n  \"data\": {\n      \"_id\": \"59491251d3f6185d4b959726\",\n      \"service_provider_id\": null,\n      \"appointment_type\": \"P\",\n      \"appointment_duration\": 20,\n      \"family_member_name\": \"mno\",\n      \"family_member_id\": \"59195cf9df71e534cb49adf7\",\n      \"appointment_reason_id\": \"591594d0c959ecfb77e034e8\",\n      \"provider_name\": \"suni\",\n      \"provider_id\": \"59311b4cff1ff20011c79cc5\",\n      \"appointment_reason\": \"true\",\n      \"appointment_status\": \"B\",\n      \"booked_on\": 10000,\n      \"is_paid\": true,\n      \"get_amount_during_booking\": false,\n      \"service_charge_amount\": null,\n      \"premium_appointment_fee\": 1800,\n      \"total_amount\": 2000,\n      \"appointment_end_time\": 1495429556000,\n      \"time_slot\": 1495428356000,\n      \"provider_first_name\": \"Sachin\",\n      \"provider_last_name\": \"Prabhakar\",\n      \"provider_address\": \"Technopark\",\n      \"city\": \"Thiruvananthapuram\",\n      \"state\": \"Kerala\",\n      \"provider_specialisation\": \"Hair Stylist\",\n      \"phone_number\": \"9037567576\",\n      \"phone_number_type\": \"mobile\",\n      \"image_url\": \"https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468\",\n      \"gps_location\": [\n          76.8663,\n          8.571\n      ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Appointment details not retrieved successfully.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/appointment/appointment.documentation.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/common/radius?platform:platform",
    "title": "getRadiusList:  Get radiusList",
    "name": "getRadiusList___radiusList",
    "group": "Common",
    "success": {
      "examples": [
        {
          "title": "Data on success",
          "content": "   {\n  \"status\": 1,\n  \"message\": \"Radius list retrived succesfully.\",\n  \"code\": 200,\n  \"data\": [\n    10,\n    20,\n    30,\n    40,\n    50,\n    60,\n    70\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/common/common.documentation.js",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "/common/logout",
    "title": "logout:  logout",
    "name": "logout___logout",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request format.",
          "content": "  {\n\n\"platform\": \"webportal\"\n\n}",
          "type": "json"
        },
        {
          "title": "Data on success",
          "content": "      {\n  \"status\": 1,\n  \"message\": \"logout-success\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/common/common.documentation.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/providers/:providerId/timeslots?platform=:platform&selected_date=:date",
    "title": "GetTimeslots :  Get Timeslots",
    "name": "Provider___GetTimeslots",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "providerId",
            "description": "<p>_id of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "selected_date",
            "description": "<p>timestamp in milliseconds.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "from",
            "description": "<p>specify from which screen [reschedule, providerlist etc]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "calendar_view",
            "description": "<p>specify Daily or Weekly [D, W]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "{\n    \"status\": 1,\n    \"message\": \"Time slots retrieved successfully\",\n    \"code\": 200,\n    \"data\": [\n        {\n            \"start\": \"2017-06-18T00:00:00.000Z\",\n            \"end\": \"2017-06-18T10:00:00.000Z\",\n            \"overlap\": false,\n            \"rendering\": \"background\",\n            \"className\": [\n                \"event\",\n                \"bg-fc-inverse\"\n            ]\n        },\n        {\n            \"id\": \"availableForMeeting\",\n            \"start\": \"2017-06-18T10:00:00.000Z\",\n            \"end\": \"2017-06-18T11:30:00.000Z\",\n            \"rendering\": \"background\",\n            \"className\": [\n                \"event\",\n                \"bg-fc-background\"\n            ]\n        },\n        {\n            \"start\": \"2017-06-18T11:30:00.000Z\",\n            \"end\": \"2017-06-18T23:59:00.000Z\",\n            \"overlap\": false,\n            \"rendering\": \"background\",\n            \"className\": [\n                \"event\",\n                \"bg-fc-inverse\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T10:00:00.000Z\",\n            \"end\": \"2017-06-18T10:15:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T10:15:00.000Z\",\n            \"end\": \"2017-06-18T10:30:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T10:30:00.000Z\",\n            \"end\": \"2017-06-18T10:45:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T10:45:00.000Z\",\n            \"end\": \"2017-06-18T11:00:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T11:00:00.000Z\",\n            \"end\": \"2017-06-18T11:15:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T11:15:00.000Z\",\n            \"end\": \"2017-06-18T11:30:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        }\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n    \"status\": 0,\n    \"message\": \"Provider does not exist\",\n    \"code\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/provider/provider.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "get",
    "url": "/providers/nearBy?platform=:platform&page=:page&latitude=:latitude&longitude=:longitude&selected_date=:selected_date",
    "title": "Provider : Get near by provider List",
    "name": "Provider___nearByProviders",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitude",
            "description": "<p>Current location.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "longitude",
            "description": "<p>Current location.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "selected_date",
            "description": "<p>UTC timestamp in milliseconds.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "radius",
            "description": "<p>radius selected from list.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "specialisation_id",
            "description": "<p>_id of specialisation.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "appointment_type",
            "description": "<p>Specify type of appointment [R-Regular, P-Premium, B-Both]</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sort_by_field",
            "description": "<p>values are schedule_configuration, total_bookings, createdAt</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n  {\n  \"status\": 1,\n  \"message\": \"List of providers based on current locations.\",\n  \"code\": 200,\n  \"totalRecords\": 5,\n  \"limitPerPage\": 20,\n  \"page\": \"1\",\n  \"searchparams\": {\n    \"platform\": \"mobile\",\n    \"latitude\": \"8.9549\",\n    \"longitude\": \"76.6838\",\n    \"selected_date\": \"1494498730000\",\n    \"page\": \"1\",\n    \"total_count\": 5\n  },\n  \"data\": [\n    {\n      \"_id\": \"5914340cc959ecfb77e034dc\",\n      \"email\": \"arjun.sreedhar@experionglobal.com\",\n      \"service_provider_id\": \"59119932c959ecfb77e034d3\",\n      \"specialisation_id\": \"59119537c959ecfb77e034d0\",\n      \"specialisation\": \"Ortho\",\n      \"last_name\": \"Sreedhar\",\n      \"first_name\": \"Arjun\",\n      \"title\": \"Ms\",\n      \"image_url\": \"https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg\",\n      \"phone_number\": \"2435436456456\",\n      \"company\": \"Test ertert Company\",\n      \"address\": \"Exper te rte ionglobal\",\n      \"postal_code\": 685545,\n      \"state\": \"Kerala\",\n      \"state_id\": 3,\n      \"city\": \"Trivandrum\",\n      \"gps_location\": [\n        76.6838,\n        8.9549\n      ],\n      \"is_active\": true,\n      \"start_time\": 9,\n      \"end_time\": 17,\n      \"distance\": 0\n    },\n    {\n      \"_id\": \"59119c5bc959ecfb77e034d5\",\n      \"email\": \"suresh.rs@experionglobal.com\",\n      \"service_provider_id\": \"59119932c959ecfb77e034d3\",\n      \"specialisation_id\": \"59119548c959ecfb77e034d1\",\n      \"specialisation\": \"Ortho\",\n      \"last_name\": \"RS\",\n      \"first_name\": \"Suresh\",\n      \"title\": \"Mr\",\n      \"image_url\": \"https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg\",\n      \"phone_number\": \"123-34567-890\",\n      \"company\": \"Test Company 2\",\n      \"address\": \"Experionglobal 2\",\n      \"postal_code\": 687544,\n      \"state\": \"California\",\n      \"state_id\": 1,\n      \"city\": \"Test City\",\n      \"gps_location\": [\n        76.6581344604492,\n        8.8748954343653\n      ],\n      \"is_active\": true,\n      \"start_time\": 10,\n      \"end_time\": 18,\n      \"distance\": 9.33218369844991\n    },\n    {\n      \"_id\": \"59119be0c959ecfb77e034d4\",\n      \"email\": \"rakhi.mr@experionglobal.com\",\n      \"password\": \"trwetwerrfywegrbweygr7867868\",\n      \"service_provider_id\": \"59119932c959ecfb77e034d3\",\n      \"specialisation_id\": \"59119537c959ecfb77e034d0\",\n      \"specialisation\": \"Ortho\",\n      \"last_name\": \"Experion\",\n      \"first_name\": \"Rakhi\",\n      \"title\": \"Ms\",\n      \"image_url\": \"https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg\",\n      \"phone_number\": \"123-34567-890\",\n      \"company\": \"Test Company\",\n      \"address\": \"Experionglobal\",\n      \"postal_code\": 687545,\n      \"state\": \"California\",\n      \"state_id\": 1,\n      \"city\": \"Test City\",\n      \"gps_location\": [\n        76.7163,\n        8.7379\n      ],\n      \"is_active\": true,\n      \"start_time\": 8,\n      \"end_time\": 17,\n      \"createdAt\": \"2017-05-15T09:59:33.908Z\",\n      \"reset_token\": \"30300\",\n      \"updatedAt\": \"2017-05-15T12:27:45.730Z\",\n      \"distance\": 24.39208879140645\n    },\n    {\n      \"_id\": \"59197dfd7ae8611288e7c094\",\n      \"updatedAt\": \"2017-05-15T10:07:57.738Z\",\n      \"createdAt\": \"2017-05-15T10:07:57.738Z\",\n      \"email\": \"rakhi.mr+5@experionglobal.com\",\n      \"company\": \"experion\",\n      \"password\": \"abcd1234\",\n      \"is_active\": true,\n      \"phone_number\": null,\n      \"gps_location\": [\n        76.9513,\n        8.5108\n      ],\n      \"postal_code\": null,\n      \"state\": null,\n      \"state_id\": null,\n      \"city\": null,\n      \"address\": null,\n      \"type_of_access\": \"normal\",\n      \"image_url\": null,\n      \"specialisation\": \"bghh\",\n      \"specialisation_id\": null,\n      \"last_name\": \"bbb\",\n      \"first_name\": \"aaa\",\n      \"service_provider_id\": null,\n      \"distance\": 57.47080456142501\n    },\n    {\n      \"_id\": \"59197eb6b991c11ee81c4ad9\",\n      \"updatedAt\": \"2017-05-15T10:11:02.930Z\",\n      \"createdAt\": \"2017-05-15T10:11:02.930Z\",\n      \"email\": \"rakhis.mr+5@experionglobal.com\",\n      \"company\": \"experion\",\n      \"password\": \"abcd1234\",\n      \"is_active\": true,\n      \"phone_number\": null,\n      \"gps_location\": [\n        76.9477,\n        8.4845\n      ],\n      \"postal_code\": null,\n      \"state\": null,\n      \"state_id\": null,\n      \"city\": null,\n      \"address\": null,\n      \"type_of_access\": \"normal\",\n      \"image_url\": null,\n      \"specialisation\": \"bghh\",\n      \"specialisation_id\": null,\n      \"last_name\": \"bbb\",\n      \"first_name\": \"aaa\",\n      \"service_provider_id\": null,\n      \"distance\": 59.809885810330016\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Provider does not exist\",\n  \"code\": 200,\n  \"totalRecords\": 0,\n  \"limitPerPage\": 2,\n  \"page\": 1,\n  \"searchparams\": {\n  \"platform\": \"mobile\",\n  \"latitude\": \"12.55677\",\n  \"longitude\": \"76.882139\",\n  \"selected_date\": \"1494411681000\"\n},\n\"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/provider/provider.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "get",
    "url": "/providers?platform=:platform&page=1",
    "title": "Provider :  providers List for adding to My Providers",
    "name": "Provider___providersList",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n  {\n \"status\": 1,\n \"message\": \"Provider list retrieved successfully.\",\n \"code\": 200,\n \"totalRecords\": 3,\n \"limitPerPage\": 20,\n \"page\": \"1\",\n \"searchparams\": {\n   \"platform\": \"webportal\",\n   \"page\": \"1\",\n   \"total_count\": 3\n },\n \"data\": [\n   {\n     \"_id\": \"59119be0c959ecfb77e034d4\",\n     \"first_name\": \"Rakhi\",\n     \"last_name\": \"Experion\",\n     \"specialisation_id\": \"59119537c959ecfb77e034d0\",\n     \"specialisation\": \"Ortho\",\n     \"phone_number\": \"123-34567-890\",\n     \"image_url\": \"https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg\",\n     \"company\": \"Test Company\",\n     \"address\": \"Experionglobal\",\n     \"city\": \"Test City\",\n     \"state_id\": 1,\n     \"postal_code\": 687545,\n     \"service_provider_id\": \"591d47e21649190011dfb1f9\",\n     \"start_time\": 8,\n     \"end_time\": 17,\n     \"reset_token\": \"71713\",\n     \"title\": \"Ms\",\n     \"email\": \"rakhi.mr@experionglobal.com\"\n   },\n   {\n     \"_id\": \"59119c5bc959ecfb77e034d5\",\n     \"first_name\": \"Suresh\",\n     \"last_name\": \"RS\",\n     \"specialisation_id\": \"59119548c959ecfb77e034d1\",\n     \"specialisation\": \"Ortho\",\n     \"phone_number\": \"123-34567-890\",\n     \"image_url\": \"https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg\",\n     \"company\": \"Test Company 2\",\n     \"address\": \"Experionglobal 2\",\n     \"city\": \"Test City\",\n     \"state_id\": 1,\n     \"postal_code\": 687544,\n     \"service_provider_id\": \"591d47e21649190011dfb1f9\",\n     \"start_time\": 10,\n     \"end_time\": 18,\n     \"title\": \"Mr\",\n     \"email\": \"suresh.rs@experionglobal.com\"\n   },\n   {\n     \"_id\": \"5914340cc959ecfb77e034dc\",\n     \"first_name\": \"Arjun\",\n     \"last_name\": \"Sreedhar\",\n     \"specialisation_id\": \"59119537c959ecfb77e034d0\",\n     \"specialisation\": \"Ortho\",\n     \"phone_number\": \"2435436456456\",\n     \"image_url\": \"https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg\",\n     \"company\": \"Test ertert Company\",\n     \"address\": \"Exper te rte ionglobal\",\n     \"city\": \"Trivandrum\",\n     \"state_id\": 3,\n     \"postal_code\": 685545,\n     \"service_provider_id\": \"591d47e21649190011dfb1f9\",\n     \"start_time\": 9,\n     \"end_time\": 17,\n     \"title\": \"Ms\",\n     \"email\": \"arjun.sreedhar@experionglobal.com\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  {\n  \"status\": 0,\n  \"message\": \"Unauthorized\",\n  \"code\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/provider/provider.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "get",
    "url": "/providers/:providerId?platform=mobile",
    "title": "Provider :  provider Details",
    "name": "Provider___providers_details",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "providerId",
            "description": "<p>_id of the provider</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"Provider details retrieved successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"59311b4cff1ff20011c79cc5\",\n        \"updatedAt\": \"2017-06-21T11:21:00.913Z\",\n        \"createdAt\": \"2017-06-02T08:01:16.142Z\",\n        \"company\": null,\n        \"email\": \"sachin.s@experionglobal.com\",\n        \"schedule_configuration\": {\n            \"sunday\": {\n                \"start_time\": \"10:00\",\n                \"start_time_format\": \"AM\",\n                \"end_time\": \"11:30\",\n                \"end_time_format\": \"AM\",\n                \"break_start_time\": \"12:00\",\n                \"break_start_time_format\": \"PM\",\n                \"break_end_time\": \"01:30\",\n                \"break_end_time_format\": \"PM\",\n                \"premium_appointment_start_time\": \"02:00\",\n                \"premium_appointment_start_time_format\": \"PM\",\n                \"premium_appointment_end_time\": \"06:00\",\n                \"premium_appointment_end_time_format\": \"PM\"\n            },\n            \"monday\": {\n                \"start_time\": \"10:00\",\n                \"start_time_format\": \"AM\",\n                \"end_time\": \"11:30\",\n                \"end_time_format\": \"AM\",\n                \"break_start_time\": \"12:00\",\n                \"break_start_time_format\": \"PM\",\n                \"break_end_time\": \"01:30\",\n                \"break_end_time_format\": \"PM\",\n                \"premium_appointment_start_time\": \"02:00\",\n                \"premium_appointment_start_time_format\": \"PM\",\n                \"premium_appointment_end_time\": \"06:00\",\n                \"premium_appointment_end_time_format\": \"PM\"\n            },\n            \"tuesday\": {\n                \"start_time\": \"10:00\",\n                \"start_time_format\": \"AM\",\n                \"end_time\": \"11:30\",\n                \"end_time_format\": \"AM\",\n                \"break_start_time\": \"12:00\",\n                \"break_start_time_format\": \"PM\",\n                \"break_end_time\": \"01:30\",\n                \"break_end_time_format\": \"PM\",\n                \"premium_appointment_start_time\": \"02:00\",\n                \"premium_appointment_start_time_format\": \"PM\",\n                \"premium_appointment_end_time\": \"06:00\",\n                \"premium_appointment_end_time_format\": \"PM\"\n            },\n            \"wednesday\": {\n                \"start_time\": \"10:00\",\n                \"start_time_format\": \"AM\",\n                \"end_time\": \"11:30\",\n                \"end_time_format\": \"AM\",\n                \"break_start_time\": \"12:00\",\n                \"break_start_time_format\": \"PM\",\n                \"break_end_time\": \"01:30\",\n                \"break_end_time_format\": \"PM\",\n                \"premium_appointment_start_time\": \"02:00\",\n                \"premium_appointment_start_time_format\": \"PM\",\n                \"premium_appointment_end_time\": \"06:00\",\n                \"premium_appointment_end_time_format\": \"PM\"\n            },\n            \"thursday\": {\n                \"start_time\": \"10:00\",\n                \"start_time_format\": \"AM\",\n                \"end_time\": \"11:30\",\n                \"end_time_format\": \"AM\",\n                \"break_start_time\": \"12:00\",\n                \"break_start_time_format\": \"PM\",\n                \"break_end_time\": \"01:30\",\n                \"break_end_time_format\": \"PM\",\n                \"premium_appointment_start_time\": \"02:00\",\n                \"premium_appointment_start_time_format\": \"PM\",\n                \"premium_appointment_end_time\": \"06:00\",\n                \"premium_appointment_end_time_format\": \"PM\"\n            },\n            \"friday\": {\n                \"start_time\": \"10:00\",\n                \"start_time_format\": \"AM\",\n                \"end_time\": \"11:30\",\n                \"end_time_format\": \"AM\",\n                \"break_start_time\": \"12:00\",\n                \"break_start_time_format\": \"PM\",\n                \"break_end_time\": \"01:30\",\n                \"break_end_time_format\": \"PM\",\n                \"premium_appointment_start_time\": \"02:00\",\n                \"premium_appointment_start_time_format\": \"PM\",\n                \"premium_appointment_end_time\": \"06:00\",\n                \"premium_appointment_end_time_format\": \"PM\"\n            },\n            \"saturday\": {\n                \"start_time\": \"10:00\",\n                \"start_time_format\": \"AM\",\n                \"end_time\": \"11:30\",\n                \"end_time_format\": \"AM\",\n                \"break_start_time\": \"12:00\",\n                \"break_start_time_format\": \"PM\",\n                \"break_end_time\": \"01:30\",\n                \"break_end_time_format\": \"PM\",\n                \"premium_appointment_start_time\": \"02:00\",\n                \"premium_appointment_start_time_format\": \"PM\",\n                \"premium_appointment_end_time\": \"06:00\",\n                \"premium_appointment_end_time_format\": \"PM\"\n            }\n        },\n        \"configuration\": {\n            \"default_booking_slot_size\": null,\n            \"calender_end_time\": null,\n            \"calender_start_time\": null,\n            \"reminder_preference_text\": true,\n            \"reminder_preference_email\": true,\n            \"send_notification_on_cancelling\": true,\n            \"send_notification_on_booking\": true,\n            \"default_calender\": \"W\",\n            \"maximum_appointment_span\": 30,\n            \"maximum_appointment_number\": 3,\n            \"get_amount_during_booking\": null,\n            \"premium_appointment_fee\": 500\n        },\n        \"is_paid\": false,\n        \"is_deleted\": false,\n        \"phone_number_type\": \"mobile\",\n        \"image_url_array\": [],\n        \"end_time\": null,\n        \"start_time\": null,\n        \"title\": \"Mr\",\n        \"is_active\": true,\n        \"phone_number\": \"9037567576\",\n        \"gps_location\": [\n            76.8663,\n            8.571\n        ],\n        \"postal_code\": null,\n        \"country\": \"India\",\n        \"state\": \"Kerala\",\n        \"state_id\": null,\n        \"city\": \"Thiruvananthapuram\",\n        \"address\": \"Technopark\",\n        \"type_of_access\": null,\n        \"image_url\": \"https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468\",\n        \"specialisation\": \"Hair Stylist\",\n        \"specialisation_id\": \"59119548c959ecfb77e034d1\",\n        \"last_name\": \"Prabhakar\",\n        \"first_name\": \"Sachin\",\n        \"service_provider_id\": \"59311ac1ff1ff20011c79cc3\",\n        \"provider_timezone\": \"America/Los_Angeles\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"status\": 0,\n    \"message\": \"Provider does not exist\",\n    \"code\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/provider/provider.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "post",
    "url": "/users/:id/providers",
    "title": "User : Add My Provider",
    "name": "User___addMyProvider",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user whose my provider is to be added.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "provider_id",
            "description": "<p>selected provider id array.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request Format",
          "content": "{\n  \"platform\": \"mobile\",\n  \"provider_id\": \"59311b4cff1ff20011c79cc5\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Provider has been added to my providers.\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Provider is already in your my providers list.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "put",
    "url": "/users/:id/changePassword",
    "title": "User : Change Password",
    "name": "User___changePassword",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Current password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new_password",
            "description": "<p>New password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Confirm password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request Format",
          "content": "{\n  \"platform\": \"website\",\n  \"password\": \"7654321\",\n  \"new_password\": \"abcdefgh\",\n  \"confirm_password\": \"abcdefgh\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Your password has been changed successfully.\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"The current password you entered is wrong. Please try again.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "get",
    "url": "/users/:id/providers?platform=:platform&latitude=:latitude&longitude=:longitude",
    "title": "User : Get My Providers",
    "name": "User___getMyProviders",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user whose my providers list is to be fetched.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of user location.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of user location.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"My providers list retrieved succesfully.\",\n    \"code\": 200,\n    \"totalRecords\": 2,\n    \"limitPerPage\": 20,\n    \"page\": 1,\n    \"searchparams\": {\n        \"platform\": \"mobile\",\n        \"latitude\": \"8.00\",\n        \"longitude\": \"76.00\",\n        \"total_count\": 2\n    },\n    \"data\": [\n        {\n            \"_id\": \"593e64a9b7ba6f0011b8ee6b\",\n            \"company\": null,\n            \"email\": \"vineeth.gb+5@experionglobal.com\",\n            \"configuration\": {\n                \"get_amount_during_booking\": null,\n                \"premium_appointment_fee\": 10\n            },\n            \"is_paid\": false,\n            \"is_deleted\": false,\n            \"phone_number_type\": \"mobile\",\n            \"phone_number\": \"949596382712\",\n            \"gps_location\": [\n                -1.0872979000000669,\n                53.95996510000001\n            ],\n            \"postal_code\": null,\n            \"country\": \"United Kingdom\",\n            \"state\": \"England\",\n            \"city\": \"York\",\n            \"address\": \"wwewqqdq11\",\n            \"image_url\": null,\n            \"specialisation\": \"Manicurist\",\n            \"last_name\": \"A\",\n            \"first_name\": \"Alin\",\n            \"service_provider_id\": \"593e320db58cfe00111bfd57\",\n            \"distance\": 5249.431734105059\n        },\n        {\n            \"_id\": \"59312ca4ff1ff20011c79cd8\",\n            \"company\": null,\n            \"email\": \"AnthonyHYale@dayrep.com\",\n            \"configuration\": {\n                \"get_amount_during_booking\": null,\n                \"premium_appointment_fee\": 300\n            },\n            \"is_paid\": false,\n            \"is_deleted\": false,\n            \"phone_number_type\": \"office\",\n            \"phone_number\": \"606-837-3982\",\n            \"gps_location\": [\n                76.8663,\n                8.571\n            ],\n            \"postal_code\": null,\n            \"country\": \"40828\",\n            \"state\": \"United States\",\n            \"city\": \"Evarts\",\n            \"address\": \"North Bend River Road\",\n            \"image_url\": \"https://www.tendenciagq.com/wp-content/uploads/2016/02/tendencia-corte2Bde2Bpelo2Bhombre-2016.png\",\n            \"specialisation\": \"Hair Stylist\",\n            \"last_name\": \"Yale\",\n            \"first_name\": \"Anthony\",\n            \"service_provider_id\": \"5931295eff1ff20011c79cd1\",\n            \"distance\": 71.18933487227386\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"status\": 0,\n   \"message\": \"Platform required.\",\n   \"code\": 400,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "post",
    "url": "/users/forgotPassword",
    "title": "User : Forgot Password",
    "name": "User___userForgotPassword",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>a valid user registered email id with the application.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "type",
            "description": "<p>Reset type - true for SMS and false for Email.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n    \"email\": \"rakhi.mr@experionglobal.com\",\n    \"platform\": \"mobile\",\n    \"type\": \"false\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Reset token sent !\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Parameter \\\"email\\\" required\",\n  \"code\": 0,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "put",
    "url": "/users/resetPassword",
    "title": "User : Reset Password",
    "name": "User___userResetPassword",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reset_token",
            "description": "<p>the token auto generated and send to the registered email id.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new_password",
            "description": "<p>Encrypted new password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Encrypted confirm password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>registered email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n \"email\":\"rakhi.mr@experionglobal.com\",\n \"new_password\":\"trwetwerrfywegrbweygr7867868\",\n \"confirm_password\":\"trwetwerrfywegrbweygr7867868\",\n \"reset_token\":\"22239\",\n \"platform\":\"mobile\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Your password has been reset successfully.\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Parameter \\\"email\\\" require a valid email format\",\n  \"code\": 0,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "User : Login",
    "name": "User___userlogin",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email_id of the user, for FB and Google it is not mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Encrypted password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "device_token",
            "description": "<p>device token of the user device.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type_of_access",
            "description": "<p>whether it is facebook, google or normal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "facebook_google_id",
            "description": "<p>If it is facebook &amp; google and it is mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>If it is facebook &amp; google and it is mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>If it is facebook &amp; google and it is mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_url",
            "description": "<p>If it is facebook&amp; google and it is not mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "{\n    \"platform\": \"mobile\",\n    \"email\": \"rakhi.mr@experionglobal.com\",\n    \"password\": \"1234567\",\n    \"type_of_access\": \"normal\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"Login successful.\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"59113d5b93f6b3127cfaf46a\",\n        \"email\": \"rakhi.mr@experionglobal.com\",\n        \"title\": \"Ms\",\n        \"first_name\": \"Rakhi\",\n        \"last_name\": \"Experion\",\n        \"type_of_access\": \"normal\",\n        \"facebook_google_id\": null,\n        \"gender\": \"F\",\n        \"dob\": \"1470960000000\",\n        \"user_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTExM2Q1YjkzZjZiMzEyN2NmYWY0NmEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDk0MzA5NDYxfQ.vBXgdSTJEg508OX_xkqvJUmUANzOkInPj3-Pnre_too\",\n        \"device_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VfaWQiOiJhc2FzYXNhc2FzIiwiZGV2aWNlX29zIjoia2l0a2F0IiwiZGV2aWNlX21vZGVsIjoiemVuZm9uZTIiLCJkYXRlIjoxNDk0MjI3ODAzMzg2LCJpYXQiOjE0OTQyMjc4MDN9.yw92dcl_1Vrz7jRkwhf5Me8ITOAWZU5SrdBd2BBvUAE\"\n    }\n}",
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
          "title": "Error-Response: invalid credentials",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Invalid User Credentials.Try Again\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:required Parameter",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Parameter \\\"email\\\" required\",\n  \"code\": 0,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "delete",
    "url": "/users/:id/providers/:providerId?platform=:platform",
    "title": "User : Remove My Provider",
    "name": "User__myProvider",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user whose my provider is to be removed.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "providerId",
            "description": "<p>Provider id of the provider to be removed from my provider list.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n{\n   \"status\": 1,\n   \"message\": \"Provider removed from my providers.\",\n   \"code\": 200,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"status\": 0,\n   \"message\": \"Cannot remove provider. Please try again.\",\n   \"code\": 400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "post",
    "url": "/users/:id/family",
    "title": "Family : Add Family Member",
    "name": "family___addFamilyMembers",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user whose family member is to added.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n    \"relation\": \"sister\",\n    \"dob\": \"22-12-2018\",\n    \"gender\": \"M\",\n    \"last_name\": \"lis\",\n    \"first_name\": \"gaby\",\n    \"title\": \"none\",\n    \"platform\": \"mobile\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n  \"status\": 1,\n  \"message\": \"family-memmber-added\",\n  \"code\": 200,\n  \"data\": {\n    \"email\": \"megha.s+4@experionglobal.com\",\n    \"title\": \"Ms\",\n    \"first_name\": \"Rakhi+1\",\n    \"last_name\": \"Experion+1\",\n    \"type_of_access\": \"normal\",\n    \"facebook_google_id\": null,\n    \"gender\": \"F\",\n    \"dob\": \"23-11-1990\",\n    \"phone_number\": \"9493654490\",\n    \"user_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTE0MDQyYTNkNDc3ZTBmNTA4NDQxMjQiLCJ1c2VyX3R5cGUiOiJhcHBVc2VyIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTQ5NDQ4NDAxMX0.f4jgL1PQNUrOLgWCqZSbudN9f1SxdswkKGahEG3gNp8\",\n    \"device_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VfaWQiOiJhc2FzYXNhc2FzIiwiZGV2aWNlX29zIjoia2l0a2F0IiwiZGV2aWNlX21vZGVsIjoiemVuZm9uZTIiLCJkYXRlIjoxNDk0MjI3ODAzMzg2LCJpYXQiOjE0OTQyMjc4MDN9.yw92dcl_1Vrz7jRkwhf5Me8ITOAWZU5SrdBd2BBvUAE\",\n    \"family_members\": [\n  {\n    \"_id\": \"591941f730264122ce830766\",\n    \"dob\": \"22-12-2018\",\n    \"gender\": \"female\",\n    \"last_name\": \"lis\",\n    \"first_name\": \"gaby\",\n    \"title\": \"none\"\n\n  }\n    ],\n    \"my_providers\": [],\n    \"reset_token\": null\n  }\n}",
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
            "description": "<p>token,email,_id returned from the API.</p>"
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
    "filename": "modules/family/family.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "put",
    "url": "/users/:id/family/:memberId",
    "title": "Family: Edit Family Member",
    "name": "family___editFamilyMember",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user whose family member's details are to be edited.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "memberId",
            "description": "<p>Id of the family member whose details are to be edited.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "{\n  \"platform\": \"mobile\",\n  \"relation\": \"Brother\",\n  \"first_name\": \"Sachin\",\n  \"last_name\": \"Kumar\",\n  \"gender\": \"Male\",\n  \"dob\": \"27/05/1992\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Family member details saved successfully.\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'BadRequest'",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Relation with family member required.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/family/family.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "get",
    "url": "/users/:id/family?platform=:platform",
    "title": "Family: List Family Members",
    "name": "family___familyMembersList",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Id",
            "description": "<p>of the user whose family members are to be listed.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"List of family members retrieved successfully. \",\n    \"code\": 200,\n    \"totalRecords\": 2,\n    \"limitPerPage\": 10,\n    \"page\": 1,\n    \"searchparams\": {\n        \"platform\": \"webportal\",\n        \"total_count\": 2\n    },\n    \"data\": [\n        {\n            \"_id\": \"59816f0733cb8e17a59730aa\",\n            \"dob\": \"911001600000\",\n            \"gender\": \"Male\",\n            \"last_name\": \"Joe\",\n            \"first_name\": \"Rayan\",\n            \"family_name\": \"Joe Rayan\",\n            \"relation\": \"Brother\"\n        },\n        {\n            \"_id\": \"5982c9b6cb70bb226475d5f1\",\n            \"dob\": \"1499212800000\",\n            \"gender\": \"Female\",\n            \"last_name\": \"S\",\n            \"first_name\": \"Megha\",\n            \"family_name\": \"S Megha\",\n            \"relation\": \"Friend\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'BadRequest'",
          "content": "\n  {\n  \"status\": 0,\n  \"message\": \"No records found.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/family/family.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "delete",
    "url": "/users/:id/family/:memberId?platform=:platform",
    "title": "Family: Remove Family Member",
    "name": "family___removeFamilyMember",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user whose family member is to be removed.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "memberId",
            "description": "<p>Id of the family member who is to be removed.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"Family member is removed.\",\n    \"code\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'BadRequest'",
          "content": "\n  {\n  \"status\": 0,\n  \"message\": \"No records found.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/family/family.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "get",
    "url": "/users/:id/appointments?platform&current_date_time&type&latitude&longitude&page",
    "title": "getAppointmentHistory : get list of appointments",
    "name": "getAppointmentHistory___getAppointmentHistory",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user whose appointments are to be listed.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "current_date_time",
            "description": "<p>Current timestamp of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>history_week, month, year, all for appointment history and today, week, upcoming for my appointments.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of user location.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of user location.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>Page number for pagination.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Appointment history retrieved successfully.\",\n  \"code\": 200,\n  \"totalRecords\": 2,\n  \"limitPerPage\": 20,\n  \"page\": \"1\",\n  \"searchparams\": {\n    \"platform\": \"website\",\n    \"current_date_time\": \"1496403963993\",\n    \"type\": \"week\",\n    \"latitude\": \"8.00\",\n    \"longitude\": \"76.00\",\n    \"page\": \"1\",\n    \"total_count\": 2\n  },\n  \"data\": [\n    {\n      \"_id\": \"593137c4ff1ff20011c79cf1\",\n      \"service_provider_id\": \"59312a3eff1ff20011c79cd3\",\n      \"appointment_type\": \"R\",\n      \"appointment_duration\": 60,\n      \"family_member_name\": \"Binesh P\",\n      \"family_member_id\": \"592d8ef3581be800112694d0\",\n      \"appointment_reason_id\": \"591594f6c959ecfb77e034e9\",\n      \"provider_name\": \"Shirley M Peterson\",\n      \"provider_id\": \"59312d39ff1ff20011c79cdb\",\n      \"appointment_reason\": \"Pedicure\",\n      \"appointment_status\": \"B\",\n      \"booked_on\": 1496397764341,\n      \"is_paid\": true,\n      \"amount\": 10.99,\n      \"appointment_end_time\": 1496408564341,\n      \"time_slot\": 1496404964341,\n      \"provider_first_name\": \"Shirley M\",\n      \"provider_last_name\": \"Peterson\",\n      \"provider_phone_number\": \"513-886-4092\",\n      \"provider_distance\": 71.18933487227386,\n      \"provider_company\": null,\n      \"provider_address\": \"4497 Round Table Drive\",\n      \"provider_state\": \"Ohio\",\n      \"provider_postal_code\": null\n    },\n    {\n      \"_id\": \"593133dcff1ff20011c79ceb\",\n      \"service_provider_id\": \"5931295eff1ff20011c79cd1\",\n      \"appointment_type\": \"R\",\n      \"appointment_duration\": 30,\n      \"family_member_name\": \"Suresh R  S\",\n      \"family_member_id\": \"592d04a28a0dbd00119cc834\",\n      \"appointment_reason_id\": \"591594d0c959ecfb77e034e8\",\n      \"provider_name\": \"Anthony Yale\",\n      \"provider_id\": \"59312ca4ff1ff20011c79cd8\",\n      \"appointment_reason\": \"Hair Cut\",\n      \"appointment_status\": \"B\",longitude\n      \"booked_on\": 1496396763993,\n      \"is_paid\": true,\n      \"amount\": 10.99,\n      \"appointment_end_time\": 1496405763993,\n      \"time_slot\": 1496403963993,\n      \"provider_first_name\": \"Anthony\",\n      \"provider_last_name\": \"Yale\",\n      \"provider_phone_number\": \"606-837-3982\",\n      \"provider_distance\": 71.18933487227386,\n      \"provider_company\": null,\n      \"provider_address\": \"North Bend River Road\",\n      \"provider_state\": \"United States\",\n      \"provider_postal_code\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"No records found.\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/appointment/appointment.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "post",
    "url": "/users/:id/appointments/",
    "title": "Appointment: save Appointment",
    "name": "saveAppointment___saveAppointment",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>platform Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user whose appointment is to be saved.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time_slot",
            "description": "<p>slot time alot of the booking.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "total_amount",
            "description": "<p>Total amount to be paid</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_paid",
            "description": "<p>Status of payment initially false</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "booked_on",
            "description": "<p>appointmet booked date.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "appointment_status",
            "description": "<p>Appointment status. B - Booked, P - Pending(default), C - Cancelled.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "appointment_reason",
            "description": "<p>appointment reason.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "appointment_reason_id",
            "description": "<p>id of appointment reason.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "provider_id",
            "description": "<p>id of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "provider_name",
            "description": "<p>name of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "family_member_id",
            "description": "<p>family member id of the family member</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "family_member_name",
            "description": "<p>name of the family member.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "appointment_duration",
            "description": "<p>duration of the appointment.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "appointment_type",
            "description": "<p>appointment type Premium,Regular,</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "get_amount_during_booking",
            "description": "<p>is used to check whether amount is required during booking.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "premium_appointment_fee",
            "description": "<p>Premium appointment fee</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "service_charge_amount",
            "description": "<p>Service charge amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>url of the provider image.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request format",
          "content": "{\n  \"time_slot\": 1495428356000,\n  \"is_paid\": true,\n  \"booked_on\": 10000,\n  \"appointment_status\": \"B\",\n  \"appointment_reason\": true,\n  \"provider_id\": \"59311b4cff1ff20011c79cc5\",\n  \"provider_name\": \"suni\",\n  \"appointment_reason_id\": \"591594d0c959ecfb77e034e8\",\n  \"family_member_id\": \"59195cf9df71e534cb49adf7\",\n  \"family_member_name\": \"mno\",\n  \"appointment_duration\": 20,\n  \"appointment_type\": \"P\",\n  \"platform\": \"mobile\",\n  \"get_amount_during_booking\": false,\n  \"premium_appointment_fee\": 1800,\n  \"total_amount\": 2000\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n    \"status\": 1,\n    \"message\": \"Appointment booked succesfully.\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"594911855d3ba25c99239d70\",\n        \"service_provider_id\": null,\n        \"appointment_type\": \"P\",\n        \"appointment_duration\": 20,\n        \"family_member_name\": \"mno\",\n        \"family_member_id\": \"59195cf9df71e534cb49adf7\",\n        \"appointment_reason_id\": \"591594d0c959ecfb77e034e8\",\n        \"provider_name\": \"suni\",\n        \"provider_id\": \"59311b4cff1ff20011c79cc5\",\n        \"appointment_reason\": \"true\",\n        \"appointment_status\": \"B\",\n        \"booked_on\": 10000,\n        \"is_paid\": true,\n        \"get_amount_during_booking\": false,\n        \"service_charge_amount\": null,\n        \"premium_appointment_fee\": 1800,\n        \"total_amount\": 2000,\n        \"appointment_end_time\": 1495429556000,\n        \"time_slot\": 1495428356000,\n        \"provider_first_name\": \"Sachin\",\n        \"provider_last_name\": \"Prabhakar\",\n        \"provider_address\": \"Technopark\",\n        \"provider_specialisation\": \"Hair Stylist\",\n        \"phone_number\": \"9037567576\",\n        \"phone_number_type\": \"mobile\",\n        \"image_url\": \"https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468\",\n        \"gps_location\": [\n            76.8663,\n            8.571\n        ]\n    }\n}",
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
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Premium appointment fee is required.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/appointment/appointment.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "put",
    "url": "/users/:id/appointments/:appointmentId",
    "title": "PaymentStatus : update PaymentStatus",
    "name": "savePaymentStatus__savePaymentStatus",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user whose appointment's payment status is to be saved.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "appointmentId",
            "description": "<p>Appointment Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_paid",
            "description": "<p>Flag that shows payment status.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request format.",
          "content": "{\n \"is_paid\" : true,\n \"platform\": \"mobile\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n \"status\": 1,\n \"message\": \"Appointment booked succesfully.\",\n \"code\": 200,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n \"status\": 0,\n \"message\": \"Amount paid required.\",\n \"code\": 400,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/appointment/appointment.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "put",
    "url": "/users/:id/activateInactivate",
    "title": "User : Activate/Inactivate user",
    "name": "users___activateInactivate",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>values would be true or false.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n    \"platform\": \"webportal\",\n    \"is_active\": true\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"Profile info updated successfully.\",\n    \"code\": 200,\n    \"data\": {\n        \"email\": \"sachin0@experionglobal.com\",\n        \"title\": \"Mr\",\n        \"first_name\": \"Sachin\",\n        \"last_name\": \"Kumar\",\n        \"address\": \"test address\",\n        \"city\": \"citty\",\n        \"state\": \"state\",\n        \"zip\": \"123456\",\n        \"type_of_access\": \"normal\",\n        \"facebook_google_id\": null,\n        \"gender\": \"M\",\n        \"dob\": \"27-05-1992\",\n        \"phone_number\": \"1234567890\",\n        \"user_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTNhNDgxMDBhNDhhOTM3YjM4NWI0N2YiLCJ1c2VyX3R5cGUiOiJhcHBVc2VyIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTQ5Njk5MTc2MH0.sbugXM_w-DHIh3pzc_HLwaBAYnd-t0uJALAPXLXOulw\",\n        \"device_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VfaWQiOiJhc2FzYXNhc2FzIiwiZGV2aWNlX29zIjoia2l0a2F0IiwiZGV2aWNlX21vZGVsIjoiemVuZm9uZTIiLCJkYXRlIjoxNDk0MjI3ODAzMzg2LCJpYXQiOjE0OTQyMjc4MDN9.yw92dcl_1Vrz7jRkwhf5Me8ITOAWZU5SrdBd2BBvUAE\",\n        \"ssn\": null,\n        \"family_members\": [],\n        \"my_providers\": [\n            \"59312ae3ff1ff20011c79cd5\",\n            \"59312a7dff1ff20011c79cd4\"\n        ],\n        \"reset_token\": null,\n        \"_id\": \"593a48100a48a937b385b47f\",\n        \"appointment_history\": [],\n        \"is_notification_enabled\": false,\n        \"is_sms_enabled\": false,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"version\": null,\n        \"image_url\": \"https://s3.us-east-2.amazonaws.com/no2fyme/develop/59352dcda93df900110cea70/b6a0512bf15f2e7e4a0ad054fa168dd71497004853496.jpg\"\n    }\n}",
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
            "description": "<p>token,email,_id returned from the API.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "User : Update profile",
    "name": "users___updateProfile",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email_id of the user, for FB and Google it is not mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Encrypted password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "zip",
            "description": "<p>Zip code.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>state name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>Address of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "facebook_google_id",
            "description": "<p>If it is facebook &amp; google and it is mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "dob",
            "description": "<p>utc timestamp of the date.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_url",
            "description": "<p>image url.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n    \"platform\": \"mobile\",\n    \"email\": \"sachin0@experionglobal.com\",\n    \"password\": \"1234567\",\n    \"phone_number\" : \"1234567890\",\n    \"dob\" : \"27-05-1992\",\n    \"gender\" : \"M\",\n    \"ssn\" : null,\n    \"zip\" : \"123456\",\n    \"state\" : \"state\",\n    \"city\" : \"citty\",\n    \"address\" : \"test address\",\n    \"last_name\" : \"Kumar\",\n    \"first_name\" : \"Sachin\",\n    \"image_url\": \"https://s3.us-east-2.amazonaws.com/no2fyme/develop/59352dcda93df900110cea70/b6a0512bf15f2e7e4a0ad054fa168dd71497004853496.jpg\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"Profile info updated successfully.\",\n    \"code\": 200,\n    \"data\": {\n        \"email\": \"sachin0@experionglobal.com\",\n        \"title\": \"Mr\",\n        \"first_name\": \"Sachin\",\n        \"last_name\": \"Kumar\",\n        \"address\": \"test address\",\n        \"city\": \"citty\",\n        \"state\": \"state\",\n        \"zip\": \"123456\",\n        \"type_of_access\": \"normal\",\n        \"facebook_google_id\": null,\n        \"gender\": \"M\",\n        \"dob\": \"27-05-1992\",\n        \"phone_number\": \"1234567890\",\n        \"user_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTNhNDgxMDBhNDhhOTM3YjM4NWI0N2YiLCJ1c2VyX3R5cGUiOiJhcHBVc2VyIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTQ5Njk5MTc2MH0.sbugXM_w-DHIh3pzc_HLwaBAYnd-t0uJALAPXLXOulw\",\n        \"device_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VfaWQiOiJhc2FzYXNhc2FzIiwiZGV2aWNlX29zIjoia2l0a2F0IiwiZGV2aWNlX21vZGVsIjoiemVuZm9uZTIiLCJkYXRlIjoxNDk0MjI3ODAzMzg2LCJpYXQiOjE0OTQyMjc4MDN9.yw92dcl_1Vrz7jRkwhf5Me8ITOAWZU5SrdBd2BBvUAE\",\n        \"ssn\": null,\n        \"family_members\": [],\n        \"my_providers\": [\n            \"59312ae3ff1ff20011c79cd5\",\n            \"59312a7dff1ff20011c79cd4\"\n        ],\n        \"reset_token\": null,\n        \"_id\": \"593a48100a48a937b385b47f\",\n        \"appointment_history\": [],\n        \"is_notification_enabled\": false,\n        \"is_sms_enabled\": false,\n        \"is_active\": true,\n        \"is_deleted\": false,\n        \"version\": null,\n        \"image_url\": \"https://s3.us-east-2.amazonaws.com/no2fyme/develop/59352dcda93df900110cea70/b6a0512bf15f2e7e4a0ad054fa168dd71497004853496.jpg\"\n    }\n}",
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
            "description": "<p>token,email,_id returned from the API.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: password not match",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Password's doesnot match\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: already registered email_id",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Given email is already registered with the application.. Try forget password\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "User : Sign Up",
    "name": "users___userSign_up",
    "group": "Mobile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email_id of the user, for FB and Google it is not mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Encrypted password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Encrypted confirm password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "device_token",
            "description": "<p>device token of the user device.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type_of_access",
            "description": "<p>whether it is facebook, google or normal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "facebook_google_id",
            "description": "<p>If it is facebook &amp; google and it is mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "dob",
            "description": "<p>utc timestamp of the date.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_url",
            "description": "<p>If it is facebook&amp; google and it is not mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n    \"platform\": \"mobile\",\n    \"device_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VfaWQiOiJhc2FzYXNhc2FzIiwiZGV2aWNlX29zIjoia2l0a2F0IiwiZGV2aWNlX21vZGVsIjoiemVuZm9uZTIiLCJkYXRlIjoxNDk0MjI3ODAzMzg2LCJpYXQiOjE0OTQyMjc4MDN9.yw92dcl_1Vrz7jRkwhf5Me8ITOAWZU5SrdBd2BBvUAE\",\n    \"type_of_access\": \"normal\",\n    \"title\": \"Ms\",\n    \"first_name\": \"Rakhi+1\",\n    \"last_name\": \"Experion+1\",\n    \"email\": \"rakhi.mr+1@experionglobal.com\",\n    \"password\": \"1234567\",\n    \"confirm_password\": \"1234567\",\n    \"gender\": \"F\",\n    \"dob\": \"23-11-1990\",\n    \"phone_number\": \"9493654490\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"Sign up successful.\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"59104503192c8144432d4bfd\",\n        \"email\": \"rakhi.mr@experionglobal.com\",\n        \"title\": \"Ms\",\n        \"first_name\": \"Rakhi\",\n        \"last_name\": \"Experion\",\n        \"type_of_access\": \"normal\",\n        \"facebook_google_id\": null,\n        \"address\": null,\n        \"city\": null,\n        \"state\": null,\n        \"zip\": null,\n        \"ssn\": null,\n        \"gender\": \"F\",\n        \"dob\": 1470960000000,\n        \"phone_number\":\"9493654490\",\n        \"user_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTEwNDUwMzE5MmM4MTQ0NDMyZDRiZmQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDk0MjM4NDY3fQ.PYt4J-7J9SyWEi5MIpyWBUs5_K6msAT4kQ0K0-un0l8\"\n    }\n}",
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
            "description": "<p>token,email,_id returned from the API.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: password not match",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Password's doesnot match\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: already registered email_id",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Given email is already registered with the application.. Try forget password\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "delete",
    "url": "/users/:id/no2fyme/:no2fymeId?platform=:platform",
    "title": "User : Delete No2fyme Preferences",
    "name": "User___deleteNo2fyme",
    "group": "No2fyme",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the logged in user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "no2fymeId",
            "description": "<p>_id of the no2fyme option.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"No2fyme Preference removed successfully\",\n    \"code\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"status\": 0,\n   \"message\": \"Platform required.\",\n   \"code\": 400,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "No2fyme"
  },
  {
    "type": "get",
    "url": "/users/:id/no2fyme/:no2fymeId?platform=:platform",
    "title": "User : GET No2fyme Preference details",
    "name": "User___getNo2fyme",
    "group": "No2fyme",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the logged in user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "no2fymeId",
            "description": "<p>_id of the no2fyme option.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"No2fyme Preference details retrieved successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"5970886546afa00cc478a75e\",\n        \"updatedAt\": \"2017-07-20T10:43:56.236Z\",\n        \"createdAt\": \"2017-07-20T10:39:33.849Z\",\n        \"saturday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"friday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"thursday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"wednesday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"tuesday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"monday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"sunday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"appointment_duration\": 60,\n        \"appointment_reason\": \"Pedicure\",\n        \"appointment_reason_id\": \"591594f6c959ecfb77e034e9\",\n        \"service_provider_id\": \"59635f5a0db43d0c3ad958a5\",\n        \"provider_name\": \"LINDSEY ANDERSON\",\n        \"provider_id\": \"59635f5a0db43d0c3ad958a5\",\n        \"family_member_name\": null,\n        \"family_member_id\": \"59677c0c3665db6af647d94d\",\n        \"show_first_available\": false,\n        \"to_date\": 1500964631000,\n        \"from_date\": 1500532631000,\n        \"user_id\": \"5964afe1092bd331a830147e\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"status\": 0,\n   \"message\": \"Platform required.\",\n   \"code\": 400,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "No2fyme"
  },
  {
    "type": "get",
    "url": "/users/:id/no2fyme?platform=:platform",
    "title": "User : Get No2fyme Preferences",
    "name": "User___getNo2fymePreferences",
    "group": "No2fyme",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the logged in user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"No2fyme Preference list retrieved successfully.\",\n    \"code\": 200,\n    \"data\": [\n        {\n            \"_id\": \"59708640bc6aca1a2c0e1984\",\n            \"updatedAt\": \"2017-07-20T10:30:24.882Z\",\n            \"createdAt\": \"2017-07-20T10:30:24.882Z\",\n            \"saturday\": {\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"friday\": {\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"thursday\": {\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"wednesday\": {\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"tuesday\": {\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"monday\": {\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"sunday\": {\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"appointment_duration\": 60,\n            \"appointment_reason\": \"Pedicure\",\n            \"appointment_reason_id\": \"591594f6c959ecfb77e034e9\",\n            \"service_provider_id\": \"59635f5a0db43d0c3ad958a5\",\n            \"provider_name\": \"LINDSEY ANDERSON\",\n            \"provider_id\": \"59635f5a0db43d0c3ad958a5\",\n            \"family_member_name\": null,\n            \"family_member_id\": \"59677c0c3665db6af647d94d\",\n            \"show_first_available\": true,\n            \"to_date\": 1500718760059,\n            \"from_date\": 1500373160059,\n            \"user_id\": \"5964afe1092bd331a830147e\"\n        },\n        {\n            \"_id\": \"5970886546afa00cc478a75e\",\n            \"updatedAt\": \"2017-07-20T10:43:56.236Z\",\n            \"createdAt\": \"2017-07-20T10:39:33.849Z\",\n            \"saturday\": {\n                \"end_time_format\": \"PM\",\n                \"end_time\": \"06:00\",\n                \"start_time_format\": \"AM\",\n                \"start_time\": \"09:00\"\n            },\n            \"friday\": {\n                \"end_time_format\": \"PM\",\n                \"end_time\": \"06:00\",\n                \"start_time_format\": \"AM\",\n                \"start_time\": \"09:00\"\n            },\n            \"thursday\": {\n                \"end_time_format\": \"PM\",\n                \"end_time\": \"06:00\",\n                \"start_time_format\": \"AM\",\n                \"start_time\": \"09:00\"\n            },\n            \"wednesday\": {\n                \"end_time_format\": \"PM\",\n                \"end_time\": \"06:00\",\n                \"start_time_format\": \"AM\",\n                \"start_time\": \"09:00\"\n            },\n            \"tuesday\": {\n                \"end_time_format\": \"PM\",\n                \"end_time\": \"06:00\",\n                \"start_time_format\": \"AM\",\n                \"start_time\": \"09:00\"\n            },\n            \"monday\": {\n                \"end_time_format\": \"PM\",\n                \"end_time\": \"06:00\",\n                \"start_time_format\": \"AM\",\n                \"start_time\": \"09:00\"\n            },\n            \"sunday\": {\n                \"end_time_format\": \"PM\",\n                \"end_time\": \"06:00\",\n                \"start_time_format\": \"AM\",\n                \"start_time\": \"09:00\"\n            },\n            \"appointment_duration\": 60,\n            \"appointment_reason\": \"Pedicure\",\n            \"appointment_reason_id\": \"591594f6c959ecfb77e034e9\",\n            \"service_provider_id\": \"59635f5a0db43d0c3ad958a5\",\n            \"provider_name\": \"LINDSEY ANDERSON\",\n            \"provider_id\": \"59635f5a0db43d0c3ad958a5\",\n            \"family_member_name\": null,\n            \"family_member_id\": \"59677c0c3665db6af647d94d\",\n            \"show_first_available\": false,\n            \"to_date\": 1500964631000,\n            \"from_date\": 1500532631000,\n            \"user_id\": \"5964afe1092bd331a830147e\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"status\": 0,\n   \"message\": \"Platform required.\",\n   \"code\": 400,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "No2fyme"
  },
  {
    "type": "post",
    "url": "/users/:id/no2fyme",
    "title": "User : No2fyme Preference Addition",
    "name": "users___no2fyme",
    "group": "No2fyme",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the logged in user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "from_date",
            "description": "<p>UTC timestamp of the selected Start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "to_date",
            "description": "<p>UTC timestamp of the selected End date.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "show_first_available",
            "description": "<p>Boolean true / false.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "family_member_name",
            "description": "<p>Name of the selected family member.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "family_member_id",
            "description": "<p>_id of the selected family member.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "provider_name",
            "description": "<p>name of the selected provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "provider_id",
            "description": "<p>_id of the selected provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_provider_id",
            "description": "<p>_id of the selected service provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "appointment_reason",
            "description": "<p>Selected appointment reason text.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "appointment_reason_id",
            "description": "<p>_id of the selected appointment reason.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "appointment_duration",
            "description": "<p>Duration of the selected appointmet.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sunday",
            "description": "<p>Weekdays from sunday till saturday.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "start_time",
            "description": "<p>selected start time like &quot;09:00&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "start_time_format",
            "description": "<p>specify the hour format like &quot;AM&quot;/&quot;PM&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end_time",
            "description": "<p>selected end time like &quot;12:00&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end_time_format",
            "description": "<p>specify the hour format like &quot;AM&quot;/&quot;PM&quot;.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n  \"platform\": \"ios\",\n  \"from_date\": \"1500532631000\",\n  \"to_date\": \"1500964631000\",\n  \"show_first_available\": false,\n  \"family_member\": \"Athira S\",\n  \"family_member_id\": \"59677c0c3665db6af647d94d\",\n  \"provider_name\": \"LINDSEY ANDERSON\",\n  \"provider_id\": \"59635f5a0db43d0c3ad958a5\",\n  \"service_provider_id\": \"59635f5a0db43d0c3ad958a5\",\n  \"appointment_reason\": \"Pedicure\",\n  \"appointment_reason_id\": \"591594f6c959ecfb77e034e9\",\n  \"appointment_duration\": 60,\n  \"sunday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"monday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"tuesday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"wednesday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"thursday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"friday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"saturday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"No2fyme option saved successfully.\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"5970886546afa00cc478a75e\",\n        \"appointment_duration\": 60,\n        \"appointment_reason\": \"Pedicure\",\n        \"appointment_reason_id\": \"591594f6c959ecfb77e034e9\",\n        \"service_provider_id\": \"59635f5a0db43d0c3ad958a5\",\n        \"provider_name\": \"LINDSEY ANDERSON\",\n        \"provider_id\": \"59635f5a0db43d0c3ad958a5\",\n        \"family_member_name\": null,\n        \"family_member_id\": \"59677c0c3665db6af647d94d\",\n        \"show_first_available\": false,\n        \"to_date\": 1500964631000,\n        \"from_date\": 1500532631000,\n        \"user_id\": \"5964afe1092bd331a830147e\",\n        \"updatedAt\": \"2017-07-20T10:43:56.236Z\",\n        \"createdAt\": \"2017-07-20T10:39:33.849Z\",\n        \"saturday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"friday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"thursday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"wednesday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"tuesday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"monday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"sunday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        }\n    }\n}",
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
            "description": "<p>Response data returned from the API.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "No2fyme"
  },
  {
    "type": "put",
    "url": "/users/:id/no2fyme/:no2fymeId",
    "title": "User : No2fyme Preference Update",
    "name": "users___no2fymeUpdate",
    "group": "No2fyme",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the logged in user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "no2fymeId",
            "description": "<p>_id of the selected no2fyme option.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "from_date",
            "description": "<p>UTC timestamp of the selected Start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "to_date",
            "description": "<p>UTC timestamp of the selected End date.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "show_first_available",
            "description": "<p>Boolean true / false.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "family_member_name",
            "description": "<p>Name of the selected family member.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "family_member_id",
            "description": "<p>_id of the selected family member.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "provider_name",
            "description": "<p>name of the selected provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "provider_id",
            "description": "<p>_id of the selected provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_provider_id",
            "description": "<p>_id of the selected service provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "appointment_reason",
            "description": "<p>Selected appointment reason text.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "appointment_reason_id",
            "description": "<p>_id of the selected appointment reason.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "appointment_duration",
            "description": "<p>Duration of the selected appointmet.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sunday",
            "description": "<p>Weekdays from sunday till saturday.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "start_time",
            "description": "<p>selected start time like &quot;09:00&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "start_time_format",
            "description": "<p>specify the hour format like &quot;AM&quot;/&quot;PM&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end_time",
            "description": "<p>selected end time like &quot;12:00&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end_time_format",
            "description": "<p>specify the hour format like &quot;AM&quot;/&quot;PM&quot;.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n  \"platform\": \"ios\",\n  \"from_date\": \"1500532631000\",\n  \"to_date\": \"1500964631000\",\n  \"show_first_available\": false,\n  \"family_member\": \"Athira S\",\n  \"family_member_id\": \"59677c0c3665db6af647d94d\",\n  \"provider_name\": \"LINDSEY ANDERSON\",\n  \"provider_id\": \"59635f5a0db43d0c3ad958a5\",\n  \"service_provider_id\": \"59635f5a0db43d0c3ad958a5\",\n  \"appointment_reason\": \"Pedicure\",\n  \"appointment_reason_id\": \"591594f6c959ecfb77e034e9\",\n  \"appointment_duration\": 60,\n  \"sunday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"monday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"tuesday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"wednesday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"thursday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"friday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  },\n  \"saturday\": {\n    \"start_time\": \"09:00\",\n    \"start_time_format\": \"AM\",\n    \"end_time\": \"06:00\",\n    \"end_time_format\": \"PM\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"No2fyme option updated successfully.\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"5970886546afa00cc478a75e\",\n        \"appointment_duration\": 60,\n        \"appointment_reason\": \"Pedicure\",\n        \"appointment_reason_id\": \"591594f6c959ecfb77e034e9\",\n        \"service_provider_id\": \"59635f5a0db43d0c3ad958a5\",\n        \"provider_name\": \"LINDSEY ANDERSON\",\n        \"provider_id\": \"59635f5a0db43d0c3ad958a5\",\n        \"family_member_name\": null,\n        \"family_member_id\": \"59677c0c3665db6af647d94d\",\n        \"show_first_available\": false,\n        \"to_date\": 1500964631000,\n        \"from_date\": 1500532631000,\n        \"user_id\": \"5964afe1092bd331a830147e\",\n        \"updatedAt\": \"2017-07-20T10:43:56.236Z\",\n        \"createdAt\": \"2017-07-20T10:39:33.849Z\",\n        \"saturday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"friday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"thursday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"wednesday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"tuesday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"monday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        },\n        \"sunday\": {\n            \"end_time_format\": \"PM\",\n            \"end_time\": \"06:00\",\n            \"start_time_format\": \"AM\",\n            \"start_time\": \"09:00\"\n        }\n    }\n}",
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
            "description": "<p>Response data returned from the API.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "No2fyme"
  },
  {
    "type": "put",
    "url": "/serviceProviders/:id/changePassword",
    "title": "Portal : Change Password",
    "name": "Portal___changePassword",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Unique _id of service provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Current password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new_password",
            "description": "<p>New password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Confirm password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request Format",
          "content": "{\n  \"platform\": \"webportal\",\n  \"password\": \"premraj123\",\n  \"new_password\": \"prem123raj\",\n  \"confirm_password\": \"prem123raj\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Your password has been changed successfully.\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"The current password you entered is wrong. Please try again.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/serviceproviders/serviceproviders.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "post",
    "url": "/serviceProviders/forgotPassword",
    "title": "Portal : Forgot Password",
    "name": "Portal___forgotPassword",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>a valid user registered email id with the application.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n    \"email\": \"rakhi.mr@experionglobal.com\",\n    \"platform\": \"webportal\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Reset token sent !\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Parameter \\\"email\\\" required\",\n  \"code\": 0,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/serviceproviders/serviceproviders.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "post",
    "url": "/serviceProviders/login",
    "title": "Portal : Login",
    "name": "Portal___login",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email_id of the user, for FB and Google it is not mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Encrypted password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>should be passed through header[values would be webportal].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "  {\n    \"email\": \"admin@no2fyme.com\",\n    \"password\": \"qwerty\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"Login successful.\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"59113d5b93f6b3127cfaf46a\",\n        \"email\": \"rakhi.mr@experionglobal.com\",\n        \"user_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTExM2Q1YjkzZjZiMzEyN2NmYWY0NmEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDk0MzA5NDYxfQ.vBXgdSTJEg508OX_xkqvJUmUANzOkInPj3-Pnre_too\"\n    }\n}",
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
    "version": "0.0.0",
    "filename": "modules/serviceproviders/serviceproviders.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "put",
    "url": "/serviceProviders/resetPassword",
    "title": "Portal : Reset Password",
    "name": "Portal___resetPassword",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reset_token",
            "description": "<p>the token auto generated and send to the registered email id.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new_password",
            "description": "<p>Encrypted new password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Encrypted confirm password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>registered email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n \"email\":\"rakhi.mr@experionglobal.com\",\n \"new_password\":\"trwetwerrfywegrbweygr7867868\",\n \"confirm_password\":\"trwetwerrfywegrbweygr7867868\",\n \"reset_token\":\"22239\",\n \"platform\":\"webportal\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Your password has been reset successfully.\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Parameter \\\"email\\\" require a valid email format\",\n  \"code\": 0,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/serviceproviders/serviceproviders.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "post",
    "url": "/serviceProviders",
    "title": "Portal : Sign Up",
    "name": "Portal___signUp",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phone",
            "description": "<p>number of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email_id of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>should be passed through header[values would be webportal].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n    \"email\": \"rakhisotaa.mq+5@experionglobal.com\",\n    \"first_name\": \"aaa\",\n    \"last_name\": \"bbb\",\n    \"phone_number\": \"123456789\",\n    \"password\": \"abcaaa\",\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n  \"status\": 1,\n  \"message\": \"Sign up successful.\",\n  \"code\": 200,\n  \"data\": {\n    \"_id\": \"591aa11b1ba5be16b0eeb0ea\",\n    \"first_name\": \"aaa\",\n    \"last_name\": \"bbb\",\n    \"specialisation_id\": null,\n    \"specialisation\": null,\n    \"phone_number\": \"123456789\",\n    \"phone_number_type\": \"home\",\n    \"image_url\": null,\n    \"company\": \"ssswww\",\n    \"address\": null,\n    \"city\": null,\n    \"state_id\": null,\n    \"postal_code\": null,\n    \"service_provider_id\": null,\n    \"title\": \"Mr\",\n    \"reset_token\": null,\n    \"title\": \"Mr\",\n    \"user_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTFhYTExYjFiYTViZTE2YjBlZWIwZWEiLCJ1c2VyX3R5cGUiOiJwb3J0YWxVc2VyIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTQ5NDkxNzQwM30.uyPscqzSQED6YzJtYushIUXNVe0_aGSvnLU0AgdI8tw\"\n\n  }\n}",
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
            "description": "<p>token,email,_id returned from the API.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: already registered email_id",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Email is already in use\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/serviceproviders/serviceproviders.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "put",
    "url": "/serviceProviders/:id",
    "title": "Profile Info : updateProfileInfo",
    "name": "Portal___updateProfileInfo",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of logged in service provider</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phone",
            "description": "<p>number of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone_number_type",
            "description": "<p>type of phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url of the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company",
            "description": "<p>name of the company.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>address of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>city of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "state_id",
            "description": "<p>state id of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "postal_code",
            "description": "<p>postalcode of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "same_as_above",
            "description": "<p>this field is for specifying that this information on the billing info is same as the profileInformation.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "billing_info",
            "description": "<p>here goes the disscription about the billinginfo ant the fields are same as above .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "{\n  \"title\":\"Mr\",\n  \"first_name\" :\"Prem\",\n  \"last_name\": \"Raj\",\n  \"company\" :\"Experion\",\n  \"address\" :\"Kilimanoor\",\n  \"city\"   : \"Palakkad\",\n  \"state\":\"Kerala\",\n  \"postal_code\" :\"858454\",\n  \"phone_number\" :\"8281670752\",\n  \"email\": \"premraj86f@gmail.com\",\n  \"suite\": \"A\",\n    \"phone_number_type\": \"office\",\n  \"platform\":\"webportal\",\n    \"billing_info\": {\n      \"title\": \"Mr\",\n      \"state\": \"Kerala\",\n      \"first_name\": \"Prem\",\n      \"last_name\": \"Raj\",\n      \"phone_number\": \"123456\",\n      \"email\": \"premraj86f@gmail.com\",\n      \"office_fax\" :123\n  }\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"appointment-success\",\n  \"code\": 200,\n  \"data\": {\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1,\n    \"opTime\": {\n      \"ts\": \"6421408945734156295\",\n      \"t\": 1\n    },\n    \"electionId\": \"7fffffff0000000000000001\"\n  }\n}",
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
    "version": "0.0.0",
    "filename": "modules/serviceproviders/serviceproviders.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/serviceProviders/:id/providers/:providerId/timeslots?platform=:platform&selected_date=:date",
    "title": "GetTimeslots :  Get Timeslots",
    "name": "Provider___GetTimeslots",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "providerId",
            "description": "<p>_id of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "selected_date",
            "description": "<p>timestamp in milliseconds.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "from",
            "description": "<p>specify from which screen [reschedule, providerlist etc]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "calendar_view",
            "description": "<p>specify Daily or Weekly [D, W]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "{\n    \"status\": 1,\n    \"message\": \"Time slots retrieved successfully\",\n    \"code\": 200,\n    \"data\": [\n        {\n            \"start\": \"2017-06-18T00:00:00.000Z\",\n            \"end\": \"2017-06-18T10:00:00.000Z\",\n            \"overlap\": false,\n            \"rendering\": \"background\",\n            \"className\": [\n                \"event\",\n                \"bg-fc-inverse\"\n            ]\n        },\n        {\n            \"id\": \"availableForMeeting\",\n            \"start\": \"2017-06-18T10:00:00.000Z\",\n            \"end\": \"2017-06-18T11:30:00.000Z\",\n            \"rendering\": \"background\",\n            \"className\": [\n                \"event\",\n                \"bg-fc-background\"\n            ]\n        },\n        {\n            \"start\": \"2017-06-18T11:30:00.000Z\",\n            \"end\": \"2017-06-18T23:59:00.000Z\",\n            \"overlap\": false,\n            \"rendering\": \"background\",\n            \"className\": [\n                \"event\",\n                \"bg-fc-inverse\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T10:00:00.000Z\",\n            \"end\": \"2017-06-18T10:15:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T10:15:00.000Z\",\n            \"end\": \"2017-06-18T10:30:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T10:30:00.000Z\",\n            \"end\": \"2017-06-18T10:45:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T10:45:00.000Z\",\n            \"end\": \"2017-06-18T11:00:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T11:00:00.000Z\",\n            \"end\": \"2017-06-18T11:15:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        },\n        {\n            \"slot_type\": \"R\",\n            \"start\": \"2017-06-18T11:15:00.000Z\",\n            \"end\": \"2017-06-18T11:30:00.000Z\",\n            \"editable\": false,\n            \"className\": [\n                \"event\",\n                \"bg-color-greenLight\"\n            ]\n        }\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: 'validation error'",
          "content": "\n{\n    \"status\": 0,\n    \"message\": \"Provider does not exist\",\n    \"code\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/provider/provider.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "post",
    "url": "/serviceProviders/:id/providers",
    "title": "add Provider :  Add ProviderDetails",
    "name": "Provider___addProviderDetails",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the service provider</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phone",
            "description": "<p>number of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone_number_type",
            "description": "<p>type of the phone_number.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url of the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company",
            "description": "<p>name of the company.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>address of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>city of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "state",
            "description": "<p>state of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "country",
            "description": "<p>country of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>emmail id of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "specialisation_id",
            "description": "<p>selected specialisation ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "specialisation",
            "description": "<p>specialisation.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_provider_id",
            "description": "<p>_id of the service provider.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": "  {\n  \"first_name\": \"Meghaguru\",\n  \"last_name\": \"S\",\n  \"phone_number_type\": \"office\",\n  \"phone_number\": \"(987) 654-3212\",\n  \"company\": \"experin\",\n  \"address\": \"test addree\",\n  \"city\": \"trivand\",\n  \"state\": \"Kerala\",\n  \"country\": \"India\",\n  \"email\": \"meghaguru+5@gmail.com\",\n  \"specialisation_id\": \"59119523c959ecfb77e034cf\",\n  \"specialisation\": \"Electrologist \",\n  \"platform\": \"webportal\",\n  \"service_provider_id\": \"59311b53ff1ff20011c79cc6\",\n  \"long\": 76.93663760000004,\n  \"lat\": 8.524139100000001\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"Provider added successfully.\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"59492a5b2636652b6c92a9d3\",\n        \"first_name\": \"Rebinkjoseph\",\n        \"last_name\": \"Joseph\",\n        \"specialisation_id\": \"59119523c959ecfb77e034cf\",\n        \"specialisation\": \"Electrologist\",\n        \"phone_number\": \"(987) 654-3212\",\n        \"gps_location\": [\n            76.93663760000004,\n            8.524139100000001\n        ],\n        \"image_url\": null,\n        \"company\": \"experin\",\n        \"address\": \"test addree\",\n        \"city\": \"trivand\",\n        \"state_id\": null,\n        \"postal_code\": null,\n        \"service_provider_id\": \"59311b53ff1ff20011c79cc6\",\n        \"start_time\": null,\n        \"end_time\": null,\n        \"title\": null,\n        \"email\": \"meghaguru+9@gmail.com\",\n        \"state\": \"Kerala\",\n        \"country\": \"India\",\n        \"phone_number_type\": \"office\",\n        \"is_paid\": false,\n        \"is_deleted\": false,\n        \"provider_timezone\": \"false\"\n    }\n}",
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
            "description": "<p>token,email,_id returned from the API.</p>"
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
    "filename": "modules/provider/provider.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/serviceProviders/:id/providerIds?platform=:platform",
    "title": "Provider :  Get Povider list for dropdown",
    "name": "Provider___providerIds",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of service provider.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n  {\n  \"status\": 1,\n  \"message\": \"List of providers retrieved successfully.\",\n  \"code\": 200,\n  \"data\": [\n    {\n      \"_id\": \"59311ea300b08e37975ba6cc\",\n      \"provider_name\": \"Arjun Sreedhar\"\n    },\n    {\n      \"_id\": \"59379d135b426900110b1bd1\",\n      \"provider_name\": \"Prem Kumar\"\n    },\n    {\n      \"_id\": \"59379da45b426900110b1bd4\",\n      \"provider_name\": \"Rejay Chandra\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  {\n  \"status\": 0,\n  \"message\": \"Unauthorized\",\n  \"code\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/provider/provider.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/serviceproviders/:id/providers?platform=webportal&page=1",
    "title": "Provider :  providersList",
    "name": "Provider___providersList",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the service provider</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n  {\n \"status\": 1,\n \"message\": \"Provider list retrieved successfully.\",\n \"code\": 200,\n \"totalRecords\": 3,\n \"limitPerPage\": 20,\n \"page\": \"1\",\n \"searchparams\": {\n   \"platform\": \"webportal\",\n   \"page\": \"1\",\n   \"total_count\": 3\n },\n \"data\": [\n   {\n     \"_id\": \"59119be0c959ecfb77e034d4\",\n     \"first_name\": \"Rakhi\",\n     \"last_name\": \"Experion\",\n     \"specialisation_id\": \"59119537c959ecfb77e034d0\",\n     \"specialisation\": \"Ortho\",\n     \"phone_number\": \"123-34567-890\",\n     \"image_url\": \"https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg\",\n     \"company\": \"Test Company\",\n     \"address\": \"Experionglobal\",\n     \"city\": \"Test City\",\n     \"state_id\": 1,\n     \"postal_code\": 687545,\n     \"service_provider_id\": \"591d47e21649190011dfb1f9\",\n     \"start_time\": 8,\n     \"end_time\": 17,\n     \"reset_token\": \"71713\",\n     \"title\": \"Ms\",\n     \"email\": \"rakhi.mr@experionglobal.com\"\n   },\n   {\n     \"_id\": \"59119c5bc959ecfb77e034d5\",\n     \"first_name\": \"Suresh\",\n     \"last_name\": \"RS\",\n     \"specialisation_id\": \"59119548c959ecfb77e034d1\",\n     \"specialisation\": \"Ortho\",\n     \"phone_number\": \"123-34567-890\",\n     \"image_url\": \"https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg\",\n     \"company\": \"Test Company 2\",\n     \"address\": \"Experionglobal 2\",\n     \"city\": \"Test City\",\n     \"state_id\": 1,\n     \"postal_code\": 687544,\n     \"service_provider_id\": \"591d47e21649190011dfb1f9\",\n     \"start_time\": 10,\n     \"end_time\": 18,\n     \"title\": \"Mr\",\n     \"email\": \"suresh.rs@experionglobal.com\"\n   },\n   {\n     \"_id\": \"5914340cc959ecfb77e034dc\",\n     \"first_name\": \"Arjun\",\n     \"last_name\": \"Sreedhar\",\n     \"specialisation_id\": \"59119537c959ecfb77e034d0\",\n     \"specialisation\": \"Ortho\",\n     \"phone_number\": \"2435436456456\",\n     \"image_url\": \"https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg\",\n     \"company\": \"Test ertert Company\",\n     \"address\": \"Exper te rte ionglobal\",\n     \"city\": \"Trivandrum\",\n     \"state_id\": 3,\n     \"postal_code\": 685545,\n     \"service_provider_id\": \"591d47e21649190011dfb1f9\",\n     \"start_time\": 9,\n     \"end_time\": 17,\n     \"title\": \"Ms\",\n     \"email\": \"arjun.sreedhar@experionglobal.com\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  {\n  \"status\": 0,\n  \"message\": \"Unauthorized\",\n  \"code\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/provider/provider.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/serviceproviders/:id/providers/:providerId?platform=webportal",
    "title": "Provider :  provider Details",
    "name": "Provider___providers_details",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the service provider</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "providerId",
            "description": "<p>_id of the provider</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"Provider details retrieved successfully\",\n    \"code\": 200,\n    \"data\": {\n        \"_id\": \"59492a5b2636652b6c92a9d3\",\n        \"updatedAt\": \"2017-06-20T13:59:55.089Z\",\n        \"createdAt\": \"2017-06-20T13:59:55.089Z\",\n        \"company\": \"experin\",\n        \"email\": \"meghaguru+9@gmail.com\",\n        \"schedule_configuration\": {\n            \"saturday\": {\n                \"premium_appointment_end_time_format\": null,\n                \"premium_appointment_end_time\": null,\n                \"premium_appointment_start_time_format\": null,\n                \"premium_appointment_start_time\": null,\n                \"break_end_time_format\": null,\n                \"break_end_time\": null,\n                \"break_start_time_format\": null,\n                \"break_start_time\": null,\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"friday\": {\n                \"premium_appointment_end_time_format\": null,\n                \"premium_appointment_end_time\": null,\n                \"premium_appointment_start_time_format\": null,\n                \"premium_appointment_start_time\": null,\n                \"break_end_time_format\": null,\n                \"break_end_time\": null,\n                \"break_start_time_format\": null,\n                \"break_start_time\": null,\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"thursday\": {\n                \"premium_appointment_end_time_format\": null,\n                \"premium_appointment_end_time\": null,\n                \"premium_appointment_start_time_format\": null,\n                \"premium_appointment_start_time\": null,\n                \"break_end_time_format\": null,\n                \"break_end_time\": null,\n                \"break_start_time_format\": null,\n                \"break_start_time\": null,\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"wednesday\": {\n                \"premium_appointment_end_time_format\": null,\n                \"premium_appointment_end_time\": null,\n                \"premium_appointment_start_time_format\": null,\n                \"premium_appointment_start_time\": null,\n                \"break_end_time_format\": null,\n                \"break_end_time\": null,\n                \"break_start_time_format\": null,\n                \"break_start_time\": null,\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"tuesday\": {\n                \"premium_appointment_end_time_format\": null,\n                \"premium_appointment_end_time\": null,\n                \"premium_appointment_start_time_format\": null,\n                \"premium_appointment_start_time\": null,\n                \"break_end_time_format\": null,\n                \"break_end_time\": null,\n                \"break_start_time_format\": null,\n                \"break_start_time\": null,\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"monday\": {\n                \"premium_appointment_end_time_format\": null,\n                \"premium_appointment_end_time\": null,\n                \"premium_appointment_start_time_format\": null,\n                \"premium_appointment_start_time\": null,\n                \"break_end_time_format\": null,\n                \"break_end_time\": null,\n                \"break_start_time_format\": null,\n                \"break_start_time\": null,\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            },\n            \"sunday\": {\n                \"premium_appointment_end_time_format\": null,\n                \"premium_appointment_end_time\": null,\n                \"premium_appointment_start_time_format\": null,\n                \"premium_appointment_start_time\": null,\n                \"break_end_time_format\": null,\n                \"break_end_time\": null,\n                \"break_start_time_format\": null,\n                \"break_start_time\": null,\n                \"end_time_format\": null,\n                \"end_time\": null,\n                \"start_time_format\": null,\n                \"start_time\": null\n            }\n        },\n        \"configuration\": {\n            \"reminder_preference_text\": false,\n            \"reminder_preference_email\": false,\n            \"send_notification_on_cancelling\": true,\n            \"send_notification_on_booking\": true,\n            \"maximum_appointment_span\": null,\n            \"maximum_appointment_number\": null,\n            \"calender_end_time\": null,\n            \"calender_start_time\": null,\n            \"default_booking_slot_size\": null,\n            \"default_calender\": \"W\",\n            \"get_amount_during_booking\": true,\n            \"premium_appointment_fee\": null\n        },\n        \"provider_timezone\": \"false\",\n        \"is_paid\": false,\n        \"is_deleted\": false,\n        \"phone_number_type\": \"office\",\n        \"image_url_array\": [],\n        \"end_time\": null,\n        \"start_time\": null,\n        \"title\": null,\n        \"is_active\": true,\n        \"phone_number\": \"(987) 654-3212\",\n        \"gps_location\": [\n            76.93663760000004,\n            8.524139100000001\n        ],\n        \"postal_code\": null,\n        \"country\": \"India\",\n        \"state\": \"Kerala\",\n        \"state_id\": null,\n        \"city\": \"trivand\",\n        \"address\": \"test addree\",\n        \"type_of_access\": null,\n        \"image_url\": null,\n        \"specialisation\": \"Electrologist\",\n        \"specialisation_id\": \"59119523c959ecfb77e034cf\",\n        \"last_name\": \"Joseph\",\n        \"first_name\": \"Rebinkjoseph\",\n        \"service_provider_id\": \"59311b53ff1ff20011c79cc6\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  {\n  \"status\": 0,\n  \"message\": \"Unauthorized\",\n  \"code\": 401\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/provider/provider.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "put",
    "url": "/serviceProviders/:id/providers/:providerId",
    "title": "Update Provider : updateProviderInfo",
    "name": "Provider___updateProviderinfo",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of the service provider</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "providerId",
            "description": "<p>_id of the provider</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phone",
            "description": "<p>number of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone_number_type",
            "description": "<p>type of phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image_url",
            "description": "<p>Url of the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company",
            "description": "<p>name of the company.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>address of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>city of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "state_id",
            "description": "<p>state id of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "postal_code",
            "description": "<p>postalcode of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "start_time",
            "description": "<p>appointmnet statring  time.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "end_time",
            "description": "<p>appointmnet enf time.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>emmail id of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "premium_appointment_fee",
            "description": "<p>appointmnet fee for premium appointments.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "get_amount_during_booking",
            "description": "<p>to get the amount during booking.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "default_calender",
            "description": "<p>default view of the calender .</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "default_booking_slot_size",
            "description": "<p>slot sixe of appointment booking.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "calender_start_time",
            "description": "<p>start time of the appointment.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "calender_end_time",
            "description": "<p>end time of the appointment.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "maximum_appointment_number",
            "description": "<p>limit of the appointments of a user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "maximum_appointment_span",
            "description": "<p>limit of appointment days.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "send_notification_on_booking",
            "description": "<p>send the notification about booking .</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "send_notification_on_cancelling",
            "description": "<p>send the notification status  of appointment cancellation.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "reminder_preference_email",
            "description": "<p>to send the reminder as email.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "reminder_preference_text",
            "description": "<p>send the reminder about appointment as text message.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n  \"platform\": \"webportal\",\n  \"first_name\": \"test\",\n  \"last_name\": \"test\",\n  \"phone_number_type\": \"office\",\n  \"phone_number\": \"(434) 655-5554\",\n  \"company\": \"Experion\",\n  \"address\": \"rewtwet\",\n  \"city\": \"Kochi\",\n  \"state\": \"Kerala\",\n  \"country\": \"India\",\n  \"email\": \"testtest@test.com\",\n  \"specialisation_id\": \"59119537c959ecfb77e034d0\",\n  \"specialisation\": \"Aroma Therapist\",\n  \"service_provider_id\": \"59311b53ff1ff20011c79cc6\",\n  \"long\": 76.26730410000005,\n  \"lat\": 9.9312328,\n  \"step\": 2,\n  \"configuration\": {\n    \"get_amout_during_booking\": true,\n    \"premium_appointment_fee\": \"70\",\n    \"maximum_appointment_number\": \"6\",\n    \"maximum_appointment_span\": \"600\",\n    \"default_calender\": \"W\",\n    \"send_notification_on_booking\": false,\n    \"send_notification_on_cancelling\": false,\n    \"reminder_preference_email\": false,\n    \"reminder_preference_text\": false\n  }\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n\"status\": 1,\n\"message\": \"Configuration settings of Provider updated\",\n\"code\": 200,\n\"data\": {\n  \"_id\": \"5927d73bb7efbf0011a31795\",\n  \"first_name\": \"binil\",\n  \"last_name\": \"k\",\n  \"specialisation_id\": \"59119523c959ecfb77e034cf\",\n  \"specialisation\": \"ortho\",\n  \"phone_number\": \"8545824562\",\n  \"phone_number_type\": \"office\",\n  \"image_url\": \"454312\",\n  \"company\": \"exp\",\n  \"address\": \"address\",\n  \"city\": \"city\",\n  \"state_id\": 57,\n  \"postal_code\": 45658,\n  \"service_provider_id\": \"5927ba38abe3840011c841d2\",\n  \"start_time\": 10,\n  \"end_time\": 10,\n  \"title\": \"mr\",\n  \"email\": \"binilbaby@gmmail.com\",\n  \"premium_appointment_fee\": 601,\n  \"get_amount_during_booking\": false,\n  \"state\": \"Kerala\",\n  \"default_booking_slot_size\": null,\n  \"calender_start_time\": null,\n  \"calender_end_time\": null,\n  \"maximum_appointment_number\": 20,\n  \"maximum_appointment_span\": 102,\n  \"send_notification_on_booking\": false,\n  \"send_notification_on_cancelling\": false,\n  \"reminder_prefernce\": \"E\",\n  \"country\": null,\n  \"configuration\": {\n    \"reminder_preference_text\": false,\n    \"reminder_preference_email\": false,\n    \"send_notification_on_cancelling\": true,\n    \"send_notification_on_booking\": true,\n    \"maximum_appointment_span\": null,\n    \"maximum_appointment_number\": null,\n    \"calender_end_time\": null,\n    \"calender_start_time\": null,\n    \"default_booking_slot_size\": null,\n    \"default_calender\": \"W\",\n    \"get_amount_during_booking\": true,\n    \"premium_appointment_fee\": null\n  }\n}",
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
    "filename": "modules/provider/provider.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/serviceProviders/:id?platform=:platform",
    "title": "ServiceProvider : Get Service Provider details",
    "name": "ServiceProvider___getDetails",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>_id of logged in service provider</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Provider details retrieved successfully\",\n  \"code\": 200,\n  \"data\": {\n    \"_id\": \"591e7b8d94e4fd0011b431eb\",\n    \"first_name\": \"Megha\",\n    \"last_name\": \"S\",\n    \"phone_number\": \"9876543210\",\n    \"address\": null,\n    \"city\": null,\n    \"state_id\": null,\n    \"postal_code\": null,\n    \"title\": \"Mrs\",\n    \"is_profile_completed\": false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n {\n  \"status\": 0,\n  \"message\": \"Platform required.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/serviceproviders/serviceproviders.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "GET",
    "url": "/serviceProviders/:id/signUpVerification?platform=:platform",
    "title": "Account : Verification",
    "name": "ServiceProvider___portalsignUpVerification",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique _id of service provider.</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n {\n  \"status\": 1,\n  \"message\": \"The account verification process is completed.\",\n  \"code\": 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n {\n  \"status\": 0,\n  \"message\": \"Invalid id.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/serviceproviders/serviceproviders.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "put",
    "url": "/serviceProviders/:id/cards",
    "title": "Serviceprovider : savecardDetails",
    "name": "Serviceprovider__savecardDetails",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of service provider</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name_on_card",
            "description": "<p>name printed on card.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_type",
            "description": "<p>type of the card (visa or master card).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_number",
            "description": "<p>number on card .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expiry_month",
            "description": "<p>expiry month of the card.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expiry_year",
            "description": "<p>expiry year of the card.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cvv_number",
            "description": "<p>cvv number on card .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>1 for success.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request format.",
          "content": "{\n  \"card_type\": \"visa\",\n  \"card_number\": \"123456789012\",\n  \"name_on_card\": \"PREMRAJ\",\n  \"cvv_number\": \"965\",\n  \"expiry_month\": \"05\",\n  \"expiry_year\": \"2021\",\n  \"platform\": \"webportal\"\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n {\n  \"status\": 1,\n  \"message\": \"Card details saved.\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Platform required.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/serviceproviders/serviceproviders.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "GET",
    "url": "/users?platform=:platform&type=:type&page=:page",
    "title": "User : User List",
    "name": "User___userList",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of list required (It can take two values. Either dropdown or list).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Page number for pagination (Required only if type = list).</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n {\n    \"status\": 1,\n    \"message\": \"User list retrieved successfully.\",\n    \"code\": 200,\n    \"totalRecords\": 4,\n    \"limitPerPage\": 10,\n    \"page\": \"1\",\n    \"searchparams\": {\n        \"platform\": \"webportal\",\n        \"type\": \"list\",\n        \"page\": \"1\",\n        \"sort_order\": \"\",\n        \"email\": \"\",\n        \"total_count\": 4\n    },\n    \"data\": [\n        {\n            \"_id\": \"5980858e33cb8e17a5973090\",\n            \"createdAt\": \"2017-08-01T13:43:42.860Z\",\n            \"email\": \"christinapgowans@rhyta.com\",\n            \"user_timezone\": null,\n            \"image_url\": null,\n            \"version\": null,\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"is_sms_enabled\": true,\n            \"is_notification_enabled\": true,\n            \"phone_number\": \"(718) 393-8106\",\n            \"dob\": null,\n            \"gender\": null,\n            \"ssn\": null,\n            \"zip\": null,\n            \"state\": null,\n            \"state_id\": null,\n            \"city\": null,\n            \"address\": null,\n            \"last_name\": \"Gowans\",\n            \"first_name\": \"Christina\",\n            \"user_name\": \"Gowans Christina\"\n        },\n        {\n            \"_id\": \"59808edb33cb8e17a5973094\",\n            \"createdAt\": \"2017-08-01T14:23:23.773Z\",\n            \"email\": \"maryjacob@gmail.com\",\n            \"user_timezone\": null,\n            \"image_url\": null,\n            \"version\": null,\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"is_sms_enabled\": true,\n            \"is_notification_enabled\": true,\n            \"phone_number\": \"323231321222\",\n            \"dob\": null,\n            \"gender\": null,\n            \"ssn\": null,\n            \"zip\": null,\n            \"state\": null,\n            \"state_id\": null,\n            \"city\": null,\n            \"address\": null,\n            \"last_name\": \"Jacob\",\n            \"first_name\": \"Mary\",\n            \"user_name\": \"Jacob Mary\"\n        },\n        {\n            \"_id\": \"59817f6d909ed21c4b306baa\",\n            \"createdAt\": \"2017-08-02T07:29:49.179Z\",\n            \"email\": \"test@asb.com\",\n            \"user_timezone\": \"Asia/Calcutta\",\n            \"image_url\": \"https://no2fyme.s3.us-east-2.amazonaws.com/develop/59817f6d909ed21c4b306baa/72274bc94aca883af2cd432617f22bd51501738269691.jpg\",\n            \"version\": null,\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"is_sms_enabled\": true,\n            \"is_notification_enabled\": true,\n            \"phone_number\": \"(664) 549-4676\",\n            \"dob\": \"\",\n            \"gender\": null,\n            \"ssn\": null,\n            \"zip\": null,\n            \"state\": null,\n            \"state_id\": null,\n            \"city\": null,\n            \"address\": null,\n            \"last_name\": \"Kannapan\",\n            \"first_name\": \"Tester\",\n            \"user_name\": \"Kannapan Tester\"\n        },\n        {\n            \"_id\": \"59807ed28f8a951560866335\",\n            \"createdAt\": \"2017-08-01T13:14:58.782Z\",\n            \"email\": \"athira.s@experionglobal.com\",\n            \"user_timezone\": null,\n            \"image_url\": \"https://no2fyme.s3.us-east-2.amazonaws.com/develop/59807ed28f8a951560866335/8c7596d7f0748fa0bb824ff1634dba7f1501649070553.jpg\",\n            \"version\": null,\n            \"is_deleted\": false,\n            \"is_active\": true,\n            \"is_sms_enabled\": false,\n            \"is_notification_enabled\": true,\n            \"phone_number\": \"(281) 892-9212\",\n            \"dob\": \"\",\n            \"gender\": null,\n            \"ssn\": null,\n            \"zip\": null,\n            \"state\": null,\n            \"state_id\": null,\n            \"city\": null,\n            \"address\": null,\n            \"last_name\": \"S\",\n            \"first_name\": \"Athira\",\n            \"user_name\": \"S Athira\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"status\": 0,\n   \"message\": \"Type is required.\",\n   \"code\": 400,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/users/users.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/appointments?platform=:platform&provider_id=:provider_id&appointment_status=:appointment_status&start_date=:start_date&end_date=:end_date&page=:page",
    "title": "getAppointmentHistory : get list of appointments",
    "name": "getAppointmentHistory___getAppointmentHistory",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the service provider whose provider/providers' appointments are to be listed.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start timestamp.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end_date",
            "description": "<p>End timestamp.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "appointment_status",
            "description": "<p>Appointment status (B-Booked, P-Pending, C-Cancelled).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>Page number for pagination.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_provider_id",
            "description": "<p>_id of the service provider whose appointments are to be listed (Optional - need in the filter only for SuperAdmin).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "provider_id",
            "description": "<p>_id of the provider whose appointments are to be listed (Optional. If not specified, appointments belonging to all providers under the service provider will be listed.).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Appointment history retrieved successfully.\",\n  \"code\": 200,\n  \"totalRecords\": 2,\n  \"limitPerPage\": 20,\n  \"page\": \"1\",\n  \"searchparams\": {\n    \"platform\": \"webportal\",\n    \"start_date\": \"1496403963993\",\n    \"end_date\": \"1496404963993\",\n    \"status\": \"B\",\n    \"type\": \"week\",\n    \"page\": \"1\",\n    \"total_count\": 2\n  },\n  \"data\": [\n    {\n      \"_id\": \"593137c4ff1ff20011c79cf1\",\n      \"service_provider_id\": \"59312a3eff1ff20011c79cd3\",\n      \"appointment_type\": \"R\",\n      \"appointment_duration\": 60,\n      \"family_member_name\": \"Binesh P\",\n      \"family_member_id\": \"592d8ef3581be800112694d0\",\n      \"appointment_reason_id\": \"591594f6c959ecfb77e034e9\",\n      \"provider_name\": \"Shirley M Peterson\",\n      \"provider_id\": \"59312d39ff1ff20011c79cdb\",\n      \"appointment_reason\": \"Pedicure\",\n      \"appointment_status\": \"B\",\n      \"booked_on\": 1496397764341,\n      \"is_paid\": true,\n      \"amount\": 10.99,\n      \"appointment_end_time\": 1496408564341,\n      \"time_slot\": 1496404964341,\n      \"provider_first_name\": \"Shirley M\",\n      \"provider_last_name\": \"Peterson\",\n      \"provider_phone_number\": \"513-886-4092\",\n      \"provider_distance\": null,\n      \"provider_company\": null,\n      \"provider_address\": \"4497 Round Table Drive\",\n      \"provider_state\": \"Ohio\",\n      \"provider_postal_code\": null\n    },\n    {\n      \"_id\": \"593133dcff1ff20011c79ceb\",\n      \"service_provider_id\": \"5931295eff1ff20011c79cd1\",\n      \"appointment_type\": \"R\",\n      \"appointment_duration\": 30,\n      \"family_member_name\": \"Suresh R  S\",\n      \"family_member_id\": \"592d04a28a0dbd00119cc834\",\n      \"appointment_reason_id\": \"591594d0c959ecfb77e034e8\",\n      \"provider_name\": \"Anthony Yale\",\n      \"provider_id\": \"59312ca4ff1ff20011c79cd8\",\n      \"appointment_reason\": \"Hair Cut\",\n      \"appointment_status\": \"B\",\n      \"booked_on\": 1496396763993,\n      \"is_paid\": true,\n      \"amount\": 10.99,\n      \"appointment_end_time\": 1496405763993,\n      \"time_slot\": 1496403963993,\n      \"provider_first_name\": \"Anthony\",\n      \"provider_last_name\": \"Yale\",\n      \"provider_phone_number\": \"606-837-3982\",\n      \"provider_distance\": null,\n      \"provider_company\": null,\n      \"provider_address\": \"North Bend River Road\",\n      \"provider_state\": \"United States\",\n      \"provider_postal_code\": null\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"No records found.\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/appointment/appointment.documentation.js",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/serviceProviders/:id/providers/:providerId/calendar?platform=:platform&selected_date=:selected_date&calendar_view=:calendar_view",
    "title": "Schedule : Get Calendar Input",
    "name": "Schedule___getCalendarInput",
    "group": "Schedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the service provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "selected_date",
            "description": "<p>UTC timestamp in milliseconds of the selected date.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "calendar_view",
            "description": "<p>Specify D or W [D-Daily, W-Weekly].</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n  {\n    \"status\": 1,\n    \"message\": \"Timeslots retrieved successfully.\",\n    \"code\": 200,\n    \"data\": {\n        \"calendar_view\": \"W\",\n        \"selected_date\": \"1498953600000\",\n        \"id\": \"595369d5ec8cdb5e36868e31\",\n        \"events\": [\n            {\n                \"start\": \"2017-07-02T00:00:00.000Z\",\n                \"end\": \"2017-07-02T23:59:00.000Z\",\n                \"overlap\": false,\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-inverse\"\n                ]\n            },\n            {\n                \"start\": \"2017-07-03T00:00:00.000Z\",\n                \"end\": \"2017-07-03T07:00:00.000Z\",\n                \"overlap\": false,\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-inverse\"\n                ]\n            },\n            {\n                \"id\": \"availableForMeeting\",\n                \"start\": \"2017-07-03T07:00:00.000Z\",\n                \"end\": \"2017-07-03T10:00:00.000Z\",\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-background\"\n                ]\n            },\n            {\n                \"start\": \"2017-07-03T10:00:00.000Z\",\n                \"end\": \"2017-07-03T23:59:00.000Z\",\n                \"overlap\": false,\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-inverse\"\n                ]\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-03T07:00:00.000Z\",\n                \"end\": \"2017-07-03T07:15:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-03T07:15:00.000Z\",\n                \"end\": \"2017-07-03T07:30:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-03T07:30:00.000Z\",\n                \"end\": \"2017-07-03T07:45:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-03T07:45:00.000Z\",\n                \"end\": \"2017-07-03T08:00:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-03T08:00:00.000Z\",\n                \"end\": \"2017-07-03T08:15:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-03T08:15:00.000Z\",\n                \"end\": \"2017-07-03T08:30:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-03T08:30:00.000Z\",\n                \"end\": \"2017-07-03T08:45:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-03T08:45:00.000Z\",\n                \"end\": \"2017-07-03T09:00:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"B\",\n                \"start\": \"2017-07-03T09:00:00.000Z\",\n                \"end\": \"2017-07-03T09:15:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-blue\"\n                ],\n                \"appointment_id\": \"5954e4044cc90806c10ea716\"\n            },\n            {\n                \"slot_type\": \"B\",\n                \"start\": \"2017-07-03T09:15:00.000Z\",\n                \"end\": \"2017-07-03T09:30:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-blue\"\n                ],\n                \"appointment_id\": \"5954e4044cc90806c10ea716\"\n            },\n            {\n                \"slot_type\": \"B\",\n                \"start\": \"2017-07-03T09:30:00.000Z\",\n                \"end\": \"2017-07-03T09:45:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-blue\"\n                ],\n                \"appointment_id\": \"5954e4044cc90806c10ea716\"\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-03T09:45:00.000Z\",\n                \"end\": \"2017-07-03T10:00:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"start\": \"2017-07-04T00:00:00.000Z\",\n                \"end\": \"2017-07-04T23:59:00.000Z\",\n                \"overlap\": false,\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-inverse\"\n                ]\n            },\n            {\n                \"start\": \"2017-07-05T00:00:00.000Z\",\n                \"end\": \"2017-07-05T07:00:00.000Z\",\n                \"overlap\": false,\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-inverse\"\n                ]\n            },\n            {\n                \"id\": \"availableForMeeting\",\n                \"start\": \"2017-07-05T07:00:00.000Z\",\n                \"end\": \"2017-07-05T16:00:00.000Z\",\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-background\"\n                ]\n            },\n            {\n                \"start\": \"2017-07-05T16:00:00.000Z\",\n                \"end\": \"2017-07-05T23:59:00.000Z\",\n                \"overlap\": false,\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-inverse\"\n                ]\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T07:00:00.000Z\",\n                \"end\": \"2017-07-05T07:15:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T07:15:00.000Z\",\n                \"end\": \"2017-07-05T07:30:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T07:30:00.000Z\",\n                \"end\": \"2017-07-05T07:45:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T07:45:00.000Z\",\n                \"end\": \"2017-07-05T08:00:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T08:00:00.000Z\",\n                \"end\": \"2017-07-05T08:15:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-red\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T08:15:00.000Z\",\n                \"end\": \"2017-07-05T08:30:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-red\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T08:30:00.000Z\",\n                \"end\": \"2017-07-05T08:45:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-red\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"P\",\n                \"start\": \"2017-07-05T08:45:00.000Z\",\n                \"end\": \"2017-07-05T09:00:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-red\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"P\",\n                \"start\": \"2017-07-05T09:00:00.000Z\",\n                \"end\": \"2017-07-05T09:15:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-red\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"P\",\n                \"start\": \"2017-07-05T09:15:00.000Z\",\n                \"end\": \"2017-07-05T09:30:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-red\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"P\",\n                \"start\": \"2017-07-05T09:30:00.000Z\",\n                \"end\": \"2017-07-05T09:45:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-red\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"P\",\n                \"start\": \"2017-07-05T09:45:00.000Z\",\n                \"end\": \"2017-07-05T10:00:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-red\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"P\",\n                \"start\": \"2017-07-05T10:00:00.000Z\",\n                \"end\": \"2017-07-05T10:15:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-red\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T10:15:00.000Z\",\n                \"end\": \"2017-07-05T10:30:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T10:30:00.000Z\",\n                \"end\": \"2017-07-05T10:45:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T10:45:00.000Z\",\n                \"end\": \"2017-07-05T11:00:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T11:00:00.000Z\",\n                \"end\": \"2017-07-05T11:15:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T11:15:00.000Z\",\n                \"end\": \"2017-07-05T11:30:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T11:30:00.000Z\",\n                \"end\": \"2017-07-05T11:45:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T11:45:00.000Z\",\n                \"end\": \"2017-07-05T12:00:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T13:00:00.000Z\",\n                \"end\": \"2017-07-05T13:15:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T13:15:00.000Z\",\n                \"end\": \"2017-07-05T13:30:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T13:30:00.000Z\",\n                \"end\": \"2017-07-05T13:45:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T13:45:00.000Z\",\n                \"end\": \"2017-07-05T14:00:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T14:00:00.000Z\",\n                \"end\": \"2017-07-05T14:15:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T14:15:00.000Z\",\n                \"end\": \"2017-07-05T14:30:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T14:30:00.000Z\",\n                \"end\": \"2017-07-05T14:45:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T14:45:00.000Z\",\n                \"end\": \"2017-07-05T15:00:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T15:00:00.000Z\",\n                \"end\": \"2017-07-05T15:15:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T15:15:00.000Z\",\n                \"end\": \"2017-07-05T15:30:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T15:30:00.000Z\",\n                \"end\": \"2017-07-05T15:45:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"slot_type\": \"R\",\n                \"start\": \"2017-07-05T15:45:00.000Z\",\n                \"end\": \"2017-07-05T16:00:00.000Z\",\n                \"editable\": false,\n                \"className\": [\n                    \"event\",\n                    \"bg-color-greenLight\"\n                ],\n                \"appointment_id\": null\n            },\n            {\n                \"start\": \"2017-07-05T12:00:00.000Z\",\n                \"end\": \"2017-07-05T13:00:00.000Z\",\n                \"overlap\": false,\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-inverse\"\n                ]\n            },\n            {\n                \"start\": \"2017-07-06T00:00:00.000Z\",\n                \"end\": \"2017-07-06T23:59:00.000Z\",\n                \"overlap\": false,\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-inverse\"\n                ]\n            },\n            {\n                \"start\": \"2017-07-07T00:00:00.000Z\",\n                \"end\": \"2017-07-07T23:59:00.000Z\",\n                \"overlap\": false,\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-inverse\"\n                ]\n            },\n            {\n                \"start\": \"2017-07-08T00:00:00.000Z\",\n                \"end\": \"2017-07-08T23:59:00.000Z\",\n                \"overlap\": false,\n                \"rendering\": \"background\",\n                \"className\": [\n                    \"event\",\n                    \"bg-fc-inverse\"\n                ]\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Provider does not exist\",\n  \"code\": 200,\n  \"totalRecords\": 0,\n  \"limitPerPage\": 2,\n  \"page\": 1,\n  \"searchparams\": {\n  \"platform\": \"mobile\",\n  \"latitude\": \"12.55677\",\n  \"longitude\": \"76.882139\",\n  \"selected_date\": \"1494411681000\"\n},\n\"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/schedule/schedule.documentation.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "put",
    "url": "/serviceProviders/:id/providers/:providerId/scheduleChanges",
    "title": "Schedule : Update Schedule",
    "name": "Schedule___updateSchedule",
    "group": "Schedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the service provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>Start time of the schedule.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>End time of the schedule.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slot_type",
            "description": "<p>Slot type of the schedule.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
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
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>sucess code .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request Format",
          "content": "{\n  \"platform\": \"webportal\",\n  \"schedule_array\": [\n      {\n            \"start_time\": \"1496316600000\",\n            \"end_time\": \"1496317500000\",\n            \"slot_type\": \"R\"\n      },\n      {\n            \"start_time\": \"1496316600000\",\n            \"end_time\": \"1496317500000\",\n            \"slot_type\": \"R\"\n      }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n  \"status\": 1,\n  \"message\": \"Schedule updated successfully.\",\n  \"code\": 200,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"status\": 0,\n  \"message\": \"Slot type is required.\",\n  \"code\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/schedule/schedule.documentation.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "post",
    "url": "/serviceProviders/:id/providers/:providerId/schedules?plaform=:platform&provider_timezone=:provider_timezone",
    "title": "schedule : Schedule Configuration",
    "name": "configuration___configuration",
    "group": "Schedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_token",
            "description": "<p>the same user_token returned from api during login(should be set in the &quot;Authorization&quot; header )</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the service provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "provider_timezone",
            "description": "<p>Timezone of the provider.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "start_time",
            "description": "<p>start time of the appointment schedule.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "start_time_format",
            "description": "<p>start time (am/ pm)of the appointment schedule.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "end_time",
            "description": "<p>end time of the appointment schedule.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end_time_format",
            "description": "<p>start time (am/ pm)of the appointment schedule.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "break_start_time_format",
            "description": "<p>break start time am/ pm.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "break_start_time",
            "description": "<p>break time start.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "break-end-time-required",
            "description": "<p>end of break time.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "break_end_time_format",
            "description": "<p>break end  time am/ pm.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "premium_appointment_start_time",
            "description": "<p>start time of Premium appointment.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "premium_appointment_start_time_format",
            "description": "<p>start time of Premium appointment.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "premium_appointment_end_time",
            "description": "<p>end time of Premium appointment.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example Request Format",
          "content": " {\n    \"platform\": \"webportal\",\n    \"provider_timezone\": \"America/Los_Angeles\",\n    \"sunday\": {\n        \"start_time\": \"10:00\",\n        \"start_time_format\": \"AM\",\n        \"end_time\": \"11:30\",\n        \"end_time_format\": \"AM\",\n        \"break_start_time\": \"12:00\",\n        \"break_start_time_format\": \"PM\",\n        \"break_end_time\": \"01:30\",\n        \"break_end_time_format\": \"PM\",\n        \"premium_appointment_start_time\": \"02:00\",\n        \"premium_appointment_start_time_format\": \"PM\",\n        \"premium_appointment_end_time\": \"06:00\",\n        \"premium_appointment_end_time_format\": \"PM\"\n    },\n    \"monday\": {\n        \"start_time\": \"10:00\",\n        \"start_time_format\": \"AM\",\n        \"end_time\": \"11:30\",\n        \"end_time_format\": \"AM\",\n        \"break_start_time\": \"12:00\",\n        \"break_start_time_format\": \"PM\",\n        \"break_end_time\": \"01:30\",\n        \"break_end_time_format\": \"PM\",\n        \"premium_appointment_start_time\": \"02:00\",\n        \"premium_appointment_start_time_format\": \"PM\",\n        \"premium_appointment_end_time\": \"06:00\",\n        \"premium_appointment_end_time_format\": \"PM\"\n    },\n    \"tuesday\": {\n        \"start_time\": \"10:00\",\n        \"start_time_format\": \"AM\",\n        \"end_time\": \"11:30\",\n        \"end_time_format\": \"AM\",\n        \"break_start_time\": \"12:00\",\n        \"break_start_time_format\": \"PM\",\n        \"break_end_time\": \"01:30\",\n        \"break_end_time_format\": \"PM\",\n        \"premium_appointment_start_time\": \"02:00\",\n        \"premium_appointment_start_time_format\": \"PM\",\n        \"premium_appointment_end_time\": \"06:00\",\n        \"premium_appointment_end_time_format\": \"PM\"\n    },\n    \"wednesday\": {\n        \"start_time\": \"10:00\",\n        \"start_time_format\": \"AM\",\n        \"end_time\": \"11:30\",\n        \"end_time_format\": \"AM\",\n        \"break_start_time\": \"12:00\",\n        \"break_start_time_format\": \"PM\",\n        \"break_end_time\": \"01:30\",\n        \"break_end_time_format\": \"PM\",\n        \"premium_appointment_start_time\": \"02:00\",\n        \"premium_appointment_start_time_format\": \"PM\",\n        \"premium_appointment_end_time\": \"06:00\",\n        \"premium_appointment_end_time_format\": \"PM\"\n    },\n    \"thursday\": {\n        \"start_time\": \"10:00\",\n        \"start_time_format\": \"AM\",\n        \"end_time\": \"11:30\",\n        \"end_time_format\": \"AM\",\n        \"break_start_time\": \"12:00\",\n        \"break_start_time_format\": \"PM\",\n        \"break_end_time\": \"01:30\",\n        \"break_end_time_format\": \"PM\",\n        \"premium_appointment_start_time\": \"02:00\",\n        \"premium_appointment_start_time_format\": \"PM\",\n        \"premium_appointment_end_time\": \"06:00\",\n        \"premium_appointment_end_time_format\": \"PM\"\n    },\n    \"friday\": {\n        \"start_time\": \"10:00\",\n        \"start_time_format\": \"AM\",\n        \"end_time\": \"11:30\",\n        \"end_time_format\": \"AM\",\n        \"break_start_time\": \"12:00\",\n        \"break_start_time_format\": \"PM\",\n        \"break_end_time\": \"01:30\",\n        \"break_end_time_format\": \"PM\",\n        \"premium_appointment_start_time\": \"02:00\",\n        \"premium_appointment_start_time_format\": \"PM\",\n        \"premium_appointment_end_time\": \"06:00\",\n        \"premium_appointment_end_time_format\": \"PM\"\n    },\n    \"saturday\": {\n        \"start_time\": \"10:00\",\n        \"start_time_format\": \"AM\",\n        \"end_time\": \"11:30\",\n        \"end_time_format\": \"AM\",\n        \"break_start_time\": \"12:00\",\n        \"break_start_time_format\": \"PM\",\n        \"break_end_time\": \"01:30\",\n        \"break_end_time_format\": \"PM\",\n        \"premium_appointment_start_time\": \"02:00\",\n        \"premium_appointment_start_time_format\": \"PM\",\n        \"premium_appointment_end_time\": \"06:00\",\n        \"premium_appointment_end_time_format\": \"PM\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Example data on success",
          "content": "\n{\n    \"status\": 1,\n    \"message\": \"Schedule configuration saved.\",\n    \"code\": 200,\n    \"data\": {\n        \"sunday\": {\n            \"start_time\": \"10:00\",\n            \"start_time_format\": \"AM\",\n            \"end_time\": \"11:30\",\n            \"end_time_format\": \"AM\",\n            \"break_start_time\": \"12:00\",\n            \"break_start_time_format\": \"PM\",\n            \"break_end_time\": \"01:30\",\n            \"break_end_time_format\": \"PM\",\n            \"premium_appointment_start_time\": \"02:00\",\n            \"premium_appointment_start_time_format\": \"PM\",\n            \"premium_appointment_end_time\": \"06:00\",\n            \"premium_appointment_end_time_format\": \"PM\"\n        },\n        \"monday\": {\n            \"start_time\": \"10:00\",\n            \"start_time_format\": \"AM\",\n            \"end_time\": \"11:30\",\n            \"end_time_format\": \"AM\",\n            \"break_start_time\": \"12:00\",\n            \"break_start_time_format\": \"PM\",\n            \"break_end_time\": \"01:30\",\n            \"break_end_time_format\": \"PM\",\n            \"premium_appointment_start_time\": \"02:00\",\n            \"premium_appointment_start_time_format\": \"PM\",\n            \"premium_appointment_end_time\": \"06:00\",\n            \"premium_appointment_end_time_format\": \"PM\"\n        },\n        \"tuesday\": {\n            \"start_time\": \"10:00\",\n            \"start_time_format\": \"AM\",\n            \"end_time\": \"11:30\",\n            \"end_time_format\": \"AM\",\n            \"break_start_time\": \"12:00\",\n            \"break_start_time_format\": \"PM\",\n            \"break_end_time\": \"01:30\",\n            \"break_end_time_format\": \"PM\",\n            \"premium_appointment_start_time\": \"02:00\",\n            \"premium_appointment_start_time_format\": \"PM\",\n            \"premium_appointment_end_time\": \"06:00\",\n            \"premium_appointment_end_time_format\": \"PM\"\n        },\n        \"wednesday\": {\n            \"start_time\": \"10:00\",\n            \"start_time_format\": \"AM\",\n            \"end_time\": \"11:30\",\n            \"end_time_format\": \"AM\",\n            \"break_start_time\": \"12:00\",\n            \"break_start_time_format\": \"PM\",\n            \"break_end_time\": \"01:30\",\n            \"break_end_time_format\": \"PM\",\n            \"premium_appointment_start_time\": \"02:00\",\n            \"premium_appointment_start_time_format\": \"PM\",\n            \"premium_appointment_end_time\": \"06:00\",\n            \"premium_appointment_end_time_format\": \"PM\"\n        },\n        \"thursday\": {\n            \"start_time\": \"10:00\",\n            \"start_time_format\": \"AM\",\n            \"end_time\": \"11:30\",\n            \"end_time_format\": \"AM\",\n            \"break_start_time\": \"12:00\",\n            \"break_start_time_format\": \"PM\",\n            \"break_end_time\": \"01:30\",\n            \"break_end_time_format\": \"PM\",\n            \"premium_appointment_start_time\": \"02:00\",\n            \"premium_appointment_start_time_format\": \"PM\",\n            \"premium_appointment_end_time\": \"06:00\",\n            \"premium_appointment_end_time_format\": \"PM\"\n        },\n        \"friday\": {\n            \"start_time\": \"10:00\",\n            \"start_time_format\": \"AM\",\n            \"end_time\": \"11:30\",\n            \"end_time_format\": \"AM\",\n            \"break_start_time\": \"12:00\",\n            \"break_start_time_format\": \"PM\",\n            \"break_end_time\": \"01:30\",\n            \"break_end_time_format\": \"PM\",\n            \"premium_appointment_start_time\": \"02:00\",\n            \"premium_appointment_start_time_format\": \"PM\",\n            \"premium_appointment_end_time\": \"06:00\",\n            \"premium_appointment_end_time_format\": \"PM\"\n        },\n        \"saturday\": {\n            \"start_time\": \"10:00\",\n            \"start_time_format\": \"AM\",\n            \"end_time\": \"11:30\",\n            \"end_time_format\": \"AM\",\n            \"break_start_time\": \"12:00\",\n            \"break_start_time_format\": \"PM\",\n            \"break_end_time\": \"01:30\",\n            \"break_end_time_format\": \"PM\",\n            \"premium_appointment_start_time\": \"02:00\",\n            \"premium_appointment_start_time_format\": \"PM\",\n            \"premium_appointment_end_time\": \"06:00\",\n            \"premium_appointment_end_time_format\": \"PM\"\n        }\n    }\n}",
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
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"status\": 0,\n    \"message\": \"End time must be larger than start time for saturday\",\n    \"code\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/schedule/schedule.documentation.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "GET",
    "url": "/serviceProviders?platform=:platform&type=:type&page=:page",
    "title": "Service Provider : Service Provider List",
    "name": "ServiceProvider___serviceProviderList",
    "group": "superAdmin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Request from mobile or portal.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of list required (It can take two values. Either dropdown or list).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Page number for pagination (Required only if type = list).</p>"
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
            "description": "<p>returned from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "\n{\n   \"status\": 1,\n   \"message\": \"Service provider list retrieved successfully.\",\n   \"code\": 200,\n   \"totalRecords\": 92,\n   \"limitPerPage\": 10,\n   \"page\": \"10\",\n   \"searchparams\": {\n       \"platform\": \"webportal\",\n       \"type\": \"list\",\n       \"page\": \"10\",\n       \"total_count\": 92\n   },\n   \"data\": [\n       {\n           \"_id\": \"59509c75ae7c062407f314b2\",\n           \"first_name\": \"premraj\",\n           \"last_name\": \"r\",\n           \"phone_number\": \"(111) 111-1111\",\n           \"address\": null,\n           \"city\": null,\n           \"country\": null,\n           \"postal_code\": null,\n           \"title\": null,\n           \"is_profile_completed\": false,\n           \"email\": \"premraj.r4@experionglobal.com\",\n           \"office_fax\": null,\n           \"suite\": null,\n           \"state\": null,\n           \"type_of_access\": null,\n           \"user_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTUwOWM3NWFlN2MwNjI0MDdmMzE0YjIiLCJ1c2VyX3R5cGUiOiJwb3J0YWxVc2VyIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTQ5ODQ1NTE1N30.NHSn3VJ1YPwL_ea21scVzDNHyjvO2Eo0dWZcreW7EPM\",\n           \"phone_number_type\": null,\n           \"billing_info\": {\n               \"phone_number_type\": null,\n               \"title\": null,\n               \"office_fax\": null,\n               \"phone_number\": null,\n               \"postal_code\": null,\n               \"country\": null,\n               \"state\": null,\n               \"city\": null,\n               \"suite\": null,\n               \"address\": null,\n               \"company\": null,\n               \"last_name\": null,\n               \"first_name\": null\n           },\n           \"is_active\": true,\n           \"user_role\": \"serviceProvider\"\n       },\n       {\n           \"_id\": \"5950d77e080758388293b546\",\n           \"first_name\": \"Rakhi\",\n           \"last_name\": \"Experion\",\n           \"phone_number\": \"(839) 020-2029\",\n           \"company\": \"Experion\",\n           \"address\": \"Thejaswini, Technopark\",\n           \"city\": \"triv\",\n           \"country\": \"India\",\n           \"postal_code\": null,\n           \"title\": null,\n           \"is_profile_completed\": true,\n           \"email\": \"rakhi.mr+16@experionglobal.com\",\n           \"office_fax\": null,\n           \"suite\": null,\n           \"state\": \"Kerala\",\n           \"type_of_access\": null,\n           \"user_token\": null,\n           \"phone_number_type\": \"office\",\n           \"billing_info\": {\n               \"email\": \"rakhi.mr+16@experionglobal.com\",\n               \"phone_number_type\": \"office\",\n               \"title\": null,\n               \"office_fax\": null,\n               \"phone_number\": \"(839) 020-2029\",\n               \"postal_code\": null,\n               \"country\": \"India\",\n               \"state\": \"Kerala\",\n               \"city\": \"triv\",\n               \"suite\": null,\n               \"address\": \"Thejaswini, Technopark\",\n               \"company\": \"Experion\",\n               \"last_name\": \"Experion\",\n               \"first_name\": \"Rakhi\"\n           },\n           \"is_active\": true,\n           \"user_role\": \"serviceProvider\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"status\": 0,\n   \"message\": \"Type is required.\",\n   \"code\": 400,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "modules/serviceproviders/serviceproviders.documentation.js",
    "groupTitle": "superAdmin"
  }
] });
