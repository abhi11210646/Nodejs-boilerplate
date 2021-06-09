'use strict';
const userHelper = require('./../helper/user');
const response = require('./../responses');
const passport = require('passport');
const jwtService = require("./../services/jwtService");
const mongoose = require("mongoose");
const User = mongoose.model('User');
module.exports = {
    // login controller
    login: (req, res) => {
        passport.authenticate('local', async (err, user, info) => {
            if (err) { return response.error(res, err); }
            if (!user) { return response.unAuthorize(res, info); }
            let token = await new jwtService().createJwtToken({ id: user._id, email: user.username });
            return response.ok(res, { token, username: user.username });
        })(req, res);
    },
    signUp: async (req, res) => {
        try {
            let user = await User.findOne({ username: req.body.username });
            if (!user) {
                let user = new User({ username: req.body.username, password: req.body.password });
                user.password = user.encryptPassword(req.body.password);
                await user.save();
                let token = await new jwtService().createJwtToken({ id: user._id, email: user.username });
                return response.created(res, { token, username: user.username });
            } else {
                return response.conflict(res);
            }
        } catch (error) {
            return response.error(res, error);
        }
    },
    me: async (req, res) => {
        try {
            let user = await userHelper.find({ _id: req.user.id });
            return response.ok(res, user);
        }
        catch (error) {
            return response.error(res, error);
        }
    }

};
