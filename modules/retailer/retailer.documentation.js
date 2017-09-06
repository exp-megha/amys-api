 /**
 * @api {get} /retailers?name=:name&gst_registration_number=:gst_registration_number&pan_number=:pan_number&phone_number=:phone_number Get Retailers
 * @apiName Retailer : getRetailer
 * @apiGroup Retailer
 *
 * @apiParam {string} name name of retailer[search query string].
 * @apiParam {string} gst_registration_number gst number of retailer[search query string].
 * @apiParam {string} pan_number pan number of retailer[search query string].
 * @apiParam {Number} phone_number phone_number of retailer[search query string]
 * @apiParam {Boolean} is_active true / false [search query string]

 * @apiSuccessExample Example Response Format
{
    "status": 1,
    "message": "retailer-list-success",
    "code": 200,
    "totalRecords": 2,
    "limitPerPage": 100000,
    "page": 1,
    "searchparams": {
        "name": "agenc",
        "total_count": 2
    },
    "data": [
        {
            "_id": "598566b850633c19f4920a8f",
            "name": "Amys Agencies Updated",
            "is_active": true,
            "address": "Varkkala Vadasserikonam",
            "city": "Trivandrum",
            "state_code": 21,
            "state": "Kerala",
            "zip": 695143,
            "phone_number": 9846202554,
            "pan_number": "BNUPS6438L",
            "gst_registration_number": "GST0BNUPS6438LIN1Z"
        },
        {
            "_id": "598564e182fb2712703a07a5",
            "name": "Yanuma Agencies",
            "is_active": true,
            "address": "Varkkala Vadasserikonam",
            "city": "Trivandrum",
            "state_code": 21,
            "state": "Kerala",
            "zip": 695143,
            "phone_number": 9846202554,
            "pan_number": "BNUPS6438L",
            "gst_registration_number": "GST0BNUPS6438LIN1Z"
        }
    ]
}
*
*@apiErrorExample {json} Error-Response: 'validation error'
*
{
    "status": 1,
    "message": "retailer-list-success",
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
  * @api {post} /retailers  Add Retailer
  * @apiName Retailer : addRetailer
  * @apiGroup Retailer
  *
   * @apiParam {string} name name of retailer.
   * @apiParam {string} email email of retailer.
   * @apiParam {string} address address of retailer.
   * @apiParam {string} city city of retailer.
   * @apiParam {string} state state of retailer.
   * @apiParam {string} state_code state_code of retailer.
   * @apiParam {string} zip zip of retailer.
   * @apiParam {string} gst_registration_number gst number of retailer.
   * @apiParam {string} place_of_supply Place of supply of retailer[default value would be 'Kerala'].
   * @apiParam {string} pan_number pan number of retailer.
   * @apiParam {Number} phone_number phone_number of retailer
    * @apiParam {Boolean} is_active true / false [default value would be 'true'].
  * @apiSuccessExample Example Request Format
  {
  "name": "Yanuma Communications Varkkala",
  "email": "yamunacommunications@gmail.com",
  "address": "Varkkala, Vadasserikonam",
  "city": "Trivandrum",
  "state": "Kerala",
  "state_code": 21,
  "zip": 695143,
  "phone_number": 9846202554,
  "pan_number": "BNUPS6438L",
  "gst_registration_number": "GST0BNUPS6438LIN1Z",
  "place_of_supply": "KERALA",
  "is_active": true
}
*
 * @apiSuccess {number} status 1 for success.
 * @apiSuccess {String} message success message.
 * @apiSuccess {number} code sucess code .
 * @apiSuccess {string} data data returned from the API.
 * @apiSuccessExample Example data on success
 *
 {
    "status": 1,
    "message": "retailer-added-successfully",
    "code": 200,
    "data": {
        "_id": "59856a70123c7d1234363fb8",
        "name": "Yanuma Communications Varkkala",
        "is_active": true,
        "address": "Varkkala Vadasserikonam",
        "city": "Trivandrum",
        "state_code": 21,
        "state": "Kerala",
        "zip": 695143,
        "phone_number": 9846202554,
        "pan_number": "BNUPS6438L",
        "gst_registration_number": "GST0BNUPS6438LIN1Z",
        "place_of_supply": "KERALA"
    }
}
 *
 *@apiErrorExample {json} Error-Response: 'if exists'
 *
{
    "status": 0,
    "message": "retailer-exists",
    "code": 400,
    "data": null
}
*/
  /**
  * @api {put} /retailers/:id  Update Retailer
  * @apiName Retailer : updateRetailer
  * @apiGroup Retailer
  *
  * @apiParam {string} id _id of the retailer
  * @apiParam {string} name name of retailer.
   * @apiParam {string} email email of retailer.
   * @apiParam {string} address address of retailer.
   * @apiParam {string} city city of retailer.
   * @apiParam {string} state state of retailer.
   * @apiParam {string} state_code state_code of retailer.
   * @apiParam {string} zip zip of retailer.
   * @apiParam {string} place_of_supply Place of supply of retailer[default value would be 'Kerala'].
   * @apiParam {string} gst_registration_number gst number of retailer.
   * @apiParam {string} pan_number pan number of retailer.
   * @apiParam {Number} phone_number phone_number of retailer
    * @apiParam {Boolean} is_active true / false [default value would be 'true'].
  * @apiSuccessExample Example Request Format
 {
  "name": "Yanuma Communications Varkkala",
  "email": "yamunacommunications@gmail.com",
  "address": "Varkkala, Vadasserikonam",
  "city": "Trivandrum",
  "state": "Kerala",
  "state_code": 21,
  "zip": 695143,
  "phone_number": 9846202554,
  "pan_number": "BNUPS6438L",
  "gst_registration_number": "GST0BNUPS6438LIN1Z",
"is_active": false,
  "place_of_supply": "KERALA"  
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
    "message": "retailer-information-updated",
    "code": 200,
    "data": {
        "_id": "598566b850633c19f4920a8f",
        "name": "Amys Agencies Updated",
        "is_active": false,
        "address": "Varkkala Vadasserikonam",
        "city": "Trivandrum",
        "state_code": 21,
        "state": "Kerala",
        "zip": 695143,
        "phone_number": 9846202554,
        "pan_number": "BNUPS6438L",
        "gst_registration_number": "GST0BNUPS6438LIN1Z",
        "place_of_supply": "KERALA"        
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
 * @api {get} /retailers/:id Get Retailers
 * @apiName Retailer : getRetailerDetails
 * @apiGroup Retailer
 *
 * @apiParam {string} id _id of the selected retailer

 * @apiSuccessExample Example Response Format
{
    "status": 1,
    "message": "Retailer-information-retrieved-successfully",
    "code": 200,
    "data": {
        "_id": "598564e182fb2712703a07a5",
        "name": "Yanuma Agencies",
        "is_active": true,
        "address": "Varkkala Vadasserikonam",
        "city": "Trivandrum",
        "state_code": 21,
        "state": "Kerala",
        "zip": 695143,
        "phone_number": 9846202554,
        "pan_number": "BNUPS6438L",
        "gst_registration_number": "GST0BNUPS6438LIN1Z",
        "place_of_supply": "KERALA"
    }
}
*
*@apiErrorExample {json} Error-Response: 'validation error'
*
{
    "status": 0,
    "message": "Bad Request",
    "code": 400,
    "data": null
}
*
*/
/**
  * @api {put} /retailers/:id/activateInactivate  Activate/Inactivate Retailer
  * @apiName Retailer : activateInactivate
  * @apiGroup Retailer
  *
  * @apiParam {string} id _id of the retailer
    * @apiParam {Boolean} is_active true / false .
  * @apiSuccessExample Example Request Format
 {
"is_active": true
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
    "message": "activated-successfully",
    "code": 200,
    "data": {
        "_id": "598566b850633c19f4920a8f",
        "name": "Amys Agencies Updated",
        "is_active": true,
        "address": "Varkkala Vadasserikonam",
        "city": "Trivandrum",
        "state_code": 21,
        "state": "Kerala",
        "zip": 695143,
        "phone_number": 9846202554,
        "pan_number": "BNUPS6438L",
        "gst_registration_number": "GST0BNUPS6438LIN1Z",
        "place_of_supply": "KERALA"        
    }
}
 *
 * @apiErrorExample {json} Error-Response: 'validation error'
 *
 {
   "status": 0,
   "message": "'retailer-update-failed",
   "code": 400,
   "data": null
 }
 */
