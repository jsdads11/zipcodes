/*
// build a server that identifies and accepts the web requests
// We will use two packages, Express and Require
*/

const express = require ('express');
const app = express ();

// We make the routes available in our primary file by requiring it 
const routes = require ('./api_routes/routes');
routes (app);        // and passing the app instance into the routes object
const port = process.env.PORT || 3000;

app.listen (port, () => {
  console.log (`Listening to port http://localhost:${port}`);
});
