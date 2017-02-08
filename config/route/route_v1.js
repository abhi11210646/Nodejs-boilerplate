'use strict'
var express = require('express');
var router = express.Router();
var user = require('./../../app/controller/user');
var post = require('./../../app/controller/post');
module.exports = (passport) => {

    //define routes for application
    router.post('/login', user.login);
    router.post('/signUp', user.signUp);
    router.get('/deleteUser', user.deleteuser);
    router.post('/addPost', post.addPost);
    router.get('/getPost', post.getPost);
    return router;

}
