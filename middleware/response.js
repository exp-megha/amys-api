const status = require('./../config/http.status.json');
const constants = require("./../constants.js"); // load contants


var response = (req, res, next) => {
    res.message = (message) => {
        if(typeof message === 'string') {
            let i18n = req.app.get('i18n');
            res.responseMessage = i18n.t(message);
        }
        return res;
    };

    /*Failure Response*/
    res.returnFailure = (data) => {
        message =  res.responseMessage|| status[res.statusCode];
        res.send({
            status: 0,
            message,
            code: res.statusCode,
            data: data
        });
    };

    /*Success Response*/
    res.returnSuccess = (data) => {
            console.log('returnSuccessdata: ', data);
        message =  res.responseMessage|| status[res.statusCode];
        res.send({
          status: 1,
          message,
          code: res.statusCode,
          data: data
        });
    };

    /*List success Response*/
    res.returnListSuccess = (data, query_string) => {
            console.log('data: ', data);

        message =  res.responseMessage|| status[res.statusCode];
        if (query_string.page) {
          var page = query_string.page;
        } else {
          var page = 1;
        }
        var limit = constants.PAGE_LIMIT;
        res.send({status: 1, message, code: res.statusCode, totalRecords: query_string.total_count, limitPerPage: limit, page: page, searchparams: query_string, data: data});
    };

    next();
}

module.exports = { response };
