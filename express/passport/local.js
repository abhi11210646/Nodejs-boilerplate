const localStratagy = require('passport-local').Strategy;
const User = require("./../../src/app/model/user");
module.exports = new localStratagy({
    usernameField: 'username',
    passwordField: 'password',
},
    async (username, password, callback) => {
        try {
            let user = await User.findOne({ username });
            if (!user) {
                return callback(null, false, { "message": "User does not exist!" });
            }
            if (user && !user.isValidPassword(password)) {
                return callback(null, false, { "message": "Password is Incorrect!" });
            }
            return callback(null, user, { "message": "Successfully LoggedIn!" });
        }
        catch (error) {
            return callback(error, false, { "message": "Something Went Wrong!" });
        }
    }
);
