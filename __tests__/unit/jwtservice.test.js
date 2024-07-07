const jwtService = require("./../../src/app/services/jwtService");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const expect = require('chai').expect;
describe('/JWT-Service', () => {
    it('should create valid jwt token', async () => {
        process.env.SECRET = "TEST";
        const payload = { id: mongoose.Types.ObjectId(), email: "XXXX@gmail.com" };
        const token = jwtService.createJwtToken(payload);
        const decoded = jwt.verify(token, process.env.SECRET);
        expect(decoded.user.email).to.equal(payload.email);
    });
});