const req = require('../request.js');

describe("WebServicesTask", () => {

    it("should returns status code 200", (done) => {
        req.sendRestRequest('https://jsonplaceholder.typicode.com/users', 'GET').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("should return correct response header", (done) => {
        req.sendRestRequest('https://jsonplaceholder.typicode.com/users', 'GET').then((response) => {
            expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
            done();
        });
    });

    it("should verify an http response body", (done) => {
        req.sendRestRequest('https://jsonplaceholder.typicode.com/users', 'GET').then((response) => {
            expect(JSON.parse(response.body).length).toBe(10);
            done();
        });
    });

});

