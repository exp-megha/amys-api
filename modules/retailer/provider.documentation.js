
/**
  * @api {get} /providers/nearBy?platform=:platform&page=:page&latitude=:latitude&longitude=:longitude&selected_date=:selected_date Provider : Get near by provider List
  * @apiName Provider : nearByProviders
  * @apiGroup Mobile
  *
  * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
  * @apiParam {string} platform Request from mobile or portal.
  * @apiParam {string} latitude Current location.
  * @apiParam {string} longitude Current location.
  * @apiParam {number} selected_date UTC timestamp in milliseconds.
  * @apiParam {number} page Current page number.
  * @apiParam {number} radius radius selected from list.
  * @apiParam {number} specialisation_id _id of specialisation.
  * @apiParam {number} appointment_type Specify type of appointment [R-Regular, P-Premium, B-Both]
  * @apiParam {number} sort_by_field values are schedule_configuration, total_bookings, createdAt
  *
  * @apiSuccess {number} status 1 for success.
  * @apiSuccess {String} message success message.
  * @apiSuccess {number} code sucess code .
  * @apiSuccess {string} data returned from the API.
  * @apiSuccessExample Example data on success
  *
  {
  "status": 1,
  "message": "List of providers based on current locations.",
  "code": 200,
  "totalRecords": 5,
  "limitPerPage": 20,
  "page": "1",
  "searchparams": {
    "platform": "mobile",
    "latitude": "8.9549",
    "longitude": "76.6838",
    "selected_date": "1494498730000",
    "page": "1",
    "total_count": 5
  },
  "data": [
    {
      "_id": "5914340cc959ecfb77e034dc",
      "email": "arjun.sreedhar@experionglobal.com",
      "service_provider_id": "59119932c959ecfb77e034d3",
      "specialisation_id": "59119537c959ecfb77e034d0",
      "specialisation": "Ortho",
      "last_name": "Sreedhar",
      "first_name": "Arjun",
      "title": "Ms",
      "image_url": "https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg",
      "phone_number": "2435436456456",
      "company": "Test ertert Company",
      "address": "Exper te rte ionglobal",
      "postal_code": 685545,
      "state": "Kerala",
      "state_id": 3,
      "city": "Trivandrum",
      "gps_location": [
        76.6838,
        8.9549
      ],
      "is_active": true,
      "start_time": 9,
      "end_time": 17,
      "distance": 0
    },
    {
      "_id": "59119c5bc959ecfb77e034d5",
      "email": "suresh.rs@experionglobal.com",
      "service_provider_id": "59119932c959ecfb77e034d3",
      "specialisation_id": "59119548c959ecfb77e034d1",
      "specialisation": "Ortho",
      "last_name": "RS",
      "first_name": "Suresh",
      "title": "Mr",
      "image_url": "https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg",
      "phone_number": "123-34567-890",
      "company": "Test Company 2",
      "address": "Experionglobal 2",
      "postal_code": 687544,
      "state": "California",
      "state_id": 1,
      "city": "Test City",
      "gps_location": [
        76.6581344604492,
        8.8748954343653
      ],
      "is_active": true,
      "start_time": 10,
      "end_time": 18,
      "distance": 9.33218369844991
    },
    {
      "_id": "59119be0c959ecfb77e034d4",
      "email": "rakhi.mr@experionglobal.com",
      "password": "trwetwerrfywegrbweygr7867868",
      "service_provider_id": "59119932c959ecfb77e034d3",
      "specialisation_id": "59119537c959ecfb77e034d0",
      "specialisation": "Ortho",
      "last_name": "Experion",
      "first_name": "Rakhi",
      "title": "Ms",
      "image_url": "https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg",
      "phone_number": "123-34567-890",
      "company": "Test Company",
      "address": "Experionglobal",
      "postal_code": 687545,
      "state": "California",
      "state_id": 1,
      "city": "Test City",
      "gps_location": [
        76.7163,
        8.7379
      ],
      "is_active": true,
      "start_time": 8,
      "end_time": 17,
      "createdAt": "2017-05-15T09:59:33.908Z",
      "reset_token": "30300",
      "updatedAt": "2017-05-15T12:27:45.730Z",
      "distance": 24.39208879140645
    },
    {
      "_id": "59197dfd7ae8611288e7c094",
      "updatedAt": "2017-05-15T10:07:57.738Z",
      "createdAt": "2017-05-15T10:07:57.738Z",
      "email": "rakhi.mr+5@experionglobal.com",
      "company": "experion",
      "password": "abcd1234",
      "is_active": true,
      "phone_number": null,
      "gps_location": [
        76.9513,
        8.5108
      ],
      "postal_code": null,
      "state": null,
      "state_id": null,
      "city": null,
      "address": null,
      "type_of_access": "normal",
      "image_url": null,
      "specialisation": "bghh",
      "specialisation_id": null,
      "last_name": "bbb",
      "first_name": "aaa",
      "service_provider_id": null,
      "distance": 57.47080456142501
    },
    {
      "_id": "59197eb6b991c11ee81c4ad9",
      "updatedAt": "2017-05-15T10:11:02.930Z",
      "createdAt": "2017-05-15T10:11:02.930Z",
      "email": "rakhis.mr+5@experionglobal.com",
      "company": "experion",
      "password": "abcd1234",
      "is_active": true,
      "phone_number": null,
      "gps_location": [
        76.9477,
        8.4845
      ],
      "postal_code": null,
      "state": null,
      "state_id": null,
      "city": null,
      "address": null,
      "type_of_access": "normal",
      "image_url": null,
      "specialisation": "bghh",
      "specialisation_id": null,
      "last_name": "bbb",
      "first_name": "aaa",
      "service_provider_id": null,
      "distance": 59.809885810330016
    }
  ]
}
  *
  *@apiErrorExample {json} Error-Response:
  *
  {
    "status": 0,
    "message": "Provider does not exist",
    "code": 200,
    "totalRecords": 0,
    "limitPerPage": 2,
    "page": 1,
    "searchparams": {
    "platform": "mobile",
    "latitude": "12.55677",
    "longitude": "76.882139",
    "selected_date": "1494411681000"
  },
  "data": []
  }
  *
  */

 /**
 * @api {get} /serviceProviders/:id/providers/:providerId/timeslots?platform=:platform&selected_date=:date  GetTimeslots :  Get Timeslots
 * @apiName Provider : GetTimeslots
 * @apiGroup Portal
 *
 * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
 * @apiParam {string} providerId _id of the provider.
 * @apiParam {string} platform Request from mobile or portal.
 * @apiParam {string} selected_date timestamp in milliseconds.
 * @apiParam {string} from specify from which screen [reschedule, providerlist etc]
 * @apiParam {string} calendar_view specify Daily or Weekly [D, W]

 * @apiSuccessExample Example Request Format
{
    "status": 1,
    "message": "Time slots retrieved successfully",
    "code": 200,
    "data": [
        {
            "start": "2017-06-18T00:00:00.000Z",
            "end": "2017-06-18T10:00:00.000Z",
            "overlap": false,
            "rendering": "background",
            "className": [
                "event",
                "bg-fc-inverse"
            ]
        },
        {
            "id": "availableForMeeting",
            "start": "2017-06-18T10:00:00.000Z",
            "end": "2017-06-18T11:30:00.000Z",
            "rendering": "background",
            "className": [
                "event",
                "bg-fc-background"
            ]
        },
        {
            "start": "2017-06-18T11:30:00.000Z",
            "end": "2017-06-18T23:59:00.000Z",
            "overlap": false,
            "rendering": "background",
            "className": [
                "event",
                "bg-fc-inverse"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T10:00:00.000Z",
            "end": "2017-06-18T10:15:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T10:15:00.000Z",
            "end": "2017-06-18T10:30:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T10:30:00.000Z",
            "end": "2017-06-18T10:45:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T10:45:00.000Z",
            "end": "2017-06-18T11:00:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T11:00:00.000Z",
            "end": "2017-06-18T11:15:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T11:15:00.000Z",
            "end": "2017-06-18T11:30:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        }
      ]
}
*
*@apiErrorExample {json} Error-Response: 'validation error'
*
{
    "status": 0,
    "message": "Provider does not exist",
    "code": 400,
    "data": null
}
*
*/

