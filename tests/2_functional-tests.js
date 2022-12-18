const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    // Convert a valid input such as 10L: GET request to /api/convert.
    test('convert a valid input', function(done) {        
        chai.request(server)
        .get('/api/convert')
        .query({input: '10L'})
        .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 10);
            assert.equal(res.body.initUnit, 'L');
            assert.approximately(res.body.returnNum, 2.64172, 0.1);
            assert.equal(res.body.returnUnit, 'gal');
            done();
        });
    });
    // Convert an invalid input such as 32g: GET request to /api/convert.
    test('convert an invalid input', function(done) {        
        chai.request(server)
        .get('/api/convert')
        .query({input: '32g'})
        .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.initUnit, undefined);
            done();
        });
    });
    // Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
    test('convert an invalid number', function(done) {        
        chai.request(server)
        .get('/api/convert')
        .query({input: '3/7.2/4kg'})
        .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, undefined);
            done();
        });
    });
    // Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
    test('convert an invalid number AND unit', function(done) {        
        chai.request(server)
        .get('/api/convert')
        .query({input: '3/7.2/4kilomegagram'})
        .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, undefined);
            assert.equal(res.body.initUnit, undefined);
            done();
        });
    });
    // Convert with no number such as kg: GET request to /api/convert.
    test('convert with no number', function(done) {        
        chai.request(server)
        .get('/api/convert')
        .query({input: 'kg'})
        .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 1);
            assert.equal(res.body.initUnit, 'kg');
            assert.approximately(res.body.returnNum, 2.20462, 0.1);
            assert.equal(res.body.returnUnit, "lbs");
            done();
        });
    });
});
