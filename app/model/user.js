'use strict';

var mongoose = require('mongoose');

 var userSchema = new mongoose.Schema({
    username:{
        type: String,
        default: 'Abhishek',
        trim: true
    },
    passpord: {
        type: String,
        default: '1234'
    }
});

var user = mongoose.model('User', userSchema);
module.exports = user;
