 /**
 * @api {get} /users/applicationSettings User : Get applications settings
 * @apiName User : applicationSettings
 * @apiGroup User
 *
 * @apiSuccessExample Example Response Format
{
    "status": 1,
    "message": "Application-settings-retrieved-successfully",
    "code": 200,
    "data": [
        {
            "settings_name": "latest_invoice_id",
            "settings_value": "INV3"
        },
        {
            "settings_name": "cgst_percentage",
            "settings_value": "9"
        },
        {
            "settings_name": "sgst_percentage",
            "settings_value": "9"
        }
    ]
}
*
*/