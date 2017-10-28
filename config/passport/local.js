const localStratagy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = new localStratagy({
        usernameField: 'username',
        passwordField: 'password',
    },
    async (username, password, callback) => {
        try {
            let user = await User.findOne({ username });
            if (user) {
                if (!user.isValidPassword(password)) {
                    callback(null, false, { "message": "Password is Incorrect!" });
                }
            }else {
                callback(null, false, { "message": "User does not exist!" });
            }
            callback(null, user, { "message": "Successfully LoggedIn!" });
        }
        catch (error) {
            callback(error, false, { "message": "Successfully Went Wrong!" });
        }
    }
);
