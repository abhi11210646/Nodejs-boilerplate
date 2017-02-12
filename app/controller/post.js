'use strict';
var posthelper = require('./../helper/post');
var response = require('./../../config/response');
var Promise = require('bluebird');
module.exports = {

    addPost: (req, res) => {
        Promise.coroutine(function* () {
            let post = yield posthelper.addPost();
            return post;
        }).apply(this)
            .then((post) => {
                return response.ok(res, post);
            })
            .catch((error) => {
                return response.ok(res, error);
            });
    },
    getPost: (req, res) => {
            console.log("yoy console from c9 editor");
        Promise.coroutine(function* () {
            let post = yield posthelper.getPost();
            return post;
        }).apply(this)
            .then((post) => {
                return response.ok(res, post);
            })
            .catch((error) => {
                return response.ok(res, error);
            });
    }

}
