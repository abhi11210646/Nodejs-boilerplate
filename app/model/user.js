'use strict';

var mongoose = require('mongoose');

 var userSchema = new mongoose.Schema({
    name:{
        type: String,
        default: 'Abhishek',
        trim: true
    },
    age: {
        type: Number,
        default: 23
    }
});

var user = mongoose.model('User', userSchema);
module.exports = user;
