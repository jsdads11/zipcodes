/*
// specify the routes for response transmission.
// The routes are set by two end-points for transmitting and receiving requests.
*/
'use strict';

const controller = require('../controllers/controller');
//  The routes file specifies our two endpoints : /about and /distance/:zipcode1/:zipcode2.

module.exports = (app) => {
// The about endpoint that offers the app information.
    app.route('/about').get(controller.about);      
// The /distance endpoint will be used to compute the distance in miles between zipcode1 and zipcode2 using the external API returning the distance between the two ZIP codes for us. The implementation of these endpoints is in the controller file, which we’ll get into in the next step.
    app.route('/distance/:zipcode1/:zipcode2').get(controller.getDistance);
}

