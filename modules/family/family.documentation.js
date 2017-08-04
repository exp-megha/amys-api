/**
 * @api {post} /users/:id/family Family : Add Family Member
 * @apiName family : addFamilyMembers
 * @apiGroup Mobile
 *
 * @apiParam {string} id Id of the user whose family member is to added.
 * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )

 * @apiSuccessExample Example Request Format
 {
    "relation": "sister",
    "dob": "22-12-2018",
    "gender": "M",
    "last_name": "lis",
    "first_name": "gaby",
    "title": "none",
    "platform": "mobile"
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
  "message": "family-memmber-added",
  "code": 200,
  "data": {
    "email": "megha.s+4@experionglobal.com",
    "title": "Ms",
    "first_name": "Rakhi+1",
    "last_name": "Experion+1",
    "type_of_access": "normal",
    "facebook_google_id": null,
    "gender": "F",
    "dob": "23-11-1990",
    "phone_number": "9493654490",
    "user_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTE0MDQyYTNkNDc3ZTBmNTA4NDQxMjQiLCJ1c2VyX3R5cGUiOiJhcHBVc2VyIiwiYWNjZXNzIjoiYXV0aCIsImlhdCI6MTQ5NDQ4NDAxMX0.f4jgL1PQNUrOLgWCqZSbudN9f1SxdswkKGahEG3gNp8",
    "device_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VfaWQiOiJhc2FzYXNhc2FzIiwiZGV2aWNlX29zIjoia2l0a2F0IiwiZGV2aWNlX21vZGVsIjoiemVuZm9uZTIiLCJkYXRlIjoxNDk0MjI3ODAzMzg2LCJpYXQiOjE0OTQyMjc4MDN9.yw92dcl_1Vrz7jRkwhf5Me8ITOAWZU5SrdBd2BBvUAE",
    "family_members": [
  {
    "_id": "591941f730264122ce830766",
    "dob": "22-12-2018",
    "gender": "female",
    "last_name": "lis",
    "first_name": "gaby",
    "title": "none"

  }
    ],
    "my_providers": [],
    "reset_token": null
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
  * @api {get} /users/:id/family?platform=:platform  Family: List Family Members
  * @apiName family : familyMembersList
  * @apiGroup Mobile
  *
  * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
  * @apiParam {string} platform Request from mobile or portal.
  * @apiParam {string} Id of the user whose family members are to be listed.
  * @apiSuccessExample Example data on success
  *
  {
    "status": 1,
    "message": "List of family members retrieved successfully. ",
    "code": 200,
    "totalRecords": 2,
    "limitPerPage": 10,
    "page": 1,
    "searchparams": {
        "platform": "webportal",
        "total_count": 2
    },
    "data": [
        {
            "_id": "59816f0733cb8e17a59730aa",
            "dob": "911001600000",
            "gender": "Male",
            "last_name": "Joe",
            "first_name": "Rayan",
            "family_name": "Joe Rayan",
            "relation": "Brother"
        },
        {
            "_id": "5982c9b6cb70bb226475d5f1",
            "dob": "1499212800000",
            "gender": "Female",
            "last_name": "S",
            "first_name": "Megha",
            "family_name": "S Megha",
            "relation": "Friend"
        }
    ]
}
  *@apiErrorExample {json} Error-Response: 'BadRequest'
  *
  {
  "status": 0,
  "message": "No records found.",
  "code": 400,
  "data": null
}
  */
  /**
  * @api {delete} /users/:id/family/:memberId?platform=:platform  Family: Remove Family Member
  * @apiName family : removeFamilyMember
  * @apiGroup Mobile
  *
  * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
  * @apiParam {string} platform Request from mobile or portal.
  * @apiParam {string} id Id of the user whose family member is to be removed.
  * @apiParam {string} memberId Id of the family member who is to be removed.
  * @apiSuccessExample Example data on success
  *
  {
    "status": 1,
    "message": "Family member is removed.",
    "code": 200,
    "data": null
}
  *@apiErrorExample {json} Error-Response: 'BadRequest'
  *
  {
  "status": 0,
  "message": "No records found.",
  "code": 400,
  "data": null
}
  */

/**
  * @api {put} /users/:id/family/:memberId  Family: Edit Family Member
  * @apiName family : editFamilyMember
  * @apiGroup Mobile
  *
  * @apiParam {string} user_token the same user_token returned from api during login(should be set in the "Authorization" header )
  * @apiParam {string} id Id of the user whose family member's details are to be edited.
  * @apiParam {string} memberId Id of the family member whose details are to be edited.

 * @apiSuccessExample Example Request Format
  {
    "platform": "mobile",
    "relation": "Brother",
    "first_name": "Sachin",
    "last_name": "Kumar",
    "gender": "Male",
    "dob": "27/05/1992"
  }
  *
  * @apiSuccessExample Example data on success
  *
  {
    "status": 1,
    "message": "Family member details saved successfully.",
    "code": 200,
    "data": null
  }
  *@apiErrorExample {json} Error-Response: 'BadRequest'
  *
  {
    "status": 0,
    "message": "Relation with family member required.",
    "code": 400,
    "data": null
  }
  */