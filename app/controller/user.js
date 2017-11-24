'use strict';
const userHelper = require('./../helper/user');
const response = require('./../../config/response');
const passport = require('passport');
const jwtService = require("./../services/jwtService");
const mongoose = require("mongoose");
const User = mongoose.model('User');
module.exports = {
    // login controller
    login: (req, res) => {
        passport.authenticate('local', async(err, user, info) => {
            if (err) { response.error(res, err); }
            if (!user) { response.unAuthorize(res, info); }
            let token = await new jwtService().createJwtToken({ id: user._id, email: user.username });
            response.ok(res, token);
        })(req, res);
    },
    signUp: async(req, res) => {
        try {
            let user = new User({ username: req.body.username, password: req.body.password });
            user.password = user.encryptPassword(req.body.password);
            await user.save();
            let token = await new jwtService().createJwtToken({ id: user._id, email: user.username });
            response.created(res, { token, info: 'Successfully Registered!' });
        }
        catch (error) {
            response.error(res, error);
        }
    },
    me: async(req, res) => {
        try {
            let user = await userHelper.find({ _id: req.user.id });
            response.ok(res, user);
        }
        catch (error) {
            response.error(res, error);
        }
    }

};
