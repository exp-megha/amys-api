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
            "latest_idea_invoice_id": "INV9"
        },
        {
            "latest_sundirect_invoice_id": "INV3"
        },
        {
            "cgst_percentage": "9"
        },
        {
            "sgst_percentage": "9"
        }
    ]
}
*
*/