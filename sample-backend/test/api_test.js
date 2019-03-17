var server = require('../index');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

// Parent block
describe('Test server', () => {
    beforeEach(done => {
        console.log("Before test");
        done();
    });

    describe('Test1', () => {
        it('Test get devices', (done) => {
            chai.request(server)
            .get('/devices')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            });
            done();
        })
    });

    afterEach(done => {
        console.log("After test");
        done();
    })

}) 
