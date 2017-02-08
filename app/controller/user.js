'use strict';
var userHelper = require('./../helper/user');
var response = require('./../../config/response');
var passport = require('passport');
var Promise = require('bluebird');
module.exports = {
    login: (req, res) => {
        // passport authentication 
        passport.authenticate('local', (error, user, info) => {

                    console.log("user-----========>>>>>>>>>", error, user, info);
                    return response.ok(res, user);

        })(req, res);
        // Promise.coroutine(function* () {
        //     let post = yield userHelper.getUser();
        //     return post;
        // }).apply(this)
        //     .then((post) => {
        //         return response.ok(res, post);
        //     })
        //     .catch((error) => {
        //         return response.ok(res, error);
        //     });
    },
    signUp: (req, res) => {
        // update user
        Promise.coroutine(function* () {
            let post = yield userHelper.saveUser(req.body);
            return post;
        }).apply(this)
            .then((post) => {
                return response.ok(res, post);
            })
            .catch((error) => {
                return response.ok(res, error);
            });
    },
    deleteuser: (req, res) => {
        // delete user
        Promise.coroutine(function* () {
            let post = yield userHelper.deleteUser();
            return post;
        }).apply(this)
            .then((post) => {
                return response.ok(res, post);
            })
            .catch((error) => {
                return response.ok(res, error);
            });

    }

};