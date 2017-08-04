/**
 * @api {post} /serviceProviders Portal : Sign Up
 * @apiName Portal : signUp
 * @apiGroup Portal

 *
 * @apiParam {string} first_name  first name of the provider.
 * @apiParam {string} last_name  last name of the provider.
 * @apiParam {number} phone number of the provider.
 * @apiParam {string} email email_id of the provider.
 * @apiParam {string} password password of the provider.
 * @apiParam {string} platform should be passed through header[values would be webportal].
 * @apiSuccessExample Example Request Format
 {
    "email": "rakhisotaa.mq+5@experionglobal.com",
    "first_name": "aaa",
    "last_name": "bbb",
    "phone_number": "123456789",
    "password": "abcaaa",
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
    "_id": "591aa11b1ba5be16b0eeb0ea",
    "first_name": "aaa",
    "last_name": "bbb",
    "specialisation_id": null,
    "specialisation": null,
    "phone_number": "123456789",
    "phone_number_type": "home",
    "image_url": null,
    "company": "ssswww",
    "address": null,
    "city": null,
    "state_id": null,
    "postal_code": null,
    "service_provider_id": null,
    "title": "Mr",
    "reset_token": null,
    "title": "Mr",
    "user_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTFhYTExYjFiYTViZTE2YjBlZWIwZWEiLCJ1c2VyX3R5cGUiOiJwb3J0YWxVc2VyIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTQ5NDkxNzQwM30.uyPscqzSQED6YzJtYushIUXNVe0_aGSvnLU0AgdI8tw"

  }
}
 *
 *@apiErrorExample {json} Error-Response: already registered email_id
 *
 {
   "status": 0,
   "message": "Email is already in use
   "code": 400,
   "data": null
 }
 *
 */

  /**
  * @api {post} /serviceProviders/forgotPassword Portal : Forgot Password
  * @apiName Portal : forgotPassword
  * @apiGroup Portal
  *
  * @apiParam {string} email a valid user registered email id with the application.
  * @apiParam {string} platform Request from mobile or portal.
  *
  * @apiSuccess {number} status 1 for success.
  * @apiSuccess {String} message success message.
  * @apiSuccess {number} code sucess code .
  * @apiSuccess {string} data returned from the API.
  * @apiSuccessExample Example Request Format
  {
     "email": "rakhi.mr@experionglobal.com",
     "platform": "webportal"
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
  * @api {put} /serviceProviders/resetPassword Portal : Reset Password
  * @apiName Portal : resetPassword
  * @apiGroup Portal
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
  "platform":"webportal"
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
  * @api {post} /serviceProviders/login Portal : Login
  * @apiName Portal : login
  * @apiGroup Portal
  *
  * @apiParam {string} email email_id of the user, for FB and Google it is not mandatory.
  * @apiParam {string} password Encrypted password of the user.
  * @apiParam {string} platform should be passed through header[values would be webportal].
  * @apiSuccessExample Example Request Format
  {
    "email": "admin@no2fyme.com",
    "password": "qwerty"
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
         "user_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTExM2Q1YjkzZjZiMzEyN2NmYWY0NmEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDk0MzA5NDYxfQ.vBXgdSTJEg508OX_xkqvJUmUANzOkInPj3-Pnre_too"
     }
 }
 *
 */

 /**
 * @api {put} /serviceProviders/:id   Profile Info : updateProfileInfo
 * @apiName Portal : updateProfileInfo
 * @apiGroup Portal

 * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
 * @apiParam {string} platform Request from mobile or portal.
 * @apiParam {string} id _id of logged in service provider

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
 * @apiParam {String} phone_number phone number of the provider.
 * @apiParam {string} platform Request from mobile or portal.
 * @apiParam {Boolean} same_as_above  this field is for specifying that this information on the billing info is same as the profileInformation.
 * @apiParam {object} billing_info here goes the disscription about the billinginfo ant the fields are same as above .
 * @apiSuccessExample Example Request Format
  {
    "title":"Mr",
    "first_name" :"Prem",
    "last_name": "Raj",
    "company" :"Experion",
    "address" :"Kilimanoor",
    "city"   : "Palakkad",
    "state":"Kerala",
    "postal_code" :"858454",
    "phone_number" :"8281670752",
    "email": "premraj86f@gmail.com",
    "suite": "A",
      "phone_number_type": "office",
    "platform":"webportal",
      "billing_info": {
        "title": "Mr",
        "state": "Kerala",
        "first_name": "Prem",
        "last_name": "Raj",
        "phone_number": "123456",
        "email": "premraj86f@gmail.com",
        "office_fax" :123
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
   "message": "appointment-success",
   "code": 200,
   "data": {
     "ok": 1,
     "nModified": 1,
     "n": 1,
     "opTime": {
       "ts": "6421408945734156295",
       "t": 1
     },
     "electionId": "7fffffff0000000000000001"
   }
 }
*
*/

