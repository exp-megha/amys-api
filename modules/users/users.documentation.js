/**
 * @api {post} /users/ User : Sign Up
 * @apiName users : userSign_up
 * @apiGroup Mobile
 *
 * @apiParam {string} email email_id of the user, for FB and Google it is not mandatory.
 * @apiParam {string} password Encrypted password of the user.
 * @apiParam {string} confirm_password Encrypted confirm password of the user.
 * @apiParam {string} device_token device token of the user device.
 * @apiParam {string} type_of_access whether it is facebook, google or normal.
 * @apiParam {string} facebook_google_id If it is facebook & google and it is mandatory.
 * @apiParam {string} first_name  first name of the user.
 * @apiParam {string} last_name  last name of the user.
 * @apiParam {string} gender  gender of the user.
 * @apiParam {number} dob  utc timestamp of the date.
 * @apiParam {number} phone_number  phone number of the user
 * @apiParam {string} image_url  If it is facebook& google and it is not mandatory.
 * @apiParam {string} platform Request from mobile or portal.
 * @apiSuccessExample Example Request Format
 {
    "platform": "mobile",
    "device_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VfaWQiOiJhc2FzYXNhc2FzIiwiZGV2aWNlX29zIjoia2l0a2F0IiwiZGV2aWNlX21vZGVsIjoiemVuZm9uZTIiLCJkYXRlIjoxNDk0MjI3ODAzMzg2LCJpYXQiOjE0OTQyMjc4MDN9.yw92dcl_1Vrz7jRkwhf5Me8ITOAWZU5SrdBd2BBvUAE",
    "type_of_access": "normal",
    "title": "Ms",
    "first_name": "Rakhi+1",
    "last_name": "Experion+1",
    "email": "rakhi.mr+1@experionglobal.com",
    "password": "1234567",
    "confirm_password": "1234567",
    "gender": "F",
    "dob": "23-11-1990",
    "phone_number": "9493654490"
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
    "message": "Sign up successful.",
    "code": 200,
    "data": {
        "_id": "59104503192c8144432d4bfd",
        "email": "rakhi.mr@experionglobal.com",
        "title": "Ms",
        "first_name": "Rakhi",
        "last_name": "Experion",
        "type_of_access": "normal",
        "facebook_google_id": null,
        "address": null,
        "city": null,
        "state": null,
        "zip": null,
        "ssn": null,
        "gender": "F",
        "dob": 1470960000000,
        "phone_number":"9493654490",
        "user_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTEwNDUwMzE5MmM4MTQ0NDMyZDRiZmQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDk0MjM4NDY3fQ.PYt4J-7J9SyWEi5MIpyWBUs5_K6msAT4kQ0K0-un0l8"
    }
}
 *
 *@apiErrorExample {json} Error-Response: password not match
 *
 {
   "status": 0,
   "message": "Password's doesnot match",
   "code": 400,
   "data": null
 }
 *@apiErrorExample {json} Error-Response: already registered email_id
 *
 {
   "status": 0,
   "message": "Given email is already registered with the application.. Try forget password",
   "code": 400,
   "data": null
 }
 */

 /**
 * @api {post} /users/login User : Login
 * @apiName User : userlogin
 * @apiGroup Mobile
 *
 * @apiParam {string} email email_id of the user, for FB and Google it is not mandatory.
 * @apiParam {string} password Encrypted password of the user.
 * @apiParam {string} device_token device token of the user device.
 * @apiParam {string} type_of_access whether it is facebook, google or normal.
 * @apiParam {string} facebook_google_id If it is facebook & google and it is mandatory.
 * @apiParam {string} first_name  If it is facebook & google and it is mandatory.
 * @apiParam {string} last_name  If it is facebook & google and it is mandatory.
 * @apiParam {string} image_url  If it is facebook& google and it is not mandatory.
 * @apiParam {string} platform Request from mobile or portal.
 * @apiSuccessExample Example Request Format
 {
     "platform": "mobile",
     "email": "rakhi.mr@experionglobal.com",
     "password": "1234567",
     "type_of_access": "normal"
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
    "message": "Login successful.",
    "code": 200,
    "data": {
        "_id": "59113d5b93f6b3127cfaf46a",
        "email": "rakhi.mr@experionglobal.com",
        "title": "Ms",
        "first_name": "Rakhi",
        "last_name": "Experion",
        "type_of_access": "normal",
        "facebook_google_id": null,
        "gender": "F",
        "dob": "1470960000000",
        "user_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTExM2Q1YjkzZjZiMzEyN2NmYWY0NmEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDk0MzA5NDYxfQ.vBXgdSTJEg508OX_xkqvJUmUANzOkInPj3-Pnre_too",
        "device_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VfaWQiOiJhc2FzYXNhc2FzIiwiZGV2aWNlX29zIjoia2l0a2F0IiwiZGV2aWNlX21vZGVsIjoiemVuZm9uZTIiLCJkYXRlIjoxNDk0MjI3ODAzMzg2LCJpYXQiOjE0OTQyMjc4MDN9.yw92dcl_1Vrz7jRkwhf5Me8ITOAWZU5SrdBd2BBvUAE"
    }
}
 *
 *@apiErrorExample {json} Error-Response: invalid credentials
 *
 {
   "status": 0,
   "message": "Invalid User Credentials.Try Again",
   "code": 400,
   "data": null
 }
 *@apiErrorExample {json} Error-Response:required Parameter
 *
 {
   "status": 0,
   "message": "Parameter \"email\" required",
   "code": 0,
   "data": null
 }
 */

 /**
 * @api {post} /users/forgotPassword User : Forgot Password
 * @apiName User : userForgotPassword
 * @apiGroup Mobile
 *
 * @apiParam {string} email a valid user registered email id with the application.
 * @apiParam {string} platform Request from mobile or portal.
 * @apiParam {boolean} type Reset type - true for SMS and false for Email.
 *
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data returned from the API.
 * @apiSuccessExample Example Request Format
 {
    "email": "rakhi.mr@experionglobal.com",
    "platform": "mobile",
    "type": "false"
}
 * @apiSuccessExample Example data on success
 *
 {
   "status": 1,
   "message": "Reset token sent !",
   "code": 200,
   "data": null
 }
 *
 *@apiErrorExample {json} Error-Response:
 *
 {
   "status": 0,
   "message": "Parameter \"email\" required",
   "code": 0,
   "data": null
 }
 *
 */
 /**
 * @api {put} /users/resetPassword User : Reset Password
 * @apiName User : userResetPassword
 * @apiGroup Mobile
 *
 * @apiParam {string} reset_token the token auto generated and send to the registered email id.
 * @apiParam {string} new_password Encrypted new password of the user.
 * @apiParam {string} confirm_password Encrypted confirm password of the user.
 * @apiParam {string} email registered email of the user.
 * @apiParam {string} platform Request from mobile or portal.
 *
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data returned from the API.
 * @apiSuccessExample Example Request Format
 {
 "email":"rakhi.mr@experionglobal.com",
 "new_password":"trwetwerrfywegrbweygr7867868",
 "confirm_password":"trwetwerrfywegrbweygr7867868",
 "reset_token":"22239",
 "platform":"mobile"
}
 * @apiSuccessExample Example data on success
 *
 {
   "status": 1,
   "message": "Your password has been reset successfully.",
   "code": 200,
   "data": null
 }
 *
 *@apiErrorExample {json} Error-Response:
 *
 {
   "status": 0,
   "message": "Parameter \"email\" require a valid email format",
   "code": 0,
   "data": null
 }
 *
 */

 /**
  * @api {put} /users/:id/changePassword User : Change Password
  * @apiName User : changePassword
  * @apiGroup Mobile
  *
  * @apiParam {string} password Current password of the user.
  * @apiParam {string} new_password New password of the user.
  * @apiParam {string} confirm_password  Confirm password of the user.
  * @apiParam {string} platform Request from mobile or portal.
  *
  * @apiSuccess {number} status 1 for success.
  * @apiSuccess {String} message success message.
  * @apiSuccess {number} code sucess code .
  * @apiSuccess {string} data returned from the API.
  * @apiSuccessExample Example Request Format
  {
    "platform": "website",
    "password": "7654321",
    "new_password": "abcdefgh",
    "confirm_password": "abcdefgh"
  }
  * @apiSuccessExample Example data on success
  *
  {
    "status": 1,
    "message": "Your password has been changed successfully.",
    "code": 200,
    "data": null
  }
  *
  *@apiErrorExample {json} Error-Response:
  *
  {
    "status": 0,
    "message": "The current password you entered is wrong. Please try again.",
    "code": 400,
    "data": null
  }
  *
  */

  /**
  * @api {post} /users/:id/providers User : Add My Provider
  * @apiName User : addMyProvider
  * @apiGroup Mobile
  *
  * @apiParam {string} id Id of the user whose my provider is to be added.
  * @apiParam {string} platform Request from mobile or portal.
  * @apiParam {Array} provider_id selected provider id array.
  *
  * @apiSuccess {number} status 1 for success.
  * @apiSuccess {String} message success message.
  * @apiSuccess {number} code sucess code .
  * @apiSuccess {string} data returned from the API.
  * @apiSuccessExample Example Request Format
  {
    "platform": "mobile",
    "provider_id": "59311b4cff1ff20011c79cc5"
  }
  * @apiSuccessExample Example data on success
  *
  {
    "status": 1,
    "message": "Provider has been added to my providers.",
    "code": 200,
    "data": null
  }
  *
  *@apiErrorExample {json} Error-Response:
  *
  {
    "status": 0,
    "message": "Provider is already in your my providers list.",
    "code": 400,
    "data": null
  }
  *
  */

