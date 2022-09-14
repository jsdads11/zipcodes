/*
// specify the routes for response transmission.
// The routes are set by two end-points for transmitting and receiving requests.
*/

var properties = required('../package,json')

var distance = require('../service/distance');


var controllers = {

// about endpoint that offers the app information.
about: function(req,res) {

    var aboutInfo = { name:properties.name, version: properties.version }
    res.json(aboutInfo);
},

get_distance: function(req, res) {

    distance.find(req,res, function(err, dist_) {
        if(err) res.send(err); res.json(dist);
    });
},

};