const app = require('express')();
require("dotenv").load();
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

// App configuration
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());

console.log(process.env.SECRET,"process.env.SECRET")


//Database connection
require('./db');
//Passport configuration
require('./passport')(passport);
//Routes configuration
require("./../src/routes")(app);


module.exports = app;