/**
 * @api {delete} /users/:id/providers/:providerId?platform=:platform User : Remove My Provider
 * @apiName User: myProvider
 * @apiGroup Mobile
 *
 * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
 * @apiParam {string} id Id of the user whose my provider is to be removed.
 * @apiParam {string} providerId Provider id of the provider to be removed from my provider list.
 * @apiParam {string} platform Request from mobile or portal.
 *
 * @apiSuccess {number} status 1 for success.
 *
 * @apiSuccessExample Example data on success
 *
 {
    "status": 1,
    "message": "Provider removed from my providers.",
    "code": 200,
    "data": null
 }

 *@apiErrorExample {json} Error-Response:
 *
 {
    "status": 0,
    "message": "Cannot remove provider. Please try again.",
    "code": 400
 }
 *
 */

/**
 * @api {get} /users/:id/providers?platform=:platform&latitude=:latitude&longitude=:longitude User : Get My Providers
 * @apiName User : getMyProviders
 * @apiGroup Mobile
 *
 * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
 * @apiParam {string} id Id of the user whose my providers list is to be fetched.
 * @apiParam {string} platform Request from mobile or portal.
 * @apiParam {string} latitude Latitude of user location.
 * @apiParam {string} longitude Longitude of user location.
 *
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data returned from the API.
 *
 * @apiSuccessExample Example data on success
 *
 {
    "status": 1,
    "message": "My providers list retrieved succesfully.",
    "code": 200,
    "totalRecords": 2,
    "limitPerPage": 20,
    "page": 1,
    "searchparams": {
        "platform": "mobile",
        "latitude": "8.00",
        "longitude": "76.00",
        "total_count": 2
    },
    "data": [
        {
            "_id": "593e64a9b7ba6f0011b8ee6b",
            "company": null,
            "email": "vineeth.gb+5@experionglobal.com",
            "configuration": {
                "get_amount_during_booking": null,
                "premium_appointment_fee": 10
            },
            "is_paid": false,
            "is_deleted": false,
            "phone_number_type": "mobile",
            "phone_number": "949596382712",
            "gps_location": [
                -1.0872979000000669,
                53.95996510000001
            ],
            "postal_code": null,
            "country": "United Kingdom",
            "state": "England",
            "city": "York",
            "address": "wwewqqdq11",
            "image_url": null,
            "specialisation": "Manicurist",
            "last_name": "A",
            "first_name": "Alin",
            "service_provider_id": "593e320db58cfe00111bfd57",
            "distance": 5249.431734105059
        },
        {
            "_id": "59312ca4ff1ff20011c79cd8",
            "company": null,
            "email": "AnthonyHYale@dayrep.com",
            "configuration": {
                "get_amount_during_booking": null,
                "premium_appointment_fee": 300
            },
            "is_paid": false,
            "is_deleted": false,
            "phone_number_type": "office",
            "phone_number": "606-837-3982",
            "gps_location": [
                76.8663,
                8.571
            ],
            "postal_code": null,
            "country": "40828",
            "state": "United States",
            "city": "Evarts",
            "address": "North Bend River Road",
            "image_url": "https://www.tendenciagq.com/wp-content/uploads/2016/02/tendencia-corte2Bde2Bpelo2Bhombre-2016.png",
            "specialisation": "Hair Stylist",
            "last_name": "Yale",
            "first_name": "Anthony",
            "service_provider_id": "5931295eff1ff20011c79cd1",
            "distance": 71.18933487227386
        }
    ]
}
 *
 *@apiErrorExample {json} Error-Response:
 *
 {
    "status": 0,
    "message": "Platform required.",
    "code": 400,
    "data": null
 }
 *
 */