/**
 * @api {get} /providers/:providerId/timeslots?platform=:platform&selected_date=:date  GetTimeslots :  Get Timeslots
 * @apiName Provider : GetTimeslots
 * @apiGroup Mobile
 *
 * @apiParam {string} providerId _id of the provider.
 * @apiParam {string} platform Request from mobile or portal.
 * @apiParam {string} selected_date timestamp in milliseconds.
 * @apiParam {string} from specify from which screen [reschedule, providerlist etc]
 * @apiParam {string} calendar_view specify Daily or Weekly [D, W]
 * @apiSuccessExample Example Request Format
{
    "status": 1,
    "message": "Time slots retrieved successfully",
    "code": 200,
    "data": [
        {
            "start": "2017-06-18T00:00:00.000Z",
            "end": "2017-06-18T10:00:00.000Z",
            "overlap": false,
            "rendering": "background",
            "className": [
                "event",
                "bg-fc-inverse"
            ]
        },
        {
            "id": "availableForMeeting",
            "start": "2017-06-18T10:00:00.000Z",
            "end": "2017-06-18T11:30:00.000Z",
            "rendering": "background",
            "className": [
                "event",
                "bg-fc-background"
            ]
        },
        {
            "start": "2017-06-18T11:30:00.000Z",
            "end": "2017-06-18T23:59:00.000Z",
            "overlap": false,
            "rendering": "background",
            "className": [
                "event",
                "bg-fc-inverse"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T10:00:00.000Z",
            "end": "2017-06-18T10:15:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T10:15:00.000Z",
            "end": "2017-06-18T10:30:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T10:30:00.000Z",
            "end": "2017-06-18T10:45:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T10:45:00.000Z",
            "end": "2017-06-18T11:00:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T11:00:00.000Z",
            "end": "2017-06-18T11:15:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        },
        {
            "slot_type": "R",
            "start": "2017-06-18T11:15:00.000Z",
            "end": "2017-06-18T11:30:00.000Z",
            "editable": false,
            "className": [
                "event",
                "bg-color-greenLight"
            ]
        }
      ]
}
*
*@apiErrorExample {json} Error-Response: 'validation error'
*
{
    "status": 0,
    "message": "Provider does not exist",
    "code": 400,
    "data": null
}
*
*/

  /**
  * @api {post} /serviceProviders/:id/providers   add Provider :  Add ProviderDetails
  * @apiName Provider : addProviderDetails
  * @apiGroup Portal
  *
  * @apiParam {string} id _id of the service provider
  * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
  * @apiParam {string} platform Request from mobile or portal.
  * @apiParam {string} first_name  first name of the provider.
  * @apiParam {string} last_name  last name of the provider.
  * @apiParam {number} phone number of the provider.
  * @apiParam {string} phone_number_type type of the phone_number.
  * @apiParam {string} image_url  Url of the image.
  * @apiParam {string} company   name of the company.
  * @apiParam {string} address address of the provider.
  * @apiParam {string} city  city of the provider.
  * @apiParam {number} state state of the provider.
  * @apiParam {number} country country of the provider.
  * @apiParam {string} email emmail id of the provider.
  * @apiParam {string} image_url URL of the image.
  * @apiParam {string} specialisation_id selected specialisation ID.
  * @apiParam {string} specialisation specialisation.
  * @apiParam {string} service_provider_id _id of the service provider.
  * @apiParam {long} service_provider_id _id of the service provider.
  * @apiParam {lang} service_provider_id _id of the service provider.
  * @apiSuccessExample Example Request Format
  {
  "first_name": "Meghaguru",
  "last_name": "S",
  "phone_number_type": "office",
  "phone_number": "(987) 654-3212",
  "company": "experin",
  "address": "test addree",
  "city": "trivand",
  "state": "Kerala",
  "country": "India",
  "email": "meghaguru+5@gmail.com",
  "specialisation_id": "59119523c959ecfb77e034cf",
  "specialisation": "Electrologist ",
  "platform": "webportal",
  "service_provider_id": "59311b53ff1ff20011c79cc6",
  "long": 76.93663760000004,
  "lat": 8.524139100000001
}
*
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data token,email,_id returned from the API.
 * @apiSuccessExample Example data on success
 *
 {
    "status": 1,
    "message": "Provider added successfully.",
    "code": 200,
    "data": {
        "_id": "59492a5b2636652b6c92a9d3",
        "first_name": "Rebinkjoseph",
        "last_name": "Joseph",
        "specialisation_id": "59119523c959ecfb77e034cf",
        "specialisation": "Electrologist",
        "phone_number": "(987) 654-3212",
        "gps_location": [
            76.93663760000004,
            8.524139100000001
        ],
        "image_url": null,
        "company": "experin",
        "address": "test addree",
        "city": "trivand",
        "state_id": null,
        "postal_code": null,
        "service_provider_id": "59311b53ff1ff20011c79cc6",
        "start_time": null,
        "end_time": null,
        "title": null,
        "email": "meghaguru+9@gmail.com",
        "state": "Kerala",
        "country": "India",
        "phone_number_type": "office",
        "is_paid": false,
        "is_deleted": false,
        "provider_timezone": "false"
    }
}
 *
 *@apiErrorExample {json} Error-Response: 'validation error'
 *
 {
   "status": 0,
   "message": "'User validation failed",
   "code": 400,
   "data": null
 }
*/
  /**
  * @api {put} /serviceProviders/:id/providers/:providerId  Update Provider : updateProviderInfo
  * @apiName Provider : updateProviderinfo
  * @apiGroup Portal
  *
  * @apiParam {string} id _id of the service provider
  * @apiParam {string} providerId _id of the provider
  * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
  * @apiParam {string} platform Request from mobile or portal.
  * @apiParam {string} title  title of the provider.
  * @apiParam {string} first_name  first name of the provider.
  * @apiParam {string} last_name  last name of the provider.
  * @apiParam {number} phone number of the provider.
  * @apiParam {string} phone_number_type type of phone number.
  * @apiParam {string} image_url  Url of the image.
  * @apiParam {string} company   name of the company.
  * @apiParam {string} address address of the provider.
  * @apiParam {string} city  city of the provider.
  * @apiParam {number} state_id  state id of the provider.
  * @apiParam {number} postal_code postalcode of the provider.
  * @apiParam{String} phone_number phone number of the provider.
  * @apiParam {number} start_time appointmnet statring  time.
  * @apiParam {number} end_time appointmnet enf time.
  * @apiParam {string} email emmail id of the provider.
  * @apiParam {string} image_url URL of the image.
  * @apiParam {number} premium_appointment_fee appointmnet fee for premium appointments.
  * @apiParam {Boolean} get_amount_during_booking to get the amount during booking.
  * @apiParam {string} default_calender default view of the calender .
  * @apiParam {number} default_booking_slot_size  slot sixe of appointment booking.
  * @apiParam {number} calender_start_time start time of the appointment.
  * @apiParam {number} calender_end_time end time of the appointment.
  * @apiParam {number} maximum_appointment_number limit of the appointments of a user.
  * @apiParam {number} maximum_appointment_span limit of appointment days.
  * @apiParam {Boolean} send_notification_on_booking send the notification about booking .
  * @apiParam {Boolean} send_notification_on_cancelling send the notification status  of appointment cancellation.
  * @apiParam {Boolean} reminder_preference_email to send the reminder as email.
  * @apiParam {Boolean} reminder_preference_text send the reminder about appointment as text message.
  * @apiSuccessExample Example Request Format
 {
  "platform": "webportal",
  "first_name": "test",
  "last_name": "test",
  "phone_number_type": "office",
  "phone_number": "(434) 655-5554",
  "company": "Experion",
  "address": "rewtwet",
  "city": "Kochi",
  "state": "Kerala",
  "country": "India",
  "email": "testtest@test.com",
  "specialisation_id": "59119537c959ecfb77e034d0",
  "specialisation": "Aroma Therapist",
  "service_provider_id": "59311b53ff1ff20011c79cc6",
  "long": 76.26730410000005,
  "lat": 9.9312328,
  "step": 2,
  "configuration": {
    "get_amout_during_booking": true,
    "premium_appointment_fee": "70",
    "maximum_appointment_number": "6",
    "maximum_appointment_span": "600",
    "default_calender": "W",
    "send_notification_on_booking": false,
    "send_notification_on_cancelling": false,
    "reminder_preference_email": false,
    "reminder_preference_text": false
  }
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
  "message": "Configuration settings of Provider updated",
  "code": 200,
  "data": {
    "_id": "5927d73bb7efbf0011a31795",
    "first_name": "binil",
    "last_name": "k",
    "specialisation_id": "59119523c959ecfb77e034cf",
    "specialisation": "ortho",
    "phone_number": "8545824562",
    "phone_number_type": "office",
    "image_url": "454312",
    "company": "exp",
    "address": "address",
    "city": "city",
    "state_id": 57,
    "postal_code": 45658,
    "service_provider_id": "5927ba38abe3840011c841d2",
    "start_time": 10,
    "end_time": 10,
    "title": "mr",
    "email": "binilbaby@gmmail.com",
    "premium_appointment_fee": 601,
    "get_amount_during_booking": false,
    "state": "Kerala",
    "default_booking_slot_size": null,
    "calender_start_time": null,
    "calender_end_time": null,
    "maximum_appointment_number": 20,
    "maximum_appointment_span": 102,
    "send_notification_on_booking": false,
    "send_notification_on_cancelling": false,
    "reminder_prefernce": "E",
    "country": null,
    "configuration": {
      "reminder_preference_text": false,
      "reminder_preference_email": false,
      "send_notification_on_cancelling": true,
      "send_notification_on_booking": true,
      "maximum_appointment_span": null,
      "maximum_appointment_number": null,
      "calender_end_time": null,
      "calender_start_time": null,
      "default_booking_slot_size": null,
      "default_calender": "W",
      "get_amount_during_booking": true,
      "premium_appointment_fee": null
    }
  }
 *
 * @apiErrorExample {json} Error-Response: 'validation error'
 *
 {
   "status": 0,
   "message": "'User validation failed",
   "code": 400,
   "data": null
 }
 */

 /**

   * @api {get} /serviceproviders/:id/providers?platform=webportal&page=1   Provider :  providersList
   * @apiName Provider : providersList
   * @apiGroup Portal
   *
   * @apiParam {string} id _id of the service provider
   * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
   * @apiParam {string} id Id of the service provider whose providers must be listed .
   * @apiParam {string} platform Request from mobile or portal.
   *
   * @apiSuccess {number} status 1 for success.
   * @apiSuccess {String} message success message.
   * @apiSuccess {number} code sucess code .
   * @apiSuccess {string} data returned from the API.
   * @apiSuccessExample Example data on success
   *
  {
 "status": 1,
 "message": "Provider list retrieved successfully.",
 "code": 200,
 "totalRecords": 3,
 "limitPerPage": 20,
 "page": "1",
 "searchparams": {
   "platform": "webportal",
   "page": "1",
   "total_count": 3
 },
 "data": [
   {
     "_id": "59119be0c959ecfb77e034d4",
     "first_name": "Rakhi",
     "last_name": "Experion",
     "specialisation_id": "59119537c959ecfb77e034d0",
     "specialisation": "Ortho",
     "phone_number": "123-34567-890",
     "image_url": "https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg",
     "company": "Test Company",
     "address": "Experionglobal",
     "city": "Test City",
     "state_id": 1,
     "postal_code": 687545,
     "service_provider_id": "591d47e21649190011dfb1f9",
     "start_time": 8,
     "end_time": 17,
     "reset_token": "71713",
     "title": "Ms",
     "email": "rakhi.mr@experionglobal.com"
   },
   {
     "_id": "59119c5bc959ecfb77e034d5",
     "first_name": "Suresh",
     "last_name": "RS",
     "specialisation_id": "59119548c959ecfb77e034d1",
     "specialisation": "Ortho",
     "phone_number": "123-34567-890",
     "image_url": "https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg",
     "company": "Test Company 2",
     "address": "Experionglobal 2",
     "city": "Test City",
     "state_id": 1,
     "postal_code": 687544,
     "service_provider_id": "591d47e21649190011dfb1f9",
     "start_time": 10,
     "end_time": 18,
     "title": "Mr",
     "email": "suresh.rs@experionglobal.com"
   },
   {
     "_id": "5914340cc959ecfb77e034dc",
     "first_name": "Arjun",
     "last_name": "Sreedhar",
     "specialisation_id": "59119537c959ecfb77e034d0",
     "specialisation": "Ortho",
     "phone_number": "2435436456456",
     "image_url": "https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg",
     "company": "Test ertert Company",
     "address": "Exper te rte ionglobal",
     "city": "Trivandrum",
     "state_id": 3,
     "postal_code": 685545,
     "service_provider_id": "591d47e21649190011dfb1f9",
     "start_time": 9,
     "end_time": 17,
     "title": "Ms",
     "email": "arjun.sreedhar@experionglobal.com"
   }
 ]
}
   *
   *@apiErrorExample {json} Error-Response:
   *
   {
   "status": 0,
   "message": "Unauthorized",
   "code": 401
 }
 *
 */

