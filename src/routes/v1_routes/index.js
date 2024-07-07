'use strict';
const router = require('express').Router();
const user = require('../../app/controller/user');
const isAuthenticated = require("./../../middlewares/isAuthenticated");

//Public routes
router.post('/login', user.login);
router.post('/signUp', user.signUp);

/* authenticated routes */
router.use(isAuthenticated);
router.post('/me', user.me);

module.exports = router
