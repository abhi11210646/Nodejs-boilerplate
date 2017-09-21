const jwt = require("jsonwebtoken");
export class jwtService {
    constructor() {}
    createToken() {
        let token = this.createJwtToken();
        let refreshToken = jwt.sign({
            user: {
                id: "idididid",
                name: "Abhishek Singh",
                username: "abhishek11210646"
            }
        }, process.env.SECRET, {
            algorithm: 'HS256',
            expiresIn: '5h',
            issuer: 'jonu',
            audience: 'jonu bhai'
        });
        return [token, refreshToken];
    }
    createJwtToken() {
        return jwt.sign({
            user: {
                id: "idididid",
                name: "Abhishek Singh",
                username: "abhishek11210646"
            }
        }, process.env.SECRET, {
            algorithm: 'HS256',
            expiresIn: '5h',
            issuer: 'jonu',
            audience: 'jonu bhai'
        });
    }
}
