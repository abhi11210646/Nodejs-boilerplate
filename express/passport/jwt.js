const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require("config");
const opts = {
    secretOrKey: config.get("jwt.secretOrKey"),
    issuer: config.get("jwt.issuer"),
    audience: config.get("jwt.audience"),
    passReqToCallback: false,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt")
};
module.exports = new JwtStrategy(opts, function (jwt_payload, done) {
    return done(null, jwt_payload.user, {});
});
