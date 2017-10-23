'use strict';
const router = require('express').Router();
const user = require('./../../app/controller/user');
const video = require('./../../app/controller/video');
const isAuthenticated = require("./../middlewares/isAuthenticated");
module.exports = (passport) => {
    router.post('/login', user.login);
    router.post('/signUp', user.signUp);
    router.post('/me', isAuthenticated, user.me);
    router.get('/getVideos', video.getVideos);
    router.post('/newVideo', video.newVideo);
    router.get('/deleteVideo/:id', video.deleteVideo);
    router.post('/updateVideo', video.updateVideo);
    return router;
};
