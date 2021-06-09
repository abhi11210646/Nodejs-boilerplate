const passport = require("passport");
const response = require("./../app/responses");
module.exports = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, function(err, user, info) {
        if (err) { return response.error(res, err); }
        if (!user) { return response.unAuthorize(res, info); }
        req.user = user;
        next();
    })(req, res, next);
};
