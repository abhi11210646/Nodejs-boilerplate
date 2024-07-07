'use strict';
const User = require("./../model/user");
module.exports = {
    deleteUser: (condition) => {
        return User.remove(condition);
    },
    find: (condition) => {
        return User.findOne(condition, { password: 0, __v: 0 });
    }
};
