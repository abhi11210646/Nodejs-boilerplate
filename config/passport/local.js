var passport = require('passport');
var localStratagy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var userHelper = require('./../../app/helper/user');
var stratagy = new localStratagy(
    { 
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function shit(username, passoword, callback) {
        console.log("nahi pata tenu--------->?>>", username, password, req.body);
        userHelper.find({username: username, password: passoword}).then((user)=>{
            console.log("--------->>>>", user);
            if(!user) callback(null, false, {"message":"user does not exist;"});
            callback(null, user, {});
        }).catch((error)=>{
            callback(error);
        });
    }
);


module.exports = stratagy;