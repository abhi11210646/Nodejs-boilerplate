const app = require('express')();
const passport = require('passport');
require("./bootstrap");
require("./serverConfig")(app, passport);
app.listen(process.env.PORT, function() {
    console.log('process listening ON', process.env.PORT);
});
