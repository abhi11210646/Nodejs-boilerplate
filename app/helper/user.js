'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = {
    getUser: () => {
        return User.find({});
    },
    saveUser: (data) => {
        let user = new User(data);
        return user.save();
    },
    deleteUser: () => {
        return User.remove({});
    },
    find: (condition) => {
        console.log("menu kahndi tere jaise 36 fir de----??>>>", condition);
        return User.findOne(condition);
    }
};