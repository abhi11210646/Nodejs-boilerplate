'use strict';
const router = require('express').Router();
const user = require('./../../app/controller/user');
module.exports = (passport) => {
    router.post('/login', user.login);
    router.post('/signUp', user.signUp);
    return router;
};
