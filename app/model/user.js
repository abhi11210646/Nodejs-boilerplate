'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        default: 'Abhishek',
        trim: true
    },
    passpord: {
        type: String,
        default: '1234'
    },
    refreshToken: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('User', userSchema);
