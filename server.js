const app = require('express')();
const passport = require('passport');

// Bootstrap schemas, models
require("./bootstrap");

// Initialize passport
require('./config/passport/')(passport);

// App configuration
require("./serverConfig")(app, passport);

// Add route
require("./config/route")(app, passport);

//listen on PORT
app.listen(process.env.PORT || 3000, '127.0.0.1', () => {
    console.log('process listening ON', process.env.PORT || 3000);
});
