// A controller object in Node.js interprets user intent and handles 
// requests received by the routes module created earlier.

'use strict';
'use strict';

const properties = require('../package.json');
const distance = require('../service/distance');

var controllers = {
    about: (req, res) => {
        var aboutInfo = {
            name: properties.name,
            version: properties.version,
        }
        res.json(aboutInfo);
    },

    getDistance: (req, res) => {
        distance.find(req, res, (err, dist) => {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
};

module.exports = controllers;