/**
 * @api {GET} /users?platform=:platform&type=:type&page=:page User : User List
 * @apiName User : userList
 * @apiGroup Portal
 *
 * @apiParam {String} platform Request from mobile or portal.
 * @apiParam {String} type Type of list required (It can take two values. Either dropdown or list).
 * @apiParam {String} page Page number for pagination (Required only if type = list).
 *
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data returned from the API.
 * @apiSuccessExample Example data on success
 *
 {
    "status": 1,
    "message": "User list retrieved successfully.",
    "code": 200,
    "totalRecords": 4,
    "limitPerPage": 10,
    "page": "1",
    "searchparams": {
        "platform": "webportal",
        "type": "list",
        "page": "1",
        "sort_order": "",
        "email": "",
        "total_count": 4
    },
    "data": [
        {
            "_id": "5980858e33cb8e17a5973090",
            "createdAt": "2017-08-01T13:43:42.860Z",
            "email": "christinapgowans@rhyta.com",
            "user_timezone": null,
            "image_url": null,
            "version": null,
            "is_deleted": false,
            "is_active": true,
            "is_sms_enabled": true,
            "is_notification_enabled": true,
            "phone_number": "(718) 393-8106",
            "dob": null,
            "gender": null,
            "ssn": null,
            "zip": null,
            "state": null,
            "state_id": null,
            "city": null,
            "address": null,
            "last_name": "Gowans",
            "first_name": "Christina",
            "user_name": "Gowans Christina"
        },
        {
            "_id": "59808edb33cb8e17a5973094",
            "createdAt": "2017-08-01T14:23:23.773Z",
            "email": "maryjacob@gmail.com",
            "user_timezone": null,
            "image_url": null,
            "version": null,
            "is_deleted": false,
            "is_active": true,
            "is_sms_enabled": true,
            "is_notification_enabled": true,
            "phone_number": "323231321222",
            "dob": null,
            "gender": null,
            "ssn": null,
            "zip": null,
            "state": null,
            "state_id": null,
            "city": null,
            "address": null,
            "last_name": "Jacob",
            "first_name": "Mary",
            "user_name": "Jacob Mary"
        },
        {
            "_id": "59817f6d909ed21c4b306baa",
            "createdAt": "2017-08-02T07:29:49.179Z",
            "email": "test@asb.com",
            "user_timezone": "Asia/Calcutta",
            "image_url": "https://no2fyme.s3.us-east-2.amazonaws.com/develop/59817f6d909ed21c4b306baa/72274bc94aca883af2cd432617f22bd51501738269691.jpg",
            "version": null,
            "is_deleted": false,
            "is_active": true,
            "is_sms_enabled": true,
            "is_notification_enabled": true,
            "phone_number": "(664) 549-4676",
            "dob": "",
            "gender": null,
            "ssn": null,
            "zip": null,
            "state": null,
            "state_id": null,
            "city": null,
            "address": null,
            "last_name": "Kannapan",
            "first_name": "Tester",
            "user_name": "Kannapan Tester"
        },
        {
            "_id": "59807ed28f8a951560866335",
            "createdAt": "2017-08-01T13:14:58.782Z",
            "email": "athira.s@experionglobal.com",
            "user_timezone": null,
            "image_url": "https://no2fyme.s3.us-east-2.amazonaws.com/develop/59807ed28f8a951560866335/8c7596d7f0748fa0bb824ff1634dba7f1501649070553.jpg",
            "version": null,
            "is_deleted": false,
            "is_active": true,
            "is_sms_enabled": false,
            "is_notification_enabled": true,
            "phone_number": "(281) 892-9212",
            "dob": "",
            "gender": null,
            "ssn": null,
            "zip": null,
            "state": null,
            "state_id": null,
            "city": null,
            "address": null,
            "last_name": "S",
            "first_name": "Athira",
            "user_name": "S Athira"
        }
    ]
}
 *
 *@apiErrorExample {json} Error-Response:
 *
 {
    "status": 0,
    "message": "Type is required.",
    "code": 400,
    "data": null
 }
 *
 */