/**
   * @api {get} /providers?platform=:platform&page=1   Provider :  providers List for adding to My Providers
   * @apiName Provider : providersList
   * @apiGroup Mobile
   *
   * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
   * @apiParam {string} platform Request from mobile or portal.
   *
   * @apiSuccess {number} status 1 for success.
   * @apiSuccess {String} message success message.
   * @apiSuccess {number} code sucess code .
   * @apiSuccess {string} data returned from the API.
   * @apiSuccessExample Example data on success
   *
  {
 "status": 1,
 "message": "Provider list retrieved successfully.",
 "code": 200,
 "totalRecords": 3,
 "limitPerPage": 20,
 "page": "1",
 "searchparams": {
   "platform": "webportal",
   "page": "1",
   "total_count": 3
 },
 "data": [
   {
     "_id": "59119be0c959ecfb77e034d4",
     "first_name": "Rakhi",
     "last_name": "Experion",
     "specialisation_id": "59119537c959ecfb77e034d0",
     "specialisation": "Ortho",
     "phone_number": "123-34567-890",
     "image_url": "https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg",
     "company": "Test Company",
     "address": "Experionglobal",
     "city": "Test City",
     "state_id": 1,
     "postal_code": 687545,
     "service_provider_id": "591d47e21649190011dfb1f9",
     "start_time": 8,
     "end_time": 17,
     "reset_token": "71713",
     "title": "Ms",
     "email": "rakhi.mr@experionglobal.com"
   },
   {
     "_id": "59119c5bc959ecfb77e034d5",
     "first_name": "Suresh",
     "last_name": "RS",
     "specialisation_id": "59119548c959ecfb77e034d1",
     "specialisation": "Ortho",
     "phone_number": "123-34567-890",
     "image_url": "https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg",
     "company": "Test Company 2",
     "address": "Experionglobal 2",
     "city": "Test City",
     "state_id": 1,
     "postal_code": 687544,
     "service_provider_id": "591d47e21649190011dfb1f9",
     "start_time": 10,
     "end_time": 18,
     "title": "Mr",
     "email": "suresh.rs@experionglobal.com"
   },
   {
     "_id": "5914340cc959ecfb77e034dc",
     "first_name": "Arjun",
     "last_name": "Sreedhar",
     "specialisation_id": "59119537c959ecfb77e034d0",
     "specialisation": "Ortho",
     "phone_number": "2435436456456",
     "image_url": "https://palaverplace.s3.eu-central-1.amazonaws.com/production/575a8795109ee6c4268aca49/4baa58bc9740577cc8f0fef54ee4ced1933.jpg",
     "company": "Test ertert Company",
     "address": "Exper te rte ionglobal",
     "city": "Trivandrum",
     "state_id": 3,
     "postal_code": 685545,
     "service_provider_id": "591d47e21649190011dfb1f9",
     "start_time": 9,
     "end_time": 17,
     "title": "Ms",
     "email": "arjun.sreedhar@experionglobal.com"
   }
 ]
}
   *
   *@apiErrorExample {json} Error-Response:
   *
   {
   "status": 0,
   "message": "Unauthorized",
   "code": 401
 }
 *
 */

