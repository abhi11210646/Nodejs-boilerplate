'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = {
    getUser:()=> {
        return User.find({});
    },
    saveUser:(data)=> {
        let user = new User();
        return  user.save();
    }
};