/**
 * @api {get} /serviceProviders/:id?platform=:platform ServiceProvider : Get Service Provider details
 * @apiName ServiceProvider : getDetails
 * @apiGroup Portal
 *
 * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
 * @apiParam {string} platform Request from mobile or portal.
 * @apiParam {string} id _id of logged in service provider
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
        "_id": "591e7b8d94e4fd0011b431eb",
        "first_name": "Megha",
        "last_name": "S",
        "phone_number": "9876543210",
        "address": null,
        "city": null,
        "state_id": null,
        "postal_code": null,
        "title": "Mrs",
        "is_profile_completed": false
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
 * @api {GET} /serviceProviders/:id/signUpVerification?platform=:platform Account : Verification
 * @apiName ServiceProvider : portalsignUpVerification
 * @apiGroup Portal
 *
 * @apiParam {string} platform Request from mobile or portal.
 * @apiParam {number} id  Unique _id of service provider.
 *
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data returned from the API.
 * @apiSuccessExample Example data on success
 *
 {
  "status": 1,
  "message": "The account verification process is completed.",
  "code": 200
}
 *
 *@apiErrorExample {json} Error-Response:
 *
 {
  "status": 0,
  "message": "Invalid id.",
  "code": 400,
  "data": null
}
 *
 */

 /**
  * @api {put} /serviceProviders/:id/changePassword Portal : Change Password
  * @apiName Portal : changePassword
  * @apiGroup Portal
  *
  * @apiParam {string} id  Unique _id of service provider.
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
    "platform": "webportal",
    "password": "premraj123",
    "new_password": "prem123raj",
    "confirm_password": "prem123raj"
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
   * @api {put} /serviceProviders/:id/cards    Serviceprovider : savecardDetails
   * @apiName Serviceprovider: savecardDetails
   * @apiGroup Portal
   *
   * @apiParam {String} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
   * @apiParam {String} id ID of service provider
   * @apiParam {String} platform Request from mobile or portal.
   * @apiParam {String} name_on_card name printed on card.
   * @apiParam {String} card_type type of the card (visa or master card).
   * @apiParam {String} card_number number on card .
   * @apiParam {String} expiry_month expiry month of the card.
   * @apiParam {String} expiry_year expiry year of the card.
   * @apiParam {String} cvv_number cvv number on card .
   * @apiSuccess {Number} status 1 for success.
   * @apiSuccessExample Example Request format.
    {
      "card_type": "visa",
      "card_number": "123456789012",
      "name_on_card": "PREMRAJ",
      "cvv_number": "965",
      "expiry_month": "05",
      "expiry_year": "2021",
      "platform": "webportal"
    }
   * @apiSuccessExample Example data on success
   *
   {
    "status": 1,
    "message": "Card details saved.",
    "code": 200,
    "data": null
  }

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
 * @api {GET} /serviceProviders?platform=:platform&type=:type&page=:page Service Provider : Service Provider List
 * @apiName ServiceProvider : serviceProviderList
 * @apiGroup superAdmin
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
    "message": "Service provider list retrieved successfully.",
    "code": 200,
    "totalRecords": 92,
    "limitPerPage": 10,
    "page": "10",
    "searchparams": {
        "platform": "webportal",
        "type": "list",
        "page": "10",
        "total_count": 92
    },
    "data": [
        {
            "_id": "59509c75ae7c062407f314b2",
            "first_name": "premraj",
            "last_name": "r",
            "phone_number": "(111) 111-1111",
            "address": null,
            "city": null,
            "country": null,
            "postal_code": null,
            "title": null,
            "is_profile_completed": false,
            "email": "premraj.r4@experionglobal.com",
            "office_fax": null,
            "suite": null,
            "state": null,
            "type_of_access": null,
            "user_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTUwOWM3NWFlN2MwNjI0MDdmMzE0YjIiLCJ1c2VyX3R5cGUiOiJwb3J0YWxVc2VyIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTQ5ODQ1NTE1N30.NHSn3VJ1YPwL_ea21scVzDNHyjvO2Eo0dWZcreW7EPM",
            "phone_number_type": null,
            "billing_info": {
                "phone_number_type": null,
                "title": null,
                "office_fax": null,
                "phone_number": null,
                "postal_code": null,
                "country": null,
                "state": null,
                "city": null,
                "suite": null,
                "address": null,
                "company": null,
                "last_name": null,
                "first_name": null
            },
            "is_active": true,
            "user_role": "serviceProvider"
        },
        {
            "_id": "5950d77e080758388293b546",
            "first_name": "Rakhi",
            "last_name": "Experion",
            "phone_number": "(839) 020-2029",
            "company": "Experion",
            "address": "Thejaswini, Technopark",
            "city": "triv",
            "country": "India",
            "postal_code": null,
            "title": null,
            "is_profile_completed": true,
            "email": "rakhi.mr+16@experionglobal.com",
            "office_fax": null,
            "suite": null,
            "state": "Kerala",
            "type_of_access": null,
            "user_token": null,
            "phone_number_type": "office",
            "billing_info": {
                "email": "rakhi.mr+16@experionglobal.com",
                "phone_number_type": "office",
                "title": null,
                "office_fax": null,
                "phone_number": "(839) 020-2029",
                "postal_code": null,
                "country": "India",
                "state": "Kerala",
                "city": "triv",
                "suite": null,
                "address": "Thejaswini, Technopark",
                "company": "Experion",
                "last_name": "Experion",
                "first_name": "Rakhi"
            },
            "is_active": true,
            "user_role": "serviceProvider"
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