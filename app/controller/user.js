'use strict';
var userHelper = require('./../helper/user');
var response = require('./../../config/response');
module.exports = {
    getUser: (req, res) => {
        // list all users
        Promise.coroutine(function* () {
            let post = yield userHelper.getUser()();
            return post;
        }).apply(this)
            .then((post) => {
                return response.ok(res, post);
            })
            .catch((error) => {
                return response.ok(res, error);
            });
    },
    updateuser: (req, res) => {
        // update user
        Promise.coroutine(function* () {
            let post = yield userHelper.saveUser()();
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
            let post = yield userHelper.deleteUser()();
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