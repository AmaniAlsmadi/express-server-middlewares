'use strict';

function validate(req, res, next) {

    if ( !isNaN(+req.query.num)) {
        req.num = Math.pow(+req.query.num, 2)
         console.log(req.num)
        next();
       
    } else {
        next(`${req.query.num} is not a number`);
       
    }
}

module.exports = validate;
