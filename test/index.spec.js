const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

chai.use(chaiHttp);

describe('Index Routes', function () {
    describe('GET /', function () {
        it('success, as expected response OK', function (done) { // <= Pass in done callback
            chai.request('http://localhost:3000')
                .get('/')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();                               // <= Call done to signal callback end
                });
        });
    });
});