/**
 * @api {put} /users/:id User : Update profile
 * @apiName users : updateProfile
 * @apiGroup Mobile
 *
 * @apiParam {string} email email_id of the user, for FB and Google it is not mandatory.
 * @apiParam {string} password Encrypted password of the user.
 * @apiParam {string} zip Zip code.
 * @apiParam {string} state state name.
 * @apiParam {string} address Address of user.
 * @apiParam {string} facebook_google_id If it is facebook & google and it is mandatory.
 * @apiParam {string} first_name  first name of the user.
 * @apiParam {string} last_name  last name of the user.
 * @apiParam {string} gender  gender of the user.
 * @apiParam {number} dob  utc timestamp of the date.
 * @apiParam {number} phone_number  phone number of the user
 * @apiParam {string} image_url  image url.
 * @apiParam {string} platform Request from mobile or portal.
 * @apiSuccessExample Example Request Format
 {
    "platform": "mobile",
    "email": "sachin0@experionglobal.com",
    "password": "1234567",
    "phone_number" : "1234567890",
    "dob" : "27-05-1992",
    "gender" : "M",
    "ssn" : null,
    "zip" : "123456",
    "state" : "state",
    "city" : "citty",
    "address" : "test address",
    "last_name" : "Kumar",
    "first_name" : "Sachin",
    "image_url": "https://s3.us-east-2.amazonaws.com/no2fyme/develop/59352dcda93df900110cea70/b6a0512bf15f2e7e4a0ad054fa168dd71497004853496.jpg"
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
    "message": "Profile info updated successfully.",
    "code": 200,
    "data": {
        "email": "sachin0@experionglobal.com",
        "title": "Mr",
        "first_name": "Sachin",
        "last_name": "Kumar",
        "address": "test address",
        "city": "citty",
        "state": "state",
        "zip": "123456",
        "type_of_access": "normal",
        "facebook_google_id": null,
        "gender": "M",
        "dob": "27-05-1992",
        "phone_number": "1234567890",
        "user_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTNhNDgxMDBhNDhhOTM3YjM4NWI0N2YiLCJ1c2VyX3R5cGUiOiJhcHBVc2VyIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTQ5Njk5MTc2MH0.sbugXM_w-DHIh3pzc_HLwaBAYnd-t0uJALAPXLXOulw",
        "device_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VfaWQiOiJhc2FzYXNhc2FzIiwiZGV2aWNlX29zIjoia2l0a2F0IiwiZGV2aWNlX21vZGVsIjoiemVuZm9uZTIiLCJkYXRlIjoxNDk0MjI3ODAzMzg2LCJpYXQiOjE0OTQyMjc4MDN9.yw92dcl_1Vrz7jRkwhf5Me8ITOAWZU5SrdBd2BBvUAE",
        "ssn": null,
        "family_members": [],
        "my_providers": [
            "59312ae3ff1ff20011c79cd5",
            "59312a7dff1ff20011c79cd4"
        ],
        "reset_token": null,
        "_id": "593a48100a48a937b385b47f",
        "appointment_history": [],
        "is_notification_enabled": false,
        "is_sms_enabled": false,
        "is_active": true,
        "is_deleted": false,
        "version": null,
        "image_url": "https://s3.us-east-2.amazonaws.com/no2fyme/develop/59352dcda93df900110cea70/b6a0512bf15f2e7e4a0ad054fa168dd71497004853496.jpg"
    }
}
 *
 *@apiErrorExample {json} Error-Response: password not match
 *
 {
   "status": 0,
   "message": "Password's doesnot match",
   "code": 400,
   "data": null
 }
 *@apiErrorExample {json} Error-Response: already registered email_id
 *
 {
   "status": 0,
   "message": "Given email is already registered with the application.. Try forget password",
   "code": 400,
   "data": null
 }
 */