/**
   * @api {get} /serviceproviders/:id/providers/:providerId?platform=webportal   Provider :  provider Details
   * @apiName Provider : providers details
   * @apiGroup Portal
   *
   * @apiParam {string} id _id of the service provider
   * @apiParam {string} providerId _id of the provider
   * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
   * @apiParam {string} platform Request from mobile or portal.
   *
   * @apiSuccess {number} status 1 for success.
   * @apiSuccess {String} message success message.
   * @apiSuccess {number} code sucess code .
   * @apiSuccess {string} data returned from the API.
   * @apiSuccessExample Example data on success
   *
  {
    "status": 1,
    "message": "Provider details retrieved successfully",
    "code": 200,
    "data": {
        "_id": "59492a5b2636652b6c92a9d3",
        "updatedAt": "2017-06-20T13:59:55.089Z",
        "createdAt": "2017-06-20T13:59:55.089Z",
        "company": "experin",
        "email": "meghaguru+9@gmail.com",
        "schedule_configuration": {
            "saturday": {
                "premium_appointment_end_time_format": null,
                "premium_appointment_end_time": null,
                "premium_appointment_start_time_format": null,
                "premium_appointment_start_time": null,
                "break_end_time_format": null,
                "break_end_time": null,
                "break_start_time_format": null,
                "break_start_time": null,
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "friday": {
                "premium_appointment_end_time_format": null,
                "premium_appointment_end_time": null,
                "premium_appointment_start_time_format": null,
                "premium_appointment_start_time": null,
                "break_end_time_format": null,
                "break_end_time": null,
                "break_start_time_format": null,
                "break_start_time": null,
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "thursday": {
                "premium_appointment_end_time_format": null,
                "premium_appointment_end_time": null,
                "premium_appointment_start_time_format": null,
                "premium_appointment_start_time": null,
                "break_end_time_format": null,
                "break_end_time": null,
                "break_start_time_format": null,
                "break_start_time": null,
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "wednesday": {
                "premium_appointment_end_time_format": null,
                "premium_appointment_end_time": null,
                "premium_appointment_start_time_format": null,
                "premium_appointment_start_time": null,
                "break_end_time_format": null,
                "break_end_time": null,
                "break_start_time_format": null,
                "break_start_time": null,
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "tuesday": {
                "premium_appointment_end_time_format": null,
                "premium_appointment_end_time": null,
                "premium_appointment_start_time_format": null,
                "premium_appointment_start_time": null,
                "break_end_time_format": null,
                "break_end_time": null,
                "break_start_time_format": null,
                "break_start_time": null,
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "monday": {
                "premium_appointment_end_time_format": null,
                "premium_appointment_end_time": null,
                "premium_appointment_start_time_format": null,
                "premium_appointment_start_time": null,
                "break_end_time_format": null,
                "break_end_time": null,
                "break_start_time_format": null,
                "break_start_time": null,
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "sunday": {
                "premium_appointment_end_time_format": null,
                "premium_appointment_end_time": null,
                "premium_appointment_start_time_format": null,
                "premium_appointment_start_time": null,
                "break_end_time_format": null,
                "break_end_time": null,
                "break_start_time_format": null,
                "break_start_time": null,
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            }
        },
        "configuration": {
            "reminder_preference_text": false,
            "reminder_preference_email": false,
            "send_notification_on_cancelling": true,
            "send_notification_on_booking": true,
            "maximum_appointment_span": null,
            "maximum_appointment_number": null,
            "calender_end_time": null,
            "calender_start_time": null,
            "default_booking_slot_size": null,
            "default_calender": "W",
            "get_amount_during_booking": true,
            "premium_appointment_fee": null
        },
        "provider_timezone": "false",
        "is_paid": false,
        "is_deleted": false,
        "phone_number_type": "office",
        "image_url_array": [],
        "end_time": null,
        "start_time": null,
        "title": null,
        "is_active": true,
        "phone_number": "(987) 654-3212",
        "gps_location": [
            76.93663760000004,
            8.524139100000001
        ],
        "postal_code": null,
        "country": "India",
        "state": "Kerala",
        "state_id": null,
        "city": "trivand",
        "address": "test addree",
        "type_of_access": null,
        "image_url": null,
        "specialisation": "Electrologist",
        "specialisation_id": "59119523c959ecfb77e034cf",
        "last_name": "Joseph",
        "first_name": "Rebinkjoseph",
        "service_provider_id": "59311b53ff1ff20011c79cc6"
    }
}
   *
   *@apiErrorExample {json} Error-Response:
   *
   {
   "status": 0,
   "message": "Unauthorized",
   "code": 401
 }
 *
 */
 
