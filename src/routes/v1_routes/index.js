'use strict';
const router = require('express').Router();
const user = require('../../app/controller/user');
const isAuthenticated = require("./../../middlewares/isAuthenticated");

// add route
router.post('/login', user.login);
router.post('/signUp', user.signUp);
router.post('/me', isAuthenticated, user.me);

module.exports = router
