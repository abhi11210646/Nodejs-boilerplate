const jwtService = require("./../../src/app/services/jwtService");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const config = require('config');
const expect = require('chai').expect;
describe('/JWT-Service', () => {
    it('should create valid jwt token', async () => {
        const payload = { id: mongoose.Types.ObjectId(), email: "jonu.1504@gmail.com" };
        const token = await new jwtService().createJwtToken(payload);
        const decoded = jwt.verify(token, config.get("jwt.secretOrKey"));
        expect(decoded.user.email).to.equal(payload.email);
    });
});