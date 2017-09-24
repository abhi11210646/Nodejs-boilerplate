'use strict';
const jwt = require("jsonwebtoken");
const config = require("./../../config/environments");
module.exports = class jwtService {
    constructor() {}
    // createToken(user) {
    // let token = this.createJwtToken(user);
    // let refreshToken = jwt.sign({ user }, config.jwt.secretOrKey, {
    //     algorithm: 'HS256',
    //     expiresIn: '5h',
    //     issuer: 'jonu',
    //     audience: 'jonu bhai'
    // });
    // return [token, refreshToken];
    // }
    createJwtToken(user) {
        return jwt.sign({ user }, config.jwt.secretOrKey, {
            algorithm: config.jwt.algorithm,
            expiresIn: config.jwt.expiresIn,
            issuer: config.jwt.issuer,
            audience: config.jwt.audience
        });
    }
};
