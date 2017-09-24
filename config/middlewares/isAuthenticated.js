const passport = require("passport");
const response = require("./../response");
module.exports = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, function(err, user, info) {
        if (err) { response.error(res, err); }
        if (!user) { response.unAuthorize(res, info); }
        req.user = user;
        next();
    })(req, res, next);
};
