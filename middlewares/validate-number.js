'use strict';

function validate(req, res, next) {

    if ( !isNaN(+req.params.num)) {
        req.num = Math.pow(+req.params.num, 2)
         console.log(req.num)
        next();
       
    } else {
        next(`${req.params.num} is not a number`);
       
    }
}

module.exports = validate;
