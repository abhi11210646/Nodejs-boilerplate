'use strict';
var userHelper = require('./../helper/user');
var response = require('./../../config/response');
var passport = require('passport');
module.exports = {
    login: (req, res, next) => {
        passport.authenticate('local', function(err, user, info) {
            console.log(err, user, info,'heheheh');
            if (err) { return next(err); }
            if (!user) { res.send({ "status": info.message }); }
            res.send({ "status": user });
        })(req, res, next);
    },
    signUp: (req, res) => {
        // Promise.coroutine(function* () {
        //     let post = yield userHelper.saveUser(req.body);
        //     return post;
        // }).apply(this)
        //     .then((post) => {
        //         return response.ok(res, post);
        //     })
        //     .catch((error) => {
        //         return response.ok(res, error);
        //     });
    }

};
