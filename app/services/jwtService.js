'use strict';
const jwt = require("jsonwebtoken");
module.exports =  class jwtService {
    constructor() {}
    // createToken(user) {
        // let token = this.createJwtToken(user);
        // let refreshToken = jwt.sign({ user }, process.env.SECRET, {
        //     algorithm: 'HS256',
        //     expiresIn: '5h',
        //     issuer: 'jonu',
        //     audience: 'jonu bhai'
        // });
        // return [token, refreshToken];
    // }
    createJwtToken(user) {
        return jwt.sign({ user }, process.env.SECRET, {
            algorithm: 'HS256',
            expiresIn: '1h',
            issuer: 'jonu',
            audience: 'not sure'
        });
    }
};
