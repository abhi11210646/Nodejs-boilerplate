'use strict'
var express = require('express');
var router = express.Router();
var user = require('./../../app/controller/user');
module.exports = () => {

    //define routes for application
    router.get('/getUser', user.getUser);
    router.get('/updateUser', user.updateuser);
    return router;

}