/**
 * @api {post} /users/:id/no2fyme User : No2fyme Preference Addition
 * @apiName users : no2fyme
 * @apiGroup No2fyme
 *
 * @apiParam {string} id _id of the logged in user.
 * @apiParam {string} platform Request from mobile or portal.
 * @apiParam {string} from_date UTC timestamp of the selected Start date.
 * @apiParam {string} to_date UTC timestamp of the selected End date.
 * @apiParam {string} show_first_available Boolean true / false.
 * @apiParam {string} family_member_name Name of the selected family member.
 * @apiParam {string} family_member_id _id of the selected family member.
 * @apiParam {string} provider_name name of the selected provider.
 * @apiParam {string} provider_id _id of the selected provider.
 * @apiParam {string} service_provider_id _id of the selected service provider.
 * @apiParam {string} appointment_reason Selected appointment reason text.
 * @apiParam {number} appointment_reason_id _id of the selected appointment reason.
 * @apiParam {number} appointment_duration Duration of the selected appointmet.
 * @apiParam {string} sunday Weekdays from sunday till saturday.
 * @apiParam {string} start_time selected start time like "09:00".
 * @apiParam {string} start_time_format specify the hour format like "AM"/"PM".
 * @apiParam {string} end_time selected end time like "12:00".
 * @apiParam {string} end_time_format specify the hour format like "AM"/"PM".
 * @apiSuccessExample Example Request Format
 {
  "platform": "ios",
  "from_date": "1500532631000",
  "to_date": "1500964631000",
  "show_first_available": false,
  "family_member": "Athira S",
  "family_member_id": "59677c0c3665db6af647d94d",
  "provider_name": "LINDSEY ANDERSON",
  "provider_id": "59635f5a0db43d0c3ad958a5",
  "service_provider_id": "59635f5a0db43d0c3ad958a5",
  "appointment_reason": "Pedicure",
  "appointment_reason_id": "591594f6c959ecfb77e034e9",
  "appointment_duration": 60,
  "sunday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "monday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "tuesday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "wednesday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "thursday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "friday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "saturday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  }
}
 *
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data Response data returned from the API.
 * @apiSuccessExample Example data on success
 *
 {
    "status": 1,
    "message": "No2fyme option saved successfully.",
    "code": 200,
    "data": {
        "_id": "5970886546afa00cc478a75e",
        "appointment_duration": 60,
        "appointment_reason": "Pedicure",
        "appointment_reason_id": "591594f6c959ecfb77e034e9",
        "service_provider_id": "59635f5a0db43d0c3ad958a5",
        "provider_name": "LINDSEY ANDERSON",
        "provider_id": "59635f5a0db43d0c3ad958a5",
        "family_member_name": null,
        "family_member_id": "59677c0c3665db6af647d94d",
        "show_first_available": false,
        "to_date": 1500964631000,
        "from_date": 1500532631000,
        "user_id": "5964afe1092bd331a830147e",
        "updatedAt": "2017-07-20T10:43:56.236Z",
        "createdAt": "2017-07-20T10:39:33.849Z",
        "saturday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "friday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "thursday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "wednesday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "tuesday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "monday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "sunday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        }
    }
}
*/
/**
 * @api {put} /users/:id/no2fyme/:no2fymeId User : No2fyme Preference Update
 * @apiName users : no2fymeUpdate
 * @apiGroup No2fyme
 *
 * @apiParam {string} id _id of the logged in user.
 * @apiParam {string} no2fymeId _id of the selected no2fyme option.
 * @apiParam {string} platform Request from mobile or portal.
 * @apiParam {string} from_date UTC timestamp of the selected Start date.
 * @apiParam {string} to_date UTC timestamp of the selected End date.
 * @apiParam {string} show_first_available Boolean true / false.
 * @apiParam {string} family_member_name Name of the selected family member.
 * @apiParam {string} family_member_id _id of the selected family member.
 * @apiParam {string} provider_name name of the selected provider.
 * @apiParam {string} provider_id _id of the selected provider.
 * @apiParam {string} service_provider_id _id of the selected service provider.
 * @apiParam {string} appointment_reason Selected appointment reason text.
 * @apiParam {number} appointment_reason_id _id of the selected appointment reason.
 * @apiParam {number} appointment_duration Duration of the selected appointmet.
 * @apiParam {string} sunday Weekdays from sunday till saturday.
 * @apiParam {string} start_time selected start time like "09:00".
 * @apiParam {string} start_time_format specify the hour format like "AM"/"PM".
 * @apiParam {string} end_time selected end time like "12:00".
 * @apiParam {string} end_time_format specify the hour format like "AM"/"PM".
 * @apiSuccessExample Example Request Format
 {
  "platform": "ios",
  "from_date": "1500532631000",
  "to_date": "1500964631000",
  "show_first_available": false,
  "family_member": "Athira S",
  "family_member_id": "59677c0c3665db6af647d94d",
  "provider_name": "LINDSEY ANDERSON",
  "provider_id": "59635f5a0db43d0c3ad958a5",
  "service_provider_id": "59635f5a0db43d0c3ad958a5",
  "appointment_reason": "Pedicure",
  "appointment_reason_id": "591594f6c959ecfb77e034e9",
  "appointment_duration": 60,
  "sunday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "monday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "tuesday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "wednesday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "thursday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "friday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  },
  "saturday": {
    "start_time": "09:00",
    "start_time_format": "AM",
    "end_time": "06:00",
    "end_time_format": "PM"
  }
}
 *
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data Response data returned from the API.
 * @apiSuccessExample Example data on success
 *
 {
    "status": 1,
    "message": "No2fyme option updated successfully.",
    "code": 200,
    "data": {
        "_id": "5970886546afa00cc478a75e",
        "appointment_duration": 60,
        "appointment_reason": "Pedicure",
        "appointment_reason_id": "591594f6c959ecfb77e034e9",
        "service_provider_id": "59635f5a0db43d0c3ad958a5",
        "provider_name": "LINDSEY ANDERSON",
        "provider_id": "59635f5a0db43d0c3ad958a5",
        "family_member_name": null,
        "family_member_id": "59677c0c3665db6af647d94d",
        "show_first_available": false,
        "to_date": 1500964631000,
        "from_date": 1500532631000,
        "user_id": "5964afe1092bd331a830147e",
        "updatedAt": "2017-07-20T10:43:56.236Z",
        "createdAt": "2017-07-20T10:39:33.849Z",
        "saturday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "friday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "thursday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "wednesday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "tuesday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "monday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "sunday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        }
    }
}
*/
/**
 * @api {get} /users/:id/no2fyme?platform=:platform User : Get No2fyme Preferences
 * @apiName User : getNo2fymePreferences
 * @apiGroup No2fyme
 *
 * @apiParam {string} id _id of the logged in user.
 * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
 * @apiParam {string} platform Request from mobile or portal.
 *
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data returned from the API.
 *
 * @apiSuccessExample Example data on success
 *
 {
    "status": 1,
    "message": "No2fyme Preference list retrieved successfully.",
    "code": 200,
    "data": [
        {
            "_id": "59708640bc6aca1a2c0e1984",
            "updatedAt": "2017-07-20T10:30:24.882Z",
            "createdAt": "2017-07-20T10:30:24.882Z",
            "saturday": {
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "friday": {
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "thursday": {
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "wednesday": {
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "tuesday": {
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "monday": {
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "sunday": {
                "end_time_format": null,
                "end_time": null,
                "start_time_format": null,
                "start_time": null
            },
            "appointment_duration": 60,
            "appointment_reason": "Pedicure",
            "appointment_reason_id": "591594f6c959ecfb77e034e9",
            "service_provider_id": "59635f5a0db43d0c3ad958a5",
            "provider_name": "LINDSEY ANDERSON",
            "provider_id": "59635f5a0db43d0c3ad958a5",
            "family_member_name": null,
            "family_member_id": "59677c0c3665db6af647d94d",
            "show_first_available": true,
            "to_date": 1500718760059,
            "from_date": 1500373160059,
            "user_id": "5964afe1092bd331a830147e"
        },
        {
            "_id": "5970886546afa00cc478a75e",
            "updatedAt": "2017-07-20T10:43:56.236Z",
            "createdAt": "2017-07-20T10:39:33.849Z",
            "saturday": {
                "end_time_format": "PM",
                "end_time": "06:00",
                "start_time_format": "AM",
                "start_time": "09:00"
            },
            "friday": {
                "end_time_format": "PM",
                "end_time": "06:00",
                "start_time_format": "AM",
                "start_time": "09:00"
            },
            "thursday": {
                "end_time_format": "PM",
                "end_time": "06:00",
                "start_time_format": "AM",
                "start_time": "09:00"
            },
            "wednesday": {
                "end_time_format": "PM",
                "end_time": "06:00",
                "start_time_format": "AM",
                "start_time": "09:00"
            },
            "tuesday": {
                "end_time_format": "PM",
                "end_time": "06:00",
                "start_time_format": "AM",
                "start_time": "09:00"
            },
            "monday": {
                "end_time_format": "PM",
                "end_time": "06:00",
                "start_time_format": "AM",
                "start_time": "09:00"
            },
            "sunday": {
                "end_time_format": "PM",
                "end_time": "06:00",
                "start_time_format": "AM",
                "start_time": "09:00"
            },
            "appointment_duration": 60,
            "appointment_reason": "Pedicure",
            "appointment_reason_id": "591594f6c959ecfb77e034e9",
            "service_provider_id": "59635f5a0db43d0c3ad958a5",
            "provider_name": "LINDSEY ANDERSON",
            "provider_id": "59635f5a0db43d0c3ad958a5",
            "family_member_name": null,
            "family_member_id": "59677c0c3665db6af647d94d",
            "show_first_available": false,
            "to_date": 1500964631000,
            "from_date": 1500532631000,
            "user_id": "5964afe1092bd331a830147e"
        }
    ]
}
 *
 *@apiErrorExample {json} Error-Response:
 *
 {
    "status": 0,
    "message": "Platform required.",
    "code": 400,
    "data": null
 }
 *
 */
