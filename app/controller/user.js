'use strict';
const userHelper = require('./../helper/user');
const response = require('./../../config/response');
const passport = require('passport');
const jwtService = require("./../services/jwtService");
const mongoose = require("mongoose");
const User = mongoose.model('User');
module.exports = {
    login: (req, res, next) => {
        passport.authenticate('local', function(err, user, info) {
            console.log(err, user, info, 'heheheh');
            if (err) { return next(err); }
            if (!user) { res.send({ "status": info.message }); }
            response.ok(res, user);
        })(req, res, next);
    },
    signUp: async(req, res) => {
        try {
            let user = new User({ username: req.body.username, password: req.body.password });
            user.password = user.encryptPassword(req.body.password);
            await user.save();
            let token = new jwtService().createJwtToken({ id: user._id, email: user.username });
            response.ok(res, token);
        }
        catch (error) {
            response.error(res, error);
        }
    }

};