/**
 * @api {get} /retailers?from=dropdown Get Retailers List for using in Drop down
 * @apiName Retailer : getRetailerForDropDown
 * @apiGroup Retailer
 *
 * @apiParam {Boolean} is_active true / false [search query string]

 * @apiSuccessExample Example Response Format
{
    "status": 1,
    "message": "retailer-list-success",
    "code": 200,
    "totalRecords": 7,
    "limitPerPage": 100000,
    "page": 1,
    "searchparams": {
        "from": "dropdown",
        "total_count": 7
    },
    "data": [
        {
            "_id": "599d94e206d0a80011ecd85d",
            "name": "Amys",
            "text": "Amys",
            "id": "599d94e206d0a80011ecd85d"
        },
        {
            "_id": "598566b850633c19f4920a8f",
            "name": "Amys Agencies Updated",
            "text": "Amys Agencies Updated",
            "id": "598566b850633c19f4920a8f"
        },
        {
            "_id": "5997c6e332c9c60011c87a00",
            "name": "Idea",
            "text": "Idea",
            "id": "5997c6e332c9c60011c87a00"
        },
        {
            "_id": "59947fcf6072cd00114994ea",
            "name": "R",
            "text": "R",
            "id": "59947fcf6072cd00114994ea"
        },
        {
            "_id": "5997e231b99a20001147a0d0",
            "name": "Yamuna",
            "text": "Yamuna",
            "id": "5997e231b99a20001147a0d0"
        },gi
        {
            "_id": "5985646df1cffd19d446e11c",
            "name": "Yanuma Communications",
            "text": "Yanuma Communications",
            "id": "5985646df1cffd19d446e11c"
        },
        {
            "_id": "59856a70123c7d1234363fb8",
            "name": "Yanuma Communications Varkkala",
            "text": "Yanuma Communications Varkkala",
            "id": "59856a70123c7d1234363fb8"
        }
    ]
}
*
*@apiErrorExample {json} Error-Response: 'validation error'
*
{
    "status": 1,
    "message": "retailer-list-success",
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