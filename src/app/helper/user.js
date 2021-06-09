'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = {
    deleteUser: (condition) => {
        return User.remove(condition);
    },
    find: (condition) => {
        return User.findOne(condition, { password: 0, __v: 0 });
    }
};