/**
 * @api {delete} /users/:id/no2fyme/:no2fymeId?platform=:platform User : Delete No2fyme Preferences
 * @apiName User : deleteNo2fyme
 * @apiGroup No2fyme
 *
 * @apiParam {string} id _id of the logged in user.
 * @apiParam {string} no2fymeId _id of the no2fyme option.
 * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
 * @apiParam {string} platform Request from mobile or portal.
 *
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data returned from the API.
 *
 * @apiSuccessExample Example data on success
 *
 {
    "status": 1,
    "message": "No2fyme Preference removed successfully",
    "code": 200,
    "data": null
}
 *
 *@apiErrorExample {json} Error-Response:
 *
 {
    "status": 0,
    "message": "Platform required.",
    "code": 400,
    "data": null
 }
 *
 */
/**
 * @api {get} /users/:id/no2fyme/:no2fymeId?platform=:platform User : GET No2fyme Preference details
 * @apiName User : getNo2fyme
 * @apiGroup No2fyme
 *
 * @apiParam {string} id _id of the logged in user.
 * @apiParam {string} no2fymeId _id of the no2fyme option.
 * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
 * @apiParam {string} platform Request from mobile or portal.
 *
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data returned from the API.
 *
 * @apiSuccessExample Example data on success
 *
 {
    "status": 1,
    "message": "No2fyme Preference details retrieved successfully",
    "code": 200,
    "data": {
        "_id": "5970886546afa00cc478a75e",
        "updatedAt": "2017-07-20T10:43:56.236Z",
        "createdAt": "2017-07-20T10:39:33.849Z",
        "saturday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "friday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "thursday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "wednesday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "tuesday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "monday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "sunday": {
            "end_time_format": "PM",
            "end_time": "06:00",
            "start_time_format": "AM",
            "start_time": "09:00"
        },
        "appointment_duration": 60,
        "appointment_reason": "Pedicure",
        "appointment_reason_id": "591594f6c959ecfb77e034e9",
        "service_provider_id": "59635f5a0db43d0c3ad958a5",
        "provider_name": "LINDSEY ANDERSON",
        "provider_id": "59635f5a0db43d0c3ad958a5",
        "family_member_name": null,
        "family_member_id": "59677c0c3665db6af647d94d",
        "show_first_available": false,
        "to_date": 1500964631000,
        "from_date": 1500532631000,
        "user_id": "5964afe1092bd331a830147e"
    }
}
 *
 *@apiErrorExample {json} Error-Response:
 *
 {
    "status": 0,
    "message": "Platform required.",
    "code": 400,
    "data": null
 }
 *
 */
