'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        trim: true
    },
    refreshToken: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});
userSchema.set('toJSON', {
    getters: true,
    virtuals: false,
    transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});
userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
userSchema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', userSchema);
