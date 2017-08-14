 /**
 * @api {get} /items Get Items
 * @apiName Item : getItem
 * @apiGroup Item
 *
 * @apiParam {string} item_of values would be "Idea", "SunDirect [search query string].
 * @apiParam {string} item_name search query string.
 * @apiParam {string} item_type search query string.
 * @apiParam {Number} item_amount search query string.
 * @apiParam {string} hsn_sac_code search query string.
 * @apiParam {Boolean} is_active true / false [search query string]
 * @apiSuccessExample Example Response Format
{
    "status": 1,
    "message": "item-list-success",
    "code": 200,
    "totalRecords": 2,
    "limitPerPage": 100000,
    "page": 1,
    "searchparams": {
        "total_count": 2
    },
    "data": [
        {
            "_id": "5985eb29acc2a51eac48750b",
            "item_of": "Idea",
            "item_type": "Coupon",
            "item_name": "RSC 50",
            "item_amount": 50,
            "unit_price_to_retailer": 48,
            "percentage_deduction": 3.5,
            "hsn_sac_code": "2343dsgfsdg"
        },
        {
            "_id": "5985ec326689701e14a04419",
            "item_of": "Idea",
            "item_type": "Flexy",
            "item_name": "2000",
            "item_amount": 2000,
            "unit_price_to_retailer": 1900,
            "percentage_deduction": 2,
            "hsn_sac_code": "23435"
        }
    ]
}
*
*@apiErrorExample {json} Error-Response: 'validation error'
*
{
    "status": 1,
    "message": "Item-list-success",
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
  * @api {post} /items  Add Item
  * @apiName Item : addItem
  * @apiGroup Item
  *
   * @apiParam {string} item_of values would be Idea, SunDirect.
   * @apiParam {string} item_type values would be Coupon, Flexy etc.
   * @apiParam {string} item_name name of the item.
   * @apiParam {Number} item_amount amount of item.
   * @apiParam {Number} unit_price_to_retailer selling price to retailer.
   * @apiParam {Number} percentage_deduction percentage of amount deductin to retailer.
   * @apiParam {string} hsn_sac_code hsn code of the item
      * @apiParam {Boolean} is_active true / false [default value would be 'true'].
* @apiSuccessExample Example Request Format
  {
  "item_of": "Idea",
  "item_type": "Coupon",
  "item_name": "RSC 100",
  "item_amount": 100,
  "unit_price_to_retailer": 99,
  "percentage_deduction": 3.5,
  "hsn_sac_code": "2343dsgfsdg",
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
    "message": "Item-added-successfully",
    "code": 200,
    "data": {
        "_id": "5985f16e1bd5da1e98f538e9",
        "item_of": "Idea",
        "item_type": "Coupon",
        "item_name": "RSC 100",
        "item_amount": 100,
        "unit_price_to_retailer": 99,
        "percentage_deduction": 3.5,
        "hsn_sac_code": "2343dsgfsdg",
  "is_active": true
    }
}
 *
 *@apiErrorExample {json} Error-Response: 'if exists'
 *
{
    "status": 0,
    "message": "Item-exists",
    "code": 400,
    "data": null
}
*/
  /**
  * @api {put} /items/:id  Update Item
  * @apiName Item : updateItem
  * @apiGroup Item
  *
  * @apiParam {string} id _id of the item
   * @apiParam {string} item_of values would be Idea, SunDirect.
   * @apiParam {string} item_type values would be Coupon, Flexy etc.
   * @apiParam {string} item_name name of the item.
   * @apiParam {Number} item_amount amount of item.
   * @apiParam {Number} unit_price_to_retailer selling price to retailer.
   * @apiParam {Number} percentage_deduction percentage of amount deductin to retailer.
   * @apiParam {string} hsn_sac_code hsn code of the item
      * @apiParam {Boolean} is_active true / false [default value would be 'true'].
* @apiSuccessExample Example Request Format
 {
  "item_of": "Idea",
  "item_type": "Coupon",
  "item_name": "RSC 100",
  "item_amount": 100,
  "unit_price_to_retailer": 99,
  "percentage_deduction": 3.5,
  "hsn_sac_code": "2343dsgfsdg",
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
    "message": "Item-information-updated",
    "code": 200,
    "data": {
        "_id": "598566b850633c19f4920a8f",
        "item_of": "Idea",
        "item_type": "Coupon",
        "item_name": "RSC 100",
        "item_amount": 100,
        "unit_price_to_retailer": 99,
        "percentage_deduction": 3.5,
        "hsn_sac_code": "2343dsgfsdg",
        "is_active": true
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
 * @api {get} /items/:id Get  Details
 * @apiName Item : getItemDetails
 * @apiGroup Item
 *
 * @apiParam {string} id _id of the selected Item.

 * @apiSuccessExample Example Response Format
{
    "status": 1,
    "message": "Item-information-retrieved-successfully",
    "code": 200,
    "data": {
        "_id": "5985f16e1bd5da1e98f538e9",
        "item_of": "Idea",
        "item_type": "Coupon",
        "item_name": "RSC 100",
        "item_amount": 100,
        "unit_price_to_retailer": 99,
        "percentage_deduction": 3.5,
        "hsn_sac_code": "2343dsgfsdg"
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
  * @api {put} /items/:id/activateInactivate  Activate/Inactivate Item
  * @apiName Item : activateInactivate
  * @apiGroup Item
  *
  * @apiParam {string} id _id of the item
  * @apiParam {Boolean} is_active true / false 
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
        "item_of": "Idea",
        "item_type": "Coupon",
        "item_name": "RSC 100",
        "item_amount": 100,
        "unit_price_to_retailer": 99,
        "percentage_deduction": 3.5,
        "hsn_sac_code": "2343dsgfsdg",
        "is_active": true
    }
}
 *
 * @apiErrorExample {json} Error-Response: 'validation error'
 *
 {
   "status": 0,
   "message": "'item update failed",
   "code": 400,
   "data": null
 }
 */