/**
 * @api {put} /users/:id/activateInactivate User : Activate/Inactivate user
 * @apiName users : activateInactivate
 * @apiGroup Mobile
 *
 * @apiParam {boolean} is_active values would be true or false.
 * @apiParam {string} platform Request from mobile or portal.
 * @apiSuccessExample Example Request Format
 {
    "platform": "webportal",
    "is_active": true
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
    "message": "Profile info updated successfully.",
    "code": 200,
    "data": {
        "email": "sachin0@experionglobal.com",
        "title": "Mr",
        "first_name": "Sachin",
        "last_name": "Kumar",
        "address": "test address",
        "city": "citty",
        "state": "state",
        "zip": "123456",
        "type_of_access": "normal",
        "facebook_google_id": null,
        "gender": "M",
        "dob": "27-05-1992",
        "phone_number": "1234567890",
        "user_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTNhNDgxMDBhNDhhOTM3YjM4NWI0N2YiLCJ1c2VyX3R5cGUiOiJhcHBVc2VyIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTQ5Njk5MTc2MH0.sbugXM_w-DHIh3pzc_HLwaBAYnd-t0uJALAPXLXOulw",
        "device_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VfaWQiOiJhc2FzYXNhc2FzIiwiZGV2aWNlX29zIjoia2l0a2F0IiwiZGV2aWNlX21vZGVsIjoiemVuZm9uZTIiLCJkYXRlIjoxNDk0MjI3ODAzMzg2LCJpYXQiOjE0OTQyMjc4MDN9.yw92dcl_1Vrz7jRkwhf5Me8ITOAWZU5SrdBd2BBvUAE",
        "ssn": null,
        "family_members": [],
        "my_providers": [
            "59312ae3ff1ff20011c79cd5",
            "59312a7dff1ff20011c79cd4"
        ],
        "reset_token": null,
        "_id": "593a48100a48a937b385b47f",
        "appointment_history": [],
        "is_notification_enabled": false,
        "is_sms_enabled": false,
        "is_active": true,
        "is_deleted": false,
        "version": null,
        "image_url": "https://s3.us-east-2.amazonaws.com/no2fyme/develop/59352dcda93df900110cea70/b6a0512bf15f2e7e4a0ad054fa168dd71497004853496.jpg"
    }
}
*
*/