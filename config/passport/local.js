const localStratagy = require('passport-local').Strategy;
const userHelper = require('./../../app/helper/user');
const stratagy = new localStratagy(
    { 
        usernameField: 'username',
        passwordField: 'password',
    },
    (username, passoword, callback) => {
            if(username == 'abhi') callback(null, false, {"message":"user does not exist;"});
            callback(null, username, {});
    }
);


module.exports = stratagy;