const app = require('express')();
require("dotenv").config();
const passport = require('passport');
const bodyParser = require('body-parser');
const noc = require('no-console');
const cors = require('cors');

// Bootstrap schemas, models
require("./bootstrap");

// App configuration
noc(app);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());

//Database connection
require('./db');
//Passport configuration
require('./passport')(passport);
//Routes configuration
require("./../src/routes")(app);


module.exports = app;