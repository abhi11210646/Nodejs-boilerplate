const expect = require('chai').expect;
const request = require("supertest");
const server = require("../../server");
describe('API status check', () => {
    it('should return OK', async () => {
        const res = await request(server).get('/');
        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal('OK');
    })
})