/**
   * @api {get} /providers/:providerId?platform=mobile   Provider :  provider Details
   * @apiName Provider : providers details
   * @apiGroup Mobile
   *
   * @apiParam {string} providerId _id of the provider
   * @apiParam {string} platform Request from mobile or portal.
   *
   * @apiSuccess {number} status 1 for success.
   * @apiSuccess {String} message success message.
   * @apiSuccess {number} code sucess code .
   * @apiSuccess {string} data returned from the API.
   * @apiSuccessExample Example data on success
   *
  {
    "status": 1,
    "message": "Provider details retrieved successfully",
    "code": 200,
    "data": {
        "_id": "59311b4cff1ff20011c79cc5",
        "updatedAt": "2017-06-21T11:21:00.913Z",
        "createdAt": "2017-06-02T08:01:16.142Z",
        "company": null,
        "email": "sachin.s@experionglobal.com",
        "schedule_configuration": {
            "sunday": {
                "start_time": "10:00",
                "start_time_format": "AM",
                "end_time": "11:30",
                "end_time_format": "AM",
                "break_start_time": "12:00",
                "break_start_time_format": "PM",
                "break_end_time": "01:30",
                "break_end_time_format": "PM",
                "premium_appointment_start_time": "02:00",
                "premium_appointment_start_time_format": "PM",
                "premium_appointment_end_time": "06:00",
                "premium_appointment_end_time_format": "PM"
            },
            "monday": {
                "start_time": "10:00",
                "start_time_format": "AM",
                "end_time": "11:30",
                "end_time_format": "AM",
                "break_start_time": "12:00",
                "break_start_time_format": "PM",
                "break_end_time": "01:30",
                "break_end_time_format": "PM",
                "premium_appointment_start_time": "02:00",
                "premium_appointment_start_time_format": "PM",
                "premium_appointment_end_time": "06:00",
                "premium_appointment_end_time_format": "PM"
            },
            "tuesday": {
                "start_time": "10:00",
                "start_time_format": "AM",
                "end_time": "11:30",
                "end_time_format": "AM",
                "break_start_time": "12:00",
                "break_start_time_format": "PM",
                "break_end_time": "01:30",
                "break_end_time_format": "PM",
                "premium_appointment_start_time": "02:00",
                "premium_appointment_start_time_format": "PM",
                "premium_appointment_end_time": "06:00",
                "premium_appointment_end_time_format": "PM"
            },
            "wednesday": {
                "start_time": "10:00",
                "start_time_format": "AM",
                "end_time": "11:30",
                "end_time_format": "AM",
                "break_start_time": "12:00",
                "break_start_time_format": "PM",
                "break_end_time": "01:30",
                "break_end_time_format": "PM",
                "premium_appointment_start_time": "02:00",
                "premium_appointment_start_time_format": "PM",
                "premium_appointment_end_time": "06:00",
                "premium_appointment_end_time_format": "PM"
            },
            "thursday": {
                "start_time": "10:00",
                "start_time_format": "AM",
                "end_time": "11:30",
                "end_time_format": "AM",
                "break_start_time": "12:00",
                "break_start_time_format": "PM",
                "break_end_time": "01:30",
                "break_end_time_format": "PM",
                "premium_appointment_start_time": "02:00",
                "premium_appointment_start_time_format": "PM",
                "premium_appointment_end_time": "06:00",
                "premium_appointment_end_time_format": "PM"
            },
            "friday": {
                "start_time": "10:00",
                "start_time_format": "AM",
                "end_time": "11:30",
                "end_time_format": "AM",
                "break_start_time": "12:00",
                "break_start_time_format": "PM",
                "break_end_time": "01:30",
                "break_end_time_format": "PM",
                "premium_appointment_start_time": "02:00",
                "premium_appointment_start_time_format": "PM",
                "premium_appointment_end_time": "06:00",
                "premium_appointment_end_time_format": "PM"
            },
            "saturday": {
                "start_time": "10:00",
                "start_time_format": "AM",
                "end_time": "11:30",
                "end_time_format": "AM",
                "break_start_time": "12:00",
                "break_start_time_format": "PM",
                "break_end_time": "01:30",
                "break_end_time_format": "PM",
                "premium_appointment_start_time": "02:00",
                "premium_appointment_start_time_format": "PM",
                "premium_appointment_end_time": "06:00",
                "premium_appointment_end_time_format": "PM"
            }
        },
        "configuration": {
            "default_booking_slot_size": null,
            "calender_end_time": null,
            "calender_start_time": null,
            "reminder_preference_text": true,
            "reminder_preference_email": true,
            "send_notification_on_cancelling": true,
            "send_notification_on_booking": true,
            "default_calender": "W",
            "maximum_appointment_span": 30,
            "maximum_appointment_number": 3,
            "get_amount_during_booking": null,
            "premium_appointment_fee": 500
        },
        "is_paid": false,
        "is_deleted": false,
        "phone_number_type": "mobile",
        "image_url_array": [],
        "end_time": null,
        "start_time": null,
        "title": "Mr",
        "is_active": true,
        "phone_number": "9037567576",
        "gps_location": [
            76.8663,
            8.571
        ],
        "postal_code": null,
        "country": "India",
        "state": "Kerala",
        "state_id": null,
        "city": "Thiruvananthapuram",
        "address": "Technopark",
        "type_of_access": null,
        "image_url": "https://www.newschool.edu/uploadedImages/Parsons/Profiles/jamer_hunt_profile.jpg?n=4468",
        "specialisation": "Hair Stylist",
        "specialisation_id": "59119548c959ecfb77e034d1",
        "last_name": "Prabhakar",
        "first_name": "Sachin",
        "service_provider_id": "59311ac1ff1ff20011c79cc3",
        "provider_timezone": "America/Los_Angeles"
    }
}
*
*@apiErrorExample {json} Error-Response:
*
  {
      "status": 0,
      "message": "Provider does not exist",
      "code": 400,
      "data": null
  }
*
*/

/**
   * @api {get} /serviceProviders/:id/providerIds?platform=:platform   Provider :  Get Povider list for dropdown
   * @apiName Provider : providerIds
   * @apiGroup Portal
   *
   * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
   * @apiParam {string} platform Request from mobile or portal.
   * @apiParam {string} id _id of service provider.
   *
   * @apiSuccess {number} status 1 for success.
   * @apiSuccess {String} message success message.
   * @apiSuccess {number} code sucess code .
   * @apiSuccess {string} data returned from the API.
   * @apiSuccessExample Example data on success
   *
  {
  "status": 1,
  "message": "List of providers retrieved successfully.",
  "code": 200,
  "data": [
    {
      "_id": "59311ea300b08e37975ba6cc",
      "provider_name": "Arjun Sreedhar"
    },
    {
      "_id": "59379d135b426900110b1bd1",
      "provider_name": "Prem Kumar"
    },
    {
      "_id": "59379da45b426900110b1bd4",
      "provider_name": "Rejay Chandra"
    }
  ]
}
   *
   *@apiErrorExample {json} Error-Response:
   *
   {
   "status": 0,
   "message": "Unauthorized",
   "code": 401
 }
 *
 */
