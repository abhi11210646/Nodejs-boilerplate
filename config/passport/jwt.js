const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require("./../environments");
const opts = {
    secretOrKey: config.jwt.secretOrKey,
    issuer: config.jwt.issuer,
    audience: config.jwt.audience,
    passReqToCallback: false,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};
module.exports = new JwtStrategy(opts, function(jwt_payload, done) {
    return done(null, jwt_payload.user, {});
});
