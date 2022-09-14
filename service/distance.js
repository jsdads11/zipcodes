const request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY ||
    "YFiYjXZrhHUUF8XYGAzXOCCu8sWj7jwZPj2l7fr40dYhfUqYsJwKUlTz7hXBCQQS";

const zipCodeURL = process.env.ZIPCODE_API_URL || "https://zipcodeapi.com/";

// https://zipcodeapi.com/rest/<api_key>/distance.<format>/<zip_code1>/<zip_code2>/<units>
// https://zipcodeapi.com/rest/DemoOnly00YY1F0X8lhFDeitNw4cjgF5hQWCLen5Yw0p4F2mmkLO7I52V8Da6jd3/distance.json/84010/97229/mile
// https://zipcodeapi.com/rest/YFiYjXZrhHUUF8XYGAzXOCCu8sWj7jwZPj2l7fr40dYhfUqYsJwKUlTz7hXBCQQS/distance.json/84010/97229/mile

var distance = {
    find: (req, res, next) => {
        request(zipCodeURL + 'rest/' + apiKey +
            '/distance.json/' + req.params.zipcode1 + '/' +
            req.params.zipcode2 + '/mile',
            (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send({
                        distance: -1
                    });
                }
            });
    }
};

module.exports = distance;