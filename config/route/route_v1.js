'use strict'
var express = require('express');
var router = express.Router();
var user = require('./../../app/controller/user');
var post = require('./../../app/controller/post');
module.exports = () => {

    //define routes for application
    router.get('/getUser', user.getUser);
    router.post('/updateUser', user.updateuser);
    router.get('/deleteUser', user.deleteuser);
    router.post('/addPost', post.addPost);
    router.get('/getPost', post.getPost);
    return